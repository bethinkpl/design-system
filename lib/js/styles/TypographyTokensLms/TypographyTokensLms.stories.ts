import { Args, Meta, StoryFn } from '@storybook/vue';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/typography/_tokens.json';
import { TOKENS_TYPES } from '../TokenTypes.consts';

export default {
	title: 'foundations/Design Tokens/Typography Tokens/Tokens WNL',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (argTypes) => ({
	components: { ItemsList },
	props: Object.keys(argTypes),
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const TokensWNL = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Tokens LMS', list: source, class: 'theme-wnl' }],
	type: TOKENS_TYPES.TYPOGRAPHY,
} as Args;

TokensWNL.args = args;

TokensWNL.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/ABEasgiwLLs91MISXwV7Vs/LMS-TypographyTokens---experiments-v2?node-id=0%3A1',
	},
};