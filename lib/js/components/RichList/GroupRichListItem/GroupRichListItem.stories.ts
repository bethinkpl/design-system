import GroupRichListItem from './GroupRichListItem.vue';
import RichListItem, {
	RICH_LIST_ITEM_ELEVATION,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
} from '../RichListItem';
import Divider from '../../Divider';
import { useArgs } from '@storybook/preview-api';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR,
	GROUP_RICH_LIST_ITEM_BORDER_COLOR,
} from './GroupRichListItem.consts';
import { ICON_COLORS, ICONS } from '../../Icons/Icon';

export default {
	title: 'Components/RichList/GroupRichListItem',
	component: GroupRichListItem,
	decorators: [
		(story) => ({
			template: `<div style="display: flex;padding: 16px;"><story/></div>`,
		}),
	],
} as Meta<typeof GroupRichListItem>;

const args = {
	isExpanded: false,
	borderColor: null,
	borderColorHex: '',
	backgroundColor: GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL,

	// RLI
	parent_size: RICH_LIST_ITEM_SIZE.MEDIUM,
	parent_elevation: null,
	parent_isDimmed: false,
	parent_isDraggable: false,
	parent_hasDraggableHandler: true,
	parent_icon: null,
	parent_iconColor: ICON_COLORS.NEUTRAL_WEAK,
	parent_iconColorHex: '',
	parent_hasActionsSlotDivider: true,
	parent_isSelectable: true,
	parent_isSelected: true,
	parent_state: RICH_LIST_ITEM_STATE.DEFAULT,
	parent_isInteractive: true,

	child_size: RICH_LIST_ITEM_SIZE.MEDIUM,
	child_elevation: null,
	child_isDimmed: false,
	child_isDraggable: false,
	child_hasDraggableHandler: true,
	child_icon: null,
	child_iconColor: ICON_COLORS.NEUTRAL_WEAK,
	child_iconColorHex: '',
	child_hasActionsSlotDivider: true,
	child_isSelectable: true,
	child_isSelected: true,
	child_state: RICH_LIST_ITEM_STATE.DEFAULT,
	child_isInteractive: true,
} as Args;

const argTypes = {
	borderColor: {
		options: [null, ...Object.values(GROUP_RICH_LIST_ITEM_BORDER_COLOR)],
		control: 'select',
	},
	borderColorHex: {
		control: 'text',
	},
	backgroundColor: {
		options: Object.values(GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR),
		control: 'select',
	},

	parent_state: {
		options: Object.values(RICH_LIST_ITEM_STATE),
		control: 'select',
	},
	parent_size: {
		options: Object.values(RICH_LIST_ITEM_SIZE),
		control: 'select',
	},
	parent_iconColor: {
		options: Object.values(ICON_COLORS),
		control: 'select',
	},
	parent_icon: {
		options: [null, ...Object.keys(ICONS)],
		control: 'select',
	},
	parent_iconColorHex: {
		control: 'text',
	},
	parent_elevation: {
		options: [null, ...Object.values(RICH_LIST_ITEM_ELEVATION)],
		control: 'select',
	},

	child_state: {
		options: Object.values(RICH_LIST_ITEM_STATE),
		control: 'select',
	},
	child_size: {
		options: Object.values(RICH_LIST_ITEM_SIZE),
		control: 'select',
	},
	child_iconColor: {
		options: Object.values(ICON_COLORS),
		control: 'select',
	},
	child_icon: {
		options: [null, ...Object.keys(ICONS)],
		control: 'select',
	},
	child_iconColorHex: {
		control: 'text',
	},
	child_elevation: {
		options: [null, ...Object.values(RICH_LIST_ITEM_ELEVATION)],
		control: 'select',
	},
} as ArgTypes;

const slots = `<template #content>Content slot</template><template #metadata>Metadata slot</template><template #actions>ACS</template>`;

const expandStory = (story) => {
	story.argTypes = argTypes;
	story.args = args;
	story.parameters = {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8505-126430&mode=design&t=7Ay1DzrwONAPwSGv-4',
		},
	};
	return story;
};

