import { Value } from '../../utils/type.utils';

export const WELL_PADDINGS = {
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type WellPadding = Value<typeof WELL_PADDINGS>;
