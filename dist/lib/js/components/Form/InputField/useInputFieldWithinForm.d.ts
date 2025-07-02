import { MaybeRefOrGetter, Ref } from 'vue';

export declare function useInputFieldWithinForm(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<string | undefined>): {
    onBlur: (event: Event) => void;
    onInput: () => void;
    value: Ref<unknown, unknown>;
    errors: Ref<string[], string[]>;
};
