import { Meta, StoryFn } from '@storybook/vue3';

import ColorSwatches from './ColorSwatches.vue';
import tokens from '../../../styles/settings/colors/_tokens.json';

export default {
	title: 'foundations/Colors/Tokens',
	component: ColorSwatches,
} as Meta<typeof ColorSwatches>;

const groups = Object.entries(tokens).map(([title, items]) => ({ title, items }));

const StoryTemplate: StoryFn<typeof ColorSwatches> = () => ({
	components: { ColorSwatches },
	setup() {
		return { groups };
	},
	template: `<color-swatches :groups="groups" />`,
});

export const Tokens = StoryTemplate.bind({});
