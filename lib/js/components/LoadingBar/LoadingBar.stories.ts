import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import LoadingBar from './LoadingBar.vue';
import { LOADING_BAR_COLORS, LOADING_BAR_SIZES } from './LoadingBar.consts';

export default {
	title: 'Components/LoadingBar',
	component: LoadingBar,
} as Meta<typeof LoadingBar>;

const StoryTemplate: StoryFn<typeof LoadingBar> = (args) => ({
	components: { DsLoadingBar: LoadingBar },
	setup() {
		return { ...args };
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
