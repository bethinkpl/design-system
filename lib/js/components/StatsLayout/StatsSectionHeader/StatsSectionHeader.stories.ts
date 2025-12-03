import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import StatsSectionHeader from './StatsSectionHeader.vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useArgs } from '@storybook/preview-api';

type StatsSectionHeaderProps = ComponentProps<typeof StatsSectionHeader>;

const meta: Meta<StatsSectionHeaderProps> = {
	title: 'Components/StatsLayout/StatsSectionHeader',
	component: StatsSectionHeader,
	render: (args) => {
		const [_, updateArgs] = useArgs();
		return {
			components: { StatsSectionHeader },
			setup() {
				return {
					args,
				};
			},
			methods: {
				selectFilter(filterKey: string) {
					updateArgs({
						selectedFilterKey: filterKey,
					});
				},
			},
			template: `<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoContent><p>Info content</p></template></stats-section-header>`,
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

type Story = StoryObj<StatsSectionHeaderProps>;

export const Interactive: Story = {
	args: {
		filterItems: [
			{
				key: 'all',
				label: 'Wszystkie',
			},
			{
				key: 'today',
				label: 'Dzisiaj',
			},
			{
				key: 'yesterday',
				label: 'Wczoraj',
			},
		],
		selectedFilterKey: 'all',
	} as Args,
};

const argTypes = {
	filterItems: {
		control: 'object',
	},
	selectedFilterKey: {
		control: 'text',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
