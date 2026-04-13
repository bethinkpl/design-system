import { Value } from '../../utils/type.utils';

export const FLAG_SIZES = {
	XXXS: 'xxxs',
	XXS: 'xxs',
	XS: 'xs',
	S: 's',
	M: 'm',
	L: 'l',
	XL: 'xl',
	XXL: 'xxl',
} as const;

export type FlagSize = Value<typeof FLAG_SIZES>;
