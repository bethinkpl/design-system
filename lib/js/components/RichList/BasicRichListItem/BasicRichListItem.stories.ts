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

const StoryTemplate: StoryFn<typeof BasicRichListItem> = (args, { updateArgs }) => ({
	components: { BasicRichListItem },
	setup() {
		return { ...args };
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
      :text="text"
      :eyebrow="eyebrow"
      :is-eyebrow-uppercase="isEyebrowUppercase"
      :background-color="backgroundColor"
      :elevation="elevation"
      :has-draggable-handler="hasDraggableHandler"
      :has-actions-slot-divider="hasActionsSlotDivider"
      :is-selectable="isSelectable"
      :is-selected="isSelected"
      @update:is-selected="updateIsSelected"
    >
      <template v-if="meta" #meta>
        <div v-html="meta" />
      </template>
      <template v-if="actions" #actions>
        <div v-html="actions" />
      </template>
    </basic-rich-list-item>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
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
	text: 'Długa nazwa gdy się nie mieści Praesentium dicta sit. Molestiae unde voluptatem eaque labore.',
	isEyebrowUppercase: false,

	meta: 'Meta Slot',
	actions: 'ACS',
} as Args;

const argTypes = {
	type: {
		options: Object.values(RICH_LIST_ITEM_TYPE),
		control: { type: 'select' },
	},
	size: {
		options: Object.values(RICH_LIST_ITEM_SIZE),
		control: { type: 'select' },
	},
	state: {
		options: Object.values(RICH_LIST_ITEM_STATE),
		control: { type: 'select' },
	},
	iconColor: {
		options: [null, ...Object.values(ICON_COLORS)],
		control: { type: 'select' },
	},
	borderColor: {
		options: [null, ...Object.values(RICH_LIST_ITEM_BORDER_COLOR)],
		control: { type: 'select' },
	},
	icon: {
		options: [null, ...Object.keys(ICONS)],
		control: { type: 'select' },
	},
	iconColorHex: {
		control: { type: 'text' },
	},
	borderColorHex: {
		control: { type: 'text' },
	},
	text: {
		control: { type: 'text' },
	},
	eyebrow: {
		control: { type: 'text' },
	},
	meta: {
		control: { type: 'text' },
	},
	actions: {
		control: { type: 'text' },
	},
	draggableIconClassName: {
		control: { type: 'text' },
	},
	backgroundColor: {
		options: [null, ...Object.values(RICH_LIST_ITEM_BACKGROUND_COLOR)],
		control: { type: 'select' },
	},
	elevation: {
		options: [null, ...Object.values(RICH_LIST_ITEM_ELEVATION)],
		control: { type: 'select' },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['icon-click', 'click', 'update:is-selected'],
	},
	layout: 'fullscreen',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8673-2345&mode=design&t=QeEz8TmzxDbrGYK3-4',
	},
};
