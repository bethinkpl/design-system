// TEMPORARY — task-67 dark mode, contrast drops not covered by Paulina's audit. Delete before merging.
// Light and dark are rendered side by side, each in its own scheme scope, independent of the toolbar.
/* eslint-disable @intlify/vue-i18n/no-raw-text -- temporary review story, labels are not product copy */
import { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, nextTick, onMounted, ref } from 'vue';

import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

const meta: Meta = {
	title: 'Temp/Contrast drops (dark vs light)',
	// The page itself stays light; dark comes from the `.-ds-dark` scope class below.
	globals: { colorScheme: 'light' },
};
export default meta;

const SCOPE_CLASS = 'ds-tempContrastScope';

// `--color-*` defined on `:root` resolve their `var(--raw-*)` once, on <html>, so a nested `.-ds-dark`
// wrapper would only inherit the light values. Re-declare those tokens on the scope wrapper so they
// resolve against the wrapper's own raw layer. `:where()` keeps specificity at 0, so the brand
// token rules (`.-ds-theme-*`) on the same wrapper still win.
function injectScopeTokens() {
	if (document.getElementById(SCOPE_CLASS)) {
		return;
	}
	const declarations: Array<string> = [];
	for (const sheet of Array.from(document.styleSheets)) {
		let rules: CSSRuleList;
		try {
			rules = sheet.cssRules;
		} catch {
			continue;
		}
		for (const rule of Array.from(rules)) {
			if (!(rule instanceof CSSStyleRule) || rule.selectorText !== ':root') {
				continue;
			}
			for (const prop of Array.from(rule.style)) {
				if (prop.startsWith('--color-')) {
					declarations.push(`${prop}: ${rule.style.getPropertyValue(prop)};`);
				}
			}
		}
	}
	const style = document.createElement('style');
	style.id = SCOPE_CLASS;
	style.textContent = `:where(.${SCOPE_CLASS}) { ${declarations.join(' ')} }`;
	document.head.appendChild(style);
}

type Rgb = [number, number, number];

