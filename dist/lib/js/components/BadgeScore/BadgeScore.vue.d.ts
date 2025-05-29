declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: true;
    };
    suffix: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    color: {
        type: StringConstructor;
        required: true;
        validator(color: any): boolean;
    };
    icon: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    size: {
        type: StringConstructor;
        default: "medium";
        validator(size: any): boolean;
    };
    fullWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
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
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: true;
    };
    suffix: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    color: {
        type: StringConstructor;
        required: true;
        validator(color: any): boolean;
    };
    icon: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    size: {
        type: StringConstructor;
        default: "medium";
        validator(size: any): boolean;
    };
    fullWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    icon: Record<string, any>;
    size: string;
    suffix: string;
    fullWidth: boolean;
}, {}, {
    WnlIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        icon: {
            type: ObjectConstructor;
            required: true;
            validator(icon: unknown): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: (NumberConstructor | null)[];
            default: null;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {
        sizeClassName(): string;
        isFontawesomeIcon(): boolean;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: ObjectConstructor;
            required: true;
            validator(icon: unknown): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: (NumberConstructor | null)[];
            default: null;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        rotation: number | null;
        size: string;
        flippedVertical: boolean;
        flippedHorizontal: boolean;
        touchable: boolean;
        spinning: boolean;
    }, {}, {
        FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
