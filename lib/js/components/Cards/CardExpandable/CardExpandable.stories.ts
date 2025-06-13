import CardExpandable from './CardExpandable.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';

export default {
	title: 'Components/Cards/CardExpandable',
	component: CardExpandable,
} as Meta<typeof CardExpandable>;

const StoryTemplate: StoryFn<typeof CardExpandable> = (args) => ({
	components: { CardExpandable },
	setup() {
		return args;
	},
	template: `
			<card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed"
											 :expander-text-expanded="expanderTextExpanded" :is-expanded="isExpanded"
											 :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
			<template v-if="header" #header>
				<div v-html="header" />
			</template>
			<template #content="{ isExpanded: isExpandedInternal }">
				<div v-html="content" />
				<div v-if="isExpandedInternal">Dodatkowa treść w slocie <code>content</code> widoczna po rozwinięciu</div>
			</template>
			<template #expandedContent>
				<div v-html="expandedContent"></div>
			</template>
			</card-expandable>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	header: 'header slot',
	content: 'content slot that supports <b>HTML markup</b>',
	expandedContent:
		'Dodatkowa treść w slocie <code>expandedContent</code> widoczna po rozwinięciu',
	isExpanderVisible: true,
	expanderTextCollapsed: 'Rozwiń',
	expanderTextExpanded: 'Zwiń',
	isExpanded: false,
	headerHasPadding: false,
	dividerUnderHeader: false,
} as Args;

const argTypes = {
	header: { control: 'text' },
	content: {
		control: 'text',
	},
	expandedContent: {
		control: 'text',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959',
	},
};
