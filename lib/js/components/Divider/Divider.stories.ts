import Divider from './Divider.vue';
import { DIVIDER_PROMINENCES, DIVIDER_SIZES } from './Divider.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Divider',
	component: Divider,
} as Meta<typeof Divider>;

const StoryTemplate: StoryFn<typeof Divider> = (args) => ({
	components: { Divider },
	setup() {
		return { ...args };
	},
	template: `
		<div style="height: 200px; width: 200px;">
		<divider :is-vertical="isVertical" :prominence="prominence" :size="size" />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	isVertical: false,
	prominence: DIVIDER_PROMINENCES.DEFAULT,
	size: DIVIDER_SIZES.S,
} as Args;

const argTypes = {
	prominence: {
		control: { type: 'select', options: Object.values(DIVIDER_PROMINENCES) },
		defaultValue: DIVIDER_PROMINENCES.DEFAULT,
	},
	size: {
		control: { type: 'select', options: Object.values(DIVIDER_SIZES) },
		defaultValue: DIVIDER_SIZES.S,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34960',
	},
};
