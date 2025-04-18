import { Value } from '../../../utils/type.utils';

export const DATE_PICKER_COLORS = {
	NEUTRAL_WEAK: 'neutralWeak',
	NEUTRAL: 'neutral',
	WARNING: 'warning',
	DANGER: 'danger',
};

export type DatePickerColors = Value<typeof DATE_PICKER_COLORS>;

export const DATE_PICKER_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
};

export type DatePickerStates = Value<typeof DATE_PICKER_STATES>;

export const DATE_PICKER_CALENDAR_POSITIONS = {
	TOP: 'top',
	TOP_LEFT: 'top-left',
	TOP_RIGHT: 'top-right',
	BOTTOM: 'bottom',
	BOTTOM_LEFT: 'bottom-left',
	BOTTOM_RIGHT: 'bottom-right',
};

export type DatePickerCalendarPositions = Value<typeof DATE_PICKER_CALENDAR_POSITIONS>;
export const DATE_PICKER_TRIGGER_TYPES = {
	BOX: 'box',
	TILE: 'tile',
};

export type DatePickerTriggerTypes = Value<typeof DATE_PICKER_TRIGGER_TYPES>;

export const FLATPICKR_POSITIONS = {
	[DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT]: 'below left',
	[DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_RIGHT]: 'below right',
	[DATE_PICKER_CALENDAR_POSITIONS.BOTTOM]: 'below',
	[DATE_PICKER_CALENDAR_POSITIONS.TOP_LEFT]: 'above left',
	[DATE_PICKER_CALENDAR_POSITIONS.TOP_RIGHT]: 'above right',
	[DATE_PICKER_CALENDAR_POSITIONS.TOP]: 'above',
} as const;
