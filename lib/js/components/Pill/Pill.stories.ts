import Pill from './Pill.vue';
import { PILL_COLORS, PILL_SIZES } from './Pill.consts';
import { ICONS } from '../Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Pill',
	component: Pill,
} as Meta<typeof Pill>;

const StoryTemplate: StoryFn<typeof Pill> = (argTypes) => ({
	components: { Pill },
	props: Object.keys(argTypes),
	template:
		'<pill :label="label" :left-icon="ICONS[leftIcon]" :has-delete="hasDelete" :size="size" :color="color" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	label: 'Pill z labelem',
	leftIcon: null,
	hasDelete: false,
	size: PILL_SIZES.SMALL,
	color: PILL_COLORS.NEUTRAL,
} as Args;

const argTypes = {
	leftIcon: {
		control: { type: 'select', options: Object.keys(ICONS) },
	},
	size: {
		control: { type: 'select', options: Object.values(PILL_SIZES) },
	},
	color: {
		control: { type: 'select', options: Object.values(PILL_COLORS) },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072',
	},
};