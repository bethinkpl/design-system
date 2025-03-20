import { Value } from '../../utils/type.utils';

export declare const BADGE_SIZES: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
    readonly X_LARGE: "x-large";
};
export type BadgeSize = Value<typeof BADGE_SIZES>;
export declare const BADGE_COLORS: {
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly DANGER: "danger";
    readonly FAIL: "fail";
    readonly NEUTRAL: "neutral";
};
export type BadgeColor = Value<typeof BADGE_COLORS>;
export declare const BADGE_ELEVATIONS: {
    readonly NONE: "none";
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
};
export type BadgeElevation = Value<typeof BADGE_ELEVATIONS>;
