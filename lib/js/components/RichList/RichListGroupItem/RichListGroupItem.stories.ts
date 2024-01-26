import RichListGroupItem from './RichListGroupItem.vue';
import RichListItem, { RICH_LIST_ITEM_STATE, RICH_LIST_ITEM_TYPE } from '../RichListItem';
import Divider from '../../Divider';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { RICH_LIST_GROUP_ITEM_BORDER_COLOR } from './RichListGroupItem.consts';
import { ICONS } from '../../Icons/Icon';

export default {
	title: 'Components/RichList/RichListGroupItem',
	component: RichListGroupItem,
	decorators: [
		(story, { args, updateArgs }) => ({
			setup() {
				return { ...args };
			},
			data() {
				return {
					RICH_LIST_ITEM_TYPE: Object.freeze(RICH_LIST_ITEM_TYPE),
					ICONS: Object.freeze(ICONS),
				};
			},
			methods: {
				onClick() {
					updateArgs({
						isExpanded: !this.isExpanded,
					});
				},
			},
			components: { story, RichListGroupItem, RichListItem },
			template: `<div style='display: flex;padding: 16px;'>
        <rich-list-group-item
          :is-expanded="isExpanded"
          :is-dimmed="isDimmed"
          :border-color="borderColor"
          :border-color-hex="borderColorHex"
        >
          <template #header>
            <rich-list-item
              :is-interactive="true"
              :is-draggable="true"
              :is-dimmed="false"
              :icon="ICONS.FA_CALENDAR"
              :type="RICH_LIST_ITEM_TYPE.FLAT"
              @click="onClick"
            >
              <template #content>Content slot</template>
              <template #meta>Meta slot</template>
              <template #trailing>Trailing slot</template>
            </rich-list-item>
          </template>
          <template #expanded>
            <story />
          </template>
        </rich-list-group-item></div>`,
		}),
	],
} as Meta<typeof RichListGroupItem>;

const args = {
	isExpanded: false,
	borderColor: null,
	borderColorHex: '',
} as Args;

const argTypes = {
	borderColor: {
		options: [null, ...Object.values(RICH_LIST_GROUP_ITEM_BORDER_COLOR)],
		control: { type: 'select' },
	},
	borderColorHex: {
		control: { type: 'text' },
	},
} as ArgTypes;

const build = (template) => {
	const StoryTemplate: StoryFn<typeof RichListGroupItem> = (args) => {
		return {
			components: { RichListItem, Divider },
			setup() {
				return { ...args };
			},
			data() {
				return {
					RICH_LIST_ITEM_TYPE: Object.freeze(RICH_LIST_ITEM_TYPE),
					RICH_LIST_ITEM_STATE: Object.freeze(RICH_LIST_ITEM_STATE),
					ICONS: Object.freeze(ICONS),
				};
			},
			template,
		};
	};
	const instance = StoryTemplate.bind({});
	instance.argTypes = argTypes;
	instance.args = args;
	instance.parameters = {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8505-126430&mode=design&t=7Ay1DzrwONAPwSGv-4',
		},
	};
	return instance;
};

const slots = `<template #content>Content slot</template><template #meta>Meta slot</template><template #trailing>Trailing slot</template>`;

export const OneChild = build(`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>`);
export const MultipleChild = build(`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>`);
export const DimmedOneChild = build(`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="true"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>`);
export const DimmedAllChild = build(`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="true"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="true"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="true"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>`);
export const LoadingOneChild = build(`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
				:state="RICH_LIST_ITEM_STATE.LOADING"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>`);
export const LoadingAllChild = build(`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
				:state="RICH_LIST_ITEM_STATE.LOADING"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
				:state="RICH_LIST_ITEM_STATE.LOADING"
			>
				${slots}
			</rich-list-item>
			<divider />
			<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
				:state="RICH_LIST_ITEM_STATE.LOADING"
			>
				${slots}
			</rich-list-item>`);
