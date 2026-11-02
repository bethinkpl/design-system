import { Meta, StoryFn } from '@storybook/vue3';

import ColorSwatches from './ColorSwatches.vue';
import themeColors from '../../../styles/settings/colors/_theme.json';

export default {
	title: 'foundations/Colors/Theme',
	component: ColorSwatches,
} as Meta<typeof ColorSwatches>;

// Values come from the `.-ds-theme-<brand>` class set by the Brand toolbar switch.
// Names are the same for every brand.
const groups = [{ title: 'theme', items: themeColors.wnl.map(({ name }) => ({ name })) }];

const StoryTemplate: StoryFn<typeof ColorSwatches> = () => ({
	components: { ColorSwatches },
	setup() {
		return { groups };
	},
	template: `<color-swatches :groups="groups" />`,
});

export const Theme = StoryTemplate.bind({});
