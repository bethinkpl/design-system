import PageHeader from './PageHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { PAGE_HEADER_MOBILE_LAYOUTS } from './PageHeader.consts';

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
		' :mobile-layout="mobileLayout"' +
		' :divider="divider"' +
		'>' +
		'<template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template>' +
		'<template v-if="actions" #actions><div v-html="actions" /></template>' +
		'</page-header>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	pageTitle: 'Page title',
	supportingInfo: 'Supporting info write here',
	divider: true,
	actions: '<button>test</button>',
	breadcrumbs: 'Interna > Kardiologia',
	mobileLayout: 'vertical',
} as Args;

const argTypes = {
	pageTitle: {
		control: { type: 'text' },
	},
	supportingInfo: {
		control: { type: 'text' },
	},
	divider: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
	mobileLayout: {
		control: {
			type: 'select',
			options: Object.values(PAGE_HEADER_MOBILE_LAYOUTS),
			defaultValue: PAGE_HEADER_MOBILE_LAYOUTS.VERTICAL,
		},
	},
	breadcrumbs: {
		control: { type: 'text' },
	},
	actions: {
		control: { type: 'text' },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;
