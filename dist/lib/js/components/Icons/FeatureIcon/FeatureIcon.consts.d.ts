import { Value } from '../../../utils/type.utils';

export declare const FEATURE_ICON_SIZES: {
    readonly X_SMALL: "xSmall";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
    readonly X_LARGE: "xLarge";
};
export type FeatureIconSize = Value<typeof FEATURE_ICON_SIZES>;
export declare const FEATURE_ICON_COLOR: {
    readonly DANGER: "danger";
    readonly INFO: "info";
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutralWeak";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly FAIL: "fail";
};
export type FeatureIconColor = Value<typeof FEATURE_ICON_COLOR>;
