import { InjectionKey, Ref } from 'vue';

export const FORM_FIELD_ID = Symbol() as InjectionKey<Ref<string>>;
