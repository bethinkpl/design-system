import { Meta, StoryFn } from '@storybook/vue3';

import ColorSwatches from './ColorSwatches.vue';
import tokens from '../../../styles/settings/colors/_tokens.json';

export default {
	title: 'foundations/Colors/Tokens',
	component: ColorSwatches,
} as Meta<typeof ColorSwatches>;

const groups = Object.entries(tokens).map(([title, items]) => ({ title, items }));

const StoryTemplate: StoryFn<typeof ColorSwatches> = (_, { globals }) => ({
	components: { ColorSwatches },
	setup() {
		return { groups, refreshKey: `${globals.brand}-${globals.colorScheme}` };
	},
	template: `<color-swatches :groups="groups" :refresh-key="refreshKey" />`,
});

export const Tokens = StoryTemplate.bind({});
