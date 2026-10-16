#!/usr/bin/env bash
# Ensure a Storybook dev server is running for the current checkout (main repo or worktree)
# and print its URL. Each worktree gets its own server on its own port.
#
#   storybook.sh          # reuse the running server for this checkout, or start one; prints URL
#   storybook.sh status   # print URL if running, exit 1 otherwise
#   storybook.sh stop     # stop the server this script started for this checkout
#   storybook.sh log      # tail the server log
set -euo pipefail

ROOT=$(git rev-parse --show-toplevel)
STATE_DIR="$ROOT/node_modules/.cache/browser-testing"
PID_FILE="$STATE_DIR/storybook.pid"
PORT_FILE="$STATE_DIR/storybook.port"
LOG_FILE="$STATE_DIR/storybook.log"
START_TIMEOUT=${START_TIMEOUT:-180}

is_storybook() { curl -sf -o /dev/null --max-time 3 "http://localhost:$1/index.json"; }
port_busy() { lsof -nP -iTCP:"$1" -sTCP:LISTEN -t >/dev/null 2>&1; }

# A Storybook already serving this checkout — ours or one the developer started with `yarn dev`.
find_running() {
	local pid cwd port
	for pid in $(lsof -nP -iTCP -sTCP:LISTEN -c node -t 2>/dev/null | sort -u); do
		cwd=$(lsof -a -p "$pid" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p')
		[[ "$cwd" == "$ROOT" ]] || continue
		for port in $(lsof -a -nP -p "$pid" -iTCP -sTCP:LISTEN -Fn 2>/dev/null | sed -n 's/^n.*:\([0-9]*\)$/\1/p' | sort -u); do
			if is_storybook "$port"; then
				echo "$port"
				return 0
			fi
		done
	done
	return 1
}

# Main checkout keeps the usual 6006; worktrees get a stable port derived from their path.
pick_port() {
	local port
	if [[ "$(git rev-parse --git-dir)" == "$(git rev-parse --git-common-dir)" ]]; then
		port=6006
	else
		port=$((6100 + $(printf '%s' "$ROOT" | cksum | cut -d' ' -f1) % 800))
	fi
	while port_busy "$port"; do port=$((port + 1)); done
	echo "$port"
}

cmd=${1:-start}

case "$cmd" in
status)
	port=$(find_running) || { echo "Storybook not running for $ROOT" >&2; exit 1; }
	echo "http://localhost:$port"
	;;
log)
	tail -n 50 "$LOG_FILE"
	;;
stop)
	if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
		# Kill the whole process group: yarn -> node storybook.
		kill -- -"$(cat "$PID_FILE")" 2>/dev/null || kill "$(cat "$PID_FILE")"
		echo "Stopped Storybook (pid $(cat "$PID_FILE"))"
	else
		echo "No Storybook started by this script for $ROOT"
	fi
	rm -f "$PID_FILE" "$PORT_FILE"
	;;
start)
	if port=$(find_running); then
		echo "http://localhost:$port"
		exit 0
	fi

	if [[ ! -x "$ROOT/node_modules/.bin/storybook" ]]; then
		echo "node_modules missing in $ROOT — run 'yarn install' first (needs FONT_AWESOME_AUTH_TOKEN)." >&2
		exit 1
	fi

	mkdir -p "$STATE_DIR"
	port=$(pick_port)
	cd "$ROOT"
	# set -m gives the background job its own process group so `stop` can kill yarn and node together.
	set -m
	nohup yarn storybook dev -p "$port" --exact-port --ci --no-open >"$LOG_FILE" 2>&1 &
	pid=$!
	set +m
	echo "$pid" >"$PID_FILE"
	echo "$port" >"$PORT_FILE"
	echo "Starting Storybook on port $port (pid $pid, log $LOG_FILE)..." >&2

	for ((i = 0; i < START_TIMEOUT; i++)); do
		if is_storybook "$port"; then
			echo "http://localhost:$port"
			exit 0
		fi
		if ! kill -0 "$pid" 2>/dev/null; then
			echo "Storybook exited during startup. Last log lines:" >&2
			tail -n 30 "$LOG_FILE" >&2
			rm -f "$PID_FILE" "$PORT_FILE"
			exit 1
		fi
		sleep 1
	done
	echo "Storybook did not answer on port $port within ${START_TIMEOUT}s. Check: $0 log" >&2
	exit 1
	;;
*)
	echo "Usage: $0 [start|status|stop|log]" >&2
	exit 2
	;;
esac
