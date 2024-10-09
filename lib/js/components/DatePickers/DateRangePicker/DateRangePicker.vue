<template>
	<div class="ds-dateRangePicker">
		<date-picker-box
			:is-interactive="isInteractive"
			:placeholder="placeholder"
			:date="startDate"
			:end-date="endDateIfDifferentThanStartDate"
			:icon="icon"
			:is-icon-hidden-on-mobile="isIconHiddenOnMobile"
			:state="state"
			:color="color"
			:eyebrow-text="eyebrowText"
			:end-date-eyebrow-text="endDateEyebrowText"
			:is-open="isOpen"
			@click="toggle"
		/>

		<span v-if="errorMessage" class="ds-dateRangePicker__errorMessage">
			{{ errorMessage }}
		</span>
		<input ref="flatpickrInput" class="ds-dateRangePicker__hiddenInput" />
	</div>
</template>

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
import { ICONS } from '../../Icons/Icon';
import { PropType, toRaw } from 'vue';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DatePickerCalendarPositions,
	DatePickerColors,
	DatePickerStates,
	FLATPICKR_POSITIONS,
} from '../DatePicker';
import { capitalizeFirstLetter } from '../../../../../tools/importers/helpers/modifiers';

let flatpickr: Function | null = null;

export default {
	name: 'DateRangePicker',
	components: { DatePickerBox },
	props: {
		isInteractive: {
			type: Boolean,
			default: true,
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
		icon: {
			type: [Object, null],
			default: ICONS.FA_CALENDAR_DAY,
			validate: (icon) => icon === null || Object.values(ICONS).includes(toRaw(icon)),
		},
		isIconHiddenOnMobile: {
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
			type: [Array, Function],
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
	data() {
		return {
			isOpen: false,
			ICONS: Object.freeze(ICONS),
		};
	},
	computed: {
		disableDatesFiltered() {
			return this.disableDates instanceof Array
				? this.disableDates.filter((date) => date instanceof Date)
				: this.disableDates;
		},
		endDateEyebrowText() {
			if (!this.endDate || this.state === DATE_PICKER_STATES.LOADING) {
				return '';
			}

			return capitalizeFirstLetter(
				this.endDate.toLocaleDateString(undefined, {
					dateStyle: undefined,
					timeStyle: undefined,
					weekday: 'long',
				}),
			);
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

			return capitalizeFirstLetter(
				this.startDate.toLocaleDateString(undefined, {
					dateStyle: undefined,
					timeStyle: undefined,
					weekday: 'long',
				}),
			);
		},
		flatpickrConfigString() {
			return [
				this.maxDate,
				this.minDate,
				this.calendarPosition,
				this.endDate,
				...this.disableDates,
			].concat('|');
		},
		isDatePickerEnabled() {
			return this.isInteractive && this.state === DATE_PICKER_STATES.DEFAULT;
		},
	},
	watch: {
		flatpickrConfigString: {
			handler() {
				this.datePicker?.set({
					position: FLATPICKR_POSITIONS[this.calendarPosition],
					defaultDate: [this.startDate, this.endDate],
					disable: this.disableDatesFiltered,
					minDate: this.minDate,
					maxDate: this.maxDate,
				});
			},
			flush: 'post' as const,
		},
	},
	async mounted() {
		if (this.isDatePickerEnabled && !this.datePicker) {
			if (!flatpickr) {
				const { default: flatpickrFunction } = await import('flatpickr');

				flatpickr = flatpickrFunction;
			}

			const { Polish } = await import('flatpickr/dist/l10n/pl.js');

			this.datePicker = flatpickr(this.$refs.flatpickrInput, {
				mode: 'range',
				locale: Polish,
				positionElement: this.$el,
				ignoredFocusElements: [this.$el],
				appendTo: this.$el,
				position: FLATPICKR_POSITIONS[this.calendarPosition],
				defaultDate: [this.startDate, this.endDate],
				disable: this.disableDatesFiltered,
				minDate: this.minDate,
				maxDate: this.maxDate,
				onClose: [
					() => {
						this.isOpen = false;
					},
				],
				onOpen: [
					() => {
						this.isOpen = true;
					},
				],
				onChange: (event) => {
					if (event.length !== 2) {
						return;
					}
					this.$emit('update:date', { startDate: event[0], endDate: event[1] });
				},
			});
		}
	},
	unmounted() {
		this.datePicker?.destroy();
		this.datePicker = null;
	},
	methods: {
		toggle() {
			if (this.isDatePickerEnabled && this.datePicker) {
				this.datePicker.toggle();
			}
		},
	},
};
</script>
