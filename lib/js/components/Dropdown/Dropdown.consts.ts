import { Value } from '../../utils/type.utils';

export const DROPDOWN_RADIUSES = {
	SINGLE: 'single',
	NONE: 'none',
	BOTH: 'both',
} as const;

export type DropdownRadius = Value<typeof DROPDOWN_RADIUSES>;

export const DROPDOWN_ALIGNS = {
	START: 'start',
	END: 'end',
} as const;

export type DropdownAlign = Value<typeof DROPDOWN_ALIGNS>;
