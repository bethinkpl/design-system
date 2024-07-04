import DatePicker from './DatePicker.vue';
import {
	DATE_PICKER_COLORS,
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_TRIGGER_TYPES,
	DATE_PICKER_STATES,
} from './DatePicker.consts';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';

export default {
	title: 'Components/DatePickers/DatePicker',
	component: DatePicker,
} as Meta<typeof DatePicker>;

const StoryTemplate: StoryFn<typeof DatePicker> = (args, { updateArgs }) => ({
	components: { DatePicker },
	setup() {
		return {
			...args,
		};
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	methods: {
		updateDate(date) {
			updateArgs({ date: Date.parse(date) });
		},
	},
	computed: {
		formattedDate() {
			const date = this.date ? new Date(parseInt(this.date)) : null;
			return date?.toISOString();
		},
	},
	template: `
		<date-picker
			:trigger-type="triggerType"
			:is-interactive="isInteractive"
			:placeholder="placeholder"
			:date="formattedDate"
			:label="label"
			:is-label-uppercase="isLabelUppercase"
			:icon="ICONS[icon]"
			:is-icon-hidden-on-mobile="isIconHiddenOnMobile"
			:calendar-position="calendarPosition"
			:error-message="errorMessage"
			:state="state"
			:color="color"
			:disable-dates="disableDates"
			:min-date="minDate"
			:max-date="maxDate"
			@update:date="updateDate"
		/>`,
});

export const Interactive = StoryTemplate.bind({});
const now = Date.now();
const oneDayMili = 86400000;
const args = {
	triggerType: DATE_PICKER_TRIGGER_TYPES.TILE,
	isInteractive: true,
	placeholder: 'Wybierz datę',
	date: null,
	label: 'Date picker',
	isLabelUppercase: false,
	icon: 'FA_CALENDAR_DAY',
	isIconHiddenOnMobile: false,
	calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM,
	errorMessage: '',
	state: DATE_PICKER_STATES.DEFAULT,
	color: DATE_PICKER_COLORS.NEUTRAL,
	disableDates: [new Date(now + oneDayMili * 2).toISOString().slice(0, 10)],
	minDate: 'today',
	maxDate: new Date(now + oneDayMili * 7).toISOString().slice(0, 10),
} as Args;

const argTypes = {
	triggerType: {
		control: 'select',
		options: Object.values(DATE_PICKER_TRIGGER_TYPES),
	},
	date: { control: 'date' },
	icon: { control: 'select', options: [null, ...Object.keys(ICONS)] },
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
		control: 'array',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/03ABNCSDYWYDmOPJOBGM5l/INI-153-Planowanie-pracy-z-lekcjami?node-id=245-162031&t=g08nj70xhT9BZTpu-4',
	},
};
