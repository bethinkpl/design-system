declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    contentText: {
        type: StringConstructor;
        default: null;
    };
    meaning: {
        type: StringConstructor;
        default: "primary";
        validator(meaning: unknown): boolean;
    };
    status: {
        type: StringConstructor;
        default: "default";
        validator(status: unknown): boolean;
    };
    state: {
        type: StringConstructor;
        default: "default";
        validator(state: unknown): boolean;
    };
    selectedIcon: {
        type: ObjectConstructor;
        default(): import('@fortawesome/fontawesome-common-types').IconDefinition;
        validator(selectedIcon: unknown): boolean;
    };
}>, {}, {
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
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    contentText: {
        type: StringConstructor;
        default: null;
    };
    meaning: {
        type: StringConstructor;
        default: "primary";
        validator(meaning: unknown): boolean;
    };
    status: {
        type: StringConstructor;
        default: "default";
        validator(status: unknown): boolean;
    };
    state: {
        type: StringConstructor;
        default: "default";
        validator(state: unknown): boolean;
    };
    selectedIcon: {
        type: ObjectConstructor;
        default(): import('@fortawesome/fontawesome-common-types').IconDefinition;
        validator(selectedIcon: unknown): boolean;
    };
}>> & Readonly<{}>, {
    label: string;
    state: string;
    selectedIcon: Record<string, any>;
    status: string;
    contentText: string;
    meaning: string;
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
            type: NumberConstructor;
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
            type: NumberConstructor;
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
        rotation: number;
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
