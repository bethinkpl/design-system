export type PlacementSide = 'top' | 'right' | 'bottom' | 'left';
export type PlacementAlign = 'start' | 'center' | 'end';
export declare function splitPlacement(placement: string): {
    side: PlacementSide;
    align: PlacementAlign;
};
export declare function resolveCollisionBoundary(selector: string | null): Element | undefined;
