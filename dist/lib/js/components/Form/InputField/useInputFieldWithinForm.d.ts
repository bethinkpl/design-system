import { MaybeRefOrGetter, Ref } from 'vue';

export declare function useInputFieldWithinForm(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<string | undefined>): {
    onBlur: (event: Event) => void;
    onInput: () => void;
    value: Ref<string | undefined, string | undefined> | Ref<string[], string[]>;
    errors: Ref<string[], string[]>;
};
