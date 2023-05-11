import SectionTitle from './SectionTitle.vue';
import { SECTION_TITLE_SIZES } from './SectionTitle.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SectionTitle',
	component: SectionTitle,
} as Meta<typeof SectionTitle>;

const StoryTemplate: StoryFn<typeof SectionTitle> = (args, { updateArgs }) => ({
	components: { SectionTitle },
	setup() {
		return { ...args };
	},
	template: `<section-title :size="size" :supporting-text="supportingText" :title-text="titleText" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	supportingText: '',
	titleText: 'Title',
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(SECTION_TITLE_SIZES) },
		defaultValue: SECTION_TITLE_SIZES.XS,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111037&t=2Z2n2tIHRHEsWjoW-4',
	},
};
