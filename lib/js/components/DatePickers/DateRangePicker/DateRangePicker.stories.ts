import DateRangePicker from './DateRangePicker.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';
import { useArgs } from '@storybook/preview-api';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
} from '../DatePicker';

export default {
	title: 'Components/DatePickers/DateRangePicker',
	component: DateRangePicker,
} as Meta<typeof DateRangePicker>;

const StoryTemplate: StoryFn<typeof DateRangePicker> = (args) => {
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
						? `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
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
				return this.disableDates.map((date) => new Date(date));
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
};
const now = Date.now();
const oneDayMili = 86400000;
export const Interactive = StoryTemplate.bind({});
const args = {
	isInteractive: true,
	placeholder: 'Wybierz datę',
	startDate: '',
	endDate: '',
	startIcon: 'FA_CALENDAR_DAY',
	endIcon: 'FA_CALENDAR_DAY',
	areIconsHiddenOnMobile: false,
	calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM,
	errorMessage: '',
	state: DATE_PICKER_STATES.DEFAULT,
	color: DATE_PICKER_COLORS.NEUTRAL,
	disableDates: [new Date(now + oneDayMili * 2).toISOString().slice(0, 10)],
	minDate: new Date(now).toISOString().slice(0, 10),
	maxDate: new Date(now + oneDayMili * 30).toISOString().slice(0, 10),
} as Args;

const argTypes = {
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
		options: Object.values(DATE_PICKER_COLORS),
	},
	disableDates: {
		control: 'object',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/03ABNCSDYWYDmOPJOBGM5l/INI-153-Planowanie-pracy-z-lekcjami?node-id=246-205008&',
	},
};
