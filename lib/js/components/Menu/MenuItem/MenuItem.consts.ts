import { Value } from '../../../utils/type.utils';
import type { InjectionKey } from 'vue';

export const MENU_ITEM_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type MenuItemSize = Value<typeof MENU_ITEM_SIZES>;

export const MENU_ITEM_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
};

export type MenuItemState = Value<typeof MENU_ITEM_STATES>;

export const MENU_ITEM_BACKGROUND_COLORS = {
	NEUTRAL_WEAK: 'neutralWeak',
	NEUTRAL: 'neutral',
};

export type MenuItemBackgroundColor = Value<typeof MENU_ITEM_BACKGROUND_COLORS>;

export const MENU_ITEM_LEVEL_INJECTION_KEY: InjectionKey<number> = Symbol('menuItemLevel');
