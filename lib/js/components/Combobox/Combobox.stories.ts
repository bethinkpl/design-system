import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import ComboboxArk from './ComboboxArk.vue';
import ComboboxPrimeVue from './ComboboxPrimeVue.vue';

type ComboboxArkProps = ComponentProps<typeof ComboboxArk>;

const options = [
	{ name: 'Apple' },
	{ name: 'Banana' },
	{ name: 'Orange' },
	{ name: 'Honeydew' },
	{ name: 'Grapes' },
	{ name: 'Watermelon' },
	{ name: 'Cantaloupe' },
	{ name: 'Pear' },
];

const meta: Meta<typeof ComboboxArk> = {
	title: 'Components/Combobox',
	component: ComboboxArk,
	render: (args: ComboboxArkProps) => ({
		components: { ComboboxArk, ComboboxPrimeVue },
		setup() {
			return {
				args,
			};
		},
		data() {
			return {
				options,
				valueArk: null,
				valuePrimeVue: '',
			};
		},
		template: `<div>
			<div><h2>Combobox Ark:</h2><ComboboxArk :options="options" v-model="valueArk" /></div>
			<div>Selected valueArk: {{valueArk}}</div>
			<div><h2>Autocomplete PrimeVue</h2><ComboboxPrimeVue :options="options" v-model="valuePrimeVue" :auto-complete-props="{
				forceSelection: true,
			}" /></div>
			<div>Selected valuePrimeVue: {{valuePrimeVue}}</div>
		</div>`,
	}),
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ComboboxArk>;

export const Interactive: Story = {
	args: {},
};
