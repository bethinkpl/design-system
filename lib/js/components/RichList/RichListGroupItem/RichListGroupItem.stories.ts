import RichListGroupItem from './RichListGroupItem.vue';
import RichListItem, { RICH_LIST_ITEM_STATE, RICH_LIST_ITEM_TYPE } from '../RichListItem';
import Divider from '../../Divider';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	RICH_LIST_GROUP_ITEM_BORDER_COLOR,
	RICH_LIST_GROUP_ITEM_STATE,
} from './RichListGroupItem.consts';

export default {
	title: 'Components/RichList/RichListGroupItem',
	component: RichListGroupItem,
	decorators: [
		(story) => ({
			components: { story },
			template: "<div style='display: flex;padding: 16px;'><story /></div>",
		}),
	],
} as Meta<typeof RichListGroupItem>;

const StoryTemplate: StoryFn<typeof RichListGroupItem> = (args) => ({
	components: { RichListGroupItem, RichListItem, Divider },
	setup() {
		return { ...args };
	},
	data() {
		return {
			RICH_LIST_ITEM_TYPE: Object.freeze(RICH_LIST_ITEM_TYPE),
		};
	},
	template: `
    <rich-list-group-item
      :is-expanded="isExpanded"
      :is-dimmed="isDimmed"
      :border-color="borderColor"
      :border-color-hex="borderColorHex"
      :state="state"
    >
      <template v-if="header" #header>
        <rich-list-item
          :is-interactive="header.isInteractive"
          :is-draggable="header.isDraggable"
          :icon="header.icon"
          :icon-color="header.iconColor"
          :icon-color-hex="header.iconColorHex"
          :is-dimmed="header.isDimmed"
          :state="header.state"
          :type="RICH_LIST_ITEM_TYPE.FLAT"
        >
          <template #content>Content Slot</template>
          <template #meta>Meta Slot</template>
          <template #trailing>Tailing Slot</template>
        </rich-list-item>
      </template>
      <template v-if="expanded" #expanded>
        <div
          v-for="(item, index) in expanded">
          <rich-list-item
            :key="index"
            :is-interactive="item.isInteractive"
            :is-draggable="item.isDraggable"
            :icon="item.icon"
            :icon-color="item.iconColor"
            :icon-color-hex="item.iconColorHex"
            :is-dimmed="item.isDimmed"
            :state="item.state"
            :type="RICH_LIST_ITEM_TYPE.FLAT"
          >
            <template #content>Content Slot</template>
            <template #meta>Meta Slot</template>
            <template #trailing>Tailing Slot</template>
          </rich-list-item>
          <divider v-if="index < expanded.length - 1" />
        </div>
      </template>
    </rich-list-group-item>`,
});

export const Interactive = StoryTemplate.bind({});

const defaultRichItemProps = {
	isInteractive: true,
	isDraggable: true,
	icon: null,
	iconColor: null,
	iconColorHex: '',
	isDimmed: false,
	state: RICH_LIST_ITEM_STATE.DEFAULT,

	content: 'Content Slot',
	meta: 'Meta Slot',
	trailing: 'Tailing Slot',
};

const args = {
	isExpanded: false,
	borderColor: null,
	borderColorHex: '',
	state: RICH_LIST_GROUP_ITEM_STATE.DEFAULT,

	header: {
		...defaultRichItemProps,
	},
	expanded: [
		{ ...defaultRichItemProps },
		{ ...defaultRichItemProps },
		{ ...defaultRichItemProps },
	],
} as Args;

const argTypes = {
	state: {
		options: Object.values(RICH_LIST_GROUP_ITEM_STATE),
		control: { type: 'select' },
	},
	borderColor: {
		options: [null, ...Object.values(RICH_LIST_GROUP_ITEM_BORDER_COLOR)],
		control: { type: 'select' },
	},
	borderColorHex: {
		control: { type: 'color' },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	layout: 'fullscreen',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8505-126430&mode=design&t=7Ay1DzrwONAPwSGv-4',
	},
};
