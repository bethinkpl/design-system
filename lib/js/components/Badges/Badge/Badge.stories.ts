// Badge.stories.ts

import Badge from './Badge.vue';
import { BADGE_COLORS } from './Badge.consts';

import { Meta, Story } from '@storybook/vue';

export default {
	title: 'Components/Badges/Badge',
	component: Badge,
} as Meta<typeof Badge>;

const Template: Story<{ label: string; iconUrl: string; color: Object }> = (argTypes) => ({
	components: { Badge },
	props: Object.keys(argTypes),
	template:
		'<div style="display: flex"><Badge :color="color" :label="label"><img alt="Badge" style="width: 100%; height: 100%" :src="iconUrl" /></Badge></div>',
});

export const Primary = Template.bind({});

Primary.args = {
	label: 'Komentarz zespołu',
	iconUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
};

Primary.argTypes = {
	color: {
		control: { type: 'select', options: Object.values(BADGE_COLORS) },
		defaultValue: BADGE_COLORS.NEUTRAL,
	},
};

Primary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34953',
	},
};
