import { Ref } from 'vue';
import { Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { DatePickerCalendarPositions } from './index';
import { SupportedLocale } from '../../../i18n';
import { CalendarDate } from '../calendarDate';

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
    defaultDates: Date | Array<Date>;
    mode: 'single' | 'range';
    locale?: SupportedLocale;
}
interface InitFlatpickr {
    datePicker: DatePickerInstance | null;
    createDatePicker: (flatpickrInputElement: HTMLInputElement, dateRangePickerRef: HTMLElement, updatePositionBasedOnScrollableSelector: string) => Promise<DatePickerInstance | undefined>;
    destroyDatePicker: () => void;
    updateDatePicker: () => void;
    isOpen: Ref<boolean>;
    toggle: () => void;
}
export declare function initFlatpickr({ props, onChange, onClose, defaultDates, mode, locale, }: InitFlatpickrPrams): InitFlatpickr;
export {};
