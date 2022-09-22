import BadgeScore from './BadgeScore.vue';
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';
import { ICONS } from '../../Icon';

import { Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Badges/BadgeScore',
	component: BadgeScore,
} as Meta<typeof BadgeScore>;

/* INTERACTIVE */
const StoryTemplate: StoryFn<{
	text: string;
	suffix: string;
	color: string;
	size: string;
	icon: string;
}> = (argTypes) => ({
	components: { BadgeScore },
	props: Object.keys(argTypes),
	template:
		'<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" />',
	created() {
		this.ICONS = ICONS;
	},
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	text: '42',
	suffix: '%',
};

Interactive.argTypes = {
	text: { control: { type: 'text' } },
	suffix: { control: { type: 'text' } },
	color: {
		control: { type: 'select', options: Object.values(BADGE_SCORE_COLORS) },
		defaultValue: BADGE_SCORE_COLORS.SUCCESS,
	},
	icon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: 'FA_LIGHTBULB',
	},
	size: {
		control: { type: 'select', options: Object.values(BADGE_SCORE_SIZES) },
		defaultValue: BADGE_SCORE_SIZES.MEDIUM,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34953',
	},
};

/* FULL WIDTH */
const StaticStoryTemplate: StoryFn<{
	isFullWidth: boolean;
}> = (argTypes) => ({
	components: { BadgeScore },
	props: Object.keys(argTypes),
	template:
		'<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :class="{ \'-fullWidth\': isFullWidth }" />',
	created() {
		this.BADGE_SCORE_COLORS = BADGE_SCORE_COLORS;
	},
});

export const MinWidth = StaticStoryTemplate.bind({});

MinWidth.args = {
	isFullWidth: false,
};

export const FullWidth = StaticStoryTemplate.bind({});

FullWidth.args = {
	isFullWidth: true,
};
