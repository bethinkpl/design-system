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

const StoryTemplate: StoryFn<typeof DatePicker> = (args) => ({
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
	computed: {
		formattedDate() {
			const date = this.date ? new Date(parseInt(this.date)) : null;
			const timeForm = new Intl.DateTimeFormat('pl-PL', {
				dateStyle: 'medium',
				timeStyle: undefined,
			});
			return date ? timeForm.format(date) : '';
		},
	},
	template: `<date-picker
 			:trigger-type="triggerType"
 			:status="status"
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
 		/>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	triggerType: DATE_PICKER_TRIGGER_TYPES.TILE,
	isInteractive: true,
	placeholder: 'Wybierz datę',
	date: Date.parse('2022-01-01 00:00:00'),
	label: 'Date picker',
	isLabelUppercase: false,
	icon: null,
	isIconHiddenOnMobile: false,
	calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM,
	errorMessage: '',
	state: DATE_PICKER_STATES.DEFAULT,
	color: DATE_PICKER_COLORS.NEUTRAL,
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
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/03ABNCSDYWYDmOPJOBGM5l/INI-153-Planowanie-pracy-z-lekcjami?node-id=245-162031&t=g08nj70xhT9BZTpu-4',
	},
};
