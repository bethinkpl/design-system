import LabelValueItem from './LabelValueItem.vue';
import SlotPlaceholder, {
	SLOT_PLACEHOLDER_SIZES,
} from '../../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	LABEL_VALUE_ITEM_SIZES,
	LABEL_VALUE_ITEM_STATES,
	LABEL_VALUE_ITEM_VALUE_COLORS,
} from './LabelValueItem.consts';
import { ICONS } from '../../Icons/Icon';
import { toRefs } from 'vue';

export default {
	title: 'Components/LabelValue/LabelValueItem',
	component: LabelValueItem,
} as Meta<typeof LabelValueItem>;

const StoryTemplate: StoryFn<typeof LabelValueItem> = (args) => ({
	components: { LabelValueItem, SlotPlaceholder },
	setup() {
		return { ...toRefs(args), SLOT_PLACEHOLDER_SIZES, ICONS };
	},
	template: `<div style="height: 300px; width: 200px;">
		<label-value-item
			:label="label"
			:value-text="valueText"
			:state="state"
			:size="size"
			:is-label-strong="isLabelStrong"
			:value-color="valueColor"
			:icon="icon ? ICONS[icon] : null"
		>
			<template #accessory>
				<div v-if="accessorySlot" v-html="accessorySlot" />
				<slot-placeholder v-else :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="accessory" />
			</template>
		</label-value-item>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	label: 'Label',
	valueText: 'value',
	state: LABEL_VALUE_ITEM_STATES.DEFAULT,
	size: LABEL_VALUE_ITEM_SIZES.MEDIUM,
	isLabelStrong: false,
	valueColor: LABEL_VALUE_ITEM_VALUE_COLORS.NEUTRAL,
	accessorySlot: 'accessory slot',
	icon: null,
} as Args;

const argTypes = {
	state: {
		control: 'select',
		options: Object.values(LABEL_VALUE_ITEM_STATES),
	},
	size: {
		control: 'select',
		options: Object.values(LABEL_VALUE_ITEM_SIZES),
	},
	valueColor: {
		control: 'select',
		options: Object.values(LABEL_VALUE_ITEM_VALUE_COLORS),
	},
	isLabelStrong: {
		control: 'boolean',
	},
	accessorySlot: {
		control: 'text',
	},
	icon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4',
	},
};
