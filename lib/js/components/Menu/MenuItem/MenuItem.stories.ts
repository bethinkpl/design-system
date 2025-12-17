import MenuItem from './MenuItem.vue';
import DsChip from '../../Chip/Chip.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';
import {
	MENU_ITEM_ACCESSORY_STATES,
	MENU_ITEM_BACKGROUND_COLORS,
	MENU_ITEM_SIZES,
	MENU_ITEM_STATES,
} from './MenuItem.consts';

export default {
	title: 'Components/Menu/MenuItem',
	component: MenuItem,
} as Meta<typeof MenuItem>;

const StoryTemplate: StoryFn<typeof MenuItem> = (args) => ({
	components: { MenuItem, DsChip },
	setup() {
		return args;
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<menu-item :label="label" :additional-text="additionalText" :size="size" :state="state"
									:icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
									:is-selected="isSelected" :background-color="backgroundColor" :index="index"
									:is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
									:has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
									:is-selected-interactive="isSelectedInteractive" :level="level"
									:accessoryState="accessoryState">
			<template #labelSlot v-if="labelSlot">
				<span v-html="labelSlot" />
			</template>
			<template #default v-if="defaultSlot.length > 0">
				<ds-chip :label="defaultSlot" />
			</template>
		</menu-item>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	additionalText: '',
	defaultSlot: '10 / 20',
	labelSlot: 'Menu Item label in slot',
	size: MENU_ITEM_SIZES.SMALL,
	backgroundColor: MENU_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK,
	iconLeft: null,
	iconRight: null,
	iconRightRotation: null,
	index: null,
	level: 1,
	label: 'Menu Item label',
	isLabelUppercase: false,
	state: MENU_ITEM_STATES.DEFAULT,
	accessoryState: null,
	isSelected: false,
	isDone: false,
	hasSelectedIconsColorPrimary: true,
	isSelectedInteractive: false,
} as Args;

const argTypes = {
	defaultSlot: { control: 'text' },
	labelSlot: { control: 'text' },
	size: {
		control: 'select',
		options: Object.values(MENU_ITEM_SIZES),
	},
	backgroundColor: {
		control: 'select',
		options: Object.values(MENU_ITEM_BACKGROUND_COLORS),
	},
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRightRotation: {
		control: 'select',
		options: [null, 90, 180, 270],
	},
	index: {
		control: { type: 'number' },
	},
	level: {
		control: { type: 'number' },
	},
	label: { control: 'text' },
	isLabelUppercase: {
		control: 'boolean',
	},
	additionalText: { control: 'text' },
	state: {
		control: 'select',
		options: Object.values(MENU_ITEM_STATES),
	},
	accessoryState: {
		control: 'select',
		options: Object.values(MENU_ITEM_ACCESSORY_STATES),
	},
	isSelected: {
		control: 'boolean',
	},
	isDone: {
		control: 'boolean',
	},
	hasSelectedIconsColorPrimary: {
		control: 'boolean',
	},
	isSelectedInteractive: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0',
	},
};

const NestedMenuTemplate: StoryFn<typeof MenuItem> = (args) => ({
	components: { MenuItem },
	template: `
		<menu-item label="level 1">
			<template #children>
				<menu-item label="level 2">
					<template #children>
						<menu-item label="level 3">
							<template #children>
								<menu-item label="level 4">
									<template #children>
										<menu-item label="level 5">
											<template #children>
												<menu-item label="level 6" />
											</template>
										</menu-item>
									</template>
								</menu-item>
							</template>
						</menu-item>
					</template>
				</menu-item>
				<menu-item label="level 2" />
			</template>
		</menu-item>`,
});
export const Nested = NestedMenuTemplate.bind({});
