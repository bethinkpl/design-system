import { Args, Meta, StoryFn } from '@storybook/vue3';

import ItemsList from './../ItemsList.vue';
import tokensList from '../../../styles/settings/colors/_tokens-wnl.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Design Tokens/Color Tokens/Primary WNL',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (args) => ({
	components: { ItemsList },
	setup() {
		return { ...args };
	},
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const PrimaryWNL = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Primary WNL', list: tokensList, class: '-ds-theme-wnl' }],
	type: TOKENS_TYPES.COLORS,
} as Args;

PrimaryWNL.args = args;
