import { PopOverColor, PopOverPlacement, PopOverSize, PopOverTriggerAction } from './PopOver.consts';

declare function close(): void;
declare function __VLS_template(): {
    reference?(_: {}): any;
    default?(_: {
        close: typeof close;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    boundariesSelector?: string | null;
    triggerAction?: PopOverTriggerAction;
    placement?: PopOverPlacement;
    forceShow?: boolean;
    color?: PopOverColor;
    titleText?: string | null;
    subtitleText?: string | null;
    buttonText?: string | null;
    headerImageUrl?: string | null;
    appendToBody?: boolean;
    sideFlip?: boolean;
    size?: PopOverSize;
    maxHeight?: boolean;
    isPointerVisible?: boolean;
    rootClass?: string;
}>>, {
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "button-click": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    boundariesSelector?: string | null;
    triggerAction?: PopOverTriggerAction;
    placement?: PopOverPlacement;
    forceShow?: boolean;
    color?: PopOverColor;
    titleText?: string | null;
    subtitleText?: string | null;
    buttonText?: string | null;
    headerImageUrl?: string | null;
    appendToBody?: boolean;
    sideFlip?: boolean;
    size?: PopOverSize;
    maxHeight?: boolean;
    isPointerVisible?: boolean;
    rootClass?: string;
}>>> & Readonly<{
    "onButton-click"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
