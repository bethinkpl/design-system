import { Meta, StoryFn } from '@storybook/vue3';

import ColorSwatches from './ColorSwatches.vue';
import rawColors from '../../../styles/settings/colors/_raw.json';

export default {
	title: 'foundations/Colors/Raw',
	component: ColorSwatches,
} as Meta<typeof ColorSwatches>;

const groups = Object.entries(rawColors).map(([title, names]) => ({
	title,
	items: names.map((name) => ({ name })),
}));

const StoryTemplate: StoryFn<typeof ColorSwatches> = () => ({
	components: { ColorSwatches },
	setup() {
		return { groups };
	},
	template: `<color-swatches :groups="groups" />`,
});

export const Raw = StoryTemplate.bind({});
