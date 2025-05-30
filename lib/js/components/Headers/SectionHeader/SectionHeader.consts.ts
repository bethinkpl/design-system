import { Value } from '../../../utils/type.utils';
import { ICON_COLORS } from '../../Icons/Icon';

export const SECTION_HEADER_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};

export type SectionHeaderSize = Value<typeof SECTION_HEADER_SIZES>;

export const SECTION_HEADER_MOBILE_LAYOUTS = {
	VERTICAL: 'vertical',
	HORIZONTAL: 'horizontal',
} as const;

export type SectionHeaderMobileLayout = Value<typeof SECTION_HEADER_MOBILE_LAYOUTS>;

export const SECTION_HEADER_ICON_COLORS = {
	ACCENT: ICON_COLORS.ACCENT,
	DANGER: ICON_COLORS.DANGER,
	DEFAULT: ICON_COLORS.DEFAULT,
	FAIL: ICON_COLORS.FAIL,
	INFO: ICON_COLORS.INFO,
	INVERTED: ICON_COLORS.INVERTED,
	NEUTRAL: ICON_COLORS.NEUTRAL,
	NEUTRAL_STRONG: ICON_COLORS.NEUTRAL_STRONG,
	NEUTRAL_WEAK: ICON_COLORS.NEUTRAL_WEAK,
	PRIMARY: ICON_COLORS.PRIMARY,
	PRIMARY_WEAK: ICON_COLORS.PRIMARY_WEAK,
	SUCCESS: ICON_COLORS.SUCCESS,
	WARNING: ICON_COLORS.WARNING,
};

export type SectionHeaderIconColor = Value<typeof SECTION_HEADER_ICON_COLORS>;
