import { defineEmits, onUnmounted, Ref, ref, watch } from 'vue';
import { FlatpickrFn, Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { CustomLocale } from 'flatpickr/dist/types/locale';

import { DatePickerCalendarPositions, FLATPICKR_POSITIONS } from './index';

let flatpickrFunction: FlatpickrFn | null = null;
let locale: CustomLocale;

export interface DatePickerComposablesProps {
	disableDates: Array<Date>;
	minDate: Date | null;
	maxDate: Date | null;
	calendarPosition: DatePickerCalendarPositions;
}
interface InitFlatpickrPrams {
	props: DatePickerComposablesProps;
	onChange: (dates: Array<Date>) => void;
	defaultDates: Date | Array<Date>;
	mode: 'single' | 'range';
}

interface InitFlatpickr {
	datePicker: DatePickerInstance | null;
	createDatePicker: (
		flatpickrInputElement: HTMLInputElement,
		dateRangePickerRef: HTMLElement,
	) => Promise<DatePickerInstance | undefined>;
	isOpen: Ref<boolean>;
	toggle: () => void;
}

export function initFlatpickr({
	props,
	onChange,
	defaultDates,
	mode = 'single',
}: InitFlatpickrPrams): InitFlatpickr {
	let datePicker: DatePickerInstance | null = null;
	const isOpen = ref(false);

	const createDatePicker = async (
		flatpickrInputElement: HTMLInputElement,
		datePickerElement: HTMLElement,
	): Promise<DatePickerInstance | undefined> => {
		if (datePicker) {
			return;
		}
		if (!flatpickrFunction) {
			try {
				flatpickrFunction = (await import('flatpickr')).default;
				locale = (await import('flatpickr/dist/l10n/pl')).Polish;
			} catch (e) {
				console.error('Failed to load flatpickr', e);
				return;
			}
		}
		datePicker = flatpickrFunction(flatpickrInputElement, {
			mode,
			locale,
			positionElement: datePickerElement,
			ignoredFocusElements: [datePickerElement],
			appendTo: datePickerElement,
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
