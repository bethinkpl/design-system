import { Args, Meta, StoryFn } from '@storybook/vue3';
import DsImage from './Image.vue';

export default {
	title: 'Components/Image',
	component: DsImage,
} as Meta<typeof DsImage>;

const StoryTemplate: StoryFn<typeof DsImage> = (args) => ({
	components: { DsImage },
	setup() {
		return { ...args };
	},
	template: `
		<div style="display: flex; height: 500px; width: 800px;">
			<ds-image
				:src="src"
			/>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = {
	src: 'https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg',
} as Args;
