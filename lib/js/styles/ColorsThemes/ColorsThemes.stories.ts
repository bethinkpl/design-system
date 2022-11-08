import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/colors/_raw-wnl.json';
import sourceSecond from '../../../styles/settings/colors/_raw-bodywork.json';
import { TOKENS_TYPES } from '../TokenTypes.consts';

export default {
	title: 'foundations/Colors/Theme',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const Theme = StoryTemplate.bind({});

const args = {
	itemsLists: [
		{ title: 'WNL', list: source, class: 'theme-wnl', disabled: 'default' },
		{
			title: 'Bodywork',
			list: sourceSecond,
			class: 'theme-bodywork',
			disabled: 'default',
		},
	],
	type: TOKENS_TYPES.COLORS,
} as Args;

Theme.args = args;
