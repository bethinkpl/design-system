import WnlIcon from '../Icons/Icon';
declare const _default: {
    name: string;
    components: {
        WnlIcon: typeof WnlIcon;
    };
    props: {
        text: {
            type: StringConstructor;
            required: boolean;
        };
        suffix: {
            type: StringConstructor;
            required: boolean;
            default: null;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(color: any): boolean;
        };
        icon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
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
    };
    data(): {
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
    };
    computed: {
        iconSize(): string;
    };
};
export default _default;
