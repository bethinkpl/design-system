import { MaybeRefOrGetter, Ref } from 'vue';

export declare function usePinInputFieldWithinForm(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<string | undefined>): {
    value: Ref<string | undefined, string | undefined>;
    errors: import('vue').ComputedRef<string[]>;
    onComplete: (event: Event) => void;
    onBlur: (event: Event) => void;
};
