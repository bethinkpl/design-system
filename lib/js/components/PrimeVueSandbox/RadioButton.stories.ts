import { Meta, StoryFn } from '@storybook/vue3';
import PrimeRadioButton from 'primevue/radiobutton';

export default {
	title: 'Components/PrimeVue Sandbox/RadioButton',
} as Meta;

const StoryTemplate: StoryFn = (args) => ({
	components: { PrimeRadioButton },
	data() {
		return {
			args,
		};
	},
	template: `
        <div style="display: flex; flex-direction: column; gap: 5px;">
            <prime-radio-button v-bind="args" name="rb1" value="a" @update:modelValue="select"/>
            <prime-radio-button v-bind="args" name="rb1" value="b" @update:modelValue="select" />
            <prime-radio-button v-bind="args"  name="rb1" value="c" @update:modelValue="select" />
            <prime-radio-button v-bind="args" name="rb1" value="d" @update:modelValue="select" />
        </div>`,
	methods: {
		select(value) {
			this.args.modelValue = value;
		},
	},
});

export const Default = StoryTemplate.bind({});

Default.argTypes = {
	modelValue: {
		control: {
			type: 'select',
		},
		options: ['a', 'b', 'c', 'd'],
		name: 'initial value',
		defaultValue: 'a',
	},
	invalid: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	variant: {
		control: {
			type: 'select',
		},
		options: ['filled', 'outlined'],
		defaultValue: 'outlined',
	},
	readonly: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	disabled: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
};
Default.args = {};
