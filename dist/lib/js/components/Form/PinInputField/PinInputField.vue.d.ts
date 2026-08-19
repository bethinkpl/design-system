import { PinInputFieldSlots } from './PinInputField.types';

declare function __VLS_template(): Readonly<PinInputFieldSlots> & PinInputFieldSlots;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    state: {
        type: import('vue').PropType<import('./PinInputField.consts').PinInputFieldState>;
    };
    length: {
        type: import('vue').PropType<number>;
    };
    otp: {
        type: import('vue').PropType<boolean>;
    };
    type: {
        type: import('vue').PropType<import('./PinInputField.consts').PinInputFieldType>;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    ariaLabel: {
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
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    complete: (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    state: {
        type: import('vue').PropType<import('./PinInputField.consts').PinInputFieldState>;
    };
    length: {
        type: import('vue').PropType<number>;
    };
    otp: {
        type: import('vue').PropType<boolean>;
    };
    type: {
        type: import('vue').PropType<import('./PinInputField.consts').PinInputFieldType>;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    ariaLabel: {
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
}>> & Readonly<{
    onComplete?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
