<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<section :id="id" class="ds-testCase">
		<h2>{{ title }}</h2>
		<p v-if="why" class="ds-testCase__why">{{ why }}</p>
		<div class="ds-testCase__guide">
			<div>
				<h3>Try</h3>
				<ol>
					<li v-for="step in steps" :key="step">{{ step }}</li>
				</ol>
			</div>
			<div>
				<h3>Expected</h3>
				<ul>
					<li v-for="item in expected" :key="item">{{ item }}</li>
				</ul>
			</div>
		</div>
		<p v-if="legacyNote" class="ds-testCase__legacy"
			><strong>Legacy:</strong> {{ legacyNote }}</p
		>
		<div class="ds-testCase__demo">
			<slot />
		</div>
	</section>
</template>

<style>
.ds-testCase {
	background: white;
	border: 1px solid #dce3ed;
	border-radius: 12px;
	margin: 0 auto 20px;
	max-width: 1040px;
	padding: 24px;
	scroll-margin-top: 72px;
}
.ds-testCase h2 {
	font-size: 18px;
	margin: 0 0 4px;
}
.ds-testCase h3 {
	color: #526078;
	font-size: 11px;
	letter-spacing: 0.12em;
	margin: 0 0 4px;
	text-transform: uppercase;
}
.ds-testCase__why {
	color: #526078;
	margin: 0 0 16px;
}
.ds-testCase__guide {
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
	margin-bottom: 12px;
}
.ds-testCase__guide ol,
.ds-testCase__guide ul {
	margin: 0;
	padding-left: 20px;
}
.ds-testCase__legacy {
	background: #fff6e5;
	border-radius: 6px;
	margin: 0 0 12px;
	padding: 8px 12px;
}
.ds-testCase__demo {
	border-top: 1px solid #dce3ed;
	padding-top: 16px;
}
</style>

<script setup lang="ts">
defineProps<{
	id: string;
	title: string;
	// Why the case matters: the real usage or risk it covers.
	why?: string;
	steps: Array<string>;
	expected: Array<string>;
	// How Legacy differs, when it does on purpose.
	legacyNote?: string;
}>();
</script>
