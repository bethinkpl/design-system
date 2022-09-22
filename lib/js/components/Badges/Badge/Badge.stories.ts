import Badge from './Badge.vue';
import { BADGE_COLORS } from './Badge.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Badges/Badge',
	component: Badge,
} as Meta<typeof Badge>;

const StoryTemplate: StoryFn<typeof Badge> = (argTypes) => ({
	components: { Badge },
	props: Object.keys(argTypes),
	template:
		'<div style="display: flex"><Badge v-bind=$props><img alt="Badge" style="width: 100%; height: 100%" :src="iconUrl" /></Badge></div>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	iconUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
} as Args;

const argTypes = {
	label: {
		control: { type: 'text' },
		defaultValue: 'Komentarz zespołu',
	},
	color: {
		control: { type: 'select', options: Object.values(BADGE_COLORS) },
		defaultValue: BADGE_COLORS.NEUTRAL,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34953',
	},
};
