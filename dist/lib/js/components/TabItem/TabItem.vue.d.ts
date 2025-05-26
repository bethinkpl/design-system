declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    icon: {
        type: (ObjectConstructor | null)[];
        default: null;
        validator(icon: unknown): boolean;
    };
    isSelected: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    labelEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: "M";
    };
}>, {}, {
    TAB_ITEM_SIZES: Readonly<{
        readonly SMALL: "S";
        readonly MEDIUM: "M";
    }>;
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
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "click"[], "click", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: (ObjectConstructor | null)[];
        default: null;
        validator(icon: unknown): boolean;
    };
    isSelected: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    labelEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: "M";
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    icon: Record<string, any> | null;
    size: string;
    label: string;
    labelEllipsis: boolean;
}, {}, {
    DsIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
