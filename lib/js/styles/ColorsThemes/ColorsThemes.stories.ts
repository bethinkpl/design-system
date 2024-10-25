import { Args, Meta, StoryFn } from '@storybook/vue3';

import ItemsList from './../ItemsList.vue';
import rawWnlColorsList from '../../../styles/settings/colors/_raw-wnl.json';
import rawBodyworkColorsList from '../../../styles/settings/colors/_raw-bodywork.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Colors/Theme',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (args) => ({
	components: { ItemsList },
	setup() {
		return args;
	},
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const Theme = StoryTemplate.bind({});

const args = {
	itemsLists: [
		{ title: 'WNL', list: rawWnlColorsList, class: '-ds-theme-wnl', disabled: 'default' },
		{
			title: 'Bodywork',
			list: rawBodyworkColorsList,
			class: '-ds-theme-bodywork',
			disabled: 'default',
		},
	],
	type: TOKENS_TYPES.COLORS,
} as Args;

Theme.args = args;
