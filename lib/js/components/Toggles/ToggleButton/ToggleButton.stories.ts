import ToggleButton from './ToggleButton.vue';
import {
	TOGGLE_BUTTON_SIZES,
	TOGGLE_BUTTON_TYPES,
	TOGGLE_BUTTON_COLORS,
	TOGGLE_BUTTON_RADIUSES,
	TOGGLE_BUTTON_ELEVATIONS,
} from './ToggleButton.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Toggles/ToggleButton',
	component: ToggleButton,
} as Meta<typeof ToggleButton>;

const StoryTemplate: StoryFn<typeof ToggleButton> = (args) => ({
	components: { ToggleButton },
	setup() {
		return { ...args };
	},
	template: `
		<toggle-button
			:size="size"
			:type="type"
			:radius="radius"
			:color="color"
			:elevation="elevation"
			:text="text"
			:is-selected="isSelected"
			:is-interactive="isInteractive"
		/>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: TOGGLE_BUTTON_SIZES.MEDIUM,
	type: TOGGLE_BUTTON_TYPES.FILLED,
	color: TOGGLE_BUTTON_COLORS.PRIMARY,
	radius: TOGGLE_BUTTON_RADIUSES.CAPSULE,
	elevation: TOGGLE_BUTTON_ELEVATIONS.NONE,
	text: '1',
	isSelected: false,
	isInteractive: true,
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_SIZES) },
		defaultValue: TOGGLE_BUTTON_SIZES.MEDIUM,
	},
	type: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_TYPES) },
		defaultValue: TOGGLE_BUTTON_TYPES.FILLED,
	},
	color: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_COLORS) },
		defaultValue: TOGGLE_BUTTON_COLORS.PRIMARY,
	},
	radius: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_RADIUSES) },
		defaultValue: TOGGLE_BUTTON_RADIUSES.CAPSULE,
	},
	elevation: {
		control: { type: 'select', options: Object.values(TOGGLE_BUTTON_ELEVATIONS) },
		defaultValue: TOGGLE_BUTTON_ELEVATIONS.NONE,
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
