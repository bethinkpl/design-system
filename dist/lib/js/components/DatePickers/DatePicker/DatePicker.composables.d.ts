import { Ref } from 'vue';
import { Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { DatePickerCalendarPositions } from './index';

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
    createDatePicker: (flatpickrInputElement: HTMLInputElement, dateRangePickerRef: HTMLElement, updatePositionBasedOnScrollableSelector: string) => Promise<DatePickerInstance | undefined>;
    isOpen: Ref<boolean>;
    toggle: () => void;
}
export declare function initFlatpickr({ props, onChange, defaultDates, mode, }: InitFlatpickrPrams): InitFlatpickr;
export {};
