import RichListItem from './RichListItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ICON_COLOR,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
} from './RichListItem.consts';
import { ICONS } from '../../Icons/Icon';

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

const StoryTemplate: StoryFn<typeof RichListItem> = (args) => ({
	components: { RichListItem },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
    <rich-list-item
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
    >
      <template v-if="content" #content>
        <div v-html="content" />
      </template>
      <template v-if="meta" #meta>
        <div v-html="meta" />
      </template>
      <template v-if="trailing" #trailing>
        <div v-html="trailing" />
      </template>
    </rich-list-item>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	// TODO order
	size: RICH_LIST_ITEM_SIZE.MEDIUM,
	type: RICH_LIST_ITEM_TYPE.DEFAULT,
	isInteractive: true,
	isDraggable: true,
	icon: null,
	iconColor: null,
	iconColorHex: '',
	isDimmed: false,
	borderColor: null,
	borderColorHex: '',
	state: RICH_LIST_ITEM_STATE.DEFAULT,

	content: 'Content Slot',
	meta: 'Meta Slot',
	trailing: 'Tailing Slot',
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
		options: [null, ...Object.values(RICH_LIST_ITEM_ICON_COLOR)],
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
		control: { type: 'color' },
	},
	borderColorHex: {
		control: { type: 'color' },
	},
	content: {
		control: { type: 'text' },
	},
	meta: {
		control: { type: 'text' },
	},
	trailing: {
		control: { type: 'text' },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	layout: 'fullscreen',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8673-2345&mode=design&t=LFrFv5yjxOpcJRzE-4',
	},
};
