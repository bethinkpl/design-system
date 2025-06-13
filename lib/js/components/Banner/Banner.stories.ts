import Banner from './Banner.vue';
import { BANNER_COLORS, BANNER_SIZES } from './Banner.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { useArgs } from '@storybook/preview-api';

export default {
	title: 'Components/Banner',
	component: Banner,
} as Meta<typeof Banner>;

const StoryTemplate: StoryFn<typeof Banner> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { Banner },
		setup() {
			return args;
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
						:is-expanded="isExpanded"
						:is-icon-hidden-on-mobile="isIconHiddenOnMobile"
						:size="size"
						:title-in-color="titleInColor"
						@update:isExpanded="onIsExpandedUpdated"
				>
				<template v-if="defaultText" #defaultText><span v-html="defaultText" /></template>
				<template v-if="expandedText" #expandedText>
					<div v-html="expandedText" />
				</template>
				<template v-if="rightSlot" #rightSlot>
					<div v-html="rightSlot" />
				</template>
				</banner>`,
	};
};

export const Interactive = StoryTemplate.bind({});

const args = {
	closable: false,
	icon: null,
	color: BANNER_COLORS.DEFAULT,
	title: 'Banner Title',
	buttonText: '',
	defaultText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices malesuada vehicula. Mauris egestas scelerisque enim, condimentum aliquet arcu bibendum nec.',
	expandedText: '',
	rightSlot: '',
	isExpanded: false,
	isIconHiddenOnMobile: false,
	size: BANNER_SIZES.MEDIUM,
	titleInColor: false,
} as Args;

const argTypes = {
	closable: { control: 'boolean' },
	icon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	isIconHiddenOnMobile: {
		control: 'boolean',
	},
	color: {
		control: 'select',
		options: Object.values(BANNER_COLORS),
	},
	title: {
		control: 'text',
	},
	buttonText: {
		control: 'text',
	},
	defaultText: {
		control: 'text',
	},
	expandedText: {
		control: 'text',
	},
	rightSlot: {
		control: 'text',
	},
	isExpanded: {
		control: 'boolean',
	},
	size: {
		control: 'select',
		options: Object.values(BANNER_SIZES),
	},
	titleInColor: {
		control: 'boolean',
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
