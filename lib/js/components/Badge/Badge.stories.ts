import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';

import Badge from './Badge.vue';
import { BADGE_COLORS, BADGE_ELEVATION, BADGE_SIZES } from './Badge.consts';
import { ICONS } from '../Icons/Icon';
import DsBanner, { BANNER_COLORS } from '../Banner';

type BadgeProps = ComponentProps<typeof Badge>;

function wrapWithContainer(template: string): string {
	// line-height: 0; is to remove extra space below the badge (as it's an inline element)
	return `<div style="display: inline-flex; background: #ccc; padding: 16px; line-height: 0; margin-bottom: 16px;">${template}</div>
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" />
`;
}

const meta: Meta<typeof Badge> = {
	title: 'Components/Badges/Badge',
	component: Badge,
	render: (args: BadgeProps) => ({
		components: { Badge, DsBanner },
		setup() {
			return {
				args,
				BANNER_COLORS,
			};
		},
		computed: {
			invalidUsage() {
				const invalidSizeWithLabel =
					(args.size === BADGE_SIZES.X_SMALL || args.size === BADGE_SIZES.SMALL) &&
					args.label;

				const invalidSizeWithIconOrImage =
					args.size === BADGE_SIZES.X_SMALL && (args.icon || args.imageUrl);

				return invalidSizeWithLabel || invalidSizeWithIconOrImage;
			},
		},
		// line-height: 0; is to remove extra space below the badge (as it's an inline element)
		template: wrapWithContainer('<Badge v-bind="args" />'),
	}),
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(BADGE_SIZES),
		},
		color: {
			control: 'select',
			options: Object.values(BADGE_COLORS),
		},
		elevation: {
			control: 'select',
			options: Object.values(BADGE_ELEVATION),
		},
		icon: {
			control: 'select',
			options: Object.keys(ICONS),
		},
	},
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Interactive: Story = {
	args: {
		color: BADGE_COLORS.PRIMARY,
		size: BADGE_SIZES.SMALL,
		elevation: BADGE_ELEVATION.SMALL,
		label: '',
		imageUrl: '',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-10601&m=dev',
	},
};

export const InteractiveWithImage: Story = {
	args: {
		size: BADGE_SIZES.SMALL,
		imageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
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
};
