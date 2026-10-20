import PopOver from './PopOver.vue';
import DsButton from '../Buttons/Button';
import { POP_OVER_ALIGNS, POP_OVER_COLORS, POP_OVER_SIDES, POP_OVER_SIZES } from './PopOver.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

export default {
	title: 'Components/PopOver',
	component: PopOver,
} as Meta<typeof PopOver>;

const StoryTemplate: StoryFn<typeof PopOver> = (args) => ({
	components: { PopOver },
	setup() {
		return args;
	},
	template:
		'<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);">' +
		'<pop-over :side="side" :align="align" :color="color" :disabled="disabled" :manual="manual" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody">' +
		'<template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template>' +
		'<div>{{ definitionSlot }}</div>' +
		'</pop-over>' +
		'</div>',
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	size: POP_OVER_SIZES.SMALL,
	maxHeight: false,
	side: POP_OVER_SIDES.BOTTOM,
	align: POP_OVER_ALIGNS.CENTER,
	color: POP_OVER_COLORS.DEFAULT,
	headerImageUrl:
		'https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png',
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	buttonText: 'button text',
	disabled: false,
	manual: false,
	open: false,
	isPointerVisible: true,
	sideFlip: true,
	appendToBody: true,
	definitionSlot: 'Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.',
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(POP_OVER_SIZES),
	},
	side: {
		control: 'select',
		options: Object.values(POP_OVER_SIDES),
	},
	align: {
		control: 'select',
		options: Object.values(POP_OVER_ALIGNS),
	},
	color: {
		control: 'select',
		options: Object.values(POP_OVER_COLORS),
	},
	manual: {
		control: 'boolean',
		description: 'Only model updates and explicit close() calls change the open state.',
	},
	disabled: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3590%3A67741',
	},
};

const PopoverWithHTMLStoryTemplate: StoryFn<typeof PopOver> = (argTypes) => ({
	components: { PopOver },
	props: Object.keys(argTypes),
	template:
		'<div style="display: flex; align-items: center; justify-content: center; height: 800px">' +
		'<pop-over :side="side" :align="align" :color="color" :disabled="disabled" :manual="manual" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' +
		'<template #reference><span>click me!</span></template>' +
		'<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' +
		'</pop-over>' +
		'</div>',
});

export const PopOverMMaxHeightNoPointer = PopoverWithHTMLStoryTemplate.bind({});

PopOverMMaxHeightNoPointer.args = {
	size: POP_OVER_SIZES.MEDIUM,
	maxHeight: true,
	side: POP_OVER_SIDES.BOTTOM,
	align: POP_OVER_ALIGNS.CENTER,
	color: POP_OVER_COLORS.DEFAULT,
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	disabled: false,
	manual: false,
	open: false,
	isPointerVisible: false,
} as Args;

PopOverMMaxHeightNoPointer.argTypes = argTypes;

export const Manual: StoryFn<typeof PopOver> = () => ({
	components: { PopOver, DsButton },
	setup() {
		const isOpen = ref(false);
		return { isOpen };
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; min-height: 800px; padding: 48px; background: var(--raw-gray-50);">
			<label>
				<input v-model="isOpen" type="checkbox" />
				isOpen: {{ isOpen }}
			</label>
			<p>Use the checkbox to open or close. Escape, outside clicks, and reference clicks keep the current state.</p>
			<pop-over v-model:open="isOpen" manual title-text="Manually controlled popover">
				<template #reference><ds-button>Popover reference</ds-button></template>
				The checkbox controls this popover through v-model:open="isOpen".
				<ds-button @click="isOpen = false">Close popover</ds-button>
			</pop-over>
		</div>
	`,
});
