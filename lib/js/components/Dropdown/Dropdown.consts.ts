import { Value } from '../../utils/type.utils';

export const DROPDOWN_RADIUSES = {
	TOP: 'top',
	BOTTOM: 'bottom',
	BOTH: 'both',
} as const;

export type DropdownRadius = Value<typeof DROPDOWN_RADIUSES>;

export const DROPDOWN_PLACEMENTS = {
	BOTTOM_START: 'bottom-start',
	BOTTOM_END: 'bottom-end',
} as const;

export type DropdownPlacement = Value<typeof DROPDOWN_PLACEMENTS>;
