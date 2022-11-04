import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

import TypographyList from './../TypographyList.vue';
import tokensWnl from '../../../styles/settings/typography/_variables-css.json';

export default {
	title: 'foundations/Design Tokens/Typography Tokens ',
	component: TypographyList,
} as Meta<typeof TypographyList>;

const StoryTemplate: StoryFn<typeof TypographyList> = (argTypes) => ({
	components: { TypographyList },
	props: Object.keys(argTypes),
	template: `
		<typography-list :colors-lists="typographyLists"></typography-list>`,
});

export const VariablesWNL = StoryTemplate.bind({});

const args = {
	typographyLists: [{ title: 'WNL', list: tokensWnl, class: 'theme-wnl' }],
} as Args;

const argTypes = {
	typographyLists: Array,
} as ArgTypes;

VariablesWNL.argTypes = argTypes;
VariablesWNL.args = args;

VariablesWNL.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/ABEasgiwLLs91MISXwV7Vs/LMS-TypographyTokens---experiments-v2?node-id=0%3A1',
	},
};
