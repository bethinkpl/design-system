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
export type TileColor = Value<typeof TILE_COLORS>;
export declare const TILE_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export type TileState = Value<typeof TILE_STATES>;
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
export type TileBorderColors = Value<typeof TILE_BORDER_COLORS>;
export declare const TILE_ADDITIONAL_TEXT_MAX_WIDTHS: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type TileAdditionalTextMaxWidth = Value<typeof TILE_ADDITIONAL_TEXT_MAX_WIDTHS>;
