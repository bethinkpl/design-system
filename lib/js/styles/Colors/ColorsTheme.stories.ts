import { Meta, StoryFn } from '@storybook/vue3';

import ColorSwatches from './ColorSwatches.vue';
import themeColors from '../../../styles/settings/colors/_theme.json';

export default {
	title: 'foundations/Colors/Theme',
	component: ColorSwatches,
} as Meta<typeof ColorSwatches>;

// Values come from the `.-ds-theme-<brand>` class set by the Brand toolbar switch.
const groups = [{ title: 'theme', items: themeColors.map((name) => ({ name })) }];

const StoryTemplate: StoryFn<typeof ColorSwatches> = (_, { globals }) => ({
	components: { ColorSwatches },
	setup() {
		return { groups, refreshKey: `${globals.brand}-${globals.colorScheme}` };
	},
	template: `<color-swatches :groups="groups" :refresh-key="refreshKey" />`,
});

export const Theme = StoryTemplate.bind({});
