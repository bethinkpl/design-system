import { Args, Meta, StoryFn } from '@storybook/vue3-vite';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/typography/_tokens.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Design Tokens/Typography Tokens/LMS',
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

export const LMS = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'LMS', list: source, class: '-ds-theme-wnl' }],
	type: TOKENS_TYPES.TYPOGRAPHY,
} as Args;

LMS.args = args;

LMS.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/ABEasgiwLLs91MISXwV7Vs/LMS-TypographyTokens---experiments-v2?node-id=0%3A1',
	},
};
