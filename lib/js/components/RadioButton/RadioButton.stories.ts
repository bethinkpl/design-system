import RadioButton from './RadioButton.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { RADIO_BUTTON_SIZE, RADIO_BUTTON_STATE } from './RadioButton.consts';

export default {
	title: 'Components/RadioButton',
	component: RadioButton,
} as Meta<typeof RadioButton>;

const StoryTemplate: StoryFn<typeof RadioButton> = (args) => ({
	components: { RadioButton },
	setup() {
		return { args };
	},
	template: `
		<RadioButton v-bind=args />`,
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = {
	size: {
		control: { type: 'select', options: Object.values(RADIO_BUTTON_SIZE) },
		defaultValue: RADIO_BUTTON_SIZE.SMALL,
	},
	label: { control: { type: 'text' } },
	isSelected: { control: { type: 'boolean' } },
	state: {
		control: { type: 'select', options: Object.values(RADIO_BUTTON_STATE) },
		defaultValue: RADIO_BUTTON_STATE.DEFAULT,
	},
} as ArgTypes;

Interactive.args = {
	label: 'Example label',
	isSelected: false,
} as Args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0',
	},
};
