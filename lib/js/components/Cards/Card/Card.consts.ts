import { Value } from '../../../utils/type.utils';
import {
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_RADIUSES,
	CONTAINER_RIBBON_SIZES,
} from '../../ContainerRibbon';

export const CARD_PADDING_SIZES = {
	SMALL: 'small',
	LARGE: 'large',
} as const;

export type CardPaddingSize = Value<typeof CARD_PADDING_SIZES>;

export const CARD_BORDER_COLORS = CONTAINER_RIBBON_COLORS;

export type CardBorderColors = Value<typeof CARD_BORDER_COLORS>;

export const CARD_BORDER_SIZES = CONTAINER_RIBBON_SIZES;

export type CardBorderSizes = Value<typeof CARD_BORDER_SIZES>;

export const CARD_BORDER_POSITIONS = {
	TOP: 'top',
	LEFT: 'left',
} as const;

export type CardBorderPositions = Value<typeof CARD_BORDER_POSITIONS>;

export const CARD_BORDER_RADIUS = CONTAINER_RIBBON_RADIUSES;

export type CardBorderRadius = Value<typeof CARD_BORDER_RADIUS>;
