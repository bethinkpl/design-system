import { Value } from '../../../utils/type.utils';

export declare const COUNTER_TOGGLE_COLORS: {
    readonly INVERTED: "inverted";
    readonly NEUTRAL_STRONG: "neutralStrong";
    readonly NEUTRAL: "neutral";
    readonly PRIMARY: "primary";
};
export type CounterToggleColor = Value<typeof COUNTER_TOGGLE_COLORS>;
