import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/colors/_raw-wnl.json';
import sourceSecond from '../../../styles/settings/colors/_raw-bodywork.json';

export default {
	title: 'foundations/Colors/Theme',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists"></items-list>`,
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
} as Args;

Theme.args = args;
