import { PopoverAlign, PopoverColor, PopoverSide, PopoverSize } from './Popover.consts';

declare function close(): void;
declare function __VLS_template(): {
    reference?(_: {}): any;
    default?(_: {
        close: typeof close;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    open: import('vue').PropType<boolean>;
    collisionBoundary: {
        type: import('vue').PropType<Element | null>;
    };
    isDisabled: {
        type: import('vue').PropType<boolean>;
    };
    isManual: {
        type: import('vue').PropType<boolean>;
    };
    side: {
        type: import('vue').PropType<PopoverSide>;
    };
    align: {
        type: import('vue').PropType<PopoverAlign>;
    };
    color: {
        type: import('vue').PropType<PopoverColor>;
    };
    titleText: {
        type: import('vue').PropType<string | null>;
    };
    subtitleText: {
        type: import('vue').PropType<string | null>;
    };
    buttonText: {
        type: import('vue').PropType<string | null>;
    };
    headerImageUrl: {
        type: import('vue').PropType<string | null>;
    };
    appendToBody: {
        type: import('vue').PropType<boolean>;
    };
    sideFlip: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<PopoverSize>;
    };
    maxHeight: {
        type: import('vue').PropType<string | null>;
    };
    isPointerVisible: {
        type: import('vue').PropType<boolean>;
    };
    hideWhenDetached: {
        type: import('vue').PropType<boolean>;
    };
    stickToBoundary: {
        type: import('vue').PropType<boolean>;
    };
}>, {
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "button-click": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    open: import('vue').PropType<boolean>;
    collisionBoundary: {
        type: import('vue').PropType<Element | null>;
    };
    isDisabled: {
        type: import('vue').PropType<boolean>;
    };
    isManual: {
        type: import('vue').PropType<boolean>;
    };
    side: {
        type: import('vue').PropType<PopoverSide>;
    };
    align: {
        type: import('vue').PropType<PopoverAlign>;
    };
    color: {
        type: import('vue').PropType<PopoverColor>;
    };
    titleText: {
        type: import('vue').PropType<string | null>;
    };
    subtitleText: {
        type: import('vue').PropType<string | null>;
    };
    buttonText: {
        type: import('vue').PropType<string | null>;
    };
    headerImageUrl: {
        type: import('vue').PropType<string | null>;
    };
    appendToBody: {
        type: import('vue').PropType<boolean>;
    };
    sideFlip: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<PopoverSize>;
    };
    maxHeight: {
        type: import('vue').PropType<string | null>;
    };
    isPointerVisible: {
        type: import('vue').PropType<boolean>;
    };
    hideWhenDetached: {
        type: import('vue').PropType<boolean>;
    };
    stickToBoundary: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    "onButton-click"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
