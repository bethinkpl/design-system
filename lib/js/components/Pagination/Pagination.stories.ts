import Pagination from './Pagination.vue';
import { useArgs } from 'storybook/preview-api';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} as Meta<typeof Pagination>;

const StoryTemplate: StoryFn<typeof Pagination> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
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
	};
};

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	currentPage: { control: { type: 'number', min: 1 } },
	forceCompact: { control: 'boolean' },
	isCentered: { control: 'boolean' },
	itemsPerPage: { control: { type: 'number', min: 1 } },
	itemsTotalAmount: { control: { type: 'number', min: 1 } },
	accessory: { control: 'text' },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = {
	currentPage: 1,
	forceCompact: false,
	isCentered: false,
	itemsPerPage: 30,
	itemsTotalAmount: 600,
	accessory: 'accessory slot',
} as Args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4',
	},
};
