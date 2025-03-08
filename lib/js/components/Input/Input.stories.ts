import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import InputArk from './InputArk.vue';
import InputPrimeVue from './InputPrimeVue.vue';
// import ComboboxPrimeVue from './ComboboxPrimeVue.vue';

type InputArkProps = ComponentProps<typeof InputArk>;

const meta: Meta<typeof InputArk> = {
	title: 'Components/Input',
	component: InputArk,
	render: (args: InputArkProps) => ({
		components: { InputPrimeVue, InputArk },
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
		methods: {
			click() {
				alert('click');
			},
		},
		template: `<div>
			<div><InputArk v-model="value" :input-props="{
				placeholder: 'Type something',
			}" /></div>
			<div>
				<InputPrimeVue v-model="value" placeholder="Type something" @click="click" />
			</div>
			Value: {{value}}
		</div>`,
	}),
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputArk>;

export const Interactive: Story = {
	args: {},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-12175&t=UpUoIm9oCAaH4dEp-4',
	},
};
