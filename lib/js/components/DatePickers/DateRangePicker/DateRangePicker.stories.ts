import { useArgs } from '@storybook/preview-api';
import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { ComponentProps } from 'vue-component-type-helpers';
import { ICONS } from '../../Icons/Icon';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
} from '../DatePicker';
import DateRangePicker from './DateRangePicker.vue';
import { CalendarDate, formatCalendarDate } from '../calendarDate';

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
				updateDate({
					startDate,
					endDate,
				}: {
					startDate: CalendarDate;
					endDate: CalendarDate;
				}) {
					updateArgs({
						startDate: startDate ?? null,
						endDate: endDate ?? null,
					});
				},
			},
			computed: {
				// The text controls hand back an empty string once cleared — the picker only
				// accepts a 'YYYY-MM-DD' day or null.
				resolvedStartDate() {
					return this.startDate || null;
				},
				resolvedEndDate() {
					return this.endDate || null;
				},
				resolvedToday() {
					return this.today || null;
				},
				resolvedMinDate() {
					return this.minDate || null;
				},
				resolvedMaxDate() {
					return this.maxDate || null;
				},
				resolvedDisableDates() {
					return this.disableDates ?? [];
				},
			},
			template: `
				<div style="display: flex">
					<date-range-picker
						:is-interactive="isInteractive"
						:placeholder="placeholder"
						:start-date="resolvedStartDate"
						:end-date="resolvedEndDate"
						:today="resolvedToday"
						:start-icon="startIcon ? ICONS[startIcon] : null"
						:end-icon="endIcon ? ICONS[endIcon] : null"
						:are-icons-hidden-on-mobile="areIconsHiddenOnMobile"
						:calendar-position="calendarPosition"
						:error-message="errorMessage"
						:state="state"
						:color="color"
						:disable-dates="resolvedDisableDates"
						:min-date="resolvedMinDate"
						:max-date="resolvedMaxDate"
						@update:date="updateDate"
					/>
				</div>`,
		};
	},
	argTypes: {
		startDate: { control: 'text' },
		endDate: { control: 'text' },
		today: { control: 'text' },
		minDate: { control: 'text' },
		maxDate: { control: 'text' },
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

const browserToday = new Date();
const dayFromBrowserToday = (offsetInDays: number): CalendarDate =>
	formatCalendarDate(
		new Date(
			browserToday.getFullYear(),
			browserToday.getMonth(),
			browserToday.getDate() + offsetInDays,
		),
	);

export const Interactive: Story = {
	args: {
		isInteractive: true,
		color: DATE_PICKER_COLORS.NEUTRAL_WEAK,
		placeholder: 'Ustaw',
		startDate: '',
		endDate: '',
		today: '',
		disableDates: [dayFromBrowserToday(2)],
		minDate: dayFromBrowserToday(0),
		maxDate: dayFromBrowserToday(30),
		startIcon: 'FA_CALENDAR_DAY',
		endIcon: 'FA_CALENDAR_DAY',
		areIconsHiddenOnMobile: false,
		errorMessage: '',
		calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM,
		state: DATE_PICKER_STATES.DEFAULT,
	} as Args,
};
