import { Value } from '../../utils/type.utils';

export declare const TILE_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutralWeak";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly FAIL: "fail";
    readonly DANGER: "danger";
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
export declare const TILE_BORDER_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutralWeak";
    readonly PRIMARY: "primary";
    readonly PRIMARY_WEAK: "primaryWeak";
    readonly SUCCESS: "success";
    readonly SUCCESS_WEAK: "successWeak";
    readonly FAIL: "fail";
    readonly FAIL_WEAK: "failWeak";
    readonly DANGER: "danger";
    readonly DANGER_WEAK: "dangerWeak";
    readonly WARNING: "warning";
    readonly WARNING_WEAK: "warningWeak";
    readonly INFO: "info";
    readonly INFO_WEAK: "infoWeak";
};
export declare type TileBorderColors = Value<typeof TILE_BORDER_COLORS>;
