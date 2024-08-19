import { Args, Meta, StoryFn } from '@storybook/vue3';

import ItemsList from './../ItemsList.vue';
import rawColorsList from '../../../styles/settings/colors/_raw.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Colors/Raw',
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

export const Raw = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Raw', list: rawColorsList, disabled: 'theme' }],
	type: TOKENS_TYPES.COLORS,
} as Args;

Raw.args = args;
