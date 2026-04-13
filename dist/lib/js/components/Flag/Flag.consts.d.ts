import { Value } from '../../utils/type.utils';

export declare const FLAG_SIZES: {
    readonly XXXS: "xxxs";
    readonly XXS: "xxs";
    readonly XS: "xs";
    readonly S: "s";
    readonly M: "m";
    readonly L: "l";
    readonly XL: "xl";
    readonly XXL: "xxl";
};
export type FlagSize = Value<typeof FLAG_SIZES>;
