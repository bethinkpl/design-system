export declare const BANNER_COLORS: {
    readonly DEFAULT: "default";
    readonly NEUTRAL: "neutral";
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly FAIL: "fail";
    readonly DANGER: "danger";
};
export type BannerColor = typeof BANNER_COLORS[keyof typeof BANNER_COLORS];
export declare const BANNER_LAYOUTS: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
export type BannerLayout = typeof BANNER_LAYOUTS[keyof typeof BANNER_LAYOUTS];
