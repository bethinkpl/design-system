import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';

import Badge from './Badge.vue';
import { BADGE_COLORS, BADGE_SIZES } from './Badge.consts';
import { ICONS } from '../Icons/Icon';
import LogoBadge from '../../../images/logo-badge.svg';

type BadgeProps = ComponentProps<typeof Badge>;

const meta: Meta<typeof Badge> = {
	title: 'Components/Badges/Badge',
	component: Badge,
	render: (args: BadgeProps) => ({
		components: { Badge },
		setup() {
			return {
				args,
			};
		},
		// line-height: 0; is to remove extra space below the badge (as it's an inline element)
		template: `<div style="background: #ccc; padding: 8px; line-height: 0;"><Badge v-bind="args" /></div>`,
	}),
	argTypes: {
		size: {
			control: 'select',
			options: [...Object.values(BADGE_SIZES)],
		},
		color: {
			control: 'select',
			options: [null, ...Object.values(BADGE_COLORS)],
		},
		icon: {
			control: 'select',
			options: [null, ...Object.keys(ICONS)],
		},
	},
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Interactive: Story = {
	args: {
		size: BADGE_SIZES.X_LARGE,
		label: '1',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-10601&m=dev',
	},
};

export const InteractiveWithAccessory: Story = {
	args: {
		size: BADGE_SIZES.X_LARGE,
	},
	argTypes: {
		icon: {
			control: false,
		},
		color: {
			control: false,
		},
		label: {
			control: false,
		},
	},
	render: (args: BadgeProps) => ({
		components: { Badge, LogoBadge },
		setup() {
			return {
				args,
			};
		},
		template: `<div style="background: #ccc; padding: 8px; line-height: 0;"><Badge v-bind="args"><logo-badge :style="accessoryStyle" /></Badge></div>`,
		computed: {
			accessoryStyle() {
				switch (args.size) {
					case BADGE_SIZES.X_LARGE:
						return { width: '20px', height: '20px' };
					case BADGE_SIZES.LARGE:
						return { width: '16px', height: '16px' };
					case BADGE_SIZES.MEDIUM:
						return { width: '12px', height: '12px' };
					case BADGE_SIZES.SMALL:
					default:
						return { width: '8px', height: '8px' };
				}
			},
		},
	}),
};
