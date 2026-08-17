import { TextareaHTMLAttributes } from 'vue';
import { TextAreaFieldSlots } from './TextAreaField.types';

declare function __VLS_template(): Readonly<TextAreaFieldSlots> & TextAreaFieldSlots;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    inputProps: {
        type: import('vue').PropType<TextareaHTMLAttributes>;
    };
    isAutoresizing: {
        type: import('vue').PropType<boolean>;
    };
    name: {
        type: import('vue').PropType<string>;
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
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    inputProps: {
        type: import('vue').PropType<TextareaHTMLAttributes>;
    };
    isAutoresizing: {
        type: import('vue').PropType<boolean>;
    };
    name: {
        type: import('vue').PropType<string>;
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
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
