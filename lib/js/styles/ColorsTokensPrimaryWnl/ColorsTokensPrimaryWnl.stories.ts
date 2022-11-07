import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/colors/_tokens-wnl.json';

export default {
	title: 'foundations/Design Tokens/Color Tokens/Primary WNL',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :display-color="true"></items-list>`,
});

export const PrimaryWNL = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Primary WNL', list: source, class: 'theme-wnl' }],
} as Args;

PrimaryWNL.args = args;
