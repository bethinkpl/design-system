import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/colors/_tokens.json';
import { TOKENS_TYPES } from '../TokenTypes.consts';

export default {
	title: 'foundations/Design Tokens/Color Tokens/ LMS',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const LMS = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'LMS', list: source }],
	type: TOKENS_TYPES.COLORS,
} as Args;

LMS.args = args;
