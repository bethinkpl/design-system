import { ref } from 'vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import LoadingBar from './LoadingBar.vue';
import { LOADING_BAR_COLORS, LOADING_BAR_SIZES } from './LoadingBar.consts';
import DsButton from '../Buttons/Button';
import DsToast, { TOAST_COLORS, TOAST_POSITIONS } from '../Toast';

export default {
	title: 'Components/LoadingBar',
	component: LoadingBar,
} as Meta<typeof LoadingBar>;

const StoryTemplate: StoryFn<typeof LoadingBar> = (args) => ({
	components: { DsLoadingBar: LoadingBar },
	setup() {
		return args;
	},
	template: `<ds-loading-bar :size="size" :color="color" :time="time" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: LOADING_BAR_SIZES.LARGE,
	color: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	time: '5',
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(LOADING_BAR_SIZES),
	},
	color: {
		control: 'select',
		options: Object.values(LOADING_BAR_COLORS),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32853',
	},
};

// Regression story for the bug that made the loading bar jump straight to full instead of filling.
//
// It mirrors a real toast host — `v-if` on a nullable toast plus a per-message `:key`, so every round
// mounts a brand new DsToast (and with it a brand new DsLoadingBar) rather than reusing the previous
// DOM. That remount is the first ingredient: a reused bar already has a resolved style and animates
// regardless.
//
// The second is the small delay before the toast is shown, which mounts it from an async
// continuation rather than straight from the click. That matters because the bug was a race against
// the browser's first style pass, and an insertion made inside a click handler almost always gets
// that pass immediately — showing the toast on click alone does not reproduce it. Mounting from a
// timer is the shape real consumers have: an API call fails, and *then* a toast appears.
//
// The fill is now driven by CSS keyframes, which need no before-change style, so the race no longer
// exists. Click through several rounds — every toast must fill smoothly over its timeout.
const ToastHostStoryTemplate: StoryFn<typeof LoadingBar> = (args) => ({
	components: { DsButton, DsToast },
	setup() {
		const toast = ref<{ id: number } | null>(null);
		let nextId = 1;

		const showToast = async () => {
			await new Promise((resolve) => setTimeout(resolve, 10));

			toast.value = { id: nextId };
			nextId += 1;
		};

		return {
			...args,
			TOAST_COLORS,
			TOAST_POSITIONS,
			toast,
			showToast,
		};
	},
	template: `<div style="padding: 24px;">
		<ds-button @click="showToast">Show toast</ds-button>
		<div style="position: relative; margin-top: 24px; min-height: 120px;">
			<ds-toast
				v-if="toast"
				:key="toast.id"
				:title="'Toast #' + toast.id"
				:color="TOAST_COLORS.INFO"
				:position="TOAST_POSITIONS.NONE"
				:disappearing-timeout="disappearingTimeout"
				@close="toast = null"
			>
				<template #content>
					The loading bar should fill smoothly over {{ disappearingTimeout }}s.
				</template>
			</ds-toast>
		</div>
	</div>`,
});

export const ToastHost = ToastHostStoryTemplate.bind({});

ToastHost.args = {
	disappearingTimeout: '4',
} as Args;

ToastHost.argTypes = {
	disappearingTimeout: {
		control: 'text',
	},
	size: { control: false },
	color: { control: false },
	time: { control: false },
} as ArgTypes;
