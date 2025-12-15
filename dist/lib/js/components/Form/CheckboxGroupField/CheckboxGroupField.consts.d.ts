import { InjectionKey, Ref } from 'vue';
import { CheckboxSize, CheckboxState, CheckboxElevation } from '../Checkbox';

export interface CheckboxGroupContext {
    size: Ref<CheckboxSize>;
    state: Ref<CheckboxState>;
    elevation: Ref<CheckboxElevation>;
}
export declare const CHECKBOX_GROUP_INJECTION_KEY: InjectionKey<CheckboxGroupContext>;
