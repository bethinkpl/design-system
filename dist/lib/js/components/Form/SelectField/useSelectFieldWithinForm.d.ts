import { MaybeRefOrGetter, Ref } from 'vue';
import { SelectFieldValue } from './SelectField.types';

export declare function useSelectFieldWithinForm(name: MaybeRefOrGetter<string | undefined>, modelValue: Ref<SelectFieldValue | undefined>): {
    value: Ref<SelectFieldValue | undefined, SelectFieldValue | undefined>;
    errors: Ref<string[], string[]>;
    onClose: (event: Event) => void;
};
