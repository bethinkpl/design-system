<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<main class="ds-testPage">
		<header class="ds-testPage__header">
			<p class="ds-testPage__eyebrow">Temporary testing playground · removed before merge</p>
			<h1>{{ title }}</h1>
			<slot name="intro" />
		</header>
		<nav class="ds-testPage__toc" aria-label="Cases">
			<a v-for="(item, index) in toc" :key="item.id" :href="`#${item.id}`"
				>{{ index + 1 }}. {{ item.title }}</a
			>
		</nav>
		<slot />
	</main>
</template>

<style>
@media (max-width: 600px) {
	.ds-testPage {
		padding: 16px 8px 120px;
	}
	.ds-testCase {
		padding: 16px;
	}
}
.ds-testPage {
	background: #f3f6fb;
	box-sizing: border-box;
	color: #18243b;
	font: 15px/1.6 system-ui;
	min-height: 100vh;
	padding: 32px 24px 120px;
}
.ds-testPage p {
	margin: 0 0 12px;
}
.ds-testPage__header {
	margin: 0 auto 16px;
	max-width: 1040px;
}
.ds-testPage__header h1 {
	font-size: 28px;
	line-height: 1.2;
	margin: 4px 0 12px;
}
.ds-testPage__eyebrow {
	color: #526078;
	font-size: 11px;
	letter-spacing: 0.12em;
	text-transform: uppercase;
}
.ds-testPage__toc {
	backdrop-filter: blur(4px);
	background: rgb(243 246 251 / 92%);
	display: flex;
	flex-wrap: wrap;
	gap: 4px 16px;
	margin: 0 auto 20px;
	max-width: 1040px;
	padding: 8px 0;
	position: sticky;
	top: 0;
	z-index: 1;
}
.ds-testPage__toc a {
	color: #284f9e;
	font-size: 13px;
	text-decoration: none;
	white-space: nowrap;
}
.ds-testPage__toc a:hover {
	text-decoration: underline;
}
.ds-testPage kbd {
	background: white;
	border: 1px solid #becadd;
	border-radius: 4px;
	font:
		12px ui-monospace,
		monospace;
	padding: 0 4px;
}
.ds-testPage code {
	background: #e8efff;
	border-radius: 4px;
	font:
		13px ui-monospace,
		monospace;
	padding: 0 4px;
}

/* Shared helpers for the demos. */
.ds-testRow {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}
.ds-testSpread {
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.ds-testScrollbox {
	border: 2px dashed #aebed4;
	box-sizing: border-box;
	height: 200px;
	overflow: auto;
	padding: 12px;
	width: 100%;
}
.ds-testScrollbox__spacer {
	color: #526078;
	font-size: 13px;
	height: 260px;
}
.ds-testClipped {
	border: 2px dashed #aebed4;
	box-sizing: border-box;
	height: 90px;
	overflow: hidden;
	padding: 12px;
	width: 100%;
}
.ds-testPanelText {
	padding: 12px;
}
.ds-testState {
	color: #526078;
	font-size: 13px;
}
</style>

<script setup lang="ts">
defineProps<{
	title: string;
	toc: Array<{ id: string; title: string }>;
}>();
</script>
