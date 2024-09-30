import RichListItem from './RichListItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ELEVATION,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
	RICH_LIST_ITEM_LAYOUT,
} from './RichListItem.consts';
import { ICON_COLORS, ICONS } from '../../Icons/Icon';
import { DsImage } from '../../../index';

export default {
	title: 'Components/RichList/RichListItem',
	component: RichListItem,
	decorators: [
		(story) => ({
			components: { story },
			template: "<div style='display: flex;padding: 16px;'><story /></div>",
		}),
	],
} as Meta<typeof RichListItem>;

const expandStory = (story: StoryFn<typeof RichListItem>, args = {}) => {
	story.argTypes = {
		type: {
			options: Object.values(RICH_LIST_ITEM_TYPE),
			control: 'select',
		},
		size: {
			options: Object.values(RICH_LIST_ITEM_SIZE),
			control: 'select',
		},
		layout: {
			options: Object.values(RICH_LIST_ITEM_LAYOUT),
			control: { type: 'select' },
		},
		state: {
			options: Object.values(RICH_LIST_ITEM_STATE),
			control: 'select',
		},
		iconColor: {
			options: Object.values(ICON_COLORS),
			control: 'select',
		},
		borderColor: {
			options: [null, ...Object.values(RICH_LIST_ITEM_BORDER_COLOR)],
			control: 'select',
		},
		icon: {
			options: [null, ...Object.keys(ICONS)],
			control: 'select',
		},
		iconColorHex: {
			control: 'text',
		},
		borderColorHex: {
			control: 'text',
		},
		content: {
			control: 'text',
		},
		metadata: {
			control: 'text',
		},
		actions: {
			control: 'text',
		},
		draggableIconClassName: {
			control: 'text',
		},
		backgroundColor: {
			options: [null, ...Object.values(RICH_LIST_ITEM_BACKGROUND_COLOR)],
			control: 'select',
		},
		elevation: {
			options: [null, ...Object.values(RICH_LIST_ITEM_ELEVATION)],
			control: 'select',
		},
	} as ArgTypes;

	story.args = {
		size: RICH_LIST_ITEM_SIZE.MEDIUM,
		type: RICH_LIST_ITEM_TYPE.DEFAULT,
		layout: RICH_LIST_ITEM_LAYOUT.HORIZONTAL,
		backgroundColor: RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL,
		elevation: null,
		isDimmed: false,
		isDraggable: true,
		hasDraggableHandler: true,
		icon: null,
		iconColor: ICON_COLORS.NEUTRAL_WEAK,
		iconColorHex: '',
		hasActionsSlotDivider: true,
		isSelectable: true,
		isSelected: true,
		borderColor: null,
		borderColorHex: '',
		state: RICH_LIST_ITEM_STATE.DEFAULT,
		isInteractive: true,
		draggableIconClassName: 'draggableIconClassName-1',

		content: 'Content Slot',
		metadata: 'Metadata Slot',
		actions: 'ACS',

		...args,
	} as Args;

	story.parameters = {
		actions: {
			handles: ['icon-click', 'click', 'update:is-selected'],
		},
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8507-129603&mode=design&t=dC5vBzU9RlP1j7G2-4',
		},
	};
	return story;
};

const InteractiveStoryTemplate: StoryFn<typeof RichListItem> = (args, { updateArgs }) => {
	return {
		components: { RichListItem },
		setup() {
			return args;
		},
		data() {
			return {
				ICONS: Object.freeze(ICONS),
			};
		},
		methods: {
			updateIsSelected(isSelected) {
				updateArgs({ isSelected });
			},
		},
		template: `
			<rich-list-item
				:size="size"
				:type="type"
				:layout="layout"
				:is-interactive="isInteractive"
				:is-draggable="isDraggable"
				:icon="ICONS[icon]"
				:icon-color="iconColor"
				:icon-color-hex="iconColorHex"
				:is-dimmed="isDimmed"
				:border-color="borderColor"
				:border-color-hex="borderColorHex"
				:draggable-icon-class-name="draggableIconClassName"
				:state="state"
				:background-color="backgroundColor"
				:elevation="elevation"
				:has-draggable-handler="hasDraggableHandler"
				:has-actions-slot-divider="hasActionsSlotDivider"
				:is-selectable="isSelectable"
				:is-selected="isSelected"
				@update:is-selected="updateIsSelected"
			>
				<template v-if="content" #content>
					<div v-html="content" />
				</template>
				<template v-if="metadata" #metadata>
					<div v-html="metadata" />
				</template>
				<template v-if="actions" #actions>
					<div v-html="actions" />
				</template>
			</rich-list-item>`,
	};
};

export const Interactive = InteractiveStoryTemplate.bind({});
expandStory(Interactive);

const WithMediaStoryTemplate: StoryFn<typeof RichListItem> = (args, { updateArgs }) => {
	return {
		components: { RichListItem, DsImage },
		setup() {
			return args;
		},
		data() {
			return {
				ICONS: Object.freeze(ICONS),
			};
		},
		methods: {
			updateIsSelected(isSelected) {
				updateArgs({ isSelected });
			},
		},
		template: `
			<rich-list-item
				:size="size"
				:type="type"
				:layout="layout"
				:is-interactive="isInteractive"
				:is-draggable="isDraggable"
				:icon="ICONS[icon]"
				:icon-color="iconColor"
				:icon-color-hex="iconColorHex"
				:is-dimmed="isDimmed"
				:border-color="borderColor"
				:border-color-hex="borderColorHex"
				:draggable-icon-class-name="draggableIconClassName"
				:state="state"
				:background-color="backgroundColor"
				:elevation="elevation"
				:has-draggable-handler="hasDraggableHandler"
				:has-actions-slot-divider="hasActionsSlotDivider"
				:is-selectable="isSelectable"
				:is-selected="isSelected"
				@update:is-selected="updateIsSelected"
			>
				<template #media>
					<ds-image :src="imageSrcUsedInStoryBook" />
				</template>
				<template v-if="content" #content>
					<div v-html="content" />
				</template>
				<template v-if="metadata" #metadata>
					<div v-html="metadata" />
				</template>
				<template v-if="actions" #actions>
					<div v-html="actions" />
				</template>
			</rich-list-item>`,
	};
};

export const WithMedia = WithMediaStoryTemplate.bind({});
expandStory(WithMedia, {
	imageSrcUsedInStoryBook:
		'https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg',
});
