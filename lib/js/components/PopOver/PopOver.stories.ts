import PopOver from './PopOver.vue';
import {
	POP_OVER_COLORS,
	POP_OVER_PLACEMENTS,
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
		return { ...args };
	},
	template:
		'<div style="display: flex; align-items: center; justify-content: center; height: 800px">' +
		'<pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :force-show="forceShow" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' +
		'<template #reference><span>click me!</span></template>' +
		'<div>{{ definitionSlot }}</div>' +
		'</pop-over>' +
		'</div>',
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	size: POP_OVER_SIZES.SMALL,
	maxHeight: false,
	placement: POP_OVER_PLACEMENTS.BOTTOM,
	color: POP_OVER_COLORS.DEFAULT,
	headerImageUrl:
		'https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png',
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	buttonText: 'button text',
	triggerAction: POP_OVER_TRIGGER_ACTIONS.CLICK,
	forceShow: false,
	isPointerVisible: true,
	definitionSlot: 'Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.',
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(POP_OVER_SIZES) },
		defaultValue: POP_OVER_SIZES.SMALL,
	},
	placement: {
		control: { type: 'select', options: Object.values(POP_OVER_PLACEMENTS) },
		defaultValue: POP_OVER_PLACEMENTS.BOTTOM,
	},
	color: {
		control: { type: 'select', options: Object.values(POP_OVER_COLORS) },
		defaultValue: POP_OVER_COLORS.DEFAULT,
	},
	triggerAction: {
		control: { type: 'select', options: Object.values(POP_OVER_TRIGGER_ACTIONS) },
		defaultValue: POP_OVER_TRIGGER_ACTIONS.CLICK,
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
		'<pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :force-show="forceShow" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' +
		'<template #reference><span>click me!</span></template>' +
		'<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' +
		'</pop-over>' +
		'</div>',
});

export const PopOverMMaxHeightNoPointer = PopoverWithHTMLStoryTemplate.bind({});

PopOverMMaxHeightNoPointer.args = {
	size: POP_OVER_SIZES.MEDIUM,
	maxHeight: true,
	placement: POP_OVER_PLACEMENTS.BOTTOM,
	color: POP_OVER_COLORS.DEFAULT,
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	triggerAction: POP_OVER_TRIGGER_ACTIONS.CLICK,
	forceShow: false,
	isPointerVisible: false,
} as Args;

PopOverMMaxHeightNoPointer.argTypes = argTypes;
