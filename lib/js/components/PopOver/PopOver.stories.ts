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
		'<div style="display: flex; align-items: center; justify-content: center; height: 600px">' +
		'<pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :force-show="forceShow" :header-image-url="headerImageUrl">' +
		'<template #reference><span>click me!</span></template>' +
		'<div>Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.</div>' +
		'</pop-over>' +
		'</div>',
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	placement: POP_OVER_PLACEMENTS.BOTTOM,
	color: POP_OVER_COLORS.DEFAULT,
	triggerAction: POP_OVER_TRIGGER_ACTIONS.CLICK,
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	buttonText: 'button text',
	forceShow: false,
	headerImageUrl: 'https://lek.wiecejnizlek.pl/images/lesson-status-onboarding-inprogress.png',
} as Args;

const argTypes = {
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
	size: {
		control: { type: 'select', options: Object.values(POP_OVER_SIZES) },
		defaultValue: POP_OVER_SIZES.SMALL,
	},
} as ArgTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3590%3A67741',
	},
};

Interactive.argTypes = argTypes;

const PopoverWithHTMLStoryTemplate: StoryFn<typeof PopOver> = (argTypes) => ({
	components: { PopOver },
	props: Object.keys(argTypes),
	template:
		'<div style="display: flex; align-items: center; justify-content: center; height: 600px">' +
		'<pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :force-show="forceShow" :size="size" :max-height="maxHeight" :visible-arrow="visibleArrow">' +
		'<template #reference><span>click me!</span></template>' +
		'<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' +
		'</pop-over>' +
		'</div>',
});

export const PopOverSizeMMaxHeightDisabledArrow = PopoverWithHTMLStoryTemplate.bind({});

PopOverSizeMMaxHeightDisabledArrow.args = {
	placement: POP_OVER_PLACEMENTS.BOTTOM,
	color: POP_OVER_COLORS.DEFAULT,
	triggerAction: POP_OVER_TRIGGER_ACTIONS.CLICK,
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	size: POP_OVER_SIZES.MEDIUM,
	forceShow: false,
	maxHeight: true,
	visibleArrow: false,
	slotText:
		'<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.',
} as Args;

PopOverSizeMMaxHeightDisabledArrow.argTypes = argTypes;
