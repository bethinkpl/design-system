import { TooltipPlacement } from './Tooltip.consts';
import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
    isHiddenOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
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
        class: string | null;
        ptOptions: {
            mergeProps: boolean;
        };
        pt: {
            text: string;
            arrow: string;
        };
    };
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
    isHiddenOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    text: string;
    placement: TooltipPlacement;
    isDisabled: boolean;
    isPointerVisible: boolean;
    inline: boolean;
    isHiddenOnMobile: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
