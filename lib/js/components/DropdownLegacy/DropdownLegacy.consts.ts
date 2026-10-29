import { Value } from '../../utils/type.utils';

export const DROPDOWN_LEGACY_TRIGGER_ACTIONS = {
	CLICK: 'click',
	HOVER: 'hover',
} as const;

export type DropdownLegacyTriggerAction = Value<typeof DROPDOWN_LEGACY_TRIGGER_ACTIONS>;

export const DROPDOWN_LEGACY_RADIUSES = {
	TOP: 'top',
	BOTTOM: 'bottom',
	BOTH: 'both',
} as const;

export type DropdownLegacyRadius = Value<typeof DROPDOWN_LEGACY_RADIUSES>;

export const DROPDOWN_LEGACY_PLACEMENTS = {
	BOTTOM_START: 'bottom-start',
	BOTTOM_END: 'bottom-end',
} as const;

export type DropdownLegacyPlacement = Value<typeof DROPDOWN_LEGACY_PLACEMENTS>;
