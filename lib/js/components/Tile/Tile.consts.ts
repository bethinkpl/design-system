import { Value } from '../../utils/type.utils';

export const TILE_COLORS = {
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutralWeak',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	FAIL: 'fail',
	WARNING: 'warning',
	INFO: 'info',
} as const;

export type TileColors = Value<typeof TILE_COLORS>;

export const TILE_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type TileStates = Value<typeof TILE_STATES>;
