import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import rawColorsList from '../../../styles/settings/colors/_raw.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Colors/Raw',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const Raw = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Raw', list: rawColorsList, disabled: 'theme' }],
	type: TOKENS_TYPES.COLORS,
} as Args;

Raw.args = args;
