<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<playground-page title="New in Reka · no Legacy equivalent" :toc="toc">
		<template #intro>
			<p
				>Props and behavior that only the new components have. Side and align combinations
				near screen edges are easiest to check in the Collision lab story.</p
			>
		</template>

		<test-case
			id="side-flip"
			title="sideFlip: a tall panel near the top of the page"
			why="A panel taller than the space on both sides of its trigger flips to the side with more room. Near the top of the page, flipped above, its first items end up above the page start, where no scrolling reaches them."
			:steps="[
				'Scroll to the very top of this page.',
				'Open sideFlip = true. If it opens below, make the window shorter and open again.',
				'Try to reach Item 1.',
				'Open sideFlip = false and scroll the page to Item 45.',
			]"
			:expected="[
				'sideFlip = true: the panel flips above and Item 1 cannot be reached (this is the bug sideFlip = false avoids).',
				'sideFlip = false: the panel always opens below and the page grows, so every item is reachable.',
			]"
		>
			<div class="ds-testRow">
				<dropdown max-height="600px">
					<template #reference><ds-button>sideFlip = true (default)</ds-button></template>
					<template #default="{ close }">
						<numbered-list :count="45" @pick="close()" />
					</template>
				</dropdown>
				<dropdown max-height="600px" :side-flip="false">
					<template #reference><ds-button>sideFlip = false</ds-button></template>
					<template #default="{ close }">
						<numbered-list :count="45" @pick="close()" />
					</template>
				</dropdown>
			</div>
		</test-case>

		<test-case
			id="v-model"
			title="v-model:open and close()"
			why="Replaces forceShow and the show/hide events: the parent can open, close and watch the panel."
			:steps="[
				'Click Open for 3 s and wait without touching anything.',
				'Open the panel with its trigger and click close() inside it.',
				'Open it again and click outside.',
			]"
			:expected="[
				'Open for 3 s opens the panel from code and closes it from code 3 s later; the state text follows.',
				'Changes from code don\'t log update:open, as the parent made them.',
				'Opening or closing with the trigger, close() and an outside click log update:open with the new value.',
			]"
		>
			<div class="ds-testControlled">
				<div
					v-for="component in controlled"
					:key="component.name"
					class="ds-testControlled__item"
				>
					<strong>{{ component.name }}</strong>
					<div class="ds-testRow">
						<ds-button :size="BUTTON_SIZES.SMALL" @click="openFor(component.name)"
							>Open for 3 s</ds-button
						>
						<span class="ds-testState">{{ countdown[component.name] }}</span>
					</div>
					<component
						:is="component.is"
						v-model:open="state[component.name]"
						title-text="Controlled popover"
						@update:open="logEvent(component.name, $event)"
					>
						<template #reference><ds-button>Trigger</ds-button></template>
						<template #default="{ close }">
							<div class="ds-testPanelText">
								<ds-button @click="close()">close()</ds-button>
							</div>
						</template>
					</component>
					<span class="ds-testState"
						>open = {{ state[component.name] }} · last update:open:
						{{ lastEvent[component.name] }}</span
					>
				</div>
			</div>
		</test-case>

		<test-case
			id="hide-when-detached"
			title="hideWhenDetached"
			why="Decide whether we need it: should a panel disappear when its trigger scrolls out of view?"
			:steps="[
				'Open both panels inside the dashed box (one at a time).',
				'Scroll the box until the trigger leaves it, then scroll back.',
			]"
			:expected="[
				'false (default): the panel keeps following the trigger out of the box.',
				'true: the panel hides once the trigger leaves the box and shows again when it comes back.',
			]"
		>
			<div ref="detachScrollbox" class="ds-testScrollbox">
				<div class="ds-testScrollbox__spacer">Scroll down ↓</div>
				<div class="ds-testRow">
					<dropdown
						v-for="hide in [false, true]"
						:key="String(hide)"
						:collision-boundary="detachScrollbox"
						:hide-when-detached="hide"
						max-height="160px"
					>
						<template #reference
							><ds-button>hideWhenDetached = {{ hide }}</ds-button></template
						>
						<template #default="{ close }">
							<numbered-list :count="12" @pick="close()" />
						</template>
					</dropdown>
				</div>
				<div class="ds-testScrollbox__spacer"></div>
				<div class="ds-testScrollbox__spacer"></div>
			</div>
		</test-case>

		<test-case
			id="escape"
			title="Esc closes the panel"
			why="Legacy panels ignore Esc; the new ones close on it."
			:steps="['Open the Dropdown and press Esc.', 'Open the Popover and press Esc.']"
			:expected="['Each panel closes on Esc.']"
		>
			<div class="ds-testRow">
				<dropdown>
					<template #reference><ds-button>Dropdown</ds-button></template>
					<template #default="{ close }">
						<numbered-list :count="4" @pick="close()" />
					</template>
				</dropdown>
				<popover title-text="Popover" button-text="Button">
					<template #reference><ds-button>Popover</ds-button></template>
					Press Esc to close.
				</popover>
			</div>
		</test-case>
	</playground-page>
</template>

<style>
.ds-testControlled {
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
}
.ds-testControlled__item {
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-height: 260px;
}
.ds-testControlled__item > .ds-testState {
	order: 1;
}
</style>

<script setup lang="ts">
import { reactive, useTemplateRef } from 'vue';
import PlaygroundPage from './PlaygroundPage.vue';
import TestCase from './TestCase.vue';
import NumberedList from './NumberedList.vue';
import Dropdown from '../../components/Dropdown/Dropdown.vue';
import Popover from '../../components/Popover/Popover.vue';
import DsButton, { BUTTON_SIZES } from '../../components/Buttons/Button';

const toc = [
	{ id: 'side-flip', title: 'sideFlip' },
	{ id: 'v-model', title: 'v-model:open and close()' },
	{ id: 'hide-when-detached', title: 'hideWhenDetached' },
	{ id: 'escape', title: 'Esc' },
];

type ControlledName = 'Dropdown' | 'Popover';

const controlled: Array<{ name: ControlledName; is: typeof Dropdown | typeof Popover }> = [
	{ name: 'Dropdown', is: Dropdown },
	{ name: 'Popover', is: Popover },
];
const state = reactive<Record<ControlledName, boolean>>({ Dropdown: false, Popover: false });
const lastEvent = reactive<Record<ControlledName, string>>({ Dropdown: '–', Popover: '–' });
const countdown = reactive<Record<ControlledName, string>>({ Dropdown: '', Popover: '' });

function logEvent(name: ControlledName, value: boolean) {
	lastEvent[name] = `${value} at ${new Date().toLocaleTimeString([], { hour12: false })}`;
}
// Delayed, so the click on the button is over and can't count as an outside click.
// Closing from code has to happen on a timer: any click to trigger it would land outside the
// panel and close it first.
function openFor(name: ControlledName) {
	state[name] = true;
	let secondsLeft = 3;
	countdown[name] = `closing in ${secondsLeft} s`;
	const timer = setInterval(() => {
		secondsLeft--;
		countdown[name] = secondsLeft ? `closing in ${secondsLeft} s` : '';
		if (secondsLeft) return;
		clearInterval(timer);
		state[name] = false;
	}, 1000);
}

const detachScrollbox = useTemplateRef<HTMLElement>('detachScrollbox');
</script>
