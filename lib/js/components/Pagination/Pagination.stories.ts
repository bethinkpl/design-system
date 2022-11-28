import Pagination from './Pagination.vue';
import { PAGINATION_LAYOUTS } from './Pagination.consts';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} as Meta<typeof Pagination>;

const StoryTemplate: StoryFn<typeof Pagination> = (argTypes, { updateArgs }) => ({
	components: { Pagination },
	props: Object.keys(argTypes),
	methods: {
		onChangePage(currentPage) {
			updateArgs({ currentPage });
		},
	},
	template: `
		<Pagination v-bind=$props @change-page="onChangePage">
			<template #accessory>
				<div v-if="accessory" v-html="accessory" />
			</template>
		</Pagination>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	layout: {
		control: { type: 'select', options: Object.values(PAGINATION_LAYOUTS) },
		defaultValue: PAGINATION_LAYOUTS.DEFAULT,
	},
	currentPage: { control: { type: 'number', min: 1 }, defaultValue: 1 },
	initialPage: { control: { type: 'number', min: 1 }, defaultValue: 1 },
	isCentered: { control: { type: 'boolean' }, defaultValue: false },
	itemsTotalAmount: { control: { type: 'number', min: 1 }, defaultValue: 600 },
	accessory: { control: { type: 'text' }, defaultValue: 'accessory slot' },
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4',
	},
};
