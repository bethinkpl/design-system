import { Value } from '../../../utils/type.utils';

export declare const LABEL_VALUE_ITEM_STATES: {
    readonly DEFAULT: "default";
    readonly LOADING: "loading";
};
export declare const LABEL_VALUE_ITEM_SIZES: {
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export declare const LABEL_VALUE_ITEM_VALUE_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly PRIMARY: "primary";
};
export type LabelValueItemState = Value<typeof LABEL_VALUE_ITEM_STATES>;
export type LabelValueItemSize = Value<typeof LABEL_VALUE_ITEM_SIZES>;
export type LabelValueItemValueColor = Value<typeof LABEL_VALUE_ITEM_VALUE_COLORS>;
