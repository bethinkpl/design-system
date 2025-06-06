import { InputHTMLAttributes } from 'vue';
import { InputFieldSlots } from '../InputField/InputField.types';

declare function __VLS_template(): Readonly<Omit<InputFieldSlots, "action">> & Omit<InputFieldSlots, "action">;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    inputProps: {
        type: import('vue').PropType<InputHTMLAttributes>;
    };
    leftIcon: import('../../Icons/Icon').IconItem | null;
    suffixText: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    state: {
        type: import('vue').PropType<"success" | "default" | "disabled" | "error">;
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
    modelValue: import('vue').PropType<string>;
    inputProps: {
        type: import('vue').PropType<InputHTMLAttributes>;
    };
    leftIcon: import('../../Icons/Icon').IconItem | null;
    suffixText: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    state: {
        type: import('vue').PropType<"success" | "default" | "disabled" | "error">;
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
