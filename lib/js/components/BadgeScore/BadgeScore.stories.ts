import BadgeScore from './BadgeScore.vue';
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';
import { ICONS } from '../Icons/Icon';

import { Meta, StoryFn } from '@storybook/vue3';

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
	fullWidth: boolean;
}> = (args) => ({
	components: { BadgeScore },
	setup() {
		return args;
	},
	template:
		'<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" :fullWidth="fullWidth" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	text: '42',
	suffix: '%',
	fullWidth: false,
	color: BADGE_SCORE_COLORS.SUCCESS,
	icon: 'FA_LIGHTBULB',
	size: BADGE_SCORE_SIZES.MEDIUM,
};

Interactive.argTypes = {
	text: { control: 'text' },
	suffix: { control: 'text' },
	color: {
		control: 'select',
		options: Object.values(BADGE_SCORE_COLORS),
	},
	icon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	size: {
		control: 'select',
		options: Object.values(BADGE_SCORE_SIZES),
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4348%3A77330',
	},
};

/* STATIC STORIES */
const StaticStoryTemplate: StoryFn<{}> = (args) => ({
	components: { BadgeScore },
	setup() {
		return args;
	},
	template:
		'<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',
	data() {
		return {
			BADGE_SCORE_COLORS: Object.freeze(BADGE_SCORE_COLORS),
		};
	},
});

export const MinWidth = StaticStoryTemplate.bind({});

MinWidth.args = {
	fullWidth: false,
};

export const FullWidth = StaticStoryTemplate.bind({});

FullWidth.args = {
	fullWidth: true,
};
