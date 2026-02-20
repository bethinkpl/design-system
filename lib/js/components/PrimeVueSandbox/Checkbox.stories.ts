import { Meta, StoryFn } from '@storybook/vue3';
import PrimeCheckbox from 'primevue/checkbox';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	title: 'Components/PrimeVue Sandbox/Checkbox',
} as Meta;

const StoryTemplate: StoryFn = (args) => ({
	components: { DsIcon, PrimeCheckbox },
	data() {
		return {
			args,
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	template: `
		<prime-checkbox v-bind="args" :binary="true" @update:modelValue="toggle" />
        <hr />
        <small>Custom DS icon:</small>
		<br /><br />
		<prime-checkbox v-bind="args" :binary="true" @update:modelValue="toggle">
            <template #icon="{ checked }">
                <ds-icon v-if="checked" :icon="ICONS.FA_CHECK_SOLID" :size="ICON_SIZES.XX_SMALL" style="color: #fff" /> 
            </template>
        </prime-checkbox>
        <br /><br />
		<prime-checkbox v-bind="args" :binary="true" @update:modelValue="toggle">
			<template #icon="{ checked }">
				<ds-icon v-if="checked" :icon="ICONS.FA_FACE_SMILE" :size="ICON_SIZES.XX_SMALL" style="color: #fff" />
			</template>
		</prime-checkbox>`,
	methods: {
		toggle(value) {
			this.args.modelValue = value;
		},
	},
});

export const Default = StoryTemplate.bind({});

Default.argTypes = {
	modelValue: {
		control: {
			type: 'boolean',
		},
		name: 'initial value',
		defaultValue: false,
	},
	indeterminate: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
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
