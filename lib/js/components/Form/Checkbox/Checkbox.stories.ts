import Checkbox from './Checkbox.vue';

import { Meta, StoryFn } from '@storybook/vue3';
import {
	CHECKBOX_SIZES,
	CHECKBOX_STATES,
	CHECKBOX_VALUES,
	CHECKBOX_ELEVATIONS,
} from './Checkbox.consts';
import { withActions } from '@storybook/addon-actions/decorator';
import { computed } from 'vue';

export default {
	title: 'Components/Form/Checkbox',
	component: Checkbox,
	decorators: [withActions],
} as Meta<typeof Checkbox>;

const StoryTemplate: StoryFn<typeof Checkbox> = (args) => {
	return {
		components: { Checkbox },
		setup() {
			const props = computed(() => {
				const { default: defaultSlot, ...rest } = args;

				return rest;
			});

			const defaultSlot = computed(() => args.default);

			return { defaultSlot, props };
		},
		template: `
			<Checkbox 
				v-bind="props"
			>
				<span v-if="defaultSlot" v-html="defaultSlot" />
			</Checkbox>
		`,
	};
};

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = {
	size: {
		control: 'select',
		options: Object.values(CHECKBOX_SIZES),
	},
	modelValue: {
		control: 'select',
		options: Object.values(CHECKBOX_VALUES),
	},
	state: {
		control: 'select',
		options: Object.values(CHECKBOX_STATES),
	},
	elevation: {
		control: 'select',
		options: Object.values(CHECKBOX_ELEVATIONS),
	},
	default: {
		control: 'text',
	},
};

Interactive.args = {
	default: 'Example label',
	modelValue: false,
	size: CHECKBOX_SIZES.SMALL,
	state: CHECKBOX_STATES.DEFAULT,
	elevation: CHECKBOX_ELEVATIONS.X_SMALL,
	value: 'example',
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=7269-127863&m=dev',
	},
};
