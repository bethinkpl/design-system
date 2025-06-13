import { useArgs } from 'storybook/preview-api';
import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3-vite';
import { ComponentProps } from 'vue-component-type-helpers';
import { ICONS } from '../../Icons/Icon';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
} from '../DatePicker';
import DateRangePicker from './DateRangePicker.vue';

type DateRangePickerProps = ComponentProps<typeof DateRangePicker>;

const meta: Meta<DateRangePickerProps> = {
	title: 'Components/DatePickers/DateRangePicker',
	component: DateRangePicker,
	render: (args) => {
		const [_, updateArgs] = useArgs();

		return {
			components: { DateRangePicker },
			setup() {
				return args;
			},
			data() {
				return {
					ICONS: Object.freeze(ICONS),
				};
			},
			methods: {
				updateDate({ startDate, endDate }: { startDate: Date; endDate: Date }) {
					updateArgs({
						startDate: startDate
							? `${startDate.getFullYear()}-${
									startDate.getMonth() + 1
							  }-${startDate.getDate()}`
							: null,
						endDate: endDate
							? `${endDate.getFullYear()}-${
									endDate.getMonth() + 1
							  }-${endDate.getDate()}`
							: null,
					});
				},
			},
			computed: {
				formattedStartDate() {
					if (!this.startDate) {
						return null;
					}
					return new Date(this.startDate);
				},
				formattedEndDate() {
					if (!this.endDate) {
						return null;
					}
					return new Date(this.endDate);
				},
				formattedMinDate() {
					if (!this.minDate) {
						return null;
					}
					return new Date(this.minDate);
				},
				formattedMaxDate() {
					if (!this.maxDate) {
						return null;
					}
					return new Date(this.maxDate);
				},
				formattedDisableDates() {
					if (!this.disableDates || !this.disableDates.length) {
						return [];
					}
					return this.disableDates.map((date: string) => new Date(date));
				},
			},
			template: `
				<div style="display: flex">
					<date-range-picker
						:is-interactive="isInteractive"
						:placeholder="placeholder"
						:start-date="formattedStartDate"
						:end-date="formattedEndDate"
						:start-icon="startIcon ? ICONS[startIcon] : null"
						:end-icon="endIcon ? ICONS[endIcon] : null"
						:are-icons-hidden-on-mobile="areIconsHiddenOnMobile"
						:calendar-position="calendarPosition"
						:error-message="errorMessage"
						:state="state"
						:color="color"
						:disable-dates="formattedDisableDates"
						:min-date="formattedMinDate"
						:max-date="formattedMaxDate"
						@update:date="updateDate"
					/>
				</div>`,
		};
	},
	argTypes: {
		startDate: { control: 'text' },
		endDate: { control: 'text' },
		startIcon: { control: 'select', options: [null, ...Object.keys(ICONS)] },
		endIcon: { control: 'select', options: [null, ...Object.keys(ICONS)] },
		calendarPosition: {
			control: 'select',
			options: Object.values(DATE_PICKER_CALENDAR_POSITIONS),
		},
		state: {
			control: 'select',
			options: Object.values(DATE_PICKER_STATES),
		},
		color: {
			control: 'select',
			options: Object.values(DATE_PICKER_COLORS).filter(
				(color) => color !== DATE_PICKER_COLORS.NEUTRAL,
			),
		},
		disableDates: {
			control: 'object',
		},
	} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8502-1209&t=mHbWSeRfkspainMZ-4',
		},
	},
};

export default meta;

type Story = StoryObj<DateRangePickerProps>;

const now = Date.now();
const oneDayMili = 86400000;
export const Interactive: Story = {
	args: {
		isInteractive: true,
		color: DATE_PICKER_COLORS.NEUTRAL_WEAK,
		placeholder: 'Ustaw',
		startDate: '',
		endDate: '',
		disableDates: [new Date(now + oneDayMili * 2).toISOString().slice(0, 10)],
		minDate: new Date(now).toISOString().slice(0, 10),
		maxDate: new Date(now + oneDayMili * 30).toISOString().slice(0, 10),
		startIcon: 'FA_CALENDAR_DAY',
		endIcon: 'FA_CALENDAR_DAY',
		areIconsHiddenOnMobile: false,
		errorMessage: '',
		calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM,
		state: DATE_PICKER_STATES.DEFAULT,
	} as Args,
};
