import Checkbox from './Checkbox.vue';

import { Meta, StoryFn } from '@storybook/vue3';
import { args, argTypes, template } from '../SelectionControl/SelectionControl.sb.shared';
import { CHECKBOX_SIZE, CHECKBOX_STATE } from './Checkbox.consts';

export default {
	title: 'Internal Components/Form/#Checkbox',
	component: Checkbox,
} as Meta<typeof Checkbox>;

const StoryTemplate: StoryFn<typeof Checkbox> = (args, { updateArgs }) => ({
	components: { Checkbox },
	setup() {
		return { args };
	},
	methods: {
		onIsSelectedUpdated(isSelected) {
			updateArgs({
				isSelected,
			});
		},
	},
	template: template('checkbox'),
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = argTypes(CHECKBOX_SIZE, CHECKBOX_STATE);

Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['click', 'toggle'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0',
	},
};
