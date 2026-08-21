import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';

import Badge from './Badge.vue';
import { BADGE_COLORS, BADGE_ELEVATIONS, BADGE_SIZES } from './Badge.consts';
import { IconKey, ICONS } from '../Icons/Icon';
import DsBanner, { BANNER_COLORS } from '../Banner';
import LogoBadge from '../../../images/logo-badge.svg';

type BadgeProps = ComponentProps<typeof Badge>;

function wrapWithContainer(template: string): string {
	// line-height: 0; is to remove extra space below the badge (as it's an inline element)
	return `<div style="display: inline-flex; background: #ccc; padding: 16px; line-height: 0; margin-bottom: 16px;">${template}</div>
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" />
`;
}

// `hasImageSlot` lets the invalid-usage banner account for an image passed through the slot,
// since it cannot be read off `args` the way `imageUrl` can.
function createRender(template: string, hasImageSlot = false) {
	return (args: BadgeProps) => ({
		components: { Badge, DsBanner, LogoBadge },
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
					args.size === BADGE_SIZES.X_SMALL &&
					(args.icon || args.imageUrl || hasImageSlot);

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
		template: wrapWithContainer(template),
	});
}

const meta: Meta<typeof Badge> = {
	title: 'Components/Badges/Badge',
	component: Badge,
	render: createRender('<Badge v-bind="props" />'),
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

export const InteractiveWithImageSlot: Story = {
	render: createRender(
		'<Badge v-bind="props"><template #image><logo-badge /></template></Badge>',
		true,
	),
	args: {
		color: BADGE_COLORS.PRIMARY,
		size: BADGE_SIZES.MEDIUM,
		label: '',
		icon: undefined,
		imageUrl: '',
		elevation: BADGE_ELEVATIONS.X_SMALL,
	},
};

// Plain rects filling their viewBox, so the rendered box shows exactly how the content was fitted.
const SIZING_RATIOS = [
	{ label: 'landscape 64x27', viewBox: '0 0 64 27', width: 64, height: 27 },
	{ label: 'square 64x64', viewBox: '0 0 64 64', width: 64, height: 64 },
	{ label: 'portrait 27x64', viewBox: '0 0 27 64', width: 27, height: 64 },
];

export const ImageSlotSizing: Story = {
	render: () => ({
		components: { Badge },
		setup() {
			return {
				ratios: SIZING_RATIOS,
				sizes: Object.values(BADGE_SIZES),
			};
		},
		template: `<table style="border-collapse: collapse;">
	<thead>
		<tr>
			<th></th>
			<th v-for="size in sizes" :key="size" style="padding: 8px 16px; font: 12px sans-serif;">{{ size }}</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="ratio in ratios" :key="ratio.label">
			<th style="padding: 8px 16px; font: 12px sans-serif; text-align: right;">{{ ratio.label }}</th>
			<td v-for="size in sizes" :key="size" style="padding: 16px; background: #ccc; border: 1px solid #fff; line-height: 0;">
				<Badge :size="size">
					<template #image>
						<svg :viewBox="ratio.viewBox" xmlns="http://www.w3.org/2000/svg">
							<rect :width="ratio.width" :height="ratio.height" fill="#4400a4" />
						</svg>
					</template>
				</Badge>
			</td>
		</tr>
	</tbody>
</table>`,
	}),
	argTypes: {
		color: { control: false },
		size: { control: false },
		label: { control: false },
		icon: { control: false },
		elevation: { control: false },
	},
};
