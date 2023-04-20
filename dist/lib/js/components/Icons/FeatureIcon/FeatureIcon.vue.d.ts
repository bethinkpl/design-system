import WnlIcon from '../Icon';
declare const _default: {
    name: string;
    components: {
        WnlIcon: typeof WnlIcon;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(color: string): boolean;
        };
        doubleBackground: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
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
    };
    computed: {
        iconSize(): string;
    };
};
export default _default;