// # OneChild
const OneChildStoryTemplate: StoryFn<typeof GroupRichListItem> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { GroupRichListItem, RichListItem, Divider },
		setup() {
			return args;
		},
		data() {
			return {
				RICH_LIST_ITEM_TYPE: Object.freeze(RICH_LIST_ITEM_TYPE),
				RICH_LIST_ITEM_STATE: Object.freeze(RICH_LIST_ITEM_STATE),
				ICONS: Object.freeze(ICONS),
			};
		},
		methods: {
			updateParentIsSelected(isSelected) {
				updateArgs({ parent_isSelected: isSelected });
			},
			updateChildIsSelected(isSelected) {
				updateArgs({ child_isSelected: isSelected });
			},
			onClick() {
				updateArgs({
					isExpanded: !this.isExpanded,
				});
			},
		},
		template: `
      <group-rich-list-item
        :is-expanded="isExpanded"
        :border-color="borderColor"
        :border-color-hex="borderColorHex"
        :background-color="backgroundColor"
      >
        <template #parent>
          <rich-list-item
            :state="parent_state"
            :is-dimmed="parent_isDimmed"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
            :is-selectable="parent_isSelectable"
            :is-selected="parent_isSelected"
            :size="parent_size"
            :is-interactive="parent_isInteractive"
            :is-draggable="parent_isDraggable"
            :icon="ICONS[parent_icon]"
            :icon-color="parent_iconColor"
            :icon-color-hex="parent_iconColorHex"
            :has-draggable-handler="parent_hasDraggableHandler"
            :has-actions-slot-divider="parent_hasActionsSlotDivider"
            @click="onClick"
						@update:is-selected="updateParentIsSelected"
          >
            ${slots}
          </rich-list-item>
        </template>
        <template #children>
          <rich-list-item
            :state="child_state"
            :is-dimmed="child_isDimmed"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
            :is-selectable="child_isSelectable"
            :is-selected="child_isSelected"
            :size="child_size"
            :is-interactive="child_isInteractive"
            :is-draggable="child_isDraggable"
            :icon="ICONS[child_icon]"
            :icon-color="child_iconColor"
            :icon-color-hex="child_iconColorHex"
            :has-draggable-handler="child_hasDraggableHandler"
            :has-actions-slot-divider="child_hasActionsSlotDivider"
            @update:is-selected="updateChildIsSelected"
          >
            ${slots}
          </rich-list-item>
        </template>
      </group-rich-list-item>
    `,
	};
};
export const OneChild = expandStory(OneChildStoryTemplate.bind({}));

// # MultipleChild
const MultipleChildStoryTemplate: StoryFn<typeof GroupRichListItem> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { GroupRichListItem, RichListItem, Divider },
		setup() {
			return args;
		},
		data() {
			return {
				RICH_LIST_ITEM_TYPE: Object.freeze(RICH_LIST_ITEM_TYPE),
				RICH_LIST_ITEM_STATE: Object.freeze(RICH_LIST_ITEM_STATE),
				ICONS: Object.freeze(ICONS),
			};
		},
		methods: {
			updateParentIsSelected(isSelected) {
				updateArgs({ parent_isSelected: isSelected });
			},
			updateChildIsSelected(isSelected) {
				updateArgs({ child_isSelected: isSelected });
			},
			onClick() {
				updateArgs({
					isExpanded: !this.isExpanded,
				});
			},
		},
		template: `
      <group-rich-list-item
        :is-expanded="isExpanded"
        :border-color="borderColor"
        :border-color-hex="borderColorHex"
        :background-color="backgroundColor"
      >
        <template #parent>
          <rich-list-item
            :state="parent_state"
            :is-dimmed="parent_isDimmed"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
            :is-selectable="parent_isSelectable"
            :is-selected="parent_isSelected"
            :size="parent_size"
            :is-interactive="parent_isInteractive"
            :is-draggable="parent_isDraggable"
            :icon="ICONS[parent_icon]"
            :icon-color="parent_iconColor"
            :icon-color-hex="parent_iconColorHex"
            :has-draggable-handler="parent_hasDraggableHandler"
            :has-actions-slot-divider="parent_hasActionsSlotDivider"
            @click="onClick"
						@update:is-selected="updateParentIsSelected"
          >
            ${slots}
          </rich-list-item>
        </template>
        <template #children>
          <rich-list-item
            :state="child_state"
            :is-dimmed="child_isDimmed"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
            :is-selectable="child_isSelectable"
            :is-selected="child_isSelected"
            :size="child_size"
            :is-interactive="child_isInteractive"
            :is-draggable="child_isDraggable"
            :icon="ICONS[child_icon]"
            :icon-color="child_iconColor"
            :icon-color-hex="child_iconColorHex"
            :has-draggable-handler="child_hasDraggableHandler"
            :has-actions-slot-divider="child_hasActionsSlotDivider"
            @update:is-selected="updateChildIsSelected"
          >
            ${slots}
          </rich-list-item>
          <divider />
          <rich-list-item
            :state="child_state"
            :is-dimmed="child_isDimmed"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
            :is-selectable="child_isSelectable"
            :is-selected="child_isSelected"
            :size="child_size"
            :is-interactive="child_isInteractive"
            :is-draggable="child_isDraggable"
            :icon="ICONS[child_icon]"
            :icon-color="child_iconColor"
            :icon-color-hex="child_iconColorHex"
            :has-draggable-handler="child_hasDraggableHandler"
            :has-actions-slot-divider="child_hasActionsSlotDivider"
            @update:is-selected="updateChildIsSelected"
          >
            ${slots}
          </rich-list-item>
          <divider />
          <rich-list-item
            :state="child_state"
            :is-dimmed="child_isDimmed"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
            :is-selectable="child_isSelectable"
            :is-selected="child_isSelected"
            :size="child_size"
            :is-interactive="child_isInteractive"
            :is-draggable="child_isDraggable"
            :icon="ICONS[child_icon]"
            :icon-color="child_iconColor"
            :icon-color-hex="child_iconColorHex"
            :has-draggable-handler="child_hasDraggableHandler"
            :has-actions-slot-divider="child_hasActionsSlotDivider"
            @update:is-selected="updateChildIsSelected"
          >
            ${slots}
          </rich-list-item>
        </template>
      </group-rich-list-item>
    `,
	};
};
export const MultipleChild = expandStory(MultipleChildStoryTemplate.bind({}));
