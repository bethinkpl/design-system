import { computed, inject, InjectionKey, MaybeRefOrGetter, provide, toValue } from 'vue';

/**
 * Where a floating panel (DsDropdown, DsPopover, DsSelectField) is rendered: an element, a CSS
 * selector, or `null` for `<body>`.
 */
export type FloatingPanelTarget = HTMLElement | string | null;

export const FLOATING_PANEL_TARGET_INJECTION_KEY: InjectionKey<() => FloatingPanelTarget> =
	Symbol('floatingPanelTarget');

/**
 * Renders the panels of every DsDropdown, DsPopover and DsSelectField below the calling component
 * into `target` instead of `<body>`, e.g. a scrollable container, a drawer or a modal. The nearest
 * provider wins; a component's `teleportTo` prop wins over all of them.
 *
 * - The target needs a positioning context (`position: relative`, or absolute / fixed): panels are
 *   positioned against their offset parent, and only one inside the scrolling container moves
 *   with it natively instead of being repositioned on every scroll.
 * - The target becomes the panels' collision boundary unless a component sets `collisionBoundary`,
 *   so a panel stays within the container instead of being clipped by its `overflow`.
 * - Panels keep their z-index, which only applies within the target's stacking context.
 * - While the target is `null` (e.g. a template ref before mount, or an element under `v-if` that
 *   is gone), panels go to `<body>`. An open panel moves along when the target changes.
 */
export function provideFloatingPanelTarget(target: MaybeRefOrGetter<FloatingPanelTarget>) {
	provide(FLOATING_PANEL_TARGET_INJECTION_KEY, () => toValue(target));
}

export function useFloatingPanelTarget(
	teleportTo: () => FloatingPanelTarget,
	// Off when the component renders its panel in place; it then keeps the default boundary.
	isTeleported: () => boolean = () => true,
) {
	const injectedTarget = inject(FLOATING_PANEL_TARGET_INJECTION_KEY, null);

	const target = computed(() => teleportTo() ?? injectedTarget?.() ?? null);

	const to = computed(() => target.value ?? 'body');

	// A function rather than a computed: a selector resolves against the DOM, which Vue doesn't
	// track, so it's looked up whenever the panel renders.
	function getCollisionBoundary(): Element | null {
		if (!isTeleported()) {
			return null;
		}

		const value = target.value;
		const element = typeof value === 'string' ? document.querySelector(value) : value;

		return element === document.body ? null : element;
	}

	return { to, getCollisionBoundary };
}
