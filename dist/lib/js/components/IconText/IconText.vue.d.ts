import Icon from '../Icons/Icon';
import { ICON_TEXT_STATES } from './IconText.consts';
import { Value } from '../../utils/type.utils';
declare const _default: {
    name: string;
    components: {
        Icon: typeof Icon;
    };
    props: {
        color: {
            type: StringConstructor;
            default: string;
            validator(color: any): boolean;
        };
        icon: {
            type: ObjectConstructor;
            required: boolean;
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
            required: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        state: {
            type: StringConstructor;
            default: string;
            validator(value: Value<typeof ICON_TEXT_STATES>): boolean;
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
    };
    computed: {
        iconSize(): string;
    };
};
export default _default;
