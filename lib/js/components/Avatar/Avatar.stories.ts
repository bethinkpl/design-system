import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';

import Avatar from './Avatar.vue';
import { AVATAR_ACCESS_STATUSES, AVATAR_ACTIVITY_STATUSES, AVATAR_SIZES } from './Avatar.consts';

type AvatarProps = ComponentProps<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	render: (args: AvatarProps) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `<Avatar v-bind="args" />`,
	}),
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(AVATAR_SIZES),
		},
		accessStatus: {
			control: {
				type: 'select',
				labels: {
					undefined: 'None (undefined)',
				},
			},
			options: [undefined, ...Object.values(AVATAR_ACCESS_STATUSES)],
		},
		activityStatus: {
			control: {
				type: 'select',
				labels: {
					undefined: 'None (undefined)',
				},
			},
			options: [undefined, ...Object.values(AVATAR_ACTIVITY_STATUSES)],
		},
	},
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Interactive: Story = {
	args: {
		size: AVATAR_SIZES.X_SMALL,
		username: 'Dariusz Chrapek',
		avatarUrl:
			'https://wiecejnizlek.pl/wp-content/uploads/2021/08/Dariusz_Chrapek-uai-2996x2996-1-scaled.jpeg',
		teamMemberImageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-12175&t=UpUoIm9oCAaH4dEp-4',
	},
};

export const Colors: Story = {
	render: (args: AvatarProps) => ({
		components: { Avatar },
		setup() {
			return {
				args,
				names: [
					'Arkadiusz Kowalski',
					'Bartosz Nowak',
					'Cezary Kowalczyk',
					'Dariusz Chrapek',
					'Edward Nowak',
					'Feliks Kowalski',
					'Grzegorz Nowak',
					'Henryk Kowalczyk',
					'Ireneusz Nowak',
					'Jacek Kowalski',
					'Kamil Nowak',
					'Leszek Kowalczyk',
					'Marek Nowak',
					'Norbert Kowalski',
					'Oskar Nowak',
					'Piotr Kowalczyk',
				],
			};
		},
		template: `<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar v-bind="args" :username="name" /></div></div>`,
	}),
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(AVATAR_SIZES),
		},
		username: {
			control: false,
		},
		avatarUrl: {
			control: false,
		},
	},
	args: {
		size: AVATAR_SIZES.X_SMALL,
		teamMemberImageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
	},
};
