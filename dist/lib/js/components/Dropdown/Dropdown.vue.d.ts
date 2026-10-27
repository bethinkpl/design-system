import { DropdownAlign, DropdownRadius } from './Dropdown.consts';

declare function toggle(): void;
declare function close(): void;
declare function __VLS_template(): {
    reference?(_: {
        isOpen: boolean;
        toggle: typeof toggle;
    }): any;
    default?(_: {
        close: typeof close;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    open: import('vue').PropType<boolean>;
    appendToBody: {
        type: import('vue').PropType<boolean>;
    };
    collisionBoundary: {
        type: import('vue').PropType<Element | null>;
    };
    hasSameWidth: {
        type: import('vue').PropType<boolean>;
    };
    radius: {
        type: import('vue').PropType<DropdownRadius>;
    };
    align: {
        type: import('vue').PropType<DropdownAlign>;
    };
    maxHeight: {
        type: import('vue').PropType<string | null>;
    };
    sideFlip: {
        type: import('vue').PropType<boolean>;
    };
    hideWhenDetached: {
        type: import('vue').PropType<boolean>;
    };
}>, {
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    open: import('vue').PropType<boolean>;
    appendToBody: {
        type: import('vue').PropType<boolean>;
    };
    collisionBoundary: {
        type: import('vue').PropType<Element | null>;
    };
    hasSameWidth: {
        type: import('vue').PropType<boolean>;
    };
    radius: {
        type: import('vue').PropType<DropdownRadius>;
    };
    align: {
        type: import('vue').PropType<DropdownAlign>;
    };
    maxHeight: {
        type: import('vue').PropType<string | null>;
    };
    sideFlip: {
        type: import('vue').PropType<boolean>;
    };
    hideWhenDetached: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
