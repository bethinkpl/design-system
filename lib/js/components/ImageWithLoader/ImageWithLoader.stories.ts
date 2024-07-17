import { Args, Meta, StoryFn } from '@storybook/vue3';
import ImageWithLoader from './ImageWithLoader.vue';

export default {
	title: 'Components/ImageWithLoader',
	component: ImageWithLoader,
} as Meta<typeof ImageWithLoader>;

const StoryTemplate: StoryFn<typeof ImageWithLoader> = (args) => ({
	components: { ImageWithLoader },
	setup() {
		return { ...args };
	},
	template: `
		<div style="width: 800px; height: 500px;">
			<image-with-loader
				:src="src"
			/>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = {
	src: 'https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg',
} as Args;
