<template>
	<div ref="dateRangePickerRef" class="ds-dateRangePicker">
		<date-picker-box
			:is-interactive="isInteractive"
			:placeholder="placeholder"
			:start-date="startDate"
			:end-date="endDateIfDifferentThanStartDate"
			:start-icon="startIcon"
			:end-icon="endIcon"
			:are-icons-hidden-on-mobile="areIconsHiddenOnMobile"
			:state="state"
			:color="color"
			:start-date-eyebrow-text="eyebrowText"
			:end-date-eyebrow-text="endDateEyebrowText"
			:is-open="isOpen"
			@click="toggle"
		/>

		<span v-if="errorMessage" class="ds-dateRangePicker__errorMessage">
			{{ errorMessage }}
		</span>
		<input ref="flatpickrInputRef" class="ds-dateRangePicker__hiddenInput" />
	</div>
</template>

<style lang="scss">
@import 'flatpickr/dist/flatpickr';
</style>

<style scoped lang="scss">
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';

.ds-dateRangePicker {
	display: flex;
	flex-direction: column;
	row-gap: $space-4xs;

	&__hiddenInput {
		display: none;
	}

	&__errorMessage {
		@include info-s-default-regular;

		color: $color-danger-text;
	}
}
</style>

<script lang="ts">
import DatePickerBox from '../DatePickerBox/DatePickerBox.vue';
import { IconItem, ICONS } from '../../Icons/Icon';
import { defineComponent, PropType, Ref, ref, toRaw, watch } from 'vue';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DATE_PICKER_TRIGGER_TYPES,
	DatePickerCalendarPositions,
	DatePickerColors,
	DatePickerStates,
} from '../DatePicker';
import { DatePickerComposablesProps, initFlatpickr } from '../DatePicker/DatePicker.composables';
import { capitalizeFirstLetter } from '../../../../../tools/importers/helpers/modifiers';
import { localWeekdayName } from '../../../../../tools/importers/helpers/dates';

export default defineComponent({
	name: 'DateRangePicker',
	components: {
		DatePickerBox,
	},
	props: {
		isInteractive: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: 'Wybierz datę',
		},
		startDate: {
			type: Date,
			default: null,
		},
		endDate: {
			type: Date,
			default: null,
		},
		startIcon: {
			type: [Object, null] as PropType<IconItem | null>,
			default: ICONS.FA_CALENDAR_DAY,
			validator(icon) {
				return icon === null || Object?.values(ICONS).includes(toRaw(icon));
			},
		},
		endIcon: {
			type: [Object, null] as PropType<IconItem | null>,
			default: ICONS.FA_CALENDAR_DAY,
			validator(icon) {
				return icon === null || Object?.values(ICONS).includes(toRaw(icon));
			},
		},
		areIconsHiddenOnMobile: {
			type: Boolean,
			default: false,
		},
		calendarPosition: {
			type: String as PropType<DatePickerCalendarPositions>,
			default: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT,
		},
		errorMessage: {
			type: String,
			default: '',
		},
		state: {
			type: (String as PropType<DatePickerStates>) || null,
			default: DATE_PICKER_STATES.DEFAULT,
		},
		color: {
			type: String as PropType<DatePickerColors>,
			default: DATE_PICKER_COLORS.NEUTRAL,
		},
		disableDates: {
			type: Array as PropType<Array<Date>>,
			default: () => [],
		},
		minDate: {
			type: Date,
			default: null,
		},
		maxDate: {
			type: Date,
			default: null,
		},
	},
	emits: { 'update:date': (value: { startDate: Date; endDate: Date }) => true },
	setup(
		props: DatePickerComposablesProps & {
			startDate: Date;
			endDate: Date;
			isInteractive: boolean;
			state: DatePickerStates;
		},
		{ emit },
	) {
		const dateRangePickerRef = ref() as Ref<HTMLDivElement>;
		const flatpickrInputRef = ref() as Ref<HTMLInputElement>;

		const onChange = (event: Array<Date>) => {
			if (event.length !== 2) {
				return;
			}
			emit('update:date', { startDate: event[0], endDate: event[1] });
		};

		const {
			isOpen,
			toggle: toggleDatePicker,
			createDatePicker,
		} = initFlatpickr({
			props,
			onChange,
			defaultDates: [props.startDate, props.endDate],
			mode: 'range',
		});

		watch(
			[() => props.isInteractive, () => props.state],
			async () => {
				if (props.isInteractive && props.state === DATE_PICKER_STATES.DEFAULT) {
					await createDatePicker(flatpickrInputRef.value, dateRangePickerRef.value);
				}
			},
			{ flush: 'post' },
		);

		return {
			dateRangePickerRef,
			flatpickrInputRef,
			isOpen,
			toggleDatePicker,
			createDatePicker,
			DATE_PICKER_CALENDAR_POSITIONS: Object.freeze(DATE_PICKER_CALENDAR_POSITIONS),
			DATE_PICKER_COLORS: Object.freeze(DATE_PICKER_COLORS),
			DATE_PICKER_STATES: Object.freeze(DATE_PICKER_STATES),
			DATE_PICKER_TRIGGER_TYPES: Object.freeze(DATE_PICKER_TRIGGER_TYPES),
		};
	},
	computed: {
		endDateEyebrowText() {
			if (!this.endDate || this.state === DATE_PICKER_STATES.LOADING) {
				return '';
			}

			return capitalizeFirstLetter(localWeekdayName(this.endDate));
		},

		endDateIfDifferentThanStartDate() {
			return this.startDate &&
				this.endDate &&
				this.startDate.getTime() !== this.endDate.getTime()
				? this.endDate
				: null;
		},

		eyebrowText() {
			if (!this.startDate || this.state === DATE_PICKER_STATES.LOADING) {
				return '';
			}

			return capitalizeFirstLetter(localWeekdayName(this.startDate));
		},
	},
	async mounted() {
		if (this.isInteractive && this.state === DATE_PICKER_STATES.DEFAULT) {
			await this.createDatePicker(this.flatpickrInputRef, this.dateRangePickerRef);
		}
	},
	methods: {
		toggle() {
			if (this.isInteractive && this.state === DATE_PICKER_STATES.DEFAULT) {
				this.toggleDatePicker();
			}
		},
	},
});
</script>
