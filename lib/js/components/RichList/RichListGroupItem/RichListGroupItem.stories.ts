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
		(story) => ({
			template: `<div style="display: flex;padding: 16px;"><story/></div>`,
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

const build = (parent, childrens) => {
	const StoryTemplate: StoryFn<typeof RichListGroupItem> = (args, { updateArgs }) => {
		return {
			components: { RichListGroupItem, RichListItem, Divider },
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
			methods: {
				onClick() {
					updateArgs({
						isExpanded: !this.isExpanded,
					});
				},
			},
			template: `
        <rich-list-group-item :is-expanded="isExpanded" :is-dimmed="isDimmed" :border-color="borderColor"
                              :border-color-hex="borderColorHex">
          <template #parent>
            ${parent}
          </template>
          <template #children>
            ${childrens}
          </template>
        </rich-list-group-item>
      `,
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
const parent = `<rich-list-item :is-interactive="true" :is-draggable="true" :is-dimmed="false" :icon="ICONS.FA_CALENDAR" :type="RICH_LIST_ITEM_TYPE.FLAT" @click="onClick">${slots}</rich-list-item>`;
export const OneChild = build(
	parent,
	`<rich-list-item
				:is-interactive="true"
				:is-draggable="true"
				:icon="ICONS.FA_CALENDAR"
				:is-dimmed="false"
				:type="RICH_LIST_ITEM_TYPE.FLAT"
			>
				${slots}
			</rich-list-item>`,
);
export const MultipleChild = build(
	parent,
	`<rich-list-item
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
			</rich-list-item>`,
);
export const DimmedOneChild = build(
	parent,
	`<rich-list-item
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
			</rich-list-item>`,
);
export const DimmedAllChild = build(
	parent,
	`<rich-list-item
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
			</rich-list-item>`,
);
export const LoadingOneChild = build(
	parent,
	`<rich-list-item
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
			</rich-list-item>`,
);
export const LoadingAllChild = build(
	parent,
	`<rich-list-item
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
			</rich-list-item>`,
);

export const AllDimmed = build(
	`<rich-list-item :is-interactive="true" :is-draggable="true" :is-dimmed="true" :icon="ICONS.FA_CALENDAR" :type="RICH_LIST_ITEM_TYPE.FLAT" @click="onClick">${slots}</rich-list-item>`,
	`<rich-list-item
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
			</rich-list-item>`,
);
export const AllLoading = build(
	`<rich-list-item :is-interactive="true" :is-draggable="true" :is-dimmed="false" :icon="ICONS.FA_CALENDAR" :type="RICH_LIST_ITEM_TYPE.FLAT" :state="RICH_LIST_ITEM_STATE.LOADING" @click="onClick">${slots}</rich-list-item>`,
	`<rich-list-item
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
			</rich-list-item>`,
);
