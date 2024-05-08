import { Args, Meta, StoryFn } from '@storybook/vue3';

import ItemsList from './../ItemsList.vue';
import source from '../../../styles/settings/typography/_variables-css.json';
import { TOKENS_TYPES } from '../TokenTypes';

export default {
	title: 'foundations/Typography/Variables',
	component: ItemsList,
} as Meta<typeof ItemsList>;

const StoryTemplate: StoryFn<typeof ItemsList> = (args) => ({
	components: { ItemsList },
	setup() {
		return { ...args };
	},
	template: `
		<items-list :items-lists="itemsLists" :type="type"></items-list>`,
});

export const Variables = StoryTemplate.bind({});

const args = {
	itemsLists: [{ title: 'Variables', list: source, class: '-ds-theme-wnl' }],
	type: TOKENS_TYPES.TYPOGRAPHY,
} as Args;

Variables.args = args;

Variables.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/ABEasgiwLLs91MISXwV7Vs/LMS-TypographyTokens---experiments-v2?node-id=0%3A1',
	},
};
