import RichListItemBasic from './RichListItemBasic.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ICON_COLOR,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
} from '../RichListItem';
import { ICONS } from '../../Icons/Icon';

export default {
	title: 'Components/RichList/RichListItemBasic',
	component: RichListItemBasic,
	decorators: [
		(story) => ({
			components: { story },
			template: "<div style='display: flex;padding: 16px;'><story /></div>",
		}),
	],
} as Meta<typeof RichListItemBasic>;

const StoryTemplate: StoryFn<typeof RichListItemBasic> = (args) => ({
	components: { RichListItemBasic },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
    <rich-list-item-basic
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
    >
      <template v-if="meta" #meta>
        <div v-html="meta" />
      </template>
      <template v-if="trailing" #trailing>
        <div v-html="trailing" />
      </template>
    </rich-list-item-basic>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
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

	eyebrow: 'Eyebrow Uppercase',
	text: 'Długa nazwa gdy się nie mieści Praesentium dicta sit. Molestiae unde voluptatem eaque labore.',
	isEyebrowUppercase: false,

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
	text: {
		control: { type: 'text' },
	},
	eyebrow: {
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
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8673-2345&mode=design&t=QeEz8TmzxDbrGYK3-4',
	},
};
