import { TooltipPlacement } from './Tooltip.consts';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    placement: {
        type: PropType<TooltipPlacement>;
        default: "bottom";
        validator(placement: TooltipPlacement): boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPointerVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    tooltipParams(): {
        position: any;
        event: string;
    };
    options(): {
        value: any;
        disabled: any;
        dt: {
            shadow: string;
            padding: string;
            background: string;
            color: string;
            borderRadius: string;
            maxWidth: string;
        };
        ptOptions: {
            mergeProps: boolean;
        };
        pt: {
            text: string;
            arrow: string;
        };
    };
}, {
    isTouchDevice(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placement: {
        type: PropType<TooltipPlacement>;
        default: "bottom";
        validator(placement: TooltipPlacement): boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPointerVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    text: string;
    placement: TooltipPlacement;
    isPointerVisible: boolean;
    isDisabled: boolean;
    inline: boolean;
}>;
export default _default;
