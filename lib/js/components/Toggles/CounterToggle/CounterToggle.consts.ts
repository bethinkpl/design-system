import { Value } from '../../../utils/type.utils';

export const COUNTER_TOGGLE_COLORS = {
	INVERTED: 'inverted',
	NEUTRAL_STRONG: 'neutralStrong',
	NEUTRAL: 'neutral',
	PRIMARY: 'primary',
} as const;

export type CounterToggleColor = Value<typeof COUNTER_TOGGLE_COLORS>;
