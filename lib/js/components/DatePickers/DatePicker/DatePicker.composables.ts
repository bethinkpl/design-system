import { onUnmounted, Ref, ref, watch } from 'vue';
import { FlatpickrFn, Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { CustomLocale } from 'flatpickr/dist/types/locale';

import { DatePickerCalendarPositions, FLATPICKR_POSITIONS } from './index';
import { SUPPORTED_LOCALE, SupportedLocale } from '../../../i18n';
import { CalendarDate, parseCalendarDate, parseCalendarDateOrNull } from '../calendarDate';

let flatpickrFunction: FlatpickrFn | null = null;
const localeCache = new Map<string, CustomLocale>();

export interface DatePickerComposablesProps {
	disableDates: Array<CalendarDate>;
	date?: CalendarDate | null;
	startDate?: CalendarDate | null;
	endDate?: CalendarDate | null;
	minDate: CalendarDate | null;
	maxDate: CalendarDate | null;
	today?: CalendarDate | null;
	calendarPosition: DatePickerCalendarPositions;
}

interface InitFlatpickrPrams {
	props: DatePickerComposablesProps;
	onChange: (dates: Array<Date>) => void;
	onClose: () => void;
	/** Already parsed — the picker owns the `date ?? today ?? browser now` fallback. */
	defaultDates: Date | Array<Date>;
	mode: 'single' | 'range';
	locale?: SupportedLocale;
}

interface InitFlatpickr {
	datePicker: DatePickerInstance | null;
	createDatePicker: (
		flatpickrInputElement: HTMLInputElement,
		dateRangePickerRef: HTMLElement,
		updatePositionBasedOnScrollableSelector: string,
	) => Promise<DatePickerInstance | undefined>;
	destroyDatePicker: () => void;
	updateDatePicker: () => void;
	isOpen: Ref<boolean>;
	toggle: () => void;
}

export function initFlatpickr({
	props,
	onChange,
	onClose,
	defaultDates,
	mode = 'single',
	locale = SUPPORTED_LOCALE.pl,
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
			} catch (e) {
				console.error('Failed to load flatpickr', e);
				return;
			}
		}
		let flatpickrLocale: CustomLocale | undefined;

		if (locale === SUPPORTED_LOCALE.pl) {
			if (!localeCache.has(SUPPORTED_LOCALE.pl)) {
				try {
					localeCache.set(
						SUPPORTED_LOCALE.pl,
						(await import('flatpickr/dist/l10n/pl')).Polish,
					);
				} catch (e) {
					console.error('Failed to load flatpickr Polish locale', e);
				}
			}
			flatpickrLocale = localeCache.get(SUPPORTED_LOCALE.pl);
		}
		datePicker = flatpickrFunction(flatpickrInputElement, {
			mode,
			locale: flatpickrLocale ?? SUPPORTED_LOCALE.en,
			//disableMobile fixes mobile pickers on platform
			disableMobile: true,
			positionElement: datePickerElement,
			ignoredFocusElements: [datePickerElement],
			position: FLATPICKR_POSITIONS[props.calendarPosition],
			defaultDate: defaultDates,
			disable: props.disableDates.map((day) => parseCalendarDate(day)),
			minDate: parseCalendarDateOrNull(props.minDate) ?? undefined,
			maxDate: parseCalendarDateOrNull(props.maxDate) ?? undefined,
			// Drives the today ring and the month an empty calendar opens on. Without it flatpickr
			// falls back to browser now, which can be a different day than the consumer's today.
			now: parseCalendarDateOrNull(props.today) ?? undefined,
			onClose: [
				() => {
					isOpen.value = false;
					// setTimeout is needed to ensure that the date picker is closed before the onClose callback is called
					setTimeout(() => {
						onClose();
					});
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

	const destroyDatePicker = () => {
		datePicker?.destroy();
		datePicker = null;
	};

	onUnmounted(() => {
		destroyDatePicker();
	});

	watch(
		[
			() => props.calendarPosition,
			() => props.minDate,
			() => props.maxDate,
			() => props.disableDates,
			() => props.today,
			() => defaultDates,
		],
		() => {
			const now = parseCalendarDateOrNull(props.today) ?? undefined;

			if (datePicker && now) {
				// `set` only updates the config; the today ring reads the instance's own `now`.
				datePicker.now = now;
			}

			datePicker?.set({
				position: FLATPICKR_POSITIONS[props.calendarPosition],
				defaultDate: defaultDates,
				disable: props.disableDates.map((day) => parseCalendarDate(day)),
				minDate: parseCalendarDateOrNull(props.minDate) ?? undefined,
				maxDate: parseCalendarDateOrNull(props.maxDate) ?? undefined,
				now,
			});
		},
		{
			flush: 'post', // Ensure updates happen after DOM changes
		},
	);
	watch(
		[() => props.date, () => props.startDate, () => props.endDate],
		() => {
			updateDatePicker();
		},
		{
			flush: 'post', // Ensure updates happen after DOM changes
		},
	);

	const updateDatePicker = () => {
		if (props.date) {
			updateDatePickerDates(parseCalendarDate(props.date));
		} else if (props.startDate && props.endDate) {
			updateDatePickerDates([
				parseCalendarDate(props.startDate),
				parseCalendarDate(props.endDate),
			]);
		} else if (props.startDate && !props.endDate) {
			updateDatePickerDates(parseCalendarDate(props.startDate));
		} else if (!props.startDate && props.endDate) {
			updateDatePickerDates(parseCalendarDate(props.endDate));
		} else {
			datePicker?.clear(false);
		}
	};

	return {
		datePicker,
		createDatePicker,
		destroyDatePicker,
		updateDatePicker,
		isOpen,
		toggle: () => {
			datePicker?.toggle();
		},
	};
}
