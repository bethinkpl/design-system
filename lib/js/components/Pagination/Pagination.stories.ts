import Pagination from './Pagination.vue';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} as Meta<typeof Pagination>;

const StoryTemplate: StoryFn<typeof Pagination> = (args, { updateArgs }) => ({
	components: { Pagination },
	setup() {
		return { args };
	},
	methods: {
		onChangePage(currentPage) {
			updateArgs({ currentPage });
		},
	},
	template: `
			<Pagination v-bind=args @change-page="onChangePage">
			<template #accessory>
				<div v-if="args.accessory" v-html="args.accessory" />
			</template>
			</Pagination>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	currentPage: { control: { type: 'number', min: 1 }, defaultValue: 1 },
	forceCompact: { control: { type: 'boolean' }, defaultValue: false },
	isCentered: { control: { type: 'boolean' }, defaultValue: false },
	itemsPerPage: { control: { type: 'number', min: 1 }, defaultValue: 30 },
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
