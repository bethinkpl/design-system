import Popover from './Popover.vue';
import DsButton from '../Buttons/Button';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import { ICONS } from '../Icons/Icon';
import { POPOVER_ALIGNS, POPOVER_COLORS, POPOVER_SIDES, POPOVER_SIZES } from './Popover.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

export default {
	title: 'Components/Popover',
	component: Popover,
} as Meta<typeof Popover>;

const StoryTemplate: StoryFn<typeof Popover> = (args) => ({
	components: { Popover },
	setup() {
		return args;
	},
	template:
		'<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);">' +
		'<popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :has-max-height="hasMaxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody" :hide-when-detached="hideWhenDetached">' +
		'<template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template>' +
		'<div>{{ definitionSlot }}</div>' +
		'</popover>' +
		'</div>',
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	size: POPOVER_SIZES.SMALL,
	hasMaxHeight: false,
	side: POPOVER_SIDES.BOTTOM,
	align: POPOVER_ALIGNS.CENTER,
	color: POPOVER_COLORS.DEFAULT,
	headerImageUrl:
		'https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png',
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	buttonText: 'button text',
	isDisabled: false,
	isManual: false,
	open: false,
	isPointerVisible: true,
	sideFlip: true,
	appendToBody: true,
	hideWhenDetached: false,
	definitionSlot: 'Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.',
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(POPOVER_SIZES),
	},
	side: {
		control: 'select',
		options: Object.values(POPOVER_SIDES),
	},
	align: {
		control: 'select',
		options: Object.values(POPOVER_ALIGNS),
	},
	color: {
		control: 'select',
		options: Object.values(POPOVER_COLORS),
	},
	isManual: {
		control: 'boolean',
		description:
			'Only model updates and explicit close() calls change the open state, and focus stays put.',
	},
	isDisabled: {
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

const PopoverWithHTMLStoryTemplate: StoryFn<typeof Popover> = (args) => ({
	components: { Popover },
	setup() {
		return args;
	},
	template:
		'<div style="display: flex; align-items: center; justify-content: center; height: 800px">' +
		'<popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :has-max-height="hasMaxHeight" :is-pointer-visible="isPointerVisible">' +
		'<template #reference><span>click me!</span></template>' +
		'<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' +
		'</popover>' +
		'</div>',
});

export const PopoverMMaxHeightNoPointer = PopoverWithHTMLStoryTemplate.bind({});

PopoverMMaxHeightNoPointer.args = {
	size: POPOVER_SIZES.MEDIUM,
	hasMaxHeight: true,
	side: POPOVER_SIDES.BOTTOM,
	align: POPOVER_ALIGNS.CENTER,
	color: POPOVER_COLORS.DEFAULT,
	titleText: 'Lorem ipsum',
	subtitleText: 'Dolor sit amet',
	isDisabled: false,
	isManual: false,
	open: false,
	isPointerVisible: false,
} as Args;

PopoverMMaxHeightNoPointer.argTypes = argTypes;

export const Manual: StoryFn<typeof Popover> = () => ({
	components: { Popover, DsButton },
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
			<popover v-model:open="isOpen" is-manual title-text="Manually controlled popover">
				<template #reference><ds-button>Popover reference</ds-button></template>
				The checkbox controls this popover through v-model:open="isOpen".
				<ds-button @click="isOpen = false">Close popover</ds-button>
			</popover>
		</div>
	`,
});

// Contextual help: an info icon opens a short explanation next to the label it describes.
export const InfoHint: StoryFn<typeof Popover> = () => ({
	components: { Popover, DsIconButton },
	setup() {
		return {
			ICONS,
			ICON_BUTTON_COLORS,
			ICON_BUTTON_SIZES,
			POPOVER_ALIGNS,
			POPOVER_COLORS,
			POPOVER_SIDES,
		};
	},
	template: `
		<div style="display: flex; align-items: center; gap: 4px; padding: 24px 16px;">
			<span>Average score</span>
			<popover
				:side="POPOVER_SIDES.BOTTOM"
				:align="POPOVER_ALIGNS.START"
				:color="POPOVER_COLORS.NEUTRAL"
				title-text="How is it calculated?"
				subtitle-text="Updated daily"
			>
				<template #reference>
					<ds-icon-button
						:icon="ICONS.FA_CIRCLE_INFO"
						:size="ICON_BUTTON_SIZES.XX_SMALL"
						:color="ICON_BUTTON_COLORS.NEUTRAL"
						aria-label="About average score"
					/>
				</template>
				The mean of your last 20 quiz attempts. Unfinished attempts are not counted.
			</popover>
		</div>
	`,
});

// A feature announcement shown on page load. The parent opens it through `v-model:open`, and
// `isManual` keeps it from moving focus or closing on outside clicks, so the user can keep typing
// in the field. "Got it" closes it.
export const FeatureAnnouncement: StoryFn<typeof Popover> = () => ({
	components: { Popover, DsButton },
	setup() {
		const isOpen = ref(true);

		return { isOpen, POPOVER_SIDES, POPOVER_SIZES };
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 24px; padding: 24px 16px; min-height: 600px;">
			<input placeholder="Focus stays here while the popover is open" style="box-sizing: border-box; width: 100%; max-width: 320px;" autofocus />
			<popover
				v-model:open="isOpen"
				is-manual
				:side="POPOVER_SIDES.BOTTOM"
				:size="POPOVER_SIZES.MEDIUM"
				header-image-url="https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png"
				title-text="New: lesson status"
				subtitle-text="See where you left off"
				button-text="Got it"
				@button-click="isOpen = false"
			>
				<template #reference><ds-button>Lessons</ds-button></template>
				Every lesson now shows whether you have finished, started or not opened it yet.
			</popover>
		</div>
	`,
});

// Every color and size, open at once for a visual check. Manual mode keeps them open while
// clicking around. The reference sits in the middle of a cell tall enough
// for a panel on either side, so a panel that flips near a screen edge stays within its own cell.
// On narrow screens the cells stack.
export const Variants: StoryFn<typeof Popover> = () => ({
	components: { Popover },
	setup() {
		const variants = Object.values(POPOVER_COLORS).flatMap((color) =>
			Object.values(POPOVER_SIZES).map((size) => ({ color, size })),
		);

		return { variants, POPOVER_SIDES };
	},
	template: `
		<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr)); padding: 16px;">
			<div
				v-for="variant in variants"
				:key="variant.color + variant.size"
				style="display: flex; align-items: center; justify-content: center; height: 480px;"
			>
				<popover
					:open="true"
					is-manual
					:side="POPOVER_SIDES.BOTTOM"
					:color="variant.color"
					:size="variant.size"
					:title-text="variant.color + ' · ' + variant.size"
					subtitle-text="Subtitle"
					button-text="Button"
				>
					<template #reference><span>{{ variant.color }} / {{ variant.size }}</span></template>
					Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.
				</popover>
			</div>
		</div>
	`,
});
