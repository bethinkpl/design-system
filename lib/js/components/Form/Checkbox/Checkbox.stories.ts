import Checkbox from './Checkbox.vue';

import { Meta, StoryFn } from '@storybook/vue3';
import { args, argTypes, template } from '../SelectionControl/SelectionControl.sb.shared';
import { CHECKBOX_SIZE, CHECKBOX_STATE } from './Checkbox.consts';
import { useArgs } from '@storybook/preview-api';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/Form/Checkbox',
	component: Checkbox,
	decorators: [withActions],
} as Meta<typeof Checkbox>;

const StoryTemplate: StoryFn<typeof Checkbox> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
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
	};
};

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = argTypes(CHECKBOX_SIZE, CHECKBOX_STATE);

Interactive.args = args(CHECKBOX_SIZE, CHECKBOX_STATE);

Interactive.parameters = {
	actions: {
		handles: ['click', 'toggle'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0',
	},
};
