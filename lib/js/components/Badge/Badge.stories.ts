import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';

import Badge from './Badge.vue';
import { BADGE_COLORS, BADGE_ELEVATIONS, BADGE_SIZES } from './Badge.consts';
import { IconKey, ICONS } from '../Icons/Icon';
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
			props() {
				return {
					...args,
					icon: ICONS[args.icon as IconKey],
				};
			},
		},
		// line-height: 0; is to remove extra space below the badge (as it's an inline element)
		template: wrapWithContainer('<Badge v-bind="props" />'),
	}),
	argTypes: {
		color: {
			control: 'select',
			options: Object.values(BADGE_COLORS),
		},
		size: {
			control: 'select',
			options: Object.values(BADGE_SIZES),
		},
		icon: {
			control: 'select',
			options: [null, ...Object.keys(ICONS)],
		},
		elevation: {
			control: 'select',
			options: Object.values(BADGE_ELEVATIONS),
		},
	},
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Interactive: Story = {
	args: {
		color: BADGE_COLORS.PRIMARY,
		size: BADGE_SIZES.SMALL,
		label: '',
		icon: undefined,
		imageUrl: '',
		elevation: BADGE_ELEVATIONS.X_SMALL,
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
		color: BADGE_COLORS.PRIMARY,
		size: BADGE_SIZES.SMALL,
		label: '',
		icon: undefined,
		imageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
		elevation: BADGE_ELEVATIONS.X_SMALL,
	},
};
