import RadioButton from './RadioButton.vue';

import { Meta, StoryFn } from '@storybook/vue3';
import { args, argTypes, template } from '../SelectionControl/SelectionControl.sb.shared';
import { RADIO_BUTTON_SIZE, RADIO_BUTTON_STATE } from './RadioButton.consts';
import { useArgs } from '@storybook/preview-api';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/Form/RadioButton',
	component: RadioButton,
	decorators: [withActions],
} as Meta<typeof RadioButton>;

const StoryTemplate: StoryFn<typeof RadioButton> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { RadioButton },
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
		template: template('radio-button'),
	};
};

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = argTypes(RADIO_BUTTON_SIZE, RADIO_BUTTON_STATE);

Interactive.args = args(RADIO_BUTTON_SIZE, RADIO_BUTTON_STATE);

Interactive.parameters = {
	actions: {
		handles: ['click', 'toggle'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0',
	},
};
