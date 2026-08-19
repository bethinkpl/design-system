import { Meta, StoryFn } from '@storybook/vue3';
import PrimeSelect from 'primevue/select';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	title: 'Components/PrimeVue Sandbox/Select',
} as Meta;

const options = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3 (disabled)', value: 3 },
	{ label: 'Option 4', value: 4 },
	{ label: 'Option 5', value: 5 },
];

const optionsWithGroups = [
	{
		label: 'Group A',
		items: [
			{ label: 'Option 1', value: 1 },
			{ label: 'Option 2', value: 2 },
		],
	},
	{
		label: 'Group B',
		items: [
			{ label: 'Option 3 (disabled)', value: 3 },
			{ label: 'Option 4', value: 4 },
			{ label: 'Option 5', value: 5 },
		],
	},
];

const StoryTemplate: StoryFn = (args) => ({
	components: { DsIcon, PrimeSelect },
	data() {
		return {
			args,
			options: Object.freeze(options),
			optionsWithGroups: Object.freeze(optionsWithGroups),
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	template: `
		<prime-select
			v-bind="args"
			:options="options"
			optionLabel="label"
			optionValue="value"
			:optionDisabled="isOptionDisabled"
			@update:modelValue="select"
		/>
		<br/><br/>
		<small>With groups:</small>
		<br/><br/>
		<prime-select
			v-bind="args"
			:options="optionsWithGroups"
			optionLabel="label"
			optionValue="value"
			optionGroupLabel="label"
			optionGroupChildren="items"
			:optionDisabled="isOptionDisabled"
			@update:modelValue="select"
		/>
		<br/><br/>
		<small>
			With custom templates:
			<ul>
				<li>value</li>
				<li>panel header</li>
				<li>panel footer</li>
				<li>option (multiline with icon)</li>
				<li>option group</li>
				<li>clear icon</li>
				<li>dropdown icon</li>
				<li>loading icon</li>
				<li>filter icon</li>
			</ul>
		</small>
		<prime-select
			v-bind="args"
			:options="optionsWithGroups"
			optionLabel="label"
			optionValue="value"
			optionGroupLabel="label"
			optionGroupChildren="items"
			:optionDisabled="isOptionDisabled"
			@update:modelValue="select"
		>
			<template v-if="args.modelValue" #value="{ value }">
				<div  style="display: flex; flex-direction: row; gap: 4px;">
					<ds-icon :icon="ICONS.FA_ADDRESS_CARD" :size="ICON_SIZES.SMALL"/>
					<span>Option {{ value }}</span>
				</div>
			</template>
			<template #option="{ option }">
				<div style="display: flex; flex-direction: column; gap: 4px;">
					<div style="display: flex; flex-direction: row; gap: 4px;">
						<ds-icon :icon="ICONS.FA_ADDRESS_CARD" :size="ICON_SIZES.SMALL"/>
						<span>{{ option.label }}</span>
					</div>
					<small>Value: {{ option.value }}</small>
				</div>
			</template>
			<template #header>
				<div style="padding: 4px 6px; background: #d89761;">
					Example header
				</div>
			</template>
			<template #footer>
				<div style="padding: 4px 6px; background: #d861c8;">
					Example footer
				</div>
			</template>
			<template #optiongroup="{ option }">
				<div style="display: flex; flex-direction: row; gap: 4px; border: 1px dashed #b6b6b6;">
                    <span>{{ option.label }}</span>
					<ds-icon :icon="ICONS.FA_BADGE_PERCENT" :size="ICON_SIZES.SMALL"/>
				</div>
			</template>
			<template #clearicon="{ clearCallback }">
                <ds-icon :icon="ICONS.FA_TRASH_CAN" :size="ICON_SIZES.X_SMALL" @click="clearCallback"/>
			</template>
			<template #loadingicon>
                <ds-icon :icon="ICONS.FAD_SPINNER_THIRD" :size="ICON_SIZES.X_SMALL" :spinning="true"/>
			</template>
			<template #dropdownicon>
                <ds-icon :icon="ICONS.FA_SIGNAL" :size="ICON_SIZES.X_SMALL" />
			</template>
			<template #filtericon>
                <ds-icon :icon="ICONS.FA_PENCIL" :size="ICON_SIZES.X_SMALL" />
			</template>
		</prime-select>`,
	methods: {
		select(value) {
			this.args.modelValue = value;
		},
		isOptionDisabled(option) {
			return option.value === 3;
		},
	},
});

export const Default = StoryTemplate.bind({});

Default.argTypes = {
	modelValue: {
		control: {
			type: 'select',
			labels: options.reduce((acc, { label, value }) => {
				acc[value] = label;
				return acc;
			}, {}),
		},
		options: options.map(({ value }) => value),
		name: 'initial value',
		defaultValue: 2,
	},
	scrollHeight: {
		control: {
			type: 'text',
		},
		defaultValue: '14rem',
	},
	filter: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	filterPlaceholder: {
		control: {
			type: 'text',
		},
		defaultValue: 'Search...',
	},
	filterMatchMode: {
		control: {
			type: 'select',
		},
		options: ['endsWith', 'contains', 'startsWith'],
		defaultValue: 'contains',
	},
	editable: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	placeholder: {
		control: {
			type: 'text',
		},
		defaultValue: 'Select option...',
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
	showClear: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	loading: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	resetFilterOnHide: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	resetFilterOnClear: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	autoOptionFocus: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	autoFilterFocus: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	selectOnFocus: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	focusOnHover: {
		control: {
			type: 'boolean',
		},
		defaultValue: true,
	},
	highlightOnSelect: {
		control: {
			type: 'boolean',
		},
		defaultValue: true,
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
