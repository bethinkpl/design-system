import { MaybeRefOrGetter, Ref } from 'vue';

export declare function useFormFieldWithinForm<T>(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<T>): {
    field: import('vee-validate').FieldContext<T> | null;
    value: Ref<T, T>;
    errors: Ref<string[], string[]>;
};
