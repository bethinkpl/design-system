import PageHeader from './PageHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Headers/PageHeader',
	component: PageHeader,
} as Meta<typeof PageHeader>;

const StoryTemplate: StoryFn<typeof PageHeader> = (args, { updateArgs }) => ({
	components: { PageHeader },
	setup() {
		return { ...args };
	},
	template:
		'<page-header' +
		' :page-title="pageTitle"' +
		' :supporting-info="supportingInfo"' +
		' :divider="divider"' +
		'>' +
		'</page-header>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	pageTitle: 'Page title',
	supportingInfo: 'Example text',
	divider: true,
} as Args;

const argTypes = {
	pageTitle: {},
	supportingInfo: {},
	divider: {},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;
