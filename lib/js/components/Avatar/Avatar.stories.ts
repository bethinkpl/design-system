import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import Avatar from './Avatar.vue';
import { AVATAR_SIZES } from './Avatar.consts';

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
	},
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Interactive: Story = {
	args: {
		size: AVATAR_SIZES.MEDIUM,
		username: 'Dariusz Chrapek',
		avatarUrl:
			'https://wiecejnizlek.pl/wp-content/uploads/2021/08/Dariusz_Chrapek-uai-2996x2996-1-scaled.jpeg',
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
		template: `<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar :username="name" :size="args.size" /></div></div>`,
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
		size: AVATAR_SIZES.MEDIUM,
	},
};
