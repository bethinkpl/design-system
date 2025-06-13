import SelectListItemDivider from './SelectListItemDivider.vue';

import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
	title: 'Components/SelectList/SelectListItemDivider',
	component: SelectListItemDivider,
} as Meta<typeof SelectListItemDivider>;

const StoryTemplate: StoryFn<typeof SelectListItemDivider> = () => ({
	components: { SelectListItemDivider },
	template: `
			<select-list-item-divider />`,
});

export const Static = StoryTemplate.bind({});

Static.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=4890%3A82025&t=rKEt9RQrHIDsfC7p-4',
	},
};
