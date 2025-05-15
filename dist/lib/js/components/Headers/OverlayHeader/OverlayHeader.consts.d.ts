import { Value } from '../../../utils/type.utils';

export declare const OVERLAY_HEADER_BORDER_COLORS: {
    readonly NEUTRAL_GHOST: "neutralGhost";
    readonly NEUTRAL: "neutral";
    readonly SUCCESS: "success";
    readonly FAIL: "fail";
    readonly WARNING: "warning";
};
export type OverlayHeaderBorderColor = Value<typeof OVERLAY_HEADER_BORDER_COLORS>;
export declare const OVERLAY_HEADER_STATES: {
    readonly DEFAULT: "default";
    readonly LOADING: "loading";
};
export type OverlayHeaderState = Value<typeof OVERLAY_HEADER_STATES>;
