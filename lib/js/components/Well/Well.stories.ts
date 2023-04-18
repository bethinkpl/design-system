import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';
import Well from './Well.vue';
import { WELL_PADDINGS } from './Well.consts';

export default {
	title: 'Components/Well',
	component: Well,
} as Meta<typeof Well>;

const StoryTemplate: StoryFn<typeof Well> = (argTypes) => ({
	components: { Well },
	props: Object.keys(argTypes),
	template: '<well :padding="padding"><div v-html="content" /></well>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: null,
} as Args;

const argTypes = {
	padding: {
		control: { type: 'select', options: [null, ...Object.values(WELL_PADDINGS)] },
		defaultValue: null,
	},
	content: {
		control: { type: 'text' },
		defaultValue:
			'<h3 style="margin-top: 0">Content</h3>' +
			'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/oqNhXXGdc4ZnNQ6YNpkLEK/INI-152-Baza-v3---planowanie?node-id=1807-518161&t=sQ5nflpPY2YcPKNc-4',
	},
};
