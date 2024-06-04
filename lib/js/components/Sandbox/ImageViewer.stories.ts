import ImageViewer from './ImageViewer.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/ImageViewer',
	component: ImageViewer,
} as Meta<typeof ImageViewer>;

const StoryTemplate: StoryFn<typeof ImageViewer> = (args, { updateArgs }) => ({
	components: { ImageViewer },
	setup() {
		return { ...args };
	},
	template: `<ImageViewer />`,
});

export const Default = StoryTemplate.bind({});

Default.argTypes = {};
Default.args = {};

