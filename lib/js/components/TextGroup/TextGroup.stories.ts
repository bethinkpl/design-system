import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
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
		return args;
	},
	template: `
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
			:is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
			:is-supporting-text-tooltip-enabled-on-mobile="isSupportingTextTooltipEnabledOnMobile"
			:is-supporting-text-tooltip-auto-filled-with-content="isSupportingTextTooltipAutoFilledWithContent"
			:supporting-text-tooltip-content="supportingTextTooltipContent"
		/>
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
	isSupportingTextTooltipEnabled: false,
	isSupportingTextTooltipEnabledOnMobile: true,
	isSupportingTextTooltipAutoFilledWithContent: true,
	supportingTextTooltipContent: '',
} as Args;

Interactive.argTypes = {
	size: {
		control: 'select',
		options: Object.values(TEXT_GROUP_SIZES),
	},
	color: {
		control: 'select',
		options: Object.values(TEXT_GROUP_COLORS),
	},
	eyebrowText: {
		control: 'text',
	},
	eyebrowTextEllipsis: {
		control: 'boolean',
	},
	isEyebrowTextUppercase: {
		control: 'boolean',
	},
	mainText: {
		control: 'text',
	},
	mainTextEllipsis: {
		control: 'boolean',
	},
	supportingText: {
		control: 'text',
	},
	supportingTextEllipsis: {
		control: 'boolean',
	},
	isInteractive: {
		control: 'boolean',
	},
	skeletonLoadingSize: {
		control: 'select',
		options: Object.values(TEXT_GROUP_LOADING_SIZES),
	},
	isSelected: {
		control: 'boolean',
	},
	state: {
		control: 'select',
		options: Object.values(TEXT_GROUP_STATES),
	},
	isSupportingTextTooltipEnabled: {
		control: 'boolean',
	},
	isSupportingTextTooltipEnabledOnMobile: {
		control: 'boolean',
	},
	isSupportingTextTooltipAutoFilledWithContent: {
		control: 'boolean',
	},
	supportingTextTooltipContent: {
		control: 'text',
	},
} as ArgTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0',
	},
};
