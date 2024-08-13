import DrawerDivider from './DrawerDivider.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../../Divider';

export default {
	title: 'Components/Drawer/DrawerDivider',
	component: DrawerDivider,
} as Meta<typeof DrawerDivider>;

const StoryTemplate: StoryFn<typeof DrawerDivider> = (args) => ({
	components: { DrawerDivider },
	setup() {
		return { ...args };
	},
	template: `
		<div style="height: 200px; width: 200px;">
		<drawer-divider :prominence="prominence" :size="size" />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	prominence: DIVIDER_PROMINENCES.DEFAULT,
	size: DIVIDER_SIZES.S,
} as Args;

const argTypes = {
	prominence: {
		control: 'select',
		options: Object.values(DIVIDER_PROMINENCES),
	},
	size: {
		control: 'select',
		options: Object.values(DIVIDER_SIZES),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111032&t=2Z2n2tIHRHEsWjoW-4',
	},
};
