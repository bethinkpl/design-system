import { Value } from '../../../utils/type.utils';
import DsRipple from '../../Ripple';
import { TOGGLE_BUTTON_COLORS, TOGGLE_BUTTON_ELEVATIONS, TOGGLE_BUTTON_RADIUSES, TOGGLE_BUTTON_SIZES, TOGGLE_BUTTON_TYPES } from './ToggleButton.consts';
declare const _default: {
    name: string;
    components: {
        DsRipple: typeof DsRipple;
    };
    props: {
        text: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validator(value: Value<typeof TOGGLE_BUTTON_SIZES>): boolean;
        };
        type: {
            type: StringConstructor;
            default: "filled";
            validator(value: Value<typeof TOGGLE_BUTTON_TYPES>): boolean;
        };
        color: {
            type: StringConstructor;
            default: "primary";
            validator(value: Value<typeof TOGGLE_BUTTON_COLORS>): boolean;
        };
        radius: {
            type: StringConstructor;
            default: "capsule";
            validator(value: Value<typeof TOGGLE_BUTTON_RADIUSES>): boolean;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        elevation: {
            type: StringConstructor;
            default: "none";
            validator(value: Value<typeof TOGGLE_BUTTON_ELEVATIONS>): boolean;
        };
    };
    emits: string[];
    data(): {
        TOGGLE_BUTTON_COLORS: Readonly<{
            readonly PRIMARY: "primary";
            readonly NEUTRAL: "neutral";
        }>;
        TOGGLE_BUTTON_ELEVATIONS: Readonly<{
            readonly NONE: "none";
            readonly X_SMALL: "x-small";
            readonly SMALL: "small";
        }>;
        TOGGLE_BUTTON_SIZES: Readonly<{
            readonly X_SMALL: "x-small";
            readonly SMALL: "small";
            readonly MEDIUM: "medium";
        }>;
        TOGGLE_BUTTON_TYPES: Readonly<{
            readonly FILLED: "filled";
            readonly OUTLINED: "outlined";
        }>;
        TOGGLE_BUTTON_RADIUSES: Readonly<{
            readonly CAPSULE: "capsule";
            readonly ROUNDED: "rounded";
        }>;
    };
    computed: {
        colorClassName(): string;
        rippleColor(): any;
        isLong(): boolean;
    };
};
export default _default;
