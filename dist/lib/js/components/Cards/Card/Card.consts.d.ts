import { Value } from '../../../utils/type.utils';

export declare const CARD_PADDING_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
export type CardPaddingSize = Value<typeof CARD_PADDING_SIZES>;
export declare const CARD_BORDER_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_HEAVY: "neutral-heavy";
    readonly NEUTRAL_STRONG: "neutral-strong";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly FAIL: "fail";
    readonly INFO: "info";
    readonly TRANSPARENT: "transparent";
};
export type CardBorderColors = Value<typeof CARD_BORDER_COLORS>;
export declare const CARD_BORDER_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type CardBorderSizes = Value<typeof CARD_BORDER_SIZES>;
export declare const CARD_BORDER_POSITIONS: {
    readonly TOP: "top";
    readonly LEFT: "left";
};
export type CardBorderPositions = Value<typeof CARD_BORDER_POSITIONS>;
export declare const CARD_BORDER_RADIUS: {
    readonly NONE: "none";
    readonly RIGHT: "right";
    readonly BOTTOM: "bottom";
};
export type CardBorderRadius = Value<typeof CARD_BORDER_RADIUS>;
