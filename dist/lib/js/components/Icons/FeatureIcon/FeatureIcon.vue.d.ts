declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    icon: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    color: {
        type: StringConstructor;
        required: true;
        validator(color: string): boolean;
    };
    doubleBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    FEATURE_ICON_COLOR: Readonly<{
        DANGER: string;
        INFO: string;
        NEUTRAL: string;
        NEUTRAL_WEAK: string;
        PRIMARY: string;
        SUCCESS: string;
        WARNING: string;
    }>;
    FEATURE_ICON_SIZES: Readonly<{
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        X_LARGE: string;
    }>;
}, {
    iconSize(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    color: {
        type: StringConstructor;
        required: true;
        validator(color: string): boolean;
    };
    doubleBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    icon: Record<string, any>;
    size: string;
    doubleBackground: boolean;
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
