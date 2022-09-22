import BadgeScore from './BadgeScore.vue';
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';
import { ICONS } from '../../Icon';

import { Meta, StoryFn } from '@storybook/vue';

export default {
    title: 'Components/Badges/BadgeScore',
    component: BadgeScore,
} as Meta<typeof BadgeScore>;

/* INTERACTIVE */
const StoryTemplate: StoryFn<{ text: string; suffix: string; color: string, size: string, icon: string }> = (argTypes) => ({
    components: { BadgeScore },
    props: Object.keys(argTypes),
    template:
        '<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" />',
    created() {
        this.ICONS = ICONS;
    },
    computed: {
        isInverted () {
            return this.color === 'inverted';
        },
    },
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
    text: '42',
    suffix: '%',
    color: BADGE_SCORE_COLORS.SUCCESS,
    size: BADGE_SCORE_SIZES.MEDIUM,
};

Interactive.argTypes = {
    text: { control: { type: 'text' } },
    suffix: { control: { type: 'text' } },
    color: {
        control: { type: 'select', options: Object.values(BADGE_SCORE_COLORS) },
    },
    icon: {
        control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
        defaultValue: 'FA_LIGHTBULB',
    },
    size: {
        control: { type: 'select', options: Object.values(BADGE_SCORE_SIZES) },
    },
};

Interactive.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34953',
    },
};

/* FULL WIDTH */
const FullWidthStoryTemplate: StoryFn<{ text: string; suffix: string; color: string, size: string, icon: string }> = (argTypes) => ({
    components: { BadgeScore },
    props: Object.keys(argTypes),
    template:
        '<div class="flexWrapper">' +
        '<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="100" />' +
        '</div>',
    created() {
        this.BADGE_SCORE_COLORS = BADGE_SCORE_COLORS;
    },
});

export const FullWidth = FullWidthStoryTemplate.bind({});

/* TEXT ONLY */
const TextOnlyStoryTemplate: StoryFn<{ text: string; suffix: string; color: string, size: string, icon: string }> = (argTypes) => ({
    components: { BadgeScore },
    props: Object.keys(argTypes),
    template:
        '<badge-score :color="BADGE_SCORE_COLORS.FAIL" :text="text" :size="size"/>',
    created() {
        this.BADGE_SCORE_SIZES = BADGE_SCORE_SIZES;
        this.BADGE_SCORE_COLORS = BADGE_SCORE_COLORS;
    },
});

export const TextOnly = TextOnlyStoryTemplate.bind({});

TextOnly.args = {
    text: '42',
};

TextOnly.argTypes = {
    text: { control: { type: 'text' } },
    size: {
        control: { type: 'select', options: Object.values(BADGE_SCORE_SIZES) },
    },
};