import { Value } from '../../../utils/type.utils';
import { InjectionKey } from 'vue';

export declare const MENU_LAYOUTS: {
    DEFAULT: string;
    EXTENSIVE: string;
};
export type MenuLayout = Value<typeof MENU_LAYOUTS>;
export declare const MENU_LAYOUT_INJECTION_KEY: InjectionKey<MenuLayout>;
