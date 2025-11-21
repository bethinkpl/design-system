import { Value } from '../../utils/type.utils';

export declare const CONTAINER_RIBBON_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type ContainerRibbonSize = Value<typeof CONTAINER_RIBBON_SIZES>;
export declare const CONTAINER_RIBBON_COLORS: {
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
export type ContainerRibbonColor = Value<typeof CONTAINER_RIBBON_COLORS>;
export declare const CONTAINER_RIBBON_LAYOUTS: {
    readonly VERTICAL: "vertical";
    readonly HORIZONTAL: "horizontal";
};
export type ContainerRibbonLayout = Value<typeof CONTAINER_RIBBON_LAYOUTS>;
export declare const CONTAINER_RIBBON_RADIUSES: {
    readonly NONE: "none";
    readonly RIGHT: "right";
    readonly BOTTOM: "bottom";
};
export type ContainerRibbonRadius = Value<typeof CONTAINER_RIBBON_RADIUSES>;
