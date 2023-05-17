import SelectListSectionTitle from './SelectListSectionTitle.vue';

import SelectList from './../SelectList.vue';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

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
		control: { type: 'text' },
		defaultValue: 'Select List Section Title',
	},
	isUppercase: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
} as ArgTypes;
export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = argTypes;
Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1923%3A34378',
	},
};
