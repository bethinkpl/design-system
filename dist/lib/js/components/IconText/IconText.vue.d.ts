import { ICON_TEXT_STATES } from './IconText.consts';
import { Value } from '../../utils/type.utils';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
        validator(color: unknown): boolean;
    };
    icon: {
        type: ObjectConstructor;
        required: true;
        validate: (icon: any) => boolean;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLabelBold: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator(size: unknown): boolean;
    };
    state: {
        type: StringConstructor;
        default: string;
        validator(value: Value<typeof ICON_TEXT_STATES>): boolean;
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
    ICON_TEXT_COLORS: Readonly<{
        NEUTRAL_WEAK: string;
        NEUTRAL: string;
    }>;
    ICON_TEXT_SIZES: Readonly<{
        X_SMALL: string;
        SMALL: string;
        MEDIUM: string;
    }>;
    ICON_TEXT_STATES: Readonly<{
        DEFAULT: string;
        DISABLED: string;
    }>;
}, {
    iconSize(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
        validator(color: unknown): boolean;
    };
    icon: {
        type: ObjectConstructor;
        required: true;
        validate: (icon: any) => boolean;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLabelBold: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator(size: unknown): boolean;
    };
    state: {
        type: StringConstructor;
        default: string;
        validator(value: Value<typeof ICON_TEXT_STATES>): boolean;
    };
}>> & Readonly<{}>, {
    size: string;
    color: string;
    state: string;
    isInteractive: boolean;
    isLabelBold: boolean;
}, {}, {
    Icon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        size: string;
        rotation: number;
        flippedVertical: boolean;
        flippedHorizontal: boolean;
        touchable: boolean;
        spinning: boolean;
    }, {}, {
        FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
