// Temporary playgrounds for reviewing the Reka migration. Removed before merge.
import type { Meta, StoryObj } from '@storybook/vue3';
import DropdownComparisonPage from './DropdownComparison.vue';
import PopoverComparisonPage from './PopoverComparison.vue';
import NewInRekaPage from './NewInReka.vue';
import CollisionLabPage from './CollisionLab.vue';

const meta: Meta = {
	title: 'Temporary Playgrounds/Floating panels',
	parameters: { layout: 'fullscreen', controls: { disable: true } },
};
export default meta;
type Story = StoryObj;

// The export names keep the story URLs shared with reviewers.
export const DropdownComparison: Story = {
	name: '1. Dropdown: Reka vs Legacy',
	render: () => ({
		components: { DropdownComparisonPage },
		template: '<dropdown-comparison-page />',
	}),
};
export const PopoverComparison: Story = {
	name: '2. Popover: Reka vs Legacy',
	render: () => ({
		components: { PopoverComparisonPage },
		template: '<popover-comparison-page />',
	}),
};
export const NewInReka: Story = {
	name: '3. New in Reka',
	render: () => ({ components: { NewInRekaPage }, template: '<new-in-reka-page />' }),
};
export const CollisionLab: Story = {
	name: '4. Collision lab',
	render: () => ({ components: { CollisionLabPage }, template: '<collision-lab-page />' }),
};
