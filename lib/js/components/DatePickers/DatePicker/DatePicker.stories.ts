import { useArgs } from '@storybook/preview-api';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';
import DsSwitch from '../../Switch';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DATE_PICKER_TRIGGER_TYPES,
} from './DatePicker.consts';
import DatePicker from './DatePicker.vue';
import { CalendarDate, formatCalendarDate } from '../calendarDate';

export default {
	title: 'Components/DatePickers/DatePicker',
	component: DatePicker,
} as Meta<typeof DatePicker>;

const StoryTemplate: StoryFn<typeof DatePicker> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { DatePicker, DsSwitch },
		setup() {
			return args;
		},
		data() {
			return {
				ICONS: Object.freeze(ICONS),
			};
		},
		methods: {
			updateDate(day: CalendarDate | null) {
				updateArgs({ date: day ?? null });
			},
		},
		computed: {
			// The text controls hand back an empty string once cleared — the pickers only accept
			// a 'YYYY-MM-DD' day or null.
			resolvedDate() {
				return this.date || null;
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
			<date-picker
				:trigger-type="triggerType"
				:is-interactive="isInteractive"
				:placeholder="placeholder"
				:date="resolvedDate"
				:today="resolvedToday"
				:additional-text="additionalText"
				:helpMessage="helpMessage"
				:label="label"
				:is-label-uppercase="isLabelUppercase"
				:icon="icon ? ICONS[icon] : null"
				:is-icon-hidden-on-mobile="isIconHiddenOnMobile"
				:calendar-position="calendarPosition"
				:error-message="errorMessage"
				:state="state"
				:color="color"
				:disable-dates="resolvedDisableDates"
				:min-date="resolvedMinDate"
				:max-date="resolvedMaxDate"
				:update-position-based-on-scrollable-selector="updatePositionBasedOnScrollableSelector"
				@update:date="updateDate"
			>
				<ds-switch label-left="lewa" label-right="prawa" />
			</date-picker>`,
	};
};

export const Interactive = StoryTemplate.bind({});

const browserToday = new Date();
const dayFromBrowserToday = (offsetInDays: number): CalendarDate =>
	formatCalendarDate(
		new Date(
			browserToday.getFullYear(),
			browserToday.getMonth(),
			browserToday.getDate() + offsetInDays,
		),
	);

const args = {
	triggerType: DATE_PICKER_TRIGGER_TYPES.TILE,
	isInteractive: true,
	color: DATE_PICKER_COLORS.NEUTRAL_WEAK,
	label: 'Date picker',
	isLabelUppercase: false,
	placeholder: 'Wybierz datę',
	date: '',
	today: '',
	disableDates: [dayFromBrowserToday(2)],
	minDate: dayFromBrowserToday(0),
	maxDate: dayFromBrowserToday(30),
	icon: 'FA_CALENDAR_DAYS',
	isIconHiddenOnMobile: false,
	additionalText: '',
	helpMessage: null,
	errorMessage: null,
	calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM,
	state: DATE_PICKER_STATES.DEFAULT,
} as Args;

const argTypes = {
	triggerType: {
		control: 'select',
		options: Object.values(DATE_PICKER_TRIGGER_TYPES),
	},
	date: { control: 'text' },
	today: { control: 'text' },
	minDate: { control: 'text' },
	maxDate: { control: 'text' },
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
		control: 'object',
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

export const ScrollableContainer = StoryTemplate.bind({});
ScrollableContainer.decorators = [
	() => ({
		template: `
			<div style="height: 500px; overflow-y: scroll;" class="scrollable-container">
				<div style="height: 1500px; padding: 6px;">
					<story />
				</div>
			</div>`,
	}),
];
ScrollableContainer.argTypes = argTypes;
ScrollableContainer.args = {
	...args,
	updatePositionBasedOnScrollableSelector: '.scrollable-container',
};

ScrollableContainer.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/03ABNCSDYWYDmOPJOBGM5l/INI-153-Planowanie-pracy-z-lekcjami?node-id=245-162031&t=g08nj70xhT9BZTpu-4',
	},
};

/**
 * `today` is what the calendar treats as today: it rings that day and opens an empty calendar on
 * its month. Here it is a week ahead of the browser's today, the way a user whose profile timezone
 * puts them on another day would see it. Open the calendar — the ring sits on `today`, not on the
 * browser's day.
 */
export const CustomToday = StoryTemplate.bind({});
CustomToday.argTypes = argTypes;
CustomToday.args = {
	...args,
	label: 'Today is a week ahead of the browser',
	date: '',
	today: dayFromBrowserToday(7),
	minDate: '',
	maxDate: '',
	disableDates: [],
};
