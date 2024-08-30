import OverlayHeader from './OverlayHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { OVERLAY_HEADER_BORDER_COLORS, OVERLAY_HEADER_STATES } from './OverlayHeader.consts';
import { ICONS } from '../../Icons/Icon';

export default {
	title: 'Components/Headers/OverlayHeader',
	component: OverlayHeader,
} as Meta<typeof OverlayHeader>;

const StoryTemplate: StoryFn<typeof OverlayHeader> = (args) => ({
	components: { OverlayHeader },
	setup() {
		return { args };
	},

	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<div style="height: 300px">
			<overlay-header v-bind=args :dropdown-icon="ICONS[args.dropdownIcon]">
				<template v-if="args.accessorySlot" #accessory>
					<div style="background: var(--raw-gray-300); height: 100%">{{ args.accessorySlot }}</div>
				</template>
				<template v-if="args.eyebrowAccessorySlot" #eyebrowAccessory>
					<div style="background: var(--raw-gray-300); font-size: 10px">{{ args.eyebrowAccessorySlot }}</div>
				</template>
				<template v-if="args.titleLeadingSlot" #titleLeading>
					<div style="background: var(--raw-gray-300);">{{ args.titleLeadingSlot }}</div>
				</template>
				<template v-if="args.titleTrailingSlot" #titleTrailing>
					<div style="background: var(--raw-gray-300); white-space: nowrap">{{ args.titleTrailingSlot }}</div>
				</template>
				<template v-if="args.actionsSlot" #actions>
					<div style="background: var(--raw-gray-300); height: 100%">{{ args.actionsSlot }}</div>
				</template>
				<template v-if="args.dropdownSlot" #dropdown="{ close }">
					<div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
					<div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
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
	dropdownIcon: 'FA_ELLIPSIS_VERTICAL',
} as Args;

const argTypes = {
	borderColor: {
		control: {
			type: 'select',
			options: Object.values(OVERLAY_HEADER_BORDER_COLORS),
		},
		defaultValue: OVERLAY_HEADER_BORDER_COLORS.NEUTRAL_GHOST,
	},
	state: {
		control: { type: 'select', options: Object.values(OVERLAY_HEADER_STATES) },
		defaultValue: OVERLAY_HEADER_STATES.DEFAULT,
	},
	dropdownIcon: {
		control: { type: 'select', options: Object.keys(ICONS) },
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
