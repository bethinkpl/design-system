import MenuItem from './MenuItem.vue';
import DsChip from '../../Chip/Chip.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { toRefs } from 'vue';
import { ICONS } from '../../Icons/Icon';
import SectionHeader, { SECTION_HEADER_SIZES } from '../../Headers/SectionHeader';
import { MENU_ITEM_BACKGROUND_COLORS, MENU_ITEM_SIZES, MENU_ITEM_STATES } from './MenuItem.consts';
import DsMenu from '../Menu';
import SlotPlaceholder, {
	SLOT_PLACEHOLDER_SIZES,
} from '../../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';
import { useArgs } from '@storybook/preview-api';

export default {
	title: 'Components/Menu/MenuItem',
	component: MenuItem,
} as Meta<typeof MenuItem>;

const StoryTemplate: StoryFn<typeof MenuItem> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { MenuItem, DsChip, SlotPlaceholder },
		setup() {
			const reactiveArgs = toRefs(args);

			return {
				...reactiveArgs,
				ICONS,
				SLOT_PLACEHOLDER_SIZES,
			};
		},
		methods: {
			isExpandedUpdated(isExpanded: boolean) {
				updateArgs({
					isExpanded,
				});
			},
		},
		template: `
		<menu-item :label="label" :additional-text="additionalText" :size="size" :state="state"
									:icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
									:is-selected="isSelected" :background-color="backgroundColor" :index="index"
									:is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
									:has-selected-accessories-primary="hasSelectedAccessoriesPrimary"
									:is-selected-interactive="isSelectedInteractive" :level="level"
									:is-expandable="isExpandable" :is-expanded="isExpanded"
				   @update:isExpanded="isExpandedUpdated">
			<template #labelSlot v-if="labelSlot">
				<span v-html="labelSlot" />
			</template>
			<template #default>
				<slot-placeholder label="defaul slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
			</template>
			<template #children>
				<slot-placeholder label="children slot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
			</template>
		</menu-item>`,
	};
};

export const Interactive = StoryTemplate.bind({});

const args = {
	additionalText: '',
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
	isExpandable: false,
	isExpanded: false,
	isSelected: false,
	isDone: false,
	hasSelectedAccessoriesPrimary: true,
	isSelectedInteractive: false,
} as Args;

const argTypes = {
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
	isExpandable: {
		control: 'boolean',
	},
	isExpanded: {
		control: 'boolean',
	},
	isSelected: {
		control: 'boolean',
	},
	isDone: {
		control: 'boolean',
	},
	hasSelectedAccessoriesPrimary: {
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

const SectionHeaderMenuTemplate: StoryFn<typeof MenuItem> = (args) => ({
	components: { MenuItem, DsMenu, SectionHeader },
	setup() {
		return {
			SECTION_HEADER_SIZES,
		};
	},
	template: `
		<menu-item label="level 1">
			<template #children>
				<section-header title="Section Header XXS Level 2" :size="SECTION_HEADER_SIZES.XX_SMALL" :has-divider="false" />
				<menu-item label="level 2">
					<template #children>
						<menu-item label="level 3 first item" />
						<section-header title="Section Header XXS Level 3" :size="SECTION_HEADER_SIZES.XX_SMALL" :has-divider="false" />
						<menu-item label="level 3 second item" />
					</template>
				</menu-item>
				<menu-item label="level 2 another item" />
			</template>
		</menu-item>`,
});

export const SectionHeaderMenu = SectionHeaderMenuTemplate.bind({});

const NestedMenuTemplate: StoryFn<typeof MenuItem> = (args) => ({
	components: { MenuItem, DsMenu },
	template: `
		<menu-item label="level 1">
			<template #children>
				<ds-menu>
					<menu-item label="level 2" />
					<menu-item label="level 2">
						<template #children>
							<ds-menu>
								<menu-item label="level 3">
									<template #children>
										<ds-menu>
											<menu-item label="level 4">
												<template #children>
													<ds-menu>
														<menu-item label="level 5">
															<template #children>
																<ds-menu>
																	<menu-item label="level 6" />
																</ds-menu>
															</template>
														</menu-item>
													</ds-menu>
												</template>
											</menu-item>
										</ds-menu>
									</template>
								</menu-item>
							</ds-menu>
						</template>
					</menu-item>
					<menu-item label="level 2" />
				</ds-menu>
			</template>
		</menu-item>`,
});
export const Nested = NestedMenuTemplate.bind({});

const NestedExpandableMenuTemplate: StoryFn<typeof MenuItem> = (args) => ({
	components: { MenuItem, DsMenu },
	template: `
		<menu-item is-expandable label="level 1">
			<template #children>
				<ds-menu>
					<menu-item is-expandable label="level 2" />
					<menu-item is-expandable label="level 2">
						<template #children>
							<ds-menu>
								<menu-item is-expandable label="level 3">
									<template #children>
										<ds-menu>
											<menu-item is-expandable label="level 4">
												<template #children>
													<ds-menu>
														<menu-item is-expandable label="level 5">
															<template #children>
																<ds-menu>
																	<menu-item is-expandable label="level 6" />
																</ds-menu>
															</template>
														</menu-item>
													</ds-menu>
												</template>
											</menu-item>
										</ds-menu>
									</template>
								</menu-item>
							</ds-menu>
						</template>
					</menu-item>
					<menu-item is-expandable label="level 2" />
				</ds-menu>
			</template>
		</menu-item>`,
});
export const NestedExpandable = NestedExpandableMenuTemplate.bind({});
