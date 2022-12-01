import CardExpandable from './CardExpandable.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Cards/CardExpandable',
	component: CardExpandable,
} as Meta<typeof CardExpandable>;

const StoryTemplate: StoryFn<typeof CardExpandable> = (argTypes) => ({
	components: { CardExpandable },
	props: Object.keys(argTypes),
	template: `<card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed" :expander-text-expanded="expanderTextExpanded" :is-expanded="isExpanded" :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
		    <div v-if="header" slot="header" v-html="header" />
		    <template #content="{ isExpanded: isExpandedInternal }">
		        <div v-html="content" /><div v-if="isExpandedInternal">Dodatkowa treść w slocie <code>content</code> widoczna po rozwinięciu</div>
		    </template>' +
		    <template #expandedContent><div v-html="expandedContent"></div></template>
		</card-expandable>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	isExpanderVisible: true,
	expanderTextCollapsed: 'Rozwiń',
	expanderTextExpanded: 'Zwiń',
	isExpanded: false,
	headerHasPadding: false,
	dividerUnderHeader: false,
} as Args;

const argTypes = {
	header: { control: { type: 'text' }, defaultValue: 'header slot' },
	content: {
		control: { type: 'text' },
		defaultValue: 'content slot that supports <b>HTML markup</b>',
	},
	expandedContent: {
		control: { type: 'text' },
		defaultValue:
			'Dodatkowa treść w slocie <code>expandedContent</code> widoczna po rozwinięciu',
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
