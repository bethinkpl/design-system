import PageHeader from './PageHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { PAGE_HEADER_MOBILE_LAYOUTS } from './PageHeader.consts';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/Headers/PageHeader',
	component: PageHeader,
	decorators: [withActions],
} as Meta<typeof PageHeader>;

const StoryTemplate: StoryFn<typeof PageHeader> = (args) => ({
	components: { PageHeader },
	setup() {
		return args;
	},
	template:
		'<page-header' +
		' :page-title="pageTitle"' +
		' :eyebrow="eyebrow"' +
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
	eyebrow: 'Eyebrow text',
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
	eyebrow: {
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
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13668-258372&p=f&m=dev',
	},
};

export const WithEyebrow = StoryTemplate.bind({});
WithEyebrow.argTypes = argTypes;
WithEyebrow.args = {
	...args,
	eyebrow: 'Interna',
	pageTitle: 'Kardiologia 1',
	supportingInfo: 'Lekcja 26 / Powitanie',
	actions: '<button>Action</button>',
} as Args;
WithEyebrow.parameters = Interactive.parameters;

export const WithLongEyebrow = StoryTemplate.bind({});
WithLongEyebrow.argTypes = argTypes;
WithLongEyebrow.args = {
	...WithEyebrow.args,
	eyebrow:
		'Interna – choroby układu sercowo-naczyniowego, oddechowego, pokarmowego i moczowego oraz endokrynologia, hematologia i reumatologia',
} as Args;
WithLongEyebrow.parameters = Interactive.parameters;
