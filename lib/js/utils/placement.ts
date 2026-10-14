export type PlacementSide = 'top' | 'right' | 'bottom' | 'left';
export type PlacementAlign = 'start' | 'center' | 'end';

// Splits a popper.js-style placement (`'bottom-start'`) into the separate `side` and `align`
// props Reka's floating content takes. A placement without an alignment part is centered.
export function splitPlacement(placement: string): { side: PlacementSide; align: PlacementAlign } {
	const [side, align = 'center'] = placement.split('-');

	return { side: side as PlacementSide, align: align as PlacementAlign };
}

// Resolves a CSS selector to the element Reka should treat as the collision boundary. Like
// vue-popper's `boundariesSelector`, a selector list resolves to its first match, and a selector
// matching nothing falls back to the default boundary (the viewport).
export function resolveCollisionBoundary(selector: string | null): Element | undefined {
	return (selector && document.querySelector(selector)) || undefined;
}
