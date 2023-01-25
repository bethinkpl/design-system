import CounterToggle from './CounterToggle.vue';
import { COUNTER_TOGGLE_COLORS } from './CounterToggle.consts';
import { ICONS } from '../../Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Toggles/CounterToggle',
	component: CounterToggle,
} as Meta<typeof CounterToggle>;

const StoryTemplate: StoryFn<typeof CounterToggle> = (args) => ({
	components: { CounterToggle },
	setup() {
		return { ...args };
	},
	template:
		'<div :class="{ contrastBackground: isInverted }">' +
		'<counter-toggle :color="color" :counter="counter" :icon="ICONS[icon]" :isSelected="isSelected" :isDisabled="isDisabled" />' +
		'</div>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	computed: {
		isInverted() {
			return this.color === 'inverted';
		},
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	color: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG,
	counter: '99+',
	icon: 'FA_SQUARE_CARET_RIGHT',
	isSelected: false,
	isDisabled: false,
} as Args;

const argTypes = {
	color: {
		control: { type: 'select', options: Object.values(COUNTER_TOGGLE_COLORS) },
		defaultValue: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG,
	},
	icon: {
		control: { type: 'select', options: Object.keys(ICONS) },
	},
	counter: {
		control: { type: 'text' },
		defaultValue: null,
	},
	isSelected: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	isDisabled: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3693%3A70976',
	},
};
