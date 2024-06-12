import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import DsToast from './Toast.vue';
import { TOAST_COLORS, TOAST_POSITIONS, TOAST_SIZES } from './Toast.consts';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/Toast',
	component: DsToast,
} as Meta<typeof DsToast>;

const StoryTemplate: StoryFn<typeof DsToast> = (args) => ({
	components: { DsToast },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			isVisible: true,
			boundariesSelectorId:
				this.boundariesSelector != null ? `#${this.boundariesSelector}` : null,
		};
	},
	template: `<div style="display: flex; justify-content: space-around; height: 1200px; width: 100%;">
		<ds-toast
			v-if="isVisible"
			:size="size"
			:position="position"
			:color="color"
			:footer-primary-button-text="footerPrimaryButtonText"
			:footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
			:footer-secondary-button-text="footerSecondaryButtonText"
			:footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
			:is-disappearing="isDisappearing"
			:disappearing-timeout="disappearingTimeout"
			:boundaries-selector="boundariesSelectorId"
			@close="isVisible = false"
		>
			<template #content>
				<span v-html="content" />
			</template>
		</ds-toast>
		<div id="left" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
		<div id="right" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
	</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
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
	boundariesSelector: null,
} as Args;

const argTypes = {
	size: {
		control: { type: 'select' },
		options: Object.values(TOAST_SIZES),
		defaultValue: TOAST_SIZES.MEDIUM,
	},
	position: {
		control: { type: 'select' },
		options: Object.values(TOAST_POSITIONS),
		defaultValue: TOAST_POSITIONS.CENTER,
	},
	color: {
		control: { type: 'select' },
		options: Object.values(TOAST_COLORS),
		defaultValue: TOAST_COLORS.INFO,
	},
	footerPrimaryButtonIcon: {
		control: { type: 'select' },
		options: [null, ...Object.keys(ICONS)],
	},
	footerSecondaryButtonIcon: {
		control: { type: 'select' },
		options: [null, ...Object.keys(ICONS)],
	},
	content: {
		control: { type: 'text' },
	},
	boundariesSelector: {
		control: { type: 'select' },
		options: [null, 'left', 'right'],
		defaultValue: null,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['close', 'primary-button-click', 'secondary-button-click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8091-108960',
	},
};
