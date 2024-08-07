import { Args, Meta, StoryFn } from '@storybook/vue3';
import DsDivider from '../Divider/Divider.vue';
import DsTextGroup from './TextGroup.vue';
import {
	TEXT_GROUP_COLORS,
	TEXT_GROUP_LOADING_SIZES,
	TEXT_GROUP_SIZES,
	TEXT_GROUP_STATES,
} from './TextGroup.consts';

export default {
	title: 'Components/TextGroup',
	component: DsTextGroup,
} as Meta<typeof DsTextGroup>;

const StoryTemplate: StoryFn<typeof DsTextGroup> = (args) => ({
	components: { DsDivider, DsTextGroup },
	setup() {
		return { ...args };
	},
	template: `
		<div style="height: 200px; width: 280px;">
			<ds-text-group
				:size="size"
				:color="color"
				:eyebrow-text="eyebrowText === 'null' ? null : eyebrowText"
				:eyebrow-text-ellipsis="eyebrowTextEllipsis"
				:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
				:main-text="mainText === 'null' ? null : mainText"
				:main-text-ellipsis="mainTextEllipsis"
				:supporting-text="supportingText === 'null' ? null : supportingText"
				:supporting-text-ellipsis="supportingTextEllipsis"
				:is-interactive="isInteractive"
				:skeleton-loading-size="skeletonLoadingSize"
				:is-selected="isSelected"
				:state="state"
			/>
		</div>
		<div style="margin-top: 100px; color: #888">
			<ds-divider />
			<small>Use "null" in *Text props to get nullable value</small>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	size: TEXT_GROUP_SIZES.MEDIUM,
	color: TEXT_GROUP_COLORS.NEUTRAL,
	eyebrowText: 'Eyebrow Uppercase Veritatis aspernatur cupiditate magnam quidem',
	eyebrowTextEllipsis: false,
	isEyebrowTextUppercase: true,
	mainText: 'Main text Veritatis aspernatur cupiditate magnam quidem',
	mainTextEllipsis: false,
	supportingText:
		'Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.',
	supportingTextEllipsis: false,
	isInteractive: true,
	skeletonLoadingSize: TEXT_GROUP_LOADING_SIZES.LARGE,
	isSelected: false,
	state: TEXT_GROUP_STATES.DEFAULT,
} as Args;

Interactive.argTypes = {
	size: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_SIZES) },
	},
	color: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_COLORS) },
	},
	eyebrowText: {
		control: { type: 'text' },
	},
	eyebrowTextEllipsis: {
		control: { type: 'boolean' },
	},
	isEyebrowTextUppercase: {
		control: { type: 'boolean' },
	},
	mainText: {
		control: { type: 'text' },
	},
	mainTextEllipsis: {
		control: { type: 'boolean' },
	},
	supportingText: {
		control: { type: 'text' },
	},
	supportingTextEllipsis: {
		control: { type: 'boolean' },
	},
	isInteractive: {
		control: { type: 'boolean' },
	},
	skeletonLoadingSize: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_LOADING_SIZES) },
	},
	isSelected: {
		control: { type: 'boolean' },
	},
	state: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_STATES) },
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0',
	},
};
