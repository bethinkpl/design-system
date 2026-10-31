// TEMPORARY — review finding #6 (task-67 dark mode). Delete before merging.
// Opaque fills hard-coded to `default-background` (surface-1) rendered on elevated surfaces (surface-2).
import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import DsButton, { BUTTON_COLORS, BUTTON_TYPES } from '../Buttons/Button';
import DsCard from '../Cards/Card/Card.vue';
import DsInputField from '../Form/InputField/InputField.vue';
import DsSelectField from '../Form/SelectField/SelectField.vue';
import DsTextAreaField from '../Form/TextAreaField/TextAreaField.vue';
import DsPagination from '../Pagination/Pagination.vue';
import DsPopover from '../Popover/Popover.vue';

const meta: Meta = {
	title: 'Temp/Elevated surface fills (#6)',
	globals: { colorScheme: 'dark' },
};
export default meta;

const FIELDS = `
	<div style="display: flex; flex-direction: column; gap: 16px; width: 320px;">
		<ds-input-field v-model="input" label="InputField" />
		<ds-text-area-field v-model="textarea" label="TextAreaField" />
		<ds-select-field v-model="select" label="SelectField" :options="options" />
		<ds-pagination :current-page="3" :items-per-page="10" :items-total-amount="200" force-compact />
		<div><ds-button :color="BUTTON_COLORS.MAGIC" :type="BUTTON_TYPES.OUTLINED">Magic outlined</ds-button></div>
	</div>`;

const SURFACE_LABEL =
	'font: 600 12px/16px sans-serif; color: var(--color-neutral-text); margin-bottom: 8px;';

export const Comparison: StoryObj = {
	render: () => ({
		components: {
			DsButton,
			DsCard,
			DsInputField,
			DsPagination,
			DsPopover,
			DsSelectField,
			DsTextAreaField,
		},
		setup() {
			return {
				BUTTON_COLORS,
				BUTTON_TYPES,
				input: ref('Fill = default-background'),
				textarea: ref('Fill = default-background'),
				select: ref('pl'),
				options: [
					{ value: 'pl', label: 'Polska' },
					{ value: 'de', label: 'Niemcy' },
				],
				popoverOpen: ref(true),
			};
		},
		template: `
			<div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap; padding: 32px; background: var(--color-page-background);">
				<div style="padding: 24px; background: var(--color-default-background);">
					<div style="${SURFACE_LABEL}">default-background (surface-1) — reference</div>
					${FIELDS}
				</div>
				<ds-card>
					<template #content>
						<div style="${SURFACE_LABEL}">Card — elevated-background (surface-2)</div>
						${FIELDS}
					</template>
				</ds-card>
				<div style="min-height: 640px;">
					<ds-popover v-model:open="popoverOpen" is-manual :append-to-body="false" title-text="Popover — elevated-background (surface-2)">
						<template #reference><span style="${SURFACE_LABEL}">Popover anchor</span></template>
						${FIELDS}
					</ds-popover>
				</div>
			</div>`,
	}),
};
