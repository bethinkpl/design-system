import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { useArgs } from '@storybook/preview-api';
import StatsLayout from './StatsLayout.vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import StatsSectionHeader from './StatsSectionHeader/StatsSectionHeader.vue';
import StatsResetBanner from './StatsResetBanner/StatsResetBanner.vue';
import SlotPlaceholder from '../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';

type StatsLayoutProps = ComponentProps<typeof StatsLayout> & {
	items?: Array<any>;
};

const meta: Meta<StatsLayoutProps> = {
	title: 'Components/StatsLayout/StatsLayout',
	component: StatsLayout,
	render: (args) => {
		const [_, updateArgs] = useArgs();

		const itemsTemplate = (args.items || [])
			.map((item, index) => {
				return `<template v-slot:["statsItem-${index}"]><slot-placeholder/></template>`;
			})
			.join('');

		return {
			components: { StatsLayout, StatsSectionHeader, StatsResetBanner, SlotPlaceholder },
			setup() {
				return {
					args,
				};
			},
			methods: {
				onSelectFilter(filterKey) {
					updateArgs({
						selectedFilterKey: filterKey,
					});
				},
			},
			template:
				'<stats-layout v-bind="args">' +
				'<template #sectionHeader>' +
				'	<stats-section-header v-if="args.filterItems" :filterItems="args.filterItems" :selectedFilterKey="args.selectedFilterKey" @select-filter="onSelectFilter">' +
				'      <template #infoContent><span>Info content for filter</span></template>' +
				'	</stats-section-header>' +
				'   <slot-placeholder v-else :label="\'Slot nagłówka sekcji\'" />' +
				'</template>' +
				'<template #overallStatsItem><slot-placeholder /></template>' +
				'<template #resetBanner>' +
				'	<stats-reset-banner v-if="args.timeMarker" :timeMarker="args.timeMarker">' +
				'		<template #infoContent><p>Info content for reset banner</p></template>' +
				'	</stats-reset-banner>' +
				'   <slot-placeholder v-else :label="\'Slot banera resetu\'" />' +
				'</template>' +
				itemsTemplate +
				'</stats-layout>',
		};
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<StatsLayoutProps>;

export const Raw: Story = {
	args: {
		hasGridHeader: true,
		hasRightColumn: true,
		leftColumnLabel: 'Zakres',
		rightColumnLabel: 'Wyniki',
		statsItemsHeaderLabel: '{Nazwa użytej taksonomii}',
		isLoading: false,
		hasError: false,
		items: [0, 0, 0],
	} as Args,
};

Raw.argTypes = {
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
	items: {
		control: 'object',
	},
} as ArgTypes;

export const WithHeaders: Story = {
	args: {
		hasGridHeader: true,
		hasRightColumn: true,
		leftColumnLabel: 'Zakres',
		rightColumnLabel: 'Wyniki',
		statsItemsHeaderLabel: '{Nazwa użytej taksonomii}',
		isLoading: false,
		hasError: false,
		items: [0, 0, 0],
		filterItems: [
			{ key: 'all', label: 'Wszystkie' },
			{ key: 'week', label: 'Tydzień' },
			{ key: 'month', label: 'Miesiąc' },
		],
		selectedFilterKey: 'all',
		timeMarker: '6 czerwca 2025',
	} as Args,
};

WithHeaders.argTypes = {
	filterItems: {
		control: 'object',
	},
	selectedFilterKey: {
		control: 'text',
	},
	timeMarker: {
		control: 'text',
	},
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
	items: {
		control: 'object',
	},
} as ArgTypes;
