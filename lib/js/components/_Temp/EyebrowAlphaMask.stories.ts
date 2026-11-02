// TEMPORARY — PoC (task-67 dark mode, TextGroup eyebrow mask). Delete before merging.
// The eyebrow fades its own text with `mask-image` (fadeMask), so it works on any surface. The old
// colour mask (transparent → --ds-mask-background) is gone; see the Gotchas stories for trade-offs.
import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import DsBanner from '../Banner/Banner.vue';
import { BANNER_COLORS } from '../Banner/Banner.consts';
import DsCard from '../Cards/Card/Card.vue';
import DsTextGroup from '../TextGroup/TextGroup.vue';

const meta: Meta = {
	title: 'Temp/Eyebrow alpha mask (PoC)',
};
export default meta;

const EYEBROW = 'Kardiologia · Choroby serca · Niewydolność serca · Wady zastawkowe';

const LABEL =
	'font: 600 12px/16px sans-serif; color: var(--color-neutral-text); margin-bottom: 8px;';
const CELL_LABEL = 'font: 600 11px/14px sans-serif; opacity: .7; margin-bottom: 4px;';

const pair = (labelColor = 'var(--color-neutral-text)') => `
	<div style="width: 180px;">
		<div style="${CELL_LABEL} color: ${labelColor};">TextGroup — eyebrow alpha mask</div>
		<ds-text-group :eyebrow-text="eyebrow" main-text="Main text" has-eyebrow-mask />
	</div>`;

const SURFACES = `
	<div style="display: flex; flex-direction: column; gap: 24px; padding: 32px; background: var(--color-page-background);">
		<div style="padding: 16px; background: var(--color-default-background);">
			<div style="${LABEL}">default-background</div>
			${pair()}
		</div>
		<ds-card>
			<template #content>
				<div style="${LABEL}">Card — elevated-background</div>
				${pair()}
			</template>
		</ds-card>
		<div style="padding: 16px; background: var(--color-neutral-background);">
			<div style="${LABEL}">neutral-background</div>
			${pair()}
		</div>
		<ds-banner :color="BANNER_COLORS.INFO" title="Banner info">
			<template #defaultText>${pair()}</template>
		</ds-banner>
		<div style="padding: 16px; background: var(--color-primary-background);">
			<div style="${LABEL}">primary-background</div>
			${pair()}
		</div>
		<div style="padding: 16px; background: linear-gradient(90deg, #f6d365, #fda085 40%, #6a82fb);">
			<div style="${LABEL} color: #000;">gradient / image</div>
			${pair('#000')}
		</div>
	</div>`;

const render = () => ({
	components: { DsBanner, DsCard, DsTextGroup },
	setup() {
		return { BANNER_COLORS, eyebrow: EYEBROW };
	},
	template: SURFACES,
});

export const Light: StoryObj = {
	render,
	globals: { colorScheme: 'light' },
};

export const Dark: StoryObj = {
	render,
	globals: { colorScheme: 'dark' },
};

// ---------------------------------------------------------------------------------------------
// Gotchas — where an alpha mask behaves differently from a painted colour mask.
// OLD = a 40px gradient overlay painted on the right edge (fades into default-background).
// NEW = `mask-image` on the whole box (opaque until the last 40px, then transparent).
// ---------------------------------------------------------------------------------------------

const ALPHA = 'linear-gradient(90deg, #000 calc(100% - 40px), transparent)';
const MASK = `-webkit-mask-image: ${ALPHA}; mask-image: ${ALPHA};`;
const OVERLAY = `<div style="position: absolute; top: 0; right: 0; bottom: 0; width: 40px; background: linear-gradient(90deg, transparent, var(--color-default-background) 84.26%);"></div>`;

const COL = 'width: 300px; flex-shrink: 0;';
const HEAD =
	'font: 600 13px/18px sans-serif; color: var(--color-neutral-text-strong); margin-bottom: 4px;';
const NOTE =
	'font: 400 12px/16px sans-serif; color: var(--color-neutral-text); margin-bottom: 16px; max-width: 960px;';
const TEXT =
	'font: 400 14px/20px sans-serif; color: var(--color-neutral-text-strong); white-space: nowrap;';
const LONG = 'Długi tekst, który nie mieści się w kontenerze i powinien się wygasić';

// 1. Everything outside the masked box is cut off (focus ring, shadow, badge, non-teleported popup).
const outsideBox = (mask: string, overlay: string) => `
	<div style="width: 260px; border: 1px dashed var(--color-neutral-border-strong);">
		<div style="position: relative; padding: 4px; ${mask}">
			<div style="display: flex; gap: 12px; align-items: center;">
				<button style="position: relative; flex-shrink: 0; white-space: nowrap; padding: 6px 12px; border-radius: 6px; border: 1px solid var(--color-neutral-border); background: var(--color-default-background); color: var(--color-neutral-text-strong); outline: 3px solid var(--color-primary-border); outline-offset: 4px; box-shadow: 0 8px 20px rgba(0,0,0,.35);">
					Fokus + cień
					<span style="position: absolute; top: -14px; left: -14px; min-width: 20px; height: 20px; border-radius: 10px; background: var(--color-danger-background-strong); color: #fff; font: 700 11px/20px sans-serif; text-align: center;">3</span>
				</button>
				<span style="${TEXT} overflow: hidden; min-width: 0;">${LONG}</span>
			</div>
			<div style="position: absolute; top: 44px; left: 4px; width: 180px; padding: 8px; border-radius: 6px; background: var(--color-elevated-background); border: 1px solid var(--color-neutral-border); box-shadow: 0 8px 20px rgba(0,0,0,.25); font: 400 13px/24px sans-serif; color: var(--color-neutral-text-strong); z-index: 1;">
				Popup (bez teleportu)<br>Opcja A<br>Opcja B<br>Opcja C
			</div>
			${overlay}
		</div>
	</div>`;

