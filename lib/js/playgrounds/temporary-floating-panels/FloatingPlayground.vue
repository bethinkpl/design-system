<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<main class="ds-floatingPlayground">
		<header>
			<p class="ds-testEyebrow">Temporary testing playground</p>
			<h1>{{ kind === 'popover' ? 'Popover' : 'Dropdown' }} · Reka vs Legacy</h1>
			<p
				>Open one panel at a time. Compare positioning, clipping, scrolling, focus, Escape,
				outside click, and slot close.</p
			>
			<p
				>Defaults are intentional: Reka portals to body; Legacy stays inline. Dedicated
				cases below use the same portal setting for both.</p
			>
			<div class="ds-testActions">
				<button class="ds-testTrigger" @click="modalOpen = true"
					>Open modal comparison</button
				>
				<button class="ds-testTrigger" @click="jumpToBottom">Jump to page bottom</button>
			</div>
		</header>
		<section>
			<h2>01 · Short content</h2><p>Default props, three items and slot close.</p>
			<panel-pair :kind="kind" label="Short" />
		</section>
		<section>
			<h2>02 · Long content, no max height</h2
			><p>45 items. Check available viewport space and whether the last item is reachable.</p>
			<panel-pair :kind="kind" label="Long" :count="45" />
		</section>
		<section>
			<h2>03 · Explicit max height</h2>
			<p
				>{{
					kind === 'dropdown'
						? 'maxHeight = 180px'
						: 'maxHeight = true · small content area limited to 160px'
				}}. Scroll within the panel to the last item.</p
			>
			<panel-pair :kind="kind" label="Max height" :count="45" limited />
		</section>
		<section>
			<h2>04 · Inputs and changing content</h2
			><p
				>Type, Tab / Shift+Tab, select a checkbox, expand content, and check focus after
				closing.</p
			>
			<panel-pair :kind="kind" label="Interactive content" form :count="1" />
		</section>
		<section v-if="kind === 'dropdown'">
			<h2>05 · Same width and single edge radius</h2
			><p
				>240px trigger; single rounds the edge away from the trigger in Reka. Legacy keeps
				its fixed bottom radius.</p
			>
			<panel-pair :kind="kind" label="Same width" wide single :count="8" />
		</section>
		<section v-else>
			<h2>05 · Long unbroken text</h2
			><p>Check wrapping and horizontal overflow at narrow viewport widths.</p>
			<panel-pair :kind="kind" label="Long text" unbroken :count="0" />
		</section>
		<section v-if="kind === 'dropdown'">
			<h2>ProductDropdown · BasicRichListItem trigger</h2>
			<p
				>Pattern from landing-app ProductDropdown.vue. Click the row or the chevron
				separately, select a product, click outside, and reopen. Both triggers use
				same-width panels. The chevron lives inside the actions slot that stops click
				propagation.</p
			>
			<div class="ds-testProductGrid">
				<rich-dropdown-case :legacy="false" />
				<rich-dropdown-case legacy />
			</div>
		</section>
		<section>
			<h2>06 · Scrollable ancestor</h2
			><p
				>Open a panel, then scroll this box. Check anchoring and what happens when its
				trigger leaves view.</p
			>
			<div class="ds-testScrollbox"
				><p>Scroll inside this container ↓</p><div class="ds-testScrollSpacer"></div>
				<panel-pair :kind="kind" label="Scroll container" :count="15" limited />
				<div class="ds-testScrollSpacer"></div><p>End of scroll container</p>
			</div>
		</section>
		<section>
			<h2>07 · Clipping ancestor, portal enabled</h2
			><p>Both appendToBody = true. Panels should escape the dashed overflow-hidden box.</p>
			<div class="ds-testClipped"
				><panel-pair :kind="kind" label="Portalled" portal :count="12" limited
			/></div>
		</section>
		<section>
			<h2>08 · Clipping ancestor, inline rendering</h2
			><p>Both appendToBody = false. Compare clipping with the case above.</p>
			<div class="ds-testClipped"
				><panel-pair :kind="kind" label="Inline" :portal="false" :count="12" limited
			/></div>
		</section>
		<section>
			<h2>09 · Right edge</h2
			><p>Check horizontal collision handling, especially in a 320px viewport.</p>
			<panel-pair :kind="kind" label="Right edge" edge :count="8" />
		</section>
		<section class="ds-testPageScroll">
			<h2>10 · Long scrolling page</h2
			><p
				>Open here and scroll the main page. Check whether the panel follows or
				dismisses.</p
			>
			<panel-pair :kind="kind" label="Page scroll" :count="20" limited />
			<div class="ds-testPageSpacer">Main page scroll area ↓</div>
			<panel-pair :kind="kind" label="Page bottom" single :count="25" limited />
			<p ref="pageBottom"
				>End of page. The fixed bottom dock below always tests viewport-edge flipping.</p
			>
		</section>
		<aside class="ds-testBottomDock">
			<strong>Viewport bottom · flip check</strong>
			<panel-pair :kind="kind" label="Bottom edge" single :count="20" limited />
		</aside>
		<modal
			v-if="modalOpen"
			header-title="Floating panels inside a modal"
			@close-modal="modalOpen = false"
		>
			<div class="ds-testModalContent">
				<p
					>Default portal settings. Check visibility above the modal and focus /
					dismissal.</p
				>
				<panel-pair :kind="kind" label="Modal defaults" :count="35" limited />
				<p>Both portals enabled:</p
				><panel-pair :kind="kind" label="Modal portal" portal :count="35" limited />
				<p>Both inline:</p
				><panel-pair
					:kind="kind"
					label="Modal inline"
					:portal="false"
					:count="35"
					limited
				/>
				<button class="ds-testTrigger" @click="modalOpen = false"
					>Close comparison modal</button
				>
			</div>
		</modal>
	</main>
