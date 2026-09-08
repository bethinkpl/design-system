import { IconItem } from '../../Icons/Icon';
import {
	SelectListItemSelectionMode,
	SelectListItemSize,
	SelectListItemState,
} from './SelectListItem.consts';

// DS don't have vue-router installed, so we define a loose type which should match RouteLocationRaw
export type RouterLocation = string | Record<string, unknown>;

export interface SelectListItemProps {
	href?: string;
	to?: RouterLocation;
	iconLeft?: IconItem | null;
	isSelected?: boolean;
	label: string;
	eyebrowText?: string;
	isEyebrowTextUppercase?: boolean;
	selectionMode?: SelectListItemSelectionMode;
	size?: SelectListItemSize;
	state?: SelectListItemState;
}

export interface SelectListItemSlots {
	accessory?: () => any;
	metadata?: () => any;
	text?: () => any;
}
