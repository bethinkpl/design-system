import { MaybeRefOrGetter, Ref } from 'vue';

export declare function useFormFieldWithinForm<T = string>(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<T | undefined>): {
    field: import('vee-validate').FieldContext<string[]> | null;
    value: Ref<string[], string[]> | Ref<T | undefined, T | undefined>;
    errors: Ref<string[], string[]>;
};
