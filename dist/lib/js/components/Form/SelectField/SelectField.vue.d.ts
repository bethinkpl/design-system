import { SelectFieldSlots, SelectFieldValue } from './SelectField.types';

declare function __VLS_template(): Readonly<SelectFieldSlots> & SelectFieldSlots;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<SelectFieldValue>;
    options: {
        type: import('vue').PropType<(import('./SelectField.types').SelectFieldOption | import('./SelectField.types').SelectFieldOptionGroup)[]>;
        required: true;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    leftIcon: import('../../Icons/Icon').IconItem | null;
    ariaLabel: {
        type: import('vue').PropType<string>;
    };
    maxHeight: {
        type: import('vue').PropType<string | number>;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
    };
    isGroupLabelUppercase: {
        type: import('vue').PropType<boolean>;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    state: {
        type: import('vue').PropType<"default" | "success" | "error" | "disabled">;
    };
    hasRequiredIndicator: {
        type: import('vue').PropType<boolean>;
    };
    labelInfo: {
        type: import('vue').PropType<string>;
    };
    subLabel: {
        type: import('vue').PropType<string>;
    };
    fieldId: {
        type: import('vue').PropType<string>;
    };
    messageText: {
        type: import('vue').PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "open-change": (isOpen: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<SelectFieldValue>;
    options: {
        type: import('vue').PropType<(import('./SelectField.types').SelectFieldOption | import('./SelectField.types').SelectFieldOptionGroup)[]>;
        required: true;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    leftIcon: import('../../Icons/Icon').IconItem | null;
    ariaLabel: {
        type: import('vue').PropType<string>;
    };
    maxHeight: {
        type: import('vue').PropType<string | number>;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
    };
    isGroupLabelUppercase: {
        type: import('vue').PropType<boolean>;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    state: {
        type: import('vue').PropType<"default" | "success" | "error" | "disabled">;
    };
    hasRequiredIndicator: {
        type: import('vue').PropType<boolean>;
    };
    labelInfo: {
        type: import('vue').PropType<string>;
    };
    subLabel: {
        type: import('vue').PropType<string>;
    };
    fieldId: {
        type: import('vue').PropType<string>;
    };
    messageText: {
        type: import('vue').PropType<string>;
    };
}>> & Readonly<{
    "onOpen-change"?: ((isOpen: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
