import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import FormExample from './FormExample.vue';
import FormExamplePV from './FormExamplePV.vue';

type FormExampleProps = ComponentProps<typeof FormExample>;

const meta: Meta<typeof FormExample> = {
	title: 'Components/FormExample',
	component: FormExample,
	render: (args: FormExampleProps) => ({
		components: { FormExample, FormExamplePV },
		setup() {
			return {
				args,
			};
		},
		data() {
			return {
				value: '',
			};
		},
		template: `<div>
			<div>
				<form-example />
			</div>
			<div>
				<form-example-p-v />
			</div>
		</div>`,
	}),
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FormExample>;

export const Interactive: Story = {
	args: {},
};
