import { Value } from '../../../utils/type.utils';
import { BADGE_COLORS } from './Badge.consts';
import DsIcon from '../../Icons/Icon';
declare const _default: {
    name: string;
    components: {
        DsIcon: typeof DsIcon;
    };
    props: {
        label: {
            type: StringConstructor;
            required: boolean;
        };
        color: {
            type: StringConstructor;
            default: "neutral";
            validator(value: Value<typeof BADGE_COLORS>): boolean;
        };
        icon: {
            type: ObjectConstructor;
            default: null;
            validate: (icon: any) => boolean;
        };
    };
    data(): {
        BADGE_COLORS: Readonly<{
            readonly NEUTRAL: "neutral";
            readonly PRIMARY: "primary";
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
    };
};
export default _default;
