import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/typography/_variables-css.json';

export default {
	title: 'foundations/Design Tokens/Typography Tokens/Variables WNL',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists"></items-list>`,
});

export const VariablesWNL = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Variables WNL', list: source, class: 'theme-wnl' }],
} as Args;

VariablesWNL.args = args;

VariablesWNL.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/ABEasgiwLLs91MISXwV7Vs/LMS-TypographyTokens---experiments-v2?node-id=0%3A1',
	},
};
