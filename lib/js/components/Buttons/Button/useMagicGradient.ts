import { toValue, watch, type MaybeRefOrGetter } from 'vue';

export const MAGIC_GRADIENT_ID = 'ds-magic-gradient';

// SVG icons (the loading spinner) fill with the magic gradient via `fill: url(#...)`, which
// CSS gradients can't do. The gradient is identical for every magic button, so a single
// shared def is injected into <body> once and left for the page lifetime (invisible, 0×0).
function ensureMagicGradientDef(): void {
	if (typeof document === 'undefined') {
		return; // SSR guard
	}
	if (document.getElementById(MAGIC_GRADIENT_ID)) {
		return; // already injected
	}
	// `var()` works in the `style` property but not in the `stop-color` presentation
	// attribute, so stop colors are set inline.
	document.body.insertAdjacentHTML(
		'beforeend',
		`<svg aria-hidden="true" width="0" height="0" style="position:absolute">
			<defs><linearGradient id="${MAGIC_GRADIENT_ID}" x1="0" y1="0" x2="1" y2="1">
				<stop offset="7%" style="stop-color:var(--gradient-magic-color-1)"/>
				<stop offset="36%" style="stop-color:var(--gradient-magic-color-2)"/>
				<stop offset="65%" style="stop-color:var(--gradient-magic-color-3)"/>
				<stop offset="95%" style="stop-color:var(--gradient-magic-color-4)"/>
			</linearGradient></defs>
		</svg>`,
	);
}

// Injects the shared magic-gradient def once `enabled` becomes truthy (immediate + reactive).
export function useMagicGradient(enabled: MaybeRefOrGetter<boolean>): void {
	watch(
		() => toValue(enabled),
		(isEnabled) => {
			if (isEnabled) {
				ensureMagicGradientDef();
			}
		},
		{ immediate: true },
	);
}
