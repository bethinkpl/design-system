import SelectListSectionTitle from './SelectListSectionTitle.vue';

import SelectList from './../SelectList.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SelectList/SelectListSectionTitle',
	component: SelectListSectionTitle,
} as Meta<typeof SelectListSectionTitle>;

const StoryTemplate: StoryFn<typeof SelectListSectionTitle> = (args) => ({
	components: { SelectList, SelectListSectionTitle },
	setup() {
		return { ...args };
	},
	template: `
		<select-list>
			<select-list-section-title :label="label" :is-uppercase="isUppercase" />
		</select-list>`,
});

const argTypes = {
	label: {
		control: 'text',
	},
	isUppercase: {
		control: 'boolean',
	},
} as ArgTypes;
export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	label: 'Select List Section Title',
	isUppercase: true,
} as Args;
Interactive.argTypes = argTypes;
Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5367-94240&t=rgPXAVgiWbp0FLGZ-4',
	},
};
