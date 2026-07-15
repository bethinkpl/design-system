import { Value } from '../../../utils/type.utils';

export declare const CARD_PADDING_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
export type CardPaddingSize = Value<typeof CARD_PADDING_SIZES>;
export declare const CARD_BACKGROUND_COLORS: {
    readonly DEFAULT: "default";
    readonly NEUTRAL: "neutral";
};
export type CardBackgroundColor = Value<typeof CARD_BACKGROUND_COLORS>;
export declare const CARD_RIBBON_COLORS: {
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
export type CardRibbonColors = Value<typeof CARD_RIBBON_COLORS>;
export declare const CARD_RIBBON_SIZES: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type CardRibbonSizes = Value<typeof CARD_RIBBON_SIZES>;
export declare const CARD_RIBBON_POSITIONS: {
    readonly TOP: "top";
    readonly LEFT: "left";
};
export type CardRibbonPositions = Value<typeof CARD_RIBBON_POSITIONS>;
export declare const CARD_RIBBON_RADIUS: {
    readonly NONE: "none";
    readonly RIGHT: "right";
    readonly BOTTOM: "bottom";
};
export type CardRibbonRadius = Value<typeof CARD_RIBBON_RADIUS>;