</template>

<style>
.ds-testProductGrid {
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
}
.ds-floatingPlayground {
	background: #f3f6fb;
	box-sizing: border-box;
	color: #18243b;
	font: 15px/1.6 system-ui;
	min-height: 100vh;
	padding: 32px 24px 180px;
}
.ds-floatingPlayground > header,
.ds-floatingPlayground > section {
	background: white;
	border: 1px solid #dce3ed;
	border-radius: 12px;
	margin: 0 auto 20px;
	max-width: 1040px;
	padding: 24px;
}
.ds-floatingPlayground h1 {
	font-size: 28px;
	line-height: 1.2;
	margin: 8px 0 16px;
}
.ds-floatingPlayground h2 {
	font-size: 18px;
	margin: 0 0 8px;
}
.ds-floatingPlayground p {
	margin: 0 0 16px;
}
.ds-testEyebrow {
	color: #526078;
	font-size: 11px;
	letter-spacing: 0.12em;
	text-transform: uppercase;
}
.ds-testActions {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}
.ds-testScrollbox {
	border: 2px dashed #aebed4;
	height: 220px;
	overflow: auto;
	padding: 16px;
}
.ds-testScrollSpacer {
	height: 100px;
}
.ds-testClipped {
	border: 2px dashed #aebed4;
	height: 105px;
	overflow: hidden;
	padding: 12px;
	position: relative;
}
.ds-testPageSpacer {
	color: #526078;
	height: 65vh;
	padding-top: 80px;
}
.ds-testBottomDock {
	align-items: center;
	background: #e9eff9;
	border-top: 1px solid #aebed4;
	bottom: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: space-between;
	left: 0;
	padding: 10px 24px;
	position: fixed;
	right: 0;
	z-index: 10;
}
.ds-testBottomDock > strong {
	font-size: 12px;
}
.ds-testBottomDock .ds-testExample {
	gap: 2px;
}
.ds-testModalContent {
	display: flex;
	flex-direction: column;
	gap: 20px;
	min-height: 280px;
}

@media (max-width: 600px) {
	.ds-floatingPlayground {
		padding: 16px 8px 230px;
	}
	.ds-floatingPlayground > header,
	.ds-floatingPlayground > section {
		padding: 16px;
	}
	.ds-testBottomDock {
		padding: 8px;
	}
	.ds-testPair {
		gap: 12px;
	}
	.ds-testTrigger {
		max-width: 100%;
	}
}
</style>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import PanelPair from './PanelPair.vue';
import RichDropdownCase from './RichDropdownCase.vue';
import Modal from '../../components/Modals/Modal/Modal.vue';
defineProps<{ kind: 'popover' | 'dropdown' }>();
const modalOpen = ref(false);
const pageBottom = useTemplateRef<HTMLElement>('pageBottom');
function jumpToBottom() {
	pageBottom.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
</script>
