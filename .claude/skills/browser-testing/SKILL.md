---
name: browser-testing
description: Verify a component change in a real browser (Playwright MCP) against this checkout's Storybook. Use when asked to test, click through, screenshot or measure a component in the browser, to reproduce a visual/layout bug, or to confirm a change renders correctly rather than only passing unit tests. Works per git worktree — each checkout gets its own Storybook server.
---

# In-browser testing against Storybook

Drive Storybook with the `playwright` MCP tools (`mcp__playwright__browser_*`). The browser opens
as a visible window so the developer can watch; each session gets its own isolated profile.
To run headless (e.g. many parallel sessions), add `--headless` to the `playwright` args in
`.mcp.json` — the CLI flag overrides the config file.

## 1. Get a Storybook URL for this checkout

```bash
.claude/skills/browser-testing/storybook.sh
```

It prints the base URL (e.g. `http://localhost:6006`). The script:

- reuses a Storybook already serving **this** checkout (including one the developer started with
  `yarn dev`), matched by the server process's working directory;
- otherwise starts one in the background and waits until it answers. The main checkout uses port
  6006; each worktree gets its own stable port, so agents in different worktrees never share or
  kill each other's server;
- fails with a message if `node_modules` is missing — run `yarn install` in the worktree first
  (needs `FONT_AWESOME_AUTH_TOKEN`).

Other commands: `status` (URL or exit 1), `log` (last 50 lines of the server log), `stop` (stops
only a server this script started). Always run it from inside the checkout you are testing.

Leave the server running when you finish unless the developer asks otherwise; it reloads on file
changes, so re-testing after an edit is just a page reload.

## 2. Check the Playwright MCP

If `mcp__playwright__*` tools are missing, the server from `.mcp.json` is not connected — ask the
developer to approve it via `/mcp` and restart Claude Code. If navigation fails with
`Browser "chromium" is not installed`, run `npx -y @playwright/mcp@0.0.83 install-browser chromium`.

One Claude Code session = one browser. Subagents spawned inside a single session share it, so
don't run their browser checks in parallel; for parallel testing, run a separate Claude Code
session per worktree.

## 3. Open the story

Find the story id in `<url>/index.json` (or derive it: title `Components/Buttons/Button`, story
`Interactive` → `components-buttons-button--interactive`):

```bash
curl -s http://localhost:6006/index.json | grep -o '"id":"[^"]*button[^"]*"'
```

Open the story **iframe**, not the manager UI — it renders only the component, without the
sidebar and addons panel:

```
<url>/iframe.html?id=<story-id>&viewMode=story
```

- **Args**: `&args=` in the URL is ignored by the preview iframe. Change args from
  `browser_evaluate`:
    ```js
    () =>
    	__STORYBOOK_PREVIEW__.channel.emit('updateStoryArgs', {
    		storyId: '<story-id>',
    		updatedArgs: { size: 'small', disabled: true },
    	});
    ```
    Unknown keys are ignored silently, so take arg names from the story's `argTypes` (often
    spread from a shared file, e.g. `FormField.stories.shared.ts`) and read the DOM back to
    confirm the change applied.
- **Locale**: default is `pl`; append `&globals=locale:en` for English.
- **Viewport**: use `browser_resize` with the project breakpoints — 320 (mobile), 760 (S),
  980 (M), 1280 (L), 1600 (XL).
- The first load of a story compiles it, and a snapshot taken too early is empty. Wait for the
  render before acting: `browser_wait_for` the component's text if you know it; otherwise poll
  `browser_evaluate` until `document.querySelector('#storybook-root')?.childElementCount > 0`
  (the page title also switches from `Storybook` to the story id once rendered).

## 4. Check what changed

- For layout and sizing questions, measure — don't eyeball. `browser_evaluate` with
  `getBoundingClientRect()` / `getComputedStyle()` gives numbers that explain a bug;
  screenshots only confirm it.
- Use `browser_snapshot` to find elements and refs; use `browser_take_screenshot` for visual
  evidence. Don't pass a bare `filename` (it lands in the repo root) — omit it, or pass
  `.claude/skills/browser-testing/artifacts/<name>.png`.
- Many components render interactive elements without an ARIA role, so the snapshot shows them
  only as `generic` text with no usable ref (e.g. the Dropdown trigger). Pass a selector as the
  click `target` instead: `text=…` or CSS. Design-system buttons are `<span class="ds-button">`
  — click `span.ds-button:has-text("…")`.
- After each interaction check `browser_console_messages` (level `error`). Vue warnings
  (`[Vue warn]`) about props or missing injections are findings, not noise.
- Known baseline noise on every story — ignore unless the change touches it:
    - `Failed to load resource: … 404 … /favicon.ico`
    - `[intlify] Legacy API mode has been deprecated in v11`
- Cover the variants the change touches (sizes, states, colors, both locales if text changed),
  not only the default story.

## 5. Report

Screenshots land in `.claude/skills/browser-testing/artifacts/` (gitignored); confirm each file
exists before citing it and run `git status` to make sure nothing strayed into the repo. Report
the Storybook URL and story ids you tested, what you verified (with measured values for layout),
and any console errors verbatim.

The Playwright MCP also writes a `page-*.yml` snapshot and `console-*.log` there on most actions,
so the folder grows with every run. Delete its contents freely before a new run (it is all
throwaway output); cite only files from the current run.
