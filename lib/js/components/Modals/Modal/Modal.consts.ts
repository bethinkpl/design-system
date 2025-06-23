import { Value } from '../../../utils/type.utils';

export const MODAL_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type ModalSize = Value<typeof MODAL_SIZES>;

export const MODAL_HEADER_TITLE_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type ModalHeaderTitleSize = Value<typeof MODAL_HEADER_TITLE_SIZES>;
