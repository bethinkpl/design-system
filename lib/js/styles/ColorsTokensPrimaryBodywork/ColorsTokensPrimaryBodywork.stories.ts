import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/colors/_tokens-bodywork.json';
import { TOKENS_TYPES } from '../TokenTypes.consts';

export default {
	title: 'foundations/Design Tokens/Color Tokens/Primary Bodywork',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const PrimaryBodywork = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Primary Bodywork', list: source, class: 'theme-bodywork' }],
	type: TOKENS_TYPES.COLORS,
} as Args;

PrimaryBodywork.args = args;
