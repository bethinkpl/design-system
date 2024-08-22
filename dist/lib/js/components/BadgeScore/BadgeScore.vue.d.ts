declare const _default: import('vue').DefineComponent<Readonly<import('vue').ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    ICON_SIZES: Readonly<{
        XXX_SMALL: string;
        XX_SMALL: string;
        X_SMALL: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        X_LARGE: string;
        XX_LARGE: string;
    }>;
    BADGE_SCORE_COLORS: Readonly<{
        readonly SUCCESS: "success";
        readonly WARNING: "warning";
        readonly FAIL: "fail";
        readonly INVERTED: "inverted";
        readonly NEUTRAL: "neutral";
        readonly NEUTRAL_WEAK: "neutral-weak";
    }>;
    BADGE_SCORE_SIZES: Readonly<{
        readonly MEDIUM: "medium";
        readonly SMALL: "small";
        readonly XSMALL: "extra small";
    }>;
}, {
    iconSize(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, readonly string[] | Readonly<import('vue').ExtractPropTypes<Readonly<import('vue').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _default;
