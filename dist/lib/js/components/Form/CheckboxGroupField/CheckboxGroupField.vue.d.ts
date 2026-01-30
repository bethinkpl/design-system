import { CheckboxState } from '../Checkbox/Checkbox.consts';

declare function __VLS_template(): Readonly<Omit<import('../FormField').FormFieldSlots, "field"> & {
    field: () => any;
}> & Omit<import('../FormField').FormFieldSlots, "field"> & {
    field: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<Array<string>>;
    size: {
        type: import('vue').PropType<import('../Checkbox/Checkbox.consts').CheckboxSize>;
    };
    state: {
        type: import('vue').PropType<CheckboxState>;
    };
    elevation: {
        type: import('vue').PropType<import('../Checkbox/Checkbox.consts').CheckboxElevation>;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
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
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<Array<string>>;
    size: {
        type: import('vue').PropType<import('../Checkbox/Checkbox.consts').CheckboxSize>;
    };
    state: {
        type: import('vue').PropType<CheckboxState>;
    };
    elevation: {
        type: import('vue').PropType<import('../Checkbox/Checkbox.consts').CheckboxElevation>;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
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
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
