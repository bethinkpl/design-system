import TopNavBranding from './TopNavBranding.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import Flag from '../../Flag/Flag.vue';
import { FLAG_SIZES } from '../../Flag/Flag.consts';
import * as FLAGS from '../../Flag/flags';
import SlotPlaceholder, {
	SLOT_PLACEHOLDER_SIZES,
} from '../../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';
import { toRefs } from 'vue';
import { TOP_NAV_STORY_LOGO } from '../topNavStoryLogo';

export default {
	title: 'Components/TopNav/TopNavBranding',
	component: TopNavBranding,
} as Meta<typeof TopNavBranding>;

const FilledTemplate: StoryFn<typeof TopNavBranding> = (args) => ({
	components: { TopNavBranding, Flag },
	setup() {
		return {
			...toRefs(args),
			logo: TOP_NAV_STORY_LOGO,
			FLAGS,
			FLAG_SIZES,
		};
	},
	template: `
		<top-nav-branding :title="title" :href="href" :to="to">
			<template #logo>
				<span v-html="logo" style="display: inline-flex;" />
			</template>
			<template #accessory>
				<flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
			</template>
		</top-nav-branding>
	`,
});

export const Filled = FilledTemplate.bind({});

export const Linked = FilledTemplate.bind({});

const SlotPlaceholdersTemplate: StoryFn<typeof TopNavBranding> = (args) => ({
	components: { TopNavBranding, SlotPlaceholder },
	setup() {
		return {
			...toRefs(args),
			SLOT_PLACEHOLDER_SIZES,
		};
	},
	template: `
		<top-nav-branding :title="title">
			<template #logo>
				<slot-placeholder label="logo" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
			</template>
			<template #accessory>
				<slot-placeholder label="accessory" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
			</template>
		</top-nav-branding>
	`,
});

export const SlotPlaceholders = SlotPlaceholdersTemplate.bind({});

const args = {
	title: 'Bethink',
	href: '',
	to: '',
} as Args;

const argTypes = {
	title: {
		control: 'text',
	},
	href: {
		control: 'text',
		description: 'Renders the logo + title as an `<a>` linking to this URL.',
	},
	to: {
		control: 'text',
		description:
			'Renders the logo + title as a `<router-link>` (resolved by the host app). Ignored when `href` is set.',
	},
} as ArgTypes;

const parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=345-21287&m=dev',
	},
};

Filled.args = args;
Filled.argTypes = argTypes;
Filled.parameters = parameters;

Linked.args = {
	...args,
	href: '/',
} as Args;
Linked.argTypes = argTypes;
Linked.parameters = parameters;

SlotPlaceholders.args = args;
SlotPlaceholders.argTypes = argTypes;
SlotPlaceholders.parameters = parameters;
