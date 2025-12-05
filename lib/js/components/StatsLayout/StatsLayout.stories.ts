import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import StatsLayout from './StatsLayout.vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import StatsSectionHeader from './StatsSectionHeader/StatsSectionHeader.vue';
import StatsResetBanner from './StatsResetBanner/StatsResetBanner.vue';
import SlotPlaceholder from '../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';

type StatsLayoutProps = ComponentProps<typeof StatsLayout>;

const prepareItemsTemplate = (
	itemsCount: number = 5,
	itemTemplate: string = '<slot-placeholder/>',
) => {
	return Array.from({ length: itemsCount }, (_, index) => {
		return `<template v-slot:["statsItem-${index}"]>${itemTemplate}</template>`;
	}).join('');
};

const meta: Meta<StatsLayoutProps> = {
	title: 'Components/StatsLayout/StatsLayout',
	component: StatsLayout,
	render: (args) => {
		return {
			components: { StatsLayout, SlotPlaceholder },
			setup() {
				return { args };
			},
			template: `
		<stats-layout v-bind="args">
			<template #sectionHeader>
			   <slot-placeholder label="Slot nagłówka sekcji" />
			</template>
			<template #overallStatsItem><slot-placeholder /></template>
			<template #resetBanner>
			   <slot-placeholder label="Slot banera resetu" />
			</template>
			${prepareItemsTemplate()}
		</stats-layout>
		`,
		};
	},
	args: {
		hasGridHeader: true,
		hasRightColumn: true,
		leftColumnLabel: 'Zakres',
		rightColumnLabel: 'Wyniki',
		statsItemsHeaderLabel: '{Nazwa użytej taksonomii}',
		isLoading: false,
		hasError: false,
	} as Args,
	argTypes: {
		hasGridHeader: {
			control: 'boolean',
		},
		hasRightColumn: {
			control: 'boolean',
		},
		leftColumnLabel: {
			control: 'text',
		},
		rightColumnLabel: {
			control: 'text',
		},
		statsItemsHeaderLabel: {
			control: 'text',
		},
		isLoading: {
			control: 'boolean',
		},
		hasError: {
			control: 'boolean',
		},
	} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<StatsLayoutProps>;

export const Raw: Story = {};

export const WithHeaders: Story = {
	render: (args) => {
		return {
			components: { StatsLayout, StatsSectionHeader, StatsResetBanner, SlotPlaceholder },
			setup() {
				return {
					args,
					filterItems: [
						{ key: 'all', label: 'Wszystkie' },
						{ key: 'week', label: 'Tydzień' },
						{ key: 'month', label: 'Miesiąc' },
					],
				};
			},
			template: `
			<stats-layout v-bind="args">
				<template #sectionHeader>
					<stats-section-header :filter-items="filterItems" selected-filter-key="all">
						<template #infoContent><span>Info content for filter</span></template>
					</stats-section-header>
				</template>
				<template #overallStatsItem><slot-placeholder /></template>
				<template #resetBanner>
					<stats-reset-banner timeMarker="2 czerwca 2025">
						<template #infoContent><p>Info content for reset banner</p></template>
					</stats-reset-banner>
				</template>
				${prepareItemsTemplate()}
			</stats-layout>
`,
		};
	},
};

export const MultipleColumns: Story = {
	render: (args) => {
		const itemTemplate = `<div style="display: grid; grid-template-columns: 1fr auto; gap: 8px;"><div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot right" /></div></div>`;

		return {
			components: { StatsLayout, StatsSectionHeader, StatsResetBanner, SlotPlaceholder },
			setup() {
				return {
					args,
					filterItems: [
						{ key: 'all', label: 'Wszystkie' },
						{ key: 'week', label: 'Tydzień' },
						{ key: 'month', label: 'Miesiąc' },
					],
				};
			},
			template: `
			<stats-layout v-bind="args">
				<template #sectionHeader>
					<stats-section-header :filter-items="filterItems" selected-filter-key="all">
						<template #infoContent><span>Info content for filter</span></template>
					</stats-section-header>
				</template>
				<template #overallStatsItem>
				${itemTemplate}
				</template>
				<template #resetBanner>
					<stats-reset-banner timeMarker="2 czerwca 2025">
						<template #infoContent><p>Info content for reset banner</p></template>
					</stats-reset-banner>
				</template>
				${prepareItemsTemplate(5, itemTemplate)}
			</stats-layout>`,
		};
	},
};
