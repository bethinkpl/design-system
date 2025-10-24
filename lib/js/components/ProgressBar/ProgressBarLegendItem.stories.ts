import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import ProgressBarLegendItem from './ProgressBarLegendItem.vue';
import { PROGRESS_BAR_LEGEND_ITEM_SIZES } from './ProgressBarLegendItem.consts';
import { ICONS } from '../Icons/Icon';
import { PROGRESS_BAR_RANGE_COLORS } from './ProgressBar.consts';

export default {
	title: 'Components/ProgressBar/ProgressBarLegendItem',
	component: ProgressBarLegendItem,
} as Meta<typeof ProgressBarLegendItem>;

const StoryTemplate: StoryFn<typeof ProgressBarLegendItem> = (args) => ({
	components: { ProgressBarLegendItem },
	setup() {
		return { args };
	},
	template: `
		<progress-bar-legend-item :label="args.label" :data="args.data" :percent-value="args.percentValue" :size="args.size" :color="args.color" :icon="icon"></progress-bar-legend-item>`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	computed: {
		icon: () => {
			if (args.icon) {
				return ICONS[args.icon];
			}

			return null;
		},
	},
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_LEGEND_ITEM_SIZES),
	},
	color: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_RANGE_COLORS),
	},
	icon: {
		control: 'select',
		options: Object.keys(ICONS),
	},
	label: {
		control: 'text',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = {
	size: PROGRESS_BAR_LEGEND_ITEM_SIZES.MEDIUM,
	color: PROGRESS_BAR_RANGE_COLORS.PRIMARY,
	label: 'Random label',
	data: 'Some Data',
	percentValue: '10',
} as Args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14650-1822&m=dev',
	},
};
