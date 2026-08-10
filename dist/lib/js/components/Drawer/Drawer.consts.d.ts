export declare const DRAWER_POSITIONS: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export type DrawerPosition = (typeof DRAWER_POSITIONS)[keyof typeof DRAWER_POSITIONS];
export declare const DRAWER_BACKGROUND_COLORS: {
    readonly NONE: "none";
    readonly DEFAULT: "default";
    readonly NEUTRAL: "neutral";
};
export type DrawerBackgroundColor = (typeof DRAWER_BACKGROUND_COLORS)[keyof typeof DRAWER_BACKGROUND_COLORS];
