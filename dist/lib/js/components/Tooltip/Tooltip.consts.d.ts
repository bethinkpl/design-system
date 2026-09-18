export declare const TOOLTIP_PLACEMENTS: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export type TooltipPlacement = (typeof TOOLTIP_PLACEMENTS)[keyof typeof TOOLTIP_PLACEMENTS];
export declare const TOOLTIP_MAX_WIDTH_PX = 900;
export declare const TOOLTIP_VIEWPORT_MARGIN_PX = 8;
export declare const TOOLTIP_ARROW_EDGE_INSET_PX = 12;
