import Checkbox from './Checkbox.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { CHECKBOX_SIZE, CHECKBOX_STATE } from './Checkbox.consts';

export default {
	title: 'Components/Checkbox',
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
	template: `
		<Checkbox v-bind=args @toggle="onIsSelectedUpdated"/>`,
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = {
	size: {
		control: { type: 'select', options: Object.values(CHECKBOX_SIZE) },
		defaultValue: CHECKBOX_SIZE.SMALL,
	},
	label: { control: { type: 'text' } },
	isSelected: { control: { type: 'boolean' } },
	state: {
		control: { type: 'select', options: Object.values(CHECKBOX_STATE) },
		defaultValue: CHECKBOX_STATE.DEFAULT,
	},
} as ArgTypes;

Interactive.args = {
	label: 'Example label',
	isSelected: false,
} as Args;

Interactive.parameters = {
	actions: {
		handles: ['click', 'toggle'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0',
	},
};
