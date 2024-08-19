import BasicRichListItem from './BasicRichListItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ELEVATION,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
} from '../RichListItem';
import { ICON_COLORS, ICONS } from '../../Icons/Icon';
import { DsImage } from '../../../index';

export default {
	title: 'Components/RichList/BasicRichListItem',
	component: BasicRichListItem,
	decorators: [
		(story) => ({
			components: { story },
			template: "<div style='display: flex;padding: 16px;'><story /></div>",
		}),
	],
} as Meta<typeof BasicRichListItem>;

const expandStory = (story: StoryFn<typeof BasicRichListItem>, args = {}) => {
	story.argTypes = {
		type: {
			options: Object.values(RICH_LIST_ITEM_TYPE),
			control: 'select',
		},
		size: {
			options: Object.values(RICH_LIST_ITEM_SIZE),
			control: 'select',
		},
		state: {
			options: Object.values(RICH_LIST_ITEM_STATE),
			control: 'select',
		},
		iconColor: {
			options: [null, ...Object.values(ICON_COLORS)],
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
		eyebrow: {
			control: 'text',
		},
		eyebrowEllipsis: {
			control: 'boolean',
		},
		isEyebrowUppercase: {
			control: 'boolean',
		},
		text: {
			control: 'text',
		},
		textEllipsis: {
			control: 'boolean',
		},
		supportingText: {
			control: 'text',
		},
		supportingTextEllipsis: {
			control: 'boolean',
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
		backgroundColor: RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL,
		elevation: null,
		isDimmed: false,
		isDraggable: true,
		hasDraggableHandler: true,
		icon: null,
		iconColor: null,
		iconColorHex: '',
		hasActionsSlotDivider: true,
		isSelectable: true,
		isSelected: true,
		borderColor: null,
		borderColorHex: '',
		state: RICH_LIST_ITEM_STATE.DEFAULT,
		isInteractive: true,
		draggableIconClassName: 'draggableIconClassName-1',

		eyebrow: 'Eyebrow Uppercase',
		eyebrowEllipsis: false,
		isEyebrowUppercase: false,
		text: 'Długa nazwa gdy się nie mieści Praesentium dicta sit. Molestiae unde voluptatem eaque labore.',
		textEllipsis: false,
		supportingText: 'null',
		supportingTextEllipsis: false,

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
			url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8673-2345&mode=design&t=QeEz8TmzxDbrGYK3-4',
		},
	};

	return story;
};

const InteractiveStoryTemplate: StoryFn<typeof BasicRichListItem> = (args, { updateArgs }) => ({
	components: { BasicRichListItem },
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
	<basic-rich-list-item
		:size="size"
		:type="type"
		:is-interactive="isInteractive"
		:is-draggable="isDraggable"
		:icon="ICONS[icon]"
		:icon-color="iconColor"
		:icon-color-hex="iconColorHex"
		:is-dimmed="isDimmed"
		:border-color="borderColor"
		:border-color-hex="borderColorHex"
		:state="state"
		:eyebrow="eyebrow === 'null' ? null : eyebrow"
		:eyebrow-ellipsis="eyebrowEllipsis"
		:is-eyebrow-uppercase="isEyebrowUppercase"
		:text="text"
		:text-ellipsis="textEllipsis"
		:supporting-text="supportingText === 'null' ? null : supportingText"
		:supporting-text-ellipsis="supportingTextEllipsis"
		:background-color="backgroundColor"
		:elevation="elevation"
		:has-draggable-handler="hasDraggableHandler"
		:has-actions-slot-divider="hasActionsSlotDivider"
		:is-selectable="isSelectable"
		:is-selected="isSelected"
		@update:is-selected="updateIsSelected"
	>
		<template v-if="metadata" #metadata>
			<div v-html="metadata" />
		</template>
		<template v-if="actions" #actions>
			<div v-html="actions" />
		</template>
	</basic-rich-list-item>`,
});

export const Interactive = InteractiveStoryTemplate.bind({});
expandStory(Interactive);

const WithMediaStoryTemplate: StoryFn<typeof BasicRichListItem> = (args, { updateArgs }) => {
	return {
		components: { BasicRichListItem, DsImage },
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
			<basic-rich-list-item
				:size="size"
				:type="type"
				:is-interactive="isInteractive"
				:is-draggable="isDraggable"
				:icon="ICONS[icon]"
				:icon-color="iconColor"
				:icon-color-hex="iconColorHex"
				:is-dimmed="isDimmed"
				:border-color="borderColor"
				:border-color-hex="borderColorHex"
				:state="state"
				:eyebrow="eyebrow === 'null' ? null : eyebrow"
				:eyebrow-ellipsis="eyebrowEllipsis"
				:is-eyebrow-uppercase="isEyebrowUppercase"
				:text="text"
				:text-ellipsis="textEllipsis"
				:supporting-text="supportingText === 'null' ? null : supportingText"
				:supporting-text-ellipsis="supportingTextEllipsis"
				:background-color="backgroundColor"
				:elevation="elevation"
				:has-draggable-handler="hasDraggableHandler"
				:has-actions-slot-divider="hasActionsSlotDivider"
				:is-selectable="isSelectable"
				:is-selected="isSelected"
				@update:is-selected="updateIsSelected"
			>
				<template #media>
					<ds-image :src="imageSrcUsedInStoryBook"/>
				</template>
				<template v-if="metadata" #metadata>
					<div v-html="metadata"/>
				</template>
				<template v-if="actions" #actions>
					<div v-html="actions"/>
				</template>
			</basic-rich-list-item>`,
	};
};

export const WithMedia = WithMediaStoryTemplate.bind({});
expandStory(WithMedia, {
	imageSrcUsedInStoryBook:
		'https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg',
});
