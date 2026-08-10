import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import DsToast from './Toast.vue';
import { TOAST_COLORS, TOAST_POSITIONS, TOAST_SIZES } from './Toast.consts';
import { ICONS } from '../Icons/Icon';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/Toast',
	component: DsToast,
	decorators: [withActions],
} as Meta<typeof DsToast>;

const toastTemplate = `<ds-toast
		v-if="isVisible"
		:title="title"
		:size="size"
		:position="position"
		:color="color"
		:footer-primary-button-text="footerPrimaryButtonText"
		:footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
		:footer-secondary-button-text="footerSecondaryButtonText"
		:footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
		:is-disappearing="isDisappearing"
		:disappearing-timeout="disappearingTimeout"
		@close="isVisible = false"
	>
		<template #content>
			<span v-html="content" />
		</template>
	</ds-toast>`;

const StoryTemplate: StoryFn<typeof DsToast> = (args) => ({
	components: { DsToast },
	setup() {
		return args;
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			isVisible: true,
		};
	},
	template: `<div style="height: 1200px; width: 100%;">
		${toastTemplate}
	</div>`,
});

// `position: none` leaves the placement to the consumer — here the wrapper anchors the toast to the
// bottom right of its own container instead of the viewport.
const ClientPositionedStoryTemplate: StoryFn<typeof DsToast> = (args) => ({
	components: { DsToast },
	setup() {
		return args;
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			isVisible: true,
		};
	},
	template: `<div style="height: 400px; padding: 24px; width: 100%;">
		<div style="position: relative; height: 100%; border: 1px black solid;">
			<div style="position: absolute; bottom: 16px; right: 16px;">
				${toastTemplate}
			</div>
		</div>
	</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: 'Opcjonalny Title wpisz tutaj',
	size: TOAST_SIZES.MEDIUM,
	position: TOAST_POSITIONS.CENTER,
	color: TOAST_COLORS.INFO,
	footerPrimaryButtonText: 'primary',
	footerPrimaryButtonIcon: null,
	footerSecondaryButtonText: 'secondary',
	footerSecondaryButtonIcon: null,
	isDisappearing: false,
	disappearingTimeout: '0',
	content: 'Wpłynąłem na suchego przestwór oceanu',
} as Args;

const argTypes = {
	title: {
		control: 'text',
	},
	size: {
		control: 'select',
		options: Object.values(TOAST_SIZES),
	},
	position: {
		control: 'select',
		options: Object.values(TOAST_POSITIONS),
	},
	color: {
		control: 'select',
		options: Object.values(TOAST_COLORS),
	},
	footerPrimaryButtonIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	footerSecondaryButtonIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	content: {
		control: 'text',
	},
} as ArgTypes;

const actionsParameters = {
	actions: {
		handles: ['close', 'primary-button-click', 'secondary-button-click'],
	},
};

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	...actionsParameters,
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8091-108960',
	},
};

export const ClientPositioned = ClientPositionedStoryTemplate.bind({});

ClientPositioned.argTypes = argTypes;
ClientPositioned.args = { ...args, position: TOAST_POSITIONS.NONE };
ClientPositioned.parameters = actionsParameters;
