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

<script setup lang="ts">
import DatePickerBox from '../DatePickerBox/DatePickerBox.vue';
import { IconItem, ICONS } from '../../Icons/Icon';
import { computed, defineEmits, PropType, Ref, ref, toRaw } from 'vue';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DatePickerCalendarPositions,
	DatePickerColors,
	DatePickerStates,
} from '../DatePicker';
import { initFlatpickr } from '../DatePicker/DatePicker.composables';
import { capitalizeFirstLetter } from '../../../../../tools/importers/helpers/modifiers';
import { localWeekdayName } from '../../../../../tools/importers/helpers/dates';

const dateRangePickerRef = ref() as Ref<HTMLDivElement>;
const flatpickrInputRef = ref() as Ref<HTMLInputElement>;

const props = defineProps({
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
});

const emit = defineEmits({ 'update:date': (value: { startDate: Date; endDate: Date }) => true });
const onChange = (event: Array<Date>) => {
	if (event.length !== 2) {
		return;
	}
	emit('update:date', { startDate: event[0], endDate: event[1] });
};

const endDateEyebrowText = computed(() => {
	if (!props.endDate || props.state === DATE_PICKER_STATES.LOADING) {
		return '';
	}

	return capitalizeFirstLetter(localWeekdayName(props.endDate));
});

const endDateIfDifferentThanStartDate = computed(() =>
	props.startDate && props.endDate && props.startDate.getTime() !== props.endDate.getTime()
		? props.endDate
		: null,
);

const eyebrowText = computed(() => {
	if (!props.startDate || props.state === DATE_PICKER_STATES.LOADING) {
		return '';
	}

	return capitalizeFirstLetter(localWeekdayName(props.startDate));
});

const { isOpen, toggle } = initFlatpickr(
	flatpickrInputRef,
	dateRangePickerRef,
	props,
	onChange,
	[props.startDate, props.endDate],
	'range',
);
</script>
