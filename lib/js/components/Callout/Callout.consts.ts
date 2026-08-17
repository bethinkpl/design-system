import { Value } from '../../utils/type.utils';
import { FEATURE_ICON_COLOR, FeatureIconColor } from '../Icons/FeatureIcon/FeatureIcon.consts';
import { TEXT_GROUP_MAIN_TEXT_COLORS, TextGroupMainTextColor } from '../TextGroup/TextGroup.consts';

export const CALLOUT_LAYOUTS = {
	VERTICAL: 'vertical',
	HORIZONTAL: 'horizontal',
} as const;

export type CalloutLayout = Value<typeof CALLOUT_LAYOUTS>;

export const CALLOUT_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type CalloutSize = Value<typeof CALLOUT_SIZES>;

// Aliased so the sets can never drift from the components they are forwarded to.
export const CALLOUT_ICON_COLORS = FEATURE_ICON_COLOR;
export type CalloutIconColor = FeatureIconColor;

export const CALLOUT_MAIN_TEXT_COLORS = TEXT_GROUP_MAIN_TEXT_COLORS;
export type CalloutMainTextColor = TextGroupMainTextColor;
