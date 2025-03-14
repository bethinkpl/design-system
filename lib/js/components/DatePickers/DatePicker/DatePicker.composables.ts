import { onUnmounted, Ref, ref, watch } from 'vue';
import { FlatpickrFn, Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { CustomLocale } from 'flatpickr/dist/types/locale';

import { DatePickerCalendarPositions, FLATPICKR_POSITIONS } from './index';

let flatpickrFunction: FlatpickrFn | null = null;
let locale: CustomLocale;

export interface DatePickerComposablesProps {
	disableDates: Array<Date>;
	date?: Date | null;
	startDate?: Date | null;
	endDate?: Date | null;
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
		updatePositionBasedOnScrollableSelector: string,
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

	const updateDatePickerDates = (date: Date | Array<Date>) => {
		datePicker?.setDate(date, false);
		datePicker?.updateValue(false);
		datePicker?.jumpToDate(Array.isArray(date) ? date[0] : date, false);
	};

	const createDatePicker = async (
		flatpickrInputElement: HTMLInputElement,
		datePickerElement: HTMLElement,
		updatePositionBasedOnScrollableSelector: string,
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
			//disableMobile fixes mobile pickers on platform
			disableMobile: true,
			positionElement: datePickerElement,
			ignoredFocusElements: [datePickerElement],
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

		if (updatePositionBasedOnScrollableSelector) {
			const container = document.querySelector(updatePositionBasedOnScrollableSelector);

			const scrollEvent = () => {
				datePicker?._positionCalendar();
			};

			if (container) {
				datePicker?.config?.onOpen?.push(() => {
					container.addEventListener('scroll', scrollEvent, { passive: true });
				});

				datePicker?.config?.onClose?.push(() => {
					container.removeEventListener('scroll', scrollEvent);
				});
			}
		}

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
	watch(
		[() => props.date, () => props.startDate, () => props.endDate],
		() => {
			if (props.date) {
				updateDatePickerDates(props.date);
			} else if (props.startDate && props.endDate) {
				updateDatePickerDates([props.startDate, props.endDate]);
			} else if (props.startDate && !props.endDate) {
				updateDatePickerDates(props.startDate);
			} else if (!props.startDate && props.endDate) {
				updateDatePickerDates(props.endDate);
			} else {
				datePicker?.clear(false);
			}
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
