import OverlayHeader from './OverlayHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/OverlayHeader',
	component: OverlayHeader,
} as Meta<typeof OverlayHeader>;

const StoryTemplate: StoryFn<typeof OverlayHeader> = (argTypes) => ({
	components: { OverlayHeader },
	props: Object.keys(argTypes),
	template: `
			<div style="height: 300px">
			<overlay-header v-bind=$props>
				<template v-if="accessorySlot" #accessory>
					<div style="background: var(--raw-gray-300);">{{ accessorySlot }}</div>
				</template>
				<template v-if="eyebrowAccessorySlot" #eyebrowAccessory>
					<div style="background: var(--raw-gray-300);">{{ eyebrowAccessorySlot }}</div>
				</template>
				<template v-if="leadingSlot" #leading>
					<div style="background: var(--raw-gray-300);">{{ leadingSlot }}</div>
				</template>
				<template v-if="trailingSlot" #trailing>
					<div style="background: var(--raw-gray-300);">{{ trailingSlot }}</div>
				</template>
				<template v-if="actionsSlot" #actions>
					<div style="background: var(--raw-gray-300);">{{ actionsSlot }}</div>
				</template>
				<template v-if="dropdownMenuSlot" #dropdownMenu>
					<div style="background: var(--raw-gray-300);">{{ dropdownMenuSlot }}</div>
					<div style="background: var(--raw-gray-300);">{{ dropdownMenuSlot }}</div>
				</template>
			</overlay-header>
			</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: 'Zadanie #123',
	eyebrowText: 'Eyebrow',
	accessorySlot: 'accessory slot',
	actionsSlot: 'actions slot',
	dropdownMenuSlot: 'dropdown slot',
	eyebrowAccessorySlot: 'eyebrowAccessory slot',
	leadingSlot: 'leading slot',
	trailingSlot: 'trailing slot',
} as Args;

const argTypes = {} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867%3A99215&t=gnx09suYyI8a6jHh-0',
	},
};
