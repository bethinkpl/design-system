import PageHeader from './PageHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { PAGE_HEADER_MOBILE_LAYOUTS } from './PageHeader.consts';

export default {
	title: 'Components/Headers/PageHeader',
	component: PageHeader,
} as Meta<typeof PageHeader>;

const StoryTemplate: StoryFn<typeof PageHeader> = (args) => ({
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
	breadcrumbs: '',
	actions: '',
	pageTitle: 'Page title',
	supportingInfo: 'Supporting info write here',
	divider: true,
	mobileLayout: PAGE_HEADER_MOBILE_LAYOUTS.VERTICAL,
} as Args;

const argTypes = {
	breadcrumbs: {
		control: 'text',
	},
	actions: {
		control: 'text',
	},
	pageTitle: {
		control: 'text',
	},
	supportingInfo: {
		control: 'text',
	},
	divider: {
		control: 'boolean',
	},
	mobileLayout: {
		control: 'select',
		options: Object.values(PAGE_HEADER_MOBILE_LAYOUTS),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;
Interactive.parameters = {
	actions: {
		handles: ['click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0',
	},
};
