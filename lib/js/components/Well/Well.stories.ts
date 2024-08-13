import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import Well from './Well.vue';
import { WELL_PADDINGS } from './Well.consts';

export default {
	title: 'Components/Well',
	component: Well,
} as Meta<typeof Well>;

const StoryTemplate: StoryFn<typeof Well> = (args) => ({
	components: { Well },
	setup() {
		return { args };
	},
	template: '<well v-bind="args"><div v-html="args.content" /></well>',
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	padding: {
		control: 'select',
		options: [null, ...Object.values(WELL_PADDINGS)],
	},
	content: {
		control: 'text',
	},
} as ArgTypes;
Interactive.args = {
	padding: null,
	content:
		'<h3 style="margin-top: 0">Content</h3>' +
		'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
} as Args;
Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/oqNhXXGdc4ZnNQ6YNpkLEK/INI-152-Baza-v3---planowanie?node-id=1807-518161&t=sQ5nflpPY2YcPKNc-4',
	},
};
