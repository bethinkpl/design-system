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

export const CARD_BACKGROUND_COLORS = {
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
} as const;

export type CardBackgroundColor = Value<typeof CARD_BACKGROUND_COLORS>;

export const CARD_RIBBON_COLORS = CONTAINER_RIBBON_COLORS;

export type CardRibbonColors = Value<typeof CARD_RIBBON_COLORS>;

export const CARD_RIBBON_SIZES = CONTAINER_RIBBON_SIZES;

export type CardRibbonSizes = Value<typeof CARD_RIBBON_SIZES>;

export const CARD_RIBBON_POSITIONS = {
	TOP: 'top',
	LEFT: 'left',
} as const;

export type CardRibbonPositions = Value<typeof CARD_RIBBON_POSITIONS>;

export const CARD_RIBBON_RADIUS = CONTAINER_RIBBON_RADIUSES;

export type CardRibbonRadius = Value<typeof CARD_RIBBON_RADIUS>;
