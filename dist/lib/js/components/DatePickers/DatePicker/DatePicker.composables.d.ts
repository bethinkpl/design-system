import { Ref } from 'vue';
import { Instance as DatePickerInstance } from 'flatpickr/dist/types/instance';
import { DatePickerCalendarPositions } from './index';

export declare function initFlatpickr(flatpickrInputRef: Ref<HTMLInputElement>, dateRangePickerRef: Ref<HTMLElement>, props: {
    disableDates: Array<Date>;
    minDate: Date | null;
    maxDate: Date | null;
    calendarPosition: DatePickerCalendarPositions;
}, onChange: (dates: Array<Date>) => void, defaultDates: Date | Array<Date>, mode?: 'single' | 'range'): {
    datePicker: DatePickerInstance | null;
    createDatePicker: () => Promise<DatePickerInstance | undefined>;
    isOpen: Ref<boolean>;
    toggle: () => void;
};