function parseRgb(value: string): Rgb | null {
	const match = value.match(/rgba?\(([\d.]+)[, ]+([\d.]+)[, ]+([\d.]+)/);
	return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : null;
}

function luminance([r, g, b]: Rgb): number {
	const [lr, lg, lb] = [r, g, b].map((channel) => {
		const c = channel / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

function contrast(a: Rgb, b: Rgb): number {
	const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (l1 + 0.05) / (l2 + 0.05);
}

const toHex = (rgb: Rgb) =>
	'#' + rgb.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('');

const SampleMeasure = defineComponent({
	name: 'SampleMeasure',
	components: { DsIcon },
	props: {
		fg: { type: String, required: true },
		bg: { type: String, required: true },
		kind: { type: String, default: 'text' },
	},
	setup(props) {
		const block = ref<HTMLElement | null>(null);
		const probe = ref<HTMLElement | null>(null);
		const result = ref<{ fg: string; bg: string; ratio: number } | null>(null);

		onMounted(async () => {
			await nextTick();
			if (!probe.value || !block.value) {
				return;
			}
			const fg = parseRgb(getComputedStyle(probe.value).color);
			const bg = parseRgb(getComputedStyle(block.value).backgroundColor);
			if (fg && bg) {
				result.value = { fg: toHex(fg), bg: toHex(bg), ratio: contrast(fg, bg) };
			}
		});

		return { block, probe, result, ICONS, ICON_SIZES };
	},
	template: `
		<div>
			<div ref="block" :style="{ background: 'var(' + bg + ')', padding: '16px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }">
				<span ref="probe" :style="{ color: 'var(' + fg + ')' }">
					<template v-if="kind === 'icon'">
						<ds-icon :icon="ICONS.FA_CIRCLE_QUESTION" :size="ICON_SIZES.MEDIUM" />
						<ds-icon :icon="ICONS.FA_CHECK_SOLID" :size="ICON_SIZES.MEDIUM" style="margin-left: 8px;" />
					</template>
					<span v-else-if="kind === 'data'" :style="{ display: 'block', width: '120px', height: '12px', borderRadius: '6px', background: 'var(' + fg + ')' }" />
					<template v-else>
						<span style="display: block; font-size: 12px; line-height: 16px;">Tekst 12px — Brak odpowiedzi</span>
						<span style="display: block; font-size: 14px; line-height: 20px;">Tekst 14px — Brak odpowiedzi</span>
						<span style="display: block; font-size: 16px; line-height: 24px;">Tekst 16px — Brak odpowiedzi</span>
					</template>
				</span>
			</div>
			<div v-if="result" style="font: 12px/16px monospace; margin-top: 6px; color: var(--color-neutral-text);">
				{{ fg }} {{ result.fg }}<br />
				on {{ bg }} {{ result.bg }}<br />
				<strong>{{ result.ratio.toFixed(2) }}:1</strong>
				<span :style="{ color: result.ratio >= 4.5 ? 'var(--color-success-text)' : 'var(--color-fail-text)' }">
					AA 4.5 {{ result.ratio >= 4.5 ? '✓' : '✗' }}
				</span>
				<span :style="{ color: result.ratio >= 3 ? 'var(--color-success-text)' : 'var(--color-fail-text)' }">
					· 3.0 {{ result.ratio >= 3 ? '✓' : '✗' }}
				</span>
			</div>
		</div>`,
});

const BRANDS = [
	{ label: 'WNL', cls: '-ds-theme-wnl' },
	{ label: 'MC', cls: '-ds-theme-mc' },
	{ label: 'BW', cls: '-ds-theme-bodywork' },
];

const SCHEMES = [
	{ label: 'Light', cls: '' },
	{ label: 'Dark', cls: '-ds-dark' },
];

const PAIRS = [
	{
		title: '1. fail-text-weak on neutral-background (all brands) — new, not in the audit',
		brands: ['WNL', 'MC', 'BW'],
		samples: [{ fg: '--color-fail-text-weak', bg: '--color-neutral-background', kind: 'text' }],
	},
	{
		title: '2. BW primary-*-weak on neutral-background — new, not in the audit',
		brands: ['BW'],
		samples: [
			{ fg: '--color-primary-icon-weak', bg: '--color-neutral-background', kind: 'icon' },
			{ fg: '--color-primary-data-weak', bg: '--color-neutral-background', kind: 'data' },
		],
	},
	{
		title: 'Reference from the audit: MC primary-data on primary-data-ghost (known exception)',
		brands: ['MC'],
		samples: [{ fg: '--color-primary-data', bg: '--color-primary-data-ghost', kind: 'data' }],
	},
];

const HEADING = 'font: 600 14px/20px sans-serif; margin: 0 0 12px;';
const LABEL = 'font: 600 12px/16px sans-serif; margin-bottom: 8px;';

export const Comparison: StoryObj = {
	render: () => ({
		components: { SampleMeasure },
		setup() {
			injectScopeTokens();
			const brandsByLabel = Object.fromEntries(BRANDS.map((brand) => [brand.label, brand]));
			return { PAIRS, SCHEMES, SCOPE_CLASS, brandsByLabel };
		},
		template: `
			<div style="padding: 24px; display: flex; flex-direction: column; gap: 32px;">
				<section v-for="pair in PAIRS" :key="pair.title">
					<h3 style="${HEADING}">{{ pair.title }}</h3>
					<div v-for="brandLabel in pair.brands" :key="brandLabel" style="display: grid; grid-template-columns: 48px 1fr 1fr; gap: 16px; margin-bottom: 16px;">
						<div style="${LABEL} align-self: center;">{{ brandLabel }}</div>
						<div
							v-for="scheme in SCHEMES"
							:key="scheme.label"
							:class="[SCOPE_CLASS, brandsByLabel[brandLabel].cls, scheme.cls]"
							style="padding: 16px; border-radius: 8px; background: var(--color-default-background); color: var(--color-default-text); display: flex; flex-direction: column; gap: 12px;"
						>
							<div style="${LABEL}">{{ scheme.label }}</div>
							<sample-measure
								v-for="sample in pair.samples"
								:key="sample.fg"
								:fg="sample.fg"
								:bg="sample.bg"
								:kind="sample.kind"
							/>
						</div>
					</div>
				</section>
			</div>`,
	}),
};
