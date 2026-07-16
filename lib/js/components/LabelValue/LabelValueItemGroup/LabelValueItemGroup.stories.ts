import LabelValueItemGroup from './LabelValueItemGroup.vue';

import { Meta, StoryFn } from '@storybook/vue3';
import LabelValueItem from '../LabelValueItem/LabelValueItem.vue';

export default {
	title: 'Components/LabelValue/LabelValueItemGroup',
	component: LabelValueItemGroup,
} as Meta<typeof LabelValueItemGroup>;

const StoryTemplate: StoryFn<typeof LabelValueItemGroup> = (args) => ({
	components: { LabelValueItemGroup, LabelValueItem },
	setup() {
		return args;
	},
	template: `
    	<label-value-item-group>
			<label-value-item value-text="1" label="Item" />
			<label-value-item value-text="2" label="Item" />
		</label-value-item-group>
  `,
});

export const Static = StoryTemplate.bind({});

Static.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111079&t=PEjZUz7dUozNqntp-4',
	},
};
