import type { InjectionKey, Ref } from 'vue';
import type { CheckboxSize, CheckboxState, CheckboxElevation } from '../Checkbox';

export interface CheckboxGroupContext {
	size: Ref<CheckboxSize>;
	state: Ref<CheckboxState>;
	elevation: Ref<CheckboxElevation>;
}

export const CHECKBOX_GROUP_INJECTION_KEY: InjectionKey<CheckboxGroupContext> =
	Symbol('checkboxGroup');
