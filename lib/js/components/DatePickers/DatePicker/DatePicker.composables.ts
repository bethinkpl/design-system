import { computed, onMounted, onUnmounted, PropType, ref, watchEffect } from 'vue';
import { Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import flatpickr from 'flatpickr';
import { Polish } from 'flatpickr/dist/l10n/pl';
import {
	DATE_PICKER_CALENDAR_POSITIONS,
	FLATPICKR_POSITIONS,
	DatePickerCalendarPositions,
} from './index';
export function initFlatpickr(
	flatpickrInputRef,
	dateRangePickerRef,
	props,
	onChange,
	mode: 'single' | 'range' = 'single',
) {
	const disableDates = computed(() =>
		props.disableDates instanceof Array
			? props.disableDates.filter((date) => date instanceof Date)
			: props.disableDates,
	);

	let datePicker: DatePickerInstance | null = null;
	let isOpen = ref(false);

	onMounted(() => {
		datePicker = flatpickr(flatpickrInputRef.value, {
			mode,
			locale: Polish,
			positionElement: dateRangePickerRef?.value,
			ignoredFocusElements: [dateRangePickerRef?.value],
			appendTo: dateRangePickerRef?.value,
			position: FLATPICKR_POSITIONS[props.calendarPosition],
			defaultDate: props.date ?? [props.startDate, props.endDate],
			disable: disableDates?.value,
			minDate: props.minDate,
			maxDate: props.maxDate,
			onClose: [
				() => {
					isOpen.value = false;
				},
			],
			onOpen: [
				() => {
					isOpen.value = true;
				},
			],
			onChange,
		});
	});

	onUnmounted(() => {
		datePicker?.destroy();
		datePicker = null;
	});

	watchEffect(
		() => {
			datePicker?.set({
				position: FLATPICKR_POSITIONS[props.calendarPosition],
				defaultDate: props.date ?? [props.startDate?.value, props.endDate],
				disable: disableDates.value,
				minDate: props.minDate,
				maxDate: props.maxDate,
			});
		},
		{
			flush: 'post', // Ensure updates happen after DOM changes
		},
	);

	return {
		datePicker,
		isOpen,
		toggle: () => {
			datePicker?.toggle();
		},
	};
}

export const configProps = {
	calendarPosition: {
		type: String as PropType<DatePickerCalendarPositions>,
		default: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT,
	},
	disableDates: {
		type: Array,
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
};
