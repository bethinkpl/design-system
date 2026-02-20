import { Meta, StoryFn } from '@storybook/vue3';
import PrimeDatepicker from 'primevue/datepicker';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	title: 'Components/PrimeVue Sandbox/Datepicker',
} as Meta;

const StoryTemplate: StoryFn = (args) => ({
	components: { DsIcon, PrimeDatepicker },
	data() {
		return {
			args,
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	template: `
		<prime-datepicker
			v-bind="args"
			@update:modelValue="select"
		/>

		<br/><br/>
		<small>
			With custom templates:
			<ul>
				<li>panel header</li>
				<li>panel footer</li>
                <li>input icon</li>
                <li>prev icon</li>
                <li>next icon</li>
                <li>increment icon</li>
                <li>decrement icon</li>
			</ul>
		</small>
		<prime-datepicker
			v-bind="args"
			@update:modelValue="select"
		>
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
            <template #inputicon>
				<ds-icon :icon="ICONS.FA_CALENDAR" :size="ICON_SIZES.X_SMALL" />
            </template>
            <template #previcon>
				<ds-icon :icon="ICONS.FA_FACE_FROWN" :size="ICON_SIZES.X_SMALL" />
            </template>
            <template #nexticon>
				<ds-icon :icon="ICONS.FA_FACE_SMILE" :size="ICON_SIZES.X_SMALL" />
            </template>
            <template #incrementicon>
				<ds-icon :icon="ICONS.FA_PLUS" :size="ICON_SIZES.X_SMALL" />
            </template>
            <template #decrementicon>
				<ds-icon :icon="ICONS.FA_MINUS" :size="ICON_SIZES.X_SMALL" />
            </template>
        </prime-datepicker>
    `,
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
	selectionMode: {
		control: {
			type: 'select',
		},
		options: ['single', 'range', 'multiple'],
		defaultValue: 'single',
	},
	dateFormat: {
		control: {
			type: 'text',
		},
		defaultValue: 'dd.mm.yy',
	},
	inline: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	showOtherMonths: {
		control: {
			type: 'boolean',
		},
		defaultValue: true,
	},
	showIcon: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	iconDisplay: {
		control: {
			type: 'select',
		},
		options: ['input', 'button'],
		defaultValue: 'button',
	},
	numberOfMonths: {
		control: {
			type: 'number',
		},
		defaultValue: 1,
	},
	view: {
		control: {
			type: 'select',
		},
		options: ['year', 'month', 'date'],
		defaultValue: 'date',
	},
	maxDateCount: {
		control: {
			type: 'number',
		},
		defaultValue: null,
	},
	showOnFocus: {
		control: {
			type: 'boolean',
		},
		defaultValue: true,
	},
	showButtonBar: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	showTime: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	timeOnly: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	hourFormat: {
		control: {
			type: 'select',
		},
		options: ['12', '24'],
		defaultValue: '24',
	},
	stepHour: {
		control: {
			type: 'number',
		},
		defaultValue: 1,
	},
	stepMinute: {
		control: {
			type: 'number',
		},
		defaultValue: 1,
	},
	stepSecond: {
		control: {
			type: 'number',
		},
		defaultValue: 1,
	},
	showSeconds: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	hideOnDateTimeSelect: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	hideOnRangeSelection: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	timeSeparator: {
		control: {
			type: 'text',
		},
		defaultValue: ':',
	},
	showWeek: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	manualInput: {
		control: {
			type: 'boolean',
		},
		defaultValue: true,
	},
	placeholder: {
		control: {
			type: 'text',
		},
		defaultValue: 'Select date...',
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
