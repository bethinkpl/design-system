import Layout from './Layout.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { LAYOUT_RIGHT_COLUMN_SIZE } from './Layout.consts';

export default {
	title: 'Components/Layout',
	component: Layout,
} as Meta<typeof Layout>;

const StoryTemplate: StoryFn<typeof Layout> = (args) => ({
	components: { Layout },
	setup() {
		return { ...args };
	},
	template: `
		<div
			style='display: flex; min-height: 100vh; font-size: 12px; color: #fff;'>
		<layout :rightColumnSize='rightColumnSize'
				:rightColumnVisible='rightColumnVisible'
				:sideMenuVisible='sideMenuVisible'
				:rightColumnMode='rightColumnMode'
				:rightColumnVisibleLocal='rightColumnVisibleLocal'
				:sideMenuVisibleLocal='sideMenuVisibleLocal'
				:contentWithoutPadding='contentWithoutPadding'>
			<template #leftColumn>
				<div style='width: 100%; height: 100%; background: rgb(249, 27, 214);'>leftColumn</div>
			</template>
			<template #rightColumn>
				<div style='width: 100%; height: 100%;'
					 :style='{"background": (rightColumnSize === "medium" ? "#2c7bfb" : "#817c81")}'>rightColumn
				</div>
			</template>

			<div style='width: 100%; height: 100%; background: #9133c2;'>
				content
			</div>
		</layout>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	rightColumnVisible: true,
	rightColumnVisibleLocal: true,
	sideMenuVisible: true,
	sideMenuVisibleLocal: false,
	contentWithoutPadding: false,
	rightColumnSize: LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
} as Args;

const argTypes = {
	rightColumnSize: {
		control: { type: 'select', options: Object.values(LAYOUT_RIGHT_COLUMN_SIZE) },
		defaultValue: LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
	},
	sideMenuVisible: { control: { type: 'boolean' } },
	rightColumnVisible: { control: { type: 'boolean' } },
	sideMenuVisibleLocal: { control: { type: 'boolean' } },
	rightColumnVisibleLocal: { control: { type: 'boolean' } },
	contentWithoutPadding: { control: { type: 'boolean' } },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	layout: 'fullscreen',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/AYTmGtcujVq9subNrTpHnX/Layout---nowa-koncepcja?type=design&node-id=1-7&t=ANHJptt0VBE6JEs4-4',
	},
};
