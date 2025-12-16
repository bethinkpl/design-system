import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import StatsFiltersDropdown from './StatsFiltersDropdown.vue';
import type { ComponentProps } from 'vue-component-type-helpers';

type StatsFiltersDropdownProps = ComponentProps<typeof StatsFiltersDropdown>;

const meta: Meta<StatsFiltersDropdownProps> = {
	title: 'Components/StatsLayout/StatsFiltersDropdown',
	component: StatsFiltersDropdown,
	render: (args) => {
		return {
			components: { StatsFiltersDropdown },
			setup() {
				return {
					args,
				};
			},
			template: '<stats-filters-dropdown v-bind="args"></stats-filters-dropdown>',
		};
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14870-10787&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<StatsFiltersDropdownProps>;

export const Interactive: Story = {
	args: {
		filterItems: [
			{ key: 'all', label: 'All' },
			{ key: 'active', label: 'Active' },
			{ key: 'inactive', label: 'Inactive' },
		],
		selectedFilterKey: 'all',
	} as Args,
};

Interactive.argTypes = {
	filterItems: {
		control: 'object',
	},
	selectedFilterKey: {
		control: 'text',
	},
} as ArgTypes;
