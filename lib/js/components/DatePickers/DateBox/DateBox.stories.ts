import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';
import { DATE_PICKER_COLORS, DATE_PICKER_STATES } from '../DatePicker';
import { ComponentProps } from 'vue-component-type-helpers';
import { useArgs } from '@storybook/preview-api';
import DateBox from './index';

type DateBoxProps = ComponentProps<typeof DateBox>;

const meta: Meta<DateBoxProps> = {
	title: 'Components/DatePickers/DateBox',
	component: DateBox,
	render: (args) => {
		const [_, updateArgs] = useArgs();

		return {
			components: { DateBox },
			setup() {
				return args;
			},
			data() {
				return {
					ICONS: Object.freeze(ICONS),
				};
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
			},
			template: `
				<div style="display: flex">
					<date-box
						:is-interactive="isInteractive"
						:placeholder="placeholder"
						:start-date="formattedStartDate"
						:end-date="formattedEndDate"
						:start-icon="startIcon ? ICONS[startIcon] : null"
						:end-icon="endIcon ? ICONS[endIcon] : null"
						:are-icons-hidden-on-mobile="areIconsHiddenOnMobile"
						:error-message="errorMessage"
						:state="state"
						:color="color"
						:is-open="isOpen"
					/>
				</div>`,
		};
	},
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		startIcon: { control: 'select', options: [null, ...Object.keys(ICONS)] },
		endIcon: { control: 'select', options: [null, ...Object.keys(ICONS)] },
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
	} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8502-1209&t=mHbWSeRfkspainMZ-4',
		},
	},
};

export default meta;

type Story = StoryObj<DateBoxProps>;
export const Interactive: Story = {
	args: {
		isInteractive: true,
		color: DATE_PICKER_COLORS.NEUTRAL_WEAK,
		placeholder: 'Ustaw',
		startDate: null,
		endDate: null,
		startIcon: 'FA_CALENDAR_DAY',
		endIcon: 'FA_CALENDAR_DAY',
		areIconsHiddenOnMobile: false,
		errorMessage: '',
		state: DATE_PICKER_STATES.DEFAULT,
		isOpen: false,
	} as Args,
};
