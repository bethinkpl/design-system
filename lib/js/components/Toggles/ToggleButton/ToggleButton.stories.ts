import ToggleButton from './ToggleButton.vue';
import {
	TOGGLE_BUTTON_SIZES,
	TOGGLE_BUTTON_COLORS,
	TOGGLE_BUTTON_RADIUSES,
} from './ToggleButton.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';

export default {
	title: 'Components/Toggles/ToggleButton',
	component: ToggleButton,
} as Meta<typeof ToggleButton>;

const StoryTemplate: StoryFn<typeof ToggleButton> = (args) => ({
	components: { ToggleButton },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<toggle-button
			:size="size"
			:radius="radius"
			:color="color"
			:text="text"
			:icon-left="ICONS[iconLeft]"
			:icon-right="ICONS[iconRight]"
			:is-selected="isSelected"
			:is-interactive="isInteractive"
		/>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: TOGGLE_BUTTON_SIZES.MEDIUM,
	color: TOGGLE_BUTTON_COLORS.PRIMARY,
	radius: TOGGLE_BUTTON_RADIUSES.CAPSULE,
	text: '1',
	isSelected: false,
	isInteractive: true,
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_SIZES) },
		defaultValue: TOGGLE_BUTTON_SIZES.MEDIUM,
	},
	color: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_COLORS) },
		defaultValue: TOGGLE_BUTTON_COLORS.PRIMARY,
	},
	radius: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_RADIUSES) },
		defaultValue: TOGGLE_BUTTON_RADIUSES.CAPSULE,
	},
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconRight: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4115%3A70578',
	},
};
