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
import Banner from '../../Banner';
import { useArgs } from '@storybook/preview-api';

export default {
	title: 'Components/Form/Checkbox',
	component: Checkbox,
	decorators: [withActions],
} as Meta<typeof Checkbox>;

const StoryTemplate: StoryFn<typeof Checkbox> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { Checkbox, Banner },
		setup() {
			const props = computed(() => {
				const { default: defaultSlot, modelValue, ...rest } = args;

				return rest;
			});

			const defaultSlot = computed(() => args.default);
			const modelValue = computed(() => args.modelValue);

			return { defaultSlot, props, modelValue, updateArgs };
		},
		template: `
			<Checkbox 
				v-bind="props"
				:model-value="modelValue"
				@update:model-value="(value) => updateArgs({ modelValue: value })"
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
