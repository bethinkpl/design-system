// TEMPORARY — PoC (task-67 dark mode, TextGroup eyebrow mask). Delete before merging.
// Old mask paints `transparent → --ds-mask-background` over the text; the new one fades the text
// itself with `mask-image`, so it doesn't need to know the background.
import { Meta, StoryObj } from '@storybook/vue3';

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
	<div style="display: flex; gap: 24px;">
		<div style="width: 180px;">
			<div style="${CELL_LABEL} color: ${labelColor};">OLD — colour mask</div>
			<ds-text-group :eyebrow-text="eyebrow" main-text="Main text" has-eyebrow-mask />
		</div>
		<div style="width: 180px;">
			<div style="${CELL_LABEL} color: ${labelColor};">NEW — alpha mask</div>
			<ds-text-group :eyebrow-text="eyebrow" main-text="Main text" has-eyebrow-mask is-eyebrow-alpha-mask />
		</div>
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
