import Badge from './Badge.vue';
import { BADGE_COLORS } from './Badge.consts';

import { Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Badges/Badge',
	component: Badge,
} as Meta<typeof Badge>;

const StoryTemplate: StoryFn<{ label: string; iconUrl: string; color: string }> = (argTypes) => ({
	components: { Badge },
	props: Object.keys(argTypes),
	template:
		'<div style="display: flex"><Badge v-bind=$props><img alt="Badge" style="width: 100%; height: 100%" :src="iconUrl" /></Badge></div>',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34953',
	},
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	label: 'Komentarz zespołu',
	iconUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
};

Interactive.argTypes = {
	color: {
		control: { type: 'select', options: Object.values(BADGE_COLORS) },
		defaultValue: BADGE_COLORS.NEUTRAL,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34953',
	},
};
