import { Value } from '../../utils/type.utils';
import { FeatureIconColor } from '../Icons/FeatureIcon/FeatureIcon.consts';
import { TextGroupMainTextColor } from '../TextGroup/TextGroup.consts';

export declare const CALLOUT_LAYOUTS: {
    readonly VERTICAL: "vertical";
    readonly HORIZONTAL: "horizontal";
};
export type CalloutLayout = Value<typeof CALLOUT_LAYOUTS>;
export declare const CALLOUT_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type CalloutSize = Value<typeof CALLOUT_SIZES>;
export declare const CALLOUT_ICON_COLORS: {
    readonly DANGER: "danger";
    readonly INFO: "info";
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutralWeak";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly FAIL: "fail";
    readonly ACCENT: "accent";
};
export type CalloutIconColor = FeatureIconColor;
export declare const CALLOUT_MAIN_TEXT_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly PRIMARY: "primary";
};
export type CalloutMainTextColor = TextGroupMainTextColor;
