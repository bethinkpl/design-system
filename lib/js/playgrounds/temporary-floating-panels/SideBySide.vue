<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<div class="ds-testSideBySide">
		<div v-for="column in columns" :key="column.key" class="ds-testSideBySide__column">
			<span class="ds-testSideBySide__label" :class="`-ds-${column.key}`">{{
				column.label
			}}</span>
			<div class="ds-testSideBySide__demo">
				<slot :name="column.key" :log="(event: string) => log(column.key, event)" />
			</div>
			<ol v-if="!hideLog" class="ds-testSideBySide__log" aria-label="Event log">
				<li v-if="!logs[column.key].length" class="-ds-empty">No events yet</li>
				<li v-for="entry in logs[column.key]" :key="entry.id">{{ entry.text }}</li>
			</ol>
		</div>
	</div>
</template>

<style>
.ds-testSideBySide {
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
}
.ds-testSideBySide__column {
	display: flex;
	flex-direction: column;
	gap: 8px;
	min-width: 0;
}
.ds-testSideBySide__label {
	align-self: flex-start;
	border-radius: 4px;
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.08em;
	padding: 2px 8px;
	text-transform: uppercase;
}
.ds-testSideBySide__label.-ds-reka {
	background: #e3f5e9;
	color: #1d6b3a;
}
.ds-testSideBySide__label.-ds-legacy {
	background: #fff0d9;
	color: #8a5300;
}
.ds-testSideBySide__demo {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	min-height: 40px;
}
.ds-testSideBySide__log {
	background: #f3f6fb;
	border-radius: 6px;
	color: #526078;
	font:
		12px/1.5 ui-monospace,
		monospace;
	list-style: none;
	margin: 0;
	min-height: 54px;
	padding: 6px 10px;
}
.ds-testSideBySide__log .-ds-empty {
	opacity: 0.6;
}
</style>

<script setup lang="ts">
import { reactive } from 'vue';

const { hideLog = false } = defineProps<{ hideLog?: boolean }>();

type ColumnKey = 'reka' | 'legacy';
const columns: Array<{ key: ColumnKey; label: string }> = [
	{ key: 'reka', label: 'New · Reka' },
	{ key: 'legacy', label: 'Legacy · vue-popperjs' },
];

// The last three events per column, newest first.
const logs = reactive<Record<ColumnKey, Array<{ id: number; text: string }>>>({
	reka: [],
	legacy: [],
});
let nextId = 0;
function log(column: ColumnKey, event: string) {
	const time = new Date().toLocaleTimeString([], { hour12: false });
	logs[column] = [{ id: nextId++, text: `${time}  ${event}` }, ...logs[column]].slice(0, 3);
}
</script>
