import { Value } from '../../../utils/type.utils';
import type { InjectionKey } from 'vue';

export const MENU_LAYOUTS = {
	DEFAULT: 'default',
	EXTENSIVE: 'extensive',
};

export type MenuLayout = Value<typeof MENU_LAYOUTS>;

export const MENU_LAYOUT_INJECTION_KEY: InjectionKey<MenuLayout> = Symbol('menuLayout');
