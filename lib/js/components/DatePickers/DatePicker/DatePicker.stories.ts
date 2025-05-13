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
			updateDate(date: Date) {
				if (date) {
					updateArgs({
						date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
					});
				}
			},
		},
		computed: {
			formattedDate() {
				if (!this.date || this.date === '') {
					return null;
				}
				return new Date(this.date);
			},
			formattedMinDate() {
				if (!this.minDate || this.minDate == '') {
					return null;
				}
				return new Date(this.minDate);
			},
			formattedMaxDate() {
				if (!this.maxDate || this.maxDate == '') {
					return null;
				}
				return new Date(this.maxDate);
			},
			formattedDisableDates() {
				if (!this.disableDates || !this.disableDates.length) {
					return null;
				}
				return this.disableDates.map((date) => new Date(date));
			},
		},
		template: `
			<date-picker
				:lazy-load="lazyLoad"
				:trigger-type="triggerType"
				:is-interactive="isInteractive"
				:placeholder="placeholder"
				:date="formattedDate"
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
				:disable-dates="formattedDisableDates"
				:min-date="formattedMinDate"
				:max-date="formattedMaxDate"
				:update-position-based-on-scrollable-selector="updatePositionBasedOnScrollableSelector"
				@update:date="updateDate"
			>
				<ds-switch label-left="lewa" label-right="prawa" />
			</date-picker>`,
	};
};

export const Interactive = StoryTemplate.bind({});
const now = Date.now();
const oneDayMili = 86400000;
const args = {
	lazyLoad: true,
	triggerType: DATE_PICKER_TRIGGER_TYPES.TILE,
	isInteractive: true,
	color: DATE_PICKER_COLORS.NEUTRAL_WEAK,
	label: 'Date picker',
	isLabelUppercase: false,
	placeholder: 'Wybierz datę',
	date: '',
	disableDates: [new Date(now + oneDayMili * 2).toISOString().slice(0, 10)],
	minDate: new Date(now).toISOString().slice(0, 10),
	maxDate: new Date(now + oneDayMili * 30).toISOString().slice(0, 10),
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
