declare const _default: import('vue').DefineComponent<Readonly<import('vue').ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    hovered: boolean;
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
    SURVEY_TOGGLE_MEANING: Readonly<{
        readonly PRIMARY: "primary";
        readonly NEUTRAL: "neutral";
    }>;
    SURVEY_TOGGLE_STATUSES: Readonly<{
        readonly DEFAULT: "default";
        readonly SELECTED: "selected";
    }>;
    SURVEY_TOGGLE_STATES: Readonly<{
        readonly DEFAULT: "default";
        readonly HOVERED: "hovered";
        readonly DISABLED: "disabled";
    }>;
}, {
    isPrimarySelected(): boolean;
    isPrimary(): boolean;
    isNeutral(): boolean;
    isNeutralSelected(): boolean;
    isHoveredState(): any;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, readonly string[] | Readonly<import('vue').ExtractPropTypes<Readonly<import('vue').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _default;
