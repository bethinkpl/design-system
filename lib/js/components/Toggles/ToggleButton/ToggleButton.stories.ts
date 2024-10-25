import ToggleButton from './ToggleButton.vue';
import {
	TOGGLE_BUTTON_COLORS,
	TOGGLE_BUTTON_LABEL_SIZES,
	TOGGLE_BUTTON_RADIUSES,
	TOGGLE_BUTTON_SIZES,
	TOGGLE_BUTTON_STATES,
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
		return args;
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<toggle-button
			:color="color"
			:has-small-horizontal-padding="hasSmallHorizontalPadding"
			:icon-left="ICONS[iconLeft]"
			:icon-right="ICONS[iconRight]"
			:is-interactive="isInteractive"
			:is-label-uppercase="isLabelUppercase"
			:is-selected="isSelected"
			:label="label"
			:label-size="labelSize"
			:radius="radius"
			:size="size"
			:state="state"
		/>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: TOGGLE_BUTTON_SIZES.MEDIUM,
	hasSmallHorizontalPadding: false,
	color: TOGGLE_BUTTON_COLORS.NEUTRAL,
	isSelected: false,
	radius: TOGGLE_BUTTON_RADIUSES.CAPSULE,
	label: '1',
	isLabelUppercase: false,
	labelSize: TOGGLE_BUTTON_LABEL_SIZES.MEDIUM,
	isInteractive: true,
	iconLeft: null,
	iconRight: null,
	state: TOGGLE_BUTTON_STATES.DEFAULT,
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(TOGGLE_BUTTON_SIZES),
	},
	color: {
		control: 'select',
		options: Object.values(TOGGLE_BUTTON_COLORS),
	},
	radius: {
		control: 'select',
		options: Object.values(TOGGLE_BUTTON_RADIUSES),
	},
	labelSize: {
		control: 'select',
		options: Object.values(TOGGLE_BUTTON_LABEL_SIZES),
	},
	state: {
		control: 'select',
		options: Object.values(TOGGLE_BUTTON_STATES),
	},
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
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
