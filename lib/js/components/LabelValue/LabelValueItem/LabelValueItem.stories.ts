import LabelValueItem from './LabelValueItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { LABEL_VALUE_ITEM_STATES } from './LabelValueItem.consts';

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
		<label-value-item :label="label" :value-text="valueText" :state="state" />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	label: 'Label',
	valueText: 'value',
	state: LABEL_VALUE_ITEM_STATES.DEFAULT,
} as Args;

const argTypes = {
	state: {
		control: 'select',
		options: Object.values(LABEL_VALUE_ITEM_STATES),
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
