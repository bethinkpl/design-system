import { onMounted, onUnmounted, Ref, ref, watch } from 'vue';
import { Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import flatpickr from 'flatpickr';
import { Polish } from 'flatpickr/dist/l10n/pl';
import { DatePickerCalendarPositions, FLATPICKR_POSITIONS } from './index';

export function initFlatpickr(
	flatpickrInputRef: Ref<HTMLInputElement>,
	dateRangePickerRef: Ref<HTMLElement>,
	props: {
		disableDates: Date[];
		minDate: Date | null;
		maxDate: Date | null;
		calendarPosition: DatePickerCalendarPositions;
	},
	onChange: (dates: Date[]) => void,
	defaultDates: Ref<Date> | Ref<Date[]>,
	mode: 'single' | 'range' = 'single',
): {
	datePicker: DatePickerInstance | null;
	isOpen: Ref<boolean>;
	toggle: () => void;
} {
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
			defaultDate: defaultDates.value,
			disable: props.disableDates,
			minDate: props.minDate as Date | undefined,
			maxDate: props.maxDate as Date | undefined,
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

	watch(
		[
			() => props.calendarPosition,
			() => props.minDate,
			() => props.maxDate,
			() => props.disableDates,
			defaultDates,
		],
		() => {
			datePicker?.set({
				position: FLATPICKR_POSITIONS[props.calendarPosition],
				defaultDate: defaultDates.value,
				disable: props.disableDates,
				minDate: props.minDate as Date | undefined,
				maxDate: props.maxDate as Date | undefined,
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
