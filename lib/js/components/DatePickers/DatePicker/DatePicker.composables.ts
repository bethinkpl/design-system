import { onUnmounted, Ref, ref, watch } from 'vue';
import { FlatpickrFn, Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { CustomLocale } from 'flatpickr/dist/types/locale';

import { DatePickerCalendarPositions, FLATPICKR_POSITIONS } from './index';

let flatpickrFunction: FlatpickrFn | null = null;
let locale: CustomLocale;

export function initFlatpickr(
	flatpickrInputRef: Ref<HTMLInputElement>,
	dateRangePickerRef: Ref<HTMLElement>,
	props: {
		disableDates: Array<Date>;
		minDate: Date | null;
		maxDate: Date | null;
		calendarPosition: DatePickerCalendarPositions;
	},
	onChange: (dates: Array<Date>) => void,
	defaultDates: Date | Array<Date>,
	mode: 'single' | 'range' = 'single',
): {
	datePicker: DatePickerInstance | null;
	createDatePicker: () => Promise<DatePickerInstance | undefined>;
	isOpen: Ref<boolean>;
	toggle: () => void;
} {
	let datePicker: DatePickerInstance | null = null;
	let isOpen = ref(false);

	const createDatePicker = async () => {
		if (datePicker) {
			return;
		}
		if (!flatpickrFunction) {
			try {
				flatpickrFunction = (await import('flatpickr')).default;
				const { Polish } = await import('flatpickr/dist/l10n/pl');
				locale = Polish;
			} catch (e) {
				console.error('Failed to load flatpickr', e);
				return;
			}
		}

		datePicker = flatpickrFunction(flatpickrInputRef.value, {
			mode,
			locale,
			positionElement: dateRangePickerRef?.value,
			ignoredFocusElements: [dateRangePickerRef?.value],
			appendTo: dateRangePickerRef?.value,
			position: FLATPICKR_POSITIONS[props.calendarPosition],
			defaultDate: defaultDates,
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

		return datePicker;
	};

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
			() => defaultDates,
		],
		() => {
			datePicker?.set({
				position: FLATPICKR_POSITIONS[props.calendarPosition],
				defaultDate: defaultDates,
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
		createDatePicker,
		isOpen,
		toggle: () => {
			datePicker?.toggle();
		},
	};
}
