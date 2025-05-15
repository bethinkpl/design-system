import { Value } from '../../../utils/type.utils';

export declare const SECTION_HEADER_SIZES: {
    XX_SMALL: string;
    X_SMALL: string;
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
};
export type SectionHeaderSize = Value<typeof SECTION_HEADER_SIZES>;
export declare const SECTION_HEADER_MOBILE_LAYOUTS: {
    readonly VERTICAL: "vertical";
    readonly HORIZONTAL: "horizontal";
};
export type SectionHeaderMobileLayout = Value<typeof SECTION_HEADER_MOBILE_LAYOUTS>;
export declare const SECTION_HEADER_ICON_COLORS: {
    ACCENT: string;
    DANGER: string;
    DEFAULT: string;
    FAIL: string;
    INFO: string;
    INVERTED: string;
    NEUTRAL: string;
    NEUTRAL_STRONG: string;
    NEUTRAL_WEAK: string;
    PRIMARY: string;
    PRIMARY_WEAK: string;
    SUCCESS: string;
    WARNING: string;
};
export type SectionHeaderIconColor = Value<typeof SECTION_HEADER_ICON_COLORS>;
