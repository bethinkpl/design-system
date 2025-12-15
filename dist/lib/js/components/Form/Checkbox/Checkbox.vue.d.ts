import { CheckboxElevation, CheckboxSize, CheckboxState, CheckboxValue } from './Checkbox.consts';

declare function __VLS_template(): Readonly<{
    default?(): any;
}> & {
    default?(): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<CheckboxValue>;
    size: {
        type: import('vue').PropType<CheckboxSize>;
    };
    state: {
        type: import('vue').PropType<CheckboxState>;
    };
    elevation: {
        type: import('vue').PropType<CheckboxElevation>;
    };
    value: {
        type: import('vue').PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<CheckboxValue>;
    size: {
        type: import('vue').PropType<CheckboxSize>;
    };
    state: {
        type: import('vue').PropType<CheckboxState>;
    };
    elevation: {
        type: import('vue').PropType<CheckboxElevation>;
    };
    value: {
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
