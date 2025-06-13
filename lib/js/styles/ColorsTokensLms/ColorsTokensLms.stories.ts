import { Args, Meta, StoryFn } from '@storybook/vue3-vite';

import ItemsList from './../ItemsList.vue';
import tokensList from '../../../styles/settings/colors/_tokens.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Design Tokens/Color Tokens/LMS',
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

export const LMS = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'LMS', list: tokensList }],
	type: TOKENS_TYPES.COLORS,
} as Args;

LMS.args = args;
