import { MaybeRefOrGetter, Ref } from 'vue';

export declare function useFormFieldWithinForm<T = string>(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<T | undefined>): {
    field: import('vee-validate').FieldContext<string[]> | null;
    value: Ref<T | undefined, T | undefined> | Ref<string[], string[]>;
    errors: Ref<string[], string[]>;
};
