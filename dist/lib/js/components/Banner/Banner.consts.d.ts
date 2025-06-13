import { Value } from '../../utils/type.utils';

export declare const BANNER_COLORS: {
    readonly DEFAULT: "default";
    readonly NEUTRAL: "neutral";
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly FAIL: "fail";
    readonly DANGER: "danger";
};
export type BannerColor = Value<typeof BANNER_COLORS>;
export declare const BANNER_SIZES: {
    SMALL: string;
    MEDIUM: string;
};
export type BannerSize = Value<typeof BANNER_SIZES>;
