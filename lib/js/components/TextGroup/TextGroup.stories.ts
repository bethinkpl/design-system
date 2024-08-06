import { Args, Meta, StoryFn } from '@storybook/vue3';
import DsDivider from '../Divider/Divider.vue'
import DsTextGroup from './TextGroup.vue';
import {TEXT_GROUP_COLORS, TEXT_GROUP_LOADING_SIZES, TEXT_GROUP_SIZES, TEXT_GROUP_STATES} from "./TextGroup.consts";

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
		<div style="height: 200px; width: 300px;">
			<ds-text-group
				:size="size"
				:color="color"
				:eyebrow-text="eyebrowText"
				:eyebrow-text-ellipsis="eyebrowTextEllipsis"
				:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
				:main-text="mainText"
				:main-text-ellipsis="mainTextEllipsis"
				:supporting-text="supportingText"
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
	supportingText: 'Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.',
	supportingTextEllipsis: false,
	isInteractive: true,
	skeletonLoadingSize: TEXT_GROUP_LOADING_SIZES.LARGE,
	isSelected: false,
	state: TEXT_GROUP_STATES.DEFAULT,

} as Args;

Interactive.argTypes = {
	size: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_SIZES) },
		defaultValue: TEXT_GROUP_SIZES.MEDIUM,
	},
	color: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_COLORS) },
		defaultValue: TEXT_GROUP_COLORS.NEUTRAL,
	},
	eyebrowText: {
		control: { type: 'text' },
		defaultValue: 'null',
	},
	eyebrowTextEllipsis: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	isEyebrowTextUppercase: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
	mainText: {
		control: { type: 'text' },
		defaultValue: 'null',
		description: 'Use "null" for nullable value',
	},
	mainTextEllipsis: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	supportingText: {
		control: { type: 'text' },
		defaultValue: 'null',
		description: 'Use "null" for nullable value',
	},
	supportingTextEllipsis: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	isInteractive: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
	skeletonLoadingSize: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_LOADING_SIZES) },
		defaultValue: TEXT_GROUP_LOADING_SIZES.LARGE,
	},
	isSelected: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	state: {
		control: { type: 'select', options: Object.values(TEXT_GROUP_STATES) },
		defaultValue: TEXT_GROUP_STATES.DEFAULT,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0',
	},
};
