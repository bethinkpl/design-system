import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/colors/_raw.json';

export default {
	title: 'foundations/Colors/Raw',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :display-color="true"></items-list>`,
});

export const Raw = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Raw', list: source, disabled: 'theme' }],
} as Args;

Raw.args = args;
