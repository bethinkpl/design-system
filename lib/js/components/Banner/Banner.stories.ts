import Banner from './Banner.vue';
import { BANNER_COLORS, BANNER_LAYOUTS } from './Banner.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Banner',
	component: Banner,
} as Meta<typeof Banner>;

const StoryTemplate: StoryFn<typeof Banner> = (args, { updateArgs }) => ({
	components: { Banner },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	methods: {
		onIsExpandedUpdated(isExpanded) {
			updateArgs({
				isExpanded,
			});
		},
	},
	template: `
			<banner
					:closable="closable"
					:icon="ICONS[icon]"
					:color="color"
					:title="title"
					:buttonText="buttonText"
					:layout="layout"
					:is-expanded="isExpanded"
					:is-icon-hidden-on-mobile="isIconHiddenOnMobile"
					@update:isExpanded="onIsExpandedUpdated"
			>
			<template #defaultText><span v-html="defaultText" /></template>
			<template v-if="expandedText" #expandedText>
				<div v-html="expandedText" />
			</template>
			<template v-if="rightSlot" #rightSlot>
				<div v-html="rightSlot" />
			</template>
			</banner>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	closable: true,
	icon: ICONS.FA_CIRCLE_INFO,
	color: BANNER_COLORS.DEFAULT,
	title: 'Banner Title',
	buttonText: '',
	layout: BANNER_LAYOUTS.HORIZONTAL,
	defaultText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices malesuada vehicula. Mauris egestas scelerisque enim, condimentum aliquet arcu bibendum nec.',
	expandedText: '',
	rightSlot: '',
	isExpanded: false,
	isIconHiddenOnMobile: false,
} as Args;

const argTypes = {
	closable: { control: { type: 'boolean' }, defaultValue: false },
	icon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	isIconHiddenOnMobile: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	color: {
		control: { type: 'select', options: Object.values(BANNER_COLORS) },
		defaultValue: BANNER_COLORS.DEFAULT,
	},
	title: {
		control: { type: 'text' },
	},
	buttonText: {
		control: { type: 'text' },
		defaultValue: '',
	},
	layout: {
		control: { type: 'select', options: Object.values(BANNER_LAYOUTS) },
		defaultValue: BANNER_LAYOUTS.HORIZONTAL,
	},
	defaultText: {
		control: { type: 'text' },
	},
	expandedText: {
		control: { type: 'text' },
	},
	rightSlot: {
		control: { type: 'text' },
	},
	isExpanded: {
		control: { type: 'boolean' },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3696%3A68274',
	},
};
