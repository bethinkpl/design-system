import type { Meta, StoryObj } from '@storybook/vue3';

import ContainerRibbon from './ContainerRibbon.vue';
import {
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_SIZES,
} from './ContainerRibbon.consts';

const meta: Meta<typeof ContainerRibbon> = {
	title: 'Components/ContainerRibbon',
	component: ContainerRibbon,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: Object.values(CONTAINER_RIBBON_SIZES),
		},
		color: {
			control: { type: 'select' },
			options: Object.values(CONTAINER_RIBBON_COLORS),
		},
		layout: {
			control: { type: 'select' },
			options: Object.values(CONTAINER_RIBBON_LAYOUTS),
		},
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; display: flex; gap: 20px; align-items: center;">
					<story />
				</div>
			`,
		}),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Vertical variants
export const VerticalLarge: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.LARGE,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; height: 120px; display: flex; gap: 20px; align-items: stretch;">
					<story />
				</div>
			`,
		}),
	],
};

export const VerticalMedium: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.MEDIUM,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; height: 120px; display: flex; gap: 20px; align-items: stretch;">
					<story />
				</div>
			`,
		}),
	],
};

export const VerticalSmall: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.SMALL,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; height: 120px; display: flex; gap: 20px; align-items: stretch;">
					<story />
				</div>
			`,
		}),
	],
};

// Horizontal variants
export const HorizontalLarge: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.LARGE,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; width: 120px; display: flex; flex-direction: column; gap: 20px;">
					<story />
				</div>
			`,
		}),
	],
};

export const HorizontalMedium: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.MEDIUM,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; width: 120px; display: flex; flex-direction: column; gap: 20px;">
					<story />
				</div>
			`,
		}),
	],
};

export const HorizontalSmall: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.SMALL,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
	},
	decorators: [
		() => ({
			template: `
				<div style="padding: 20px; width: 120px; display: flex; flex-direction: column; gap: 20px;">
					<story />
				</div>
			`,
		}),
	],
};

// Color variants
export const ColorsVertical: Story = {
	render: () => ({
		components: { ContainerRibbon },
		template: `
			<div style="padding: 20px; height: 120px; display: flex; gap: 16px; align-items: stretch;">
				<ContainerRibbon size="large" color="neutralHeavy" layout="vertical" />
				<ContainerRibbon size="large" color="neutralStrong" layout="vertical" />
				<ContainerRibbon size="large" color="primary" layout="vertical" />
				<ContainerRibbon size="large" color="success" layout="vertical" />
				<ContainerRibbon size="large" color="warning" layout="vertical" />
				<ContainerRibbon size="large" color="danger" layout="vertical" />
				<ContainerRibbon size="large" color="fail" layout="vertical" />
				<ContainerRibbon size="large" color="info" layout="vertical" />
				<ContainerRibbon size="large" color="transparent" layout="vertical" style="border: 1px dashed #ccc;" />
			</div>
		`,
	}),
};

export const ColorsHorizontal: Story = {
	render: () => ({
		components: { ContainerRibbon },
		template: `
			<div style="padding: 20px; width: 120px; display: flex; flex-direction: column; gap: 16px;">
				<ContainerRibbon size="large" color="neutralHeavy" layout="horizontal" />
				<ContainerRibbon size="large" color="neutralStrong" layout="horizontal" />
				<ContainerRibbon size="large" color="primary" layout="horizontal" />
				<ContainerRibbon size="large" color="success" layout="horizontal" />
				<ContainerRibbon size="large" color="warning" layout="horizontal" />
				<ContainerRibbon size="large" color="danger" layout="horizontal" />
				<ContainerRibbon size="large" color="fail" layout="horizontal" />
				<ContainerRibbon size="large" color="info" layout="horizontal" />
				<ContainerRibbon size="large" color="transparent" layout="horizontal" style="border: 1px dashed #ccc;" />
			</div>
		`,
	}),
};

// Sizes comparison
export const SizesVertical: Story = {
	render: () => ({
		components: { ContainerRibbon },
		template: `
			<div style="padding: 20px; height: 120px; display: flex; gap: 16px; align-items: stretch;">
				<ContainerRibbon size="large" color="primary" layout="vertical" />
				<ContainerRibbon size="medium" color="primary" layout="vertical" />
				<ContainerRibbon size="small" color="primary" layout="vertical" />
			</div>
		`,
	}),
};

export const SizesHorizontal: Story = {
	render: () => ({
		components: { ContainerRibbon },
		template: `
			<div style="padding: 20px; width: 120px; display: flex; flex-direction: column; gap: 16px;">
				<ContainerRibbon size="large" color="primary" layout="horizontal" />
				<ContainerRibbon size="medium" color="primary" layout="horizontal" />
				<ContainerRibbon size="small" color="primary" layout="horizontal" />
			</div>
		`,
	}),
};

// Usage example in a card-like container
export const UsageExample: Story = {
	render: () => ({
		components: { ContainerRibbon },
		template: `
			<div style="padding: 20px; display: flex; gap: 20px;">
				<!-- Vertical ribbon on the left -->
				<div style="display: flex; background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
					<ContainerRibbon size="medium" color="success" layout="vertical" />
					<div style="padding: 16px; min-width: 200px;">
						<h3 style="margin: 0 0 8px 0; font-size: 16px;">Success Message</h3>
						<p style="margin: 0; color: #666; font-size: 14px;">This container has a success ribbon indicator.</p>
					</div>
				</div>

				<!-- Horizontal ribbon on top -->
				<div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
					<ContainerRibbon size="medium" color="warning" layout="horizontal" />
					<div style="padding: 16px; min-width: 200px;">
						<h3 style="margin: 0 0 8px 0; font-size: 16px;">Warning Message</h3>
						<p style="margin: 0; color: #666; font-size: 14px;">This container has a warning ribbon indicator.</p>
					</div>
				</div>
			</div>
		`,
	}),
};