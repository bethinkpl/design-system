import PopOver from './PopOver.vue';
import {
	POP_OVER_ALIGNS,
	POP_OVER_COLORS,
	POP_OVER_SIDES,
	POP_OVER_SIZES,
	POP_OVER_TRIGGER_ACTIONS,
} from './PopOver.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

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
		'<pop-over :side="side" :align="align" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody">' +
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
	triggerAction: POP_OVER_TRIGGER_ACTIONS.CLICK,
	open: false,
	isPointerVisible: true,
	sideFlip: true,
	appendToBody: false,
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
	triggerAction: {
		control: 'select',
		options: Object.values(POP_OVER_TRIGGER_ACTIONS),
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
		'<pop-over :side="side" :align="align" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' +
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
	triggerAction: POP_OVER_TRIGGER_ACTIONS.CLICK,
	open: false,
	isPointerVisible: false,
} as Args;

PopOverMMaxHeightNoPointer.argTypes = argTypes;
