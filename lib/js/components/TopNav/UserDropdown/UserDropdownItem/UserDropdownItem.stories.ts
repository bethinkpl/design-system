import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import UserDropdownItem from './UserDropdownItem.vue';
import SelectList from '../../../SelectList/SelectList.vue';
import DsChip from '../../../Chip';
import { CHIP_SIZES } from '../../../Chip/Chip.consts';
import { SELECT_LIST_ITEM_STATES } from '../../../SelectList/SelectListItem/SelectListItem.consts';
import { ICONS } from '../../../Icons/Icon';

const meta = {
	title: 'Components/TopNav/UserDropdown/UserDropdownItem',
	component: UserDropdownItem,
} as Meta<typeof UserDropdownItem>;

export default meta;

type Story = StoryObj<typeof UserDropdownItem>;

export const Interactive: Story = {
	args: {
		label: 'Wiadomości',
		iconLeft: 'FA_COMMENT',
		href: '',
		state: SELECT_LIST_ITEM_STATES.DEFAULT,
		metadataSlot: true,
	} as Args,
	argTypes: {
		iconLeft: {
			control: 'select',
			options: [null, ...Object.keys(ICONS)],
		},
		state: {
			control: 'select',
			options: Object.values(SELECT_LIST_ITEM_STATES),
		},
		href: { control: 'text' },
		metadataSlot: { control: 'boolean' },
	} as ArgTypes,
	render: (args: Args) => ({
		components: { UserDropdownItem, SelectList, DsChip },
		setup() {
			return { args, ICONS, CHIP_SIZES };
		},
		template: `
			<div style="width: 220px;">
				<select-list>
					<user-dropdown-item
						:label="args.label"
						:icon-left="ICONS[args.iconLeft]"
						:href="args.href"
						:state="args.state"
					>
						<template v-if="args.metadataSlot" #metadata>
							<ds-chip label="12" :size="CHIP_SIZES.X_SMALL" />
						</template>
					</user-dropdown-item>
				</select-list>
			</div>`,
	}),
};
