import { Meta, StoryObj } from '@storybook/vue3';
import UserDropdownDivider from './UserDropdownDivider.vue';
import SelectList from '../../../SelectList/SelectList.vue';
import UserDropdownItem from '../UserDropdownItem/UserDropdownItem.vue';

const meta = {
	title: 'Components/TopNav/UserDropdown/UserDropdownDivider',
	component: UserDropdownDivider,
} as Meta<typeof UserDropdownDivider>;

export default meta;

type Story = StoryObj<typeof UserDropdownDivider>;

export const Interactive: Story = {
	render: () => ({
		components: { UserDropdownDivider, UserDropdownItem, SelectList },
		template: `
			<div style="width: 220px;">
				<select-list>
					<user-dropdown-item label="Konto" />
					<user-dropdown-divider />
					<user-dropdown-item label="Wyloguj się" />
				</select-list>
			</div>`,
	}),
};
