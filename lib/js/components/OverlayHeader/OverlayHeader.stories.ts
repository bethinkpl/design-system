import OverlayHeader from './OverlayHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { OVERLAY_HEADER_BORDER_COLORS } from './OverlayHeader.consts';

export default {
	title: 'Components/OverlayHeader',
	component: OverlayHeader,
} as Meta<typeof OverlayHeader>;

const StoryTemplate: StoryFn<typeof OverlayHeader> = (args) => ({
	components: { OverlayHeader },
	setup() {
		return { ...args };
	},
	template: `
			<div style="height: 300px">
			<overlay-header v-bind=$props>
				<template v-if="accessorySlot" #accessory>
					<div style="background: var(--raw-gray-300); height: 100%">{{ accessorySlot }}</div>
				</template>
				<template v-if="eyebrowAccessorySlot" #eyebrowAccessory>
					<div style="background: var(--raw-gray-300); font-size: 10px">{{ eyebrowAccessorySlot }}</div>
				</template>
				<template v-if="titleLeadingSlot" #titleLeading>
					<div style="background: var(--raw-gray-300);">{{ titleLeadingSlot }}</div>
				</template>
				<template v-if="titleTrailingSlot" #titleTrailing>
					<div style="background: var(--raw-gray-300); white-space: nowrap">{{ titleTrailingSlot }}</div>
				</template>
				<template v-if="actionsSlot" #actions>
					<div style="background: var(--raw-gray-300); height: 100%">{{ actionsSlot }}</div>
				</template>
				<template v-if="dropdownSlot" #dropdown="{ close }">
					<div style="background: var(--raw-gray-300);">{{ dropdownSlot }}</div>
					<div style="background: var(--raw-gray-300);">{{ dropdownSlot }}</div>
				</template>
			</overlay-header>
			</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: 'Zadanie #123',
	shortTitle: '#123',
	eyebrowText: 'Eyebrow',
	accessorySlot: 'accessory',
	actionsSlot: 'actions slot',
	dropdownSlot: 'dropdown slot',
	eyebrowAccessorySlot: 'eyebrowAccessory',
	titleLeadingSlot: 'leading',
	titleTrailingSlot: 'trailing',
	isTitleInteractive: false,
} as Args;

const argTypes = {
	borderColor: {
		control: {
			type: 'select',
			options: Object.values(OVERLAY_HEADER_BORDER_COLORS),
			defaultValue: OVERLAY_HEADER_BORDER_COLORS.NEUTRAL_GHOST,
		},
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	layout: 'fullscreen',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867%3A99215&t=gnx09suYyI8a6jHh-0',
	},
};
