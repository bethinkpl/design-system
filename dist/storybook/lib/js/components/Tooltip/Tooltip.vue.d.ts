import { TooltipPlacement } from './Tooltip.consts';
import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
    isDisabled: boolean;
    isPointerVisible: boolean;
    inline: boolean;
}>;
export default _default;
