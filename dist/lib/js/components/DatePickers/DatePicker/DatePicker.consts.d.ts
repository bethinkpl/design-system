import { Value } from '../../../utils/type.utils';

export declare const DATE_PICKER_COLORS: {
    NEUTRAL: string;
    WARNING: string;
};
export declare type DatePickerColors = Value<typeof DATE_PICKER_COLORS>;
export declare const DATE_PICKER_STATES: {
    DEFAULT: string;
    DISABLED: string;
    LOADING: string;
};
export declare type DatePickerStates = Value<typeof DATE_PICKER_STATES>;
export declare const DATE_PICKER_CALENDAR_POSITIONS: {
    TOP: string;
    TOP_LEFT: string;
    TOP_RIGHT: string;
    BOTTOM: string;
    BOTTOM_LEFT: string;
    BOTTOM_RIGHT: string;
};
export declare type DatePickerCalendarPositions = Value<typeof DATE_PICKER_CALENDAR_POSITIONS>;
export declare const DATE_PICKER_TRIGGER_TYPES: {
    BOX: string;
    TILE: string;
};
export declare type DatePickerTriggerTypes = Value<typeof DATE_PICKER_TRIGGER_TYPES>;
export declare const FLATPICKR_POSITIONS: {
    readonly [x: string]: "below left" | "below right" | "below" | "above left" | "above right" | "above";
};
