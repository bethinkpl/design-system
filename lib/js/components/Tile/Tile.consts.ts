import { Value } from '../../utils/type.utils';

export const TILE_COLORS = {
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutralWeak',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	FAIL: 'fail',
	DANGER: 'danger',
	WARNING: 'warning',
	INFO: 'info',
} as const;

export type TileColor = Value<typeof TILE_COLORS>;

export const TILE_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type TileState = Value<typeof TILE_STATES>;

export const TILE_BORDER_COLORS = {
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutralWeak',
	PRIMARY: 'primary',
	PRIMARY_WEAK: 'primaryWeak',
	SUCCESS: 'success',
	SUCCESS_WEAK: 'successWeak',
	FAIL: 'fail',
	FAIL_WEAK: 'failWeak',
	DANGER: 'danger',
	DANGER_WEAK: 'dangerWeak',
	WARNING: 'warning',
	WARNING_WEAK: 'warningWeak',
	INFO: 'info',
	INFO_WEAK: 'infoWeak',
} as const;

export type TileBorderColors = Value<typeof TILE_BORDER_COLORS>;

export const TILE_ADDITIONAL_TEXT_MAX_WIDTHS = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type TileAdditionalTextMaxWidth = Value<typeof TILE_ADDITIONAL_TEXT_MAX_WIDTHS>;
