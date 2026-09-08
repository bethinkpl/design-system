import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions/decorator';
import UserDropdown from './UserDropdown.vue';
import UserDropdownItem from './UserDropdownItem/UserDropdownItem.vue';
import UserDropdownDivider from './UserDropdownDivider/UserDropdownDivider.vue';
import TopNav from '../TopNav/TopNav.vue';
import TopNavBranding from '../TopNavBranding/TopNavBranding.vue';
import DsChip from '../../Chip';
import { CHIP_SIZES } from '../../Chip/Chip.consts';
import { AVATAR_ACCESS_STATUSES, AVATAR_ACTIVITY_STATUSES } from '../../Avatar/Avatar.consts';
import { ICONS } from '../../Icons/Icon';

const meta = {
	title: 'Components/TopNav/UserDropdown',
	component: UserDropdown,
	decorators: [withActions],
	parameters: {
		actions: { handles: ['show', 'hide'] },
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/WeJCbVlnkL9HmEcoBpu5NU/LMS---Specific-Components---Limbo?node-id=9272-42857',
		},
	},
} as Meta<typeof UserDropdown>;

export default meta;

type Story = StoryObj<typeof UserDropdown>;

const args = {
	username: 'Roman Kowalski',
	email: 'roman.kowalski@gmail.com',
} as Args;

const argTypes = {
	username: { control: 'text' },
	email: { control: 'text' },
	avatarUrl: { control: 'text' },
	activityStatus: {
		control: { type: 'select', labels: { undefined: 'None (undefined)' } },
		options: [undefined, ...Object.values(AVATAR_ACTIVITY_STATUSES)],
	},
	accessStatus: {
		control: { type: 'select', labels: { undefined: 'None (undefined)' } },
		options: [undefined, ...Object.values(AVATAR_ACCESS_STATUSES)],
	},
} as ArgTypes;

const items = `
	<user-dropdown-item :to="{ name: 'account' }" :icon-left="ICONS.FA_USER" label="Konto" />
	<user-dropdown-item href="/messages" :icon-left="ICONS.FA_COMMENT" label="Wiadomości">
		<template #metadata>
			<ds-chip label="12" :size="CHIP_SIZES.X_SMALL" />
		</template>
	</user-dropdown-item>
	<user-dropdown-item :icon-left="ICONS.FA_MOON_STAR" label="Włącz tryb ciemny" />
	<user-dropdown-divider />
	<user-dropdown-item
		:icon-left="ICONS.FA_ARROW_RIGHT_FROM_BRACKET"
		label="Wyloguj się"
		@click="close"
	/>
`;

const render = (storyArgs: Args) => ({
	components: { UserDropdown, UserDropdownItem, UserDropdownDivider, DsChip },
	setup() {
		return { args: storyArgs, ICONS, CHIP_SIZES };
	},
	template: `
		<div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
			<user-dropdown v-bind="args">
				<template #default="{ close }">${items}</template>
			</user-dropdown>
		</div>`,
});

export const Interactive: Story = { args, argTypes, render };

export const WithoutItems: Story = {
	args,
	argTypes,
	render: (storyArgs: Args) => ({
		components: { UserDropdown },
		setup() {
			return { args: storyArgs };
		},
		template: `
			<div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
				<user-dropdown v-bind="args" />
			</div>`,
	}),
};

export const LongEmail: Story = {
	args: {
		username: 'Roman Aleksander Kowalski-Nowakowski',
		email: 'roman.aleksander.kowalski+newsletter@bardzo-dluga-domena.example.com',
	} as Args,
	argTypes,
	render,
};

export const InTopNav: Story = {
	args,
	argTypes,
	render: (storyArgs: Args) => ({
		components: {
			UserDropdown,
			UserDropdownItem,
			UserDropdownDivider,
			DsChip,
			TopNav,
			TopNavBranding,
		},
		setup() {
			return { args: storyArgs, ICONS, CHIP_SIZES };
		},
		template: `
			<top-nav>
				<top-nav-branding title="Bethink" />
				<template #trailing>
					<user-dropdown v-bind="args">
						<template #default="{ close }">${items}</template>
					</user-dropdown>
				</template>
			</top-nav>`,
	}),
};
