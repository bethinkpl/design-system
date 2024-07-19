import { Value } from '../../utils/type.utils';
export declare const TILE_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutralWeak";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly FAIL: "fail";
    readonly WARNING: "warning";
    readonly INFO: "info";
};
export declare type TileColors = Value<typeof TILE_COLORS>;
export declare const TILE_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export declare type TileStates = Value<typeof TILE_STATES>;
