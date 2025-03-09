import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import RadioButtonPrimeVue from './RadioButtonPrimeVue.vue';
import RadioButtonReka from './RadioButtonReka.vue';
import RadioButtonGroupReka from './RadioButtonGroupReka.vue';

type RadioButtonPrimeVueProps = ComponentProps<typeof RadioButtonPrimeVue>;

const meta: Meta<typeof RadioButtonPrimeVue> = {
	title: 'Components/RadioButton',
	component: RadioButtonPrimeVue,
	render: (args: RadioButtonPrimeVueProps) => ({
		components: { RadioButtonPrimeVue, RadioButtonReka, RadioButtonGroupReka },
		setup() {
			return {
				args,
			};
		},
		data() {
			return {
				valueArk: null,
				valueReka: undefined,
				valuePrimeVue: undefined,
			};
		},
		template: `<div>
			<div><h2>RadioButton Reka:</h2>
				<RadioButtonGroupReka v-model="valueReka">
					<RadioButtonReka value="value1" label="Value 1" />
					<RadioButtonReka value="value2" label="Value 2" />
					<RadioButtonReka value="value3" label="Value 3" />
				</RadioButtonGroupReka>
			</div>
			<div>Selected valueReka: {{valueReka}}</div>
			<div><h2>RadioButton PrimeVue</h2>
				<RadioButtonPrimeVue v-model="valuePrimeVue" name="testRadio" value="value1" label="Value 1" />
				<RadioButtonPrimeVue v-model="valuePrimeVue" name="testRadio" value="value2" label="Value 2" />
				<RadioButtonPrimeVue v-model="valuePrimeVue" name="testRadio" value="value3" label="Value 3" />
			</div>
			<div>Selected valuePrimeVue: {{valuePrimeVue}}</div>
		</div>`,
	}),
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioButtonPrimeVue>;

export const Interactive: Story = {
	args: {},
};
