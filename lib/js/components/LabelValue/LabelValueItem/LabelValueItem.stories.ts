import LabelValueItem from './LabelValueItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	LABEL_VALUE_ITEM_SIZES,
	LABEL_VALUE_ITEM_STATES,
	LABEL_VALUE_ITEM_VALUE_COLORS,
} from './LabelValueItem.consts';

export default {
	title: 'Components/LabelValue/LabelValueItem',
	component: LabelValueItem,
} as Meta<typeof LabelValueItem>;

const StoryTemplate: StoryFn<typeof LabelValueItem> = (args) => ({
	components: { LabelValueItem },
	setup() {
		return args;
	},
	template: `<div style="height: 300px; width: 200px;">
		<label-value-item
			:label="label"
			:value-text="valueText"
			:state="state"
			:size="size"
			:is-label-strong="isLabelStrong"
			:value-color="valueColor"
		/>
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
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4',
	},
};
