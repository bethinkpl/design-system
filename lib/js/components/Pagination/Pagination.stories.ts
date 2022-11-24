import Pagination from './Pagination.vue';
import { PAGINATION_LAYOUTS } from './Pagination.consts';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} as Meta<typeof Pagination>;

const StoryTemplate: StoryFn<typeof Pagination> = (argTypes) => ({
	components: { Pagination },
	props: Object.keys(argTypes),
	template: `<Pagination v-bind=$props></Pagination>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	layout: {
		control: { type: 'select', options: Object.values(PAGINATION_LAYOUTS) },
		defaultValue: PAGINATION_LAYOUTS.DEFAULT,
	},

	currentPage: { control: { type: 'number' }, defaultValue: 1 },
	initialPage: { control: { type: 'number' }, defaultValue: 1 },
	isCentered: { control: { type: 'boolean' }, defaultValue: false },
	itemsTotalAmount: { control: { type: 'number' }, defaultValue: 1 },
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4',
	},
};
