import { Value } from '../../../utils/type.utils';

export declare const CARD_BORDER_COLORS: {
    NEUTRAL_HEAVY: string;
    NEUTRAL_STRONG: string;
    SUCCESS: string;
    WARNING: string;
    DANGER: string;
    INFO: string;
    TRANSPARENT: string;
};
export type CardBorderColors = Value<typeof CARD_BORDER_COLORS>;
export declare const CARD_BORDER_SIZES: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
};
export type CardBorderSizes = Value<typeof CARD_BORDER_SIZES>;
export declare const CARD_BORDER_POSITIONS: {
    TOP: string;
    LEFT: string;
};
export type CardBorderPositions = Value<typeof CARD_BORDER_POSITIONS>;
