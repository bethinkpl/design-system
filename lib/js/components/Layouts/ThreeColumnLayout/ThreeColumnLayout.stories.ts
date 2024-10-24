import ThreeColumnLayout from './ThreeColumnLayout.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE } from './ThreeColumnLayout.consts';

export default {
	title: 'Components/Layouts/ThreeColumnLayout',
	component: ThreeColumnLayout,
	decorators: [
		(story) => ({
			components: { story },
			template:
				"<div style='display: flex; width: 100vw; height: 100vh;  background: lightgray; flex-direction: column;'>" +
				'<div style="padding: 16px; background: lightcoral; z-index: 1">Example header</div>' +
				'<story />' +
				'</div>',
		}),
		(story) => ({
			components: { story },
			template:
				"<div style='display: flex; width: 100%; height: 100%; font-size: 12px; color: #fff;'><story /></div>",
		}),
	],
} as Meta<typeof ThreeColumnLayout>;

const StoryTemplate: StoryFn<typeof ThreeColumnLayout> = (args) => ({
	components: { ThreeColumnLayout },
	setup() {
		return args;
	},
	template: `
		<three-column-layout :rightColumnSize='rightColumnSize'
							 :rightColumnVisible='rightColumnVisible'
							 :leftColumnVisible='leftColumnVisible'
							 :initialMobileRightColumnVisibleState='initialMobileRightColumnVisibleState'
							 :initialMobileLeftColumnVisibleState='initialMobileLeftColumnVisibleState'
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
		</three-column-layout>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	rightColumnVisible: true,
	initialMobileRightColumnVisibleState: true,
	leftColumnVisible: true,
	initialMobileLeftColumnVisibleState: false,
	contentWithoutPadding: false,
	rightColumnSize: THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
} as Args;

const argTypes = {
	rightColumnSize: {
		control: 'select',
		options: Object.values(THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE),
	},
	leftColumnVisible: { control: 'boolean' },
	rightColumnVisible: { control: 'boolean' },
	initialMobileRightColumnVisibleState: { control: 'boolean' },
	initialMobileLeftColumnVisibleState: { control: 'boolean' },
	contentWithoutPadding: { control: 'boolean' },
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