// 2. The mask also fades the box's own background and border.
const ownBox = (outerMask: string, innerMask: string, overlay: string) => `
	<div style="position: relative; width: 260px; padding: 8px 12px; border: 2px solid var(--color-primary-border); border-radius: 8px; background: var(--color-primary-background); overflow: hidden; ${outerMask}">
		<div style="${TEXT} overflow: hidden; ${innerMask}">${LONG}</div>
		${overlay}
	</div>`;

// 3. Pointer events: the painted overlay sits on top of the content, the alpha mask does not.
const clickBand = (mask: string, overlay: string, counter: string) => `
	<div style="position: relative; width: 260px; overflow: hidden; ${mask}">
		<div style="display: flex; gap: 8px; white-space: nowrap;">
			<button v-for="n in 6" :key="n" style="padding: 4px 10px; border-radius: 12px; border: 1px solid var(--color-neutral-border); background: var(--color-neutral-background); color: var(--color-neutral-text-strong); cursor: pointer;" @click="${counter}++">Chip {{ n }}</button>
		</div>
		${overlay}
	</div>
	<div style="font: 400 12px/16px sans-serif; color: var(--color-neutral-text); margin-top: 6px;">Kliknięcia: {{ ${counter} }} — kliknij chip 4 pod pasem</div>`;

const GOTCHAS = `
	<div style="display: flex; flex-direction: column; gap: 40px; padding: 32px; background: var(--color-default-background);">
		<section>
			<div style="${HEAD}">1. Maska ucina wszystko poza boxem elementu</div>
			<div style="${NOTE}">mask-image działa jak clip do border-boxa: fokus ring (outline-offset), cień, badge z ujemnym offsetem i popup bez teleportu znikają (przerywana linia = krawędź boxa). Stara maska maluje tylko pas na krawędzi. <b>Dotyczy</b> elementów z overflow: visible. Eyebrow i flexOverflowMask już mają overflow: auto, więc tam niczego nowego nie ucina.</div>
			<div style="display: flex; gap: 48px; padding: 24px 0 120px;">
				<div style="${COL}"><div style="${HEAD}">OLD — colour mask</div>${outsideBox('', OVERLAY)}</div>
				<div style="${COL}"><div style="${HEAD}">NEW — alpha mask</div>${outsideBox(MASK, '')}</div>
			</div>
		</section>
		<section>
			<div style="${HEAD}">2. Maska wygasza też tło i ramkę samego elementu</div>
			<div style="${NOTE}">Maskę trzeba dać na wewnętrzny element z tekstem, nie na box z tłem/ramką. Za to wtedy działa na dowolnym tle — stara maska tutaj by się zgadzała tylko, gdyby podać jej kolor boxa.</div>
			<div style="display: flex; gap: 48px;">
				<div style="${COL}"><div style="${HEAD}">OLD — colour mask (default-background)</div>${ownBox('', '', OVERLAY)}</div>
				<div style="${COL}"><div style="${HEAD}">NEW — mask na boxie ✗</div>${ownBox(MASK, '', '')}</div>
				<div style="${COL}"><div style="${HEAD}">NEW — mask na tekście ✓</div>${ownBox('', MASK, '')}</div>
			</div>
		</section>
		<section>
			<div style="${HEAD}">3. Kliknięcia w pasie (różnica na plus dla alpha)</div>
			<div style="${NOTE}">Stara maska to element nad treścią — w pasie przechwytuje hover i kliknięcia (chyba że ma pointer-events: none; TextGroup ::before go nie ma). Alpha mask nie blokuje, ale wygaszony element dalej jest klikalny, choć prawie niewidoczny.</div>
			<div style="display: flex; gap: 48px;">
				<div style="${COL}"><div style="${HEAD}">OLD — colour mask</div>${clickBand('', OVERLAY, 'oldClicks')}</div>
				<div style="${COL}"><div style="${HEAD}">NEW — alpha mask</div>${clickBand(MASK, '', 'newClicks')}</div>
			</div>
		</section>
	</div>`;

const renderGotchas = () => ({
	setup() {
		return { oldClicks: ref(0), newClicks: ref(0) };
	},
	template: GOTCHAS,
});

export const GotchasLight: StoryObj = {
	name: 'Gotchas — light',
	render: renderGotchas,
	globals: { colorScheme: 'light' },
};

export const GotchasDark: StoryObj = {
	name: 'Gotchas — dark',
	render: renderGotchas,
	globals: { colorScheme: 'dark' },
};
