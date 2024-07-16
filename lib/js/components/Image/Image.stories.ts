import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import Image from './Image.vue';
import { ICON_TEXT_COLORS, ICON_TEXT_SIZES, ICON_TEXT_STATES } from '../IconText';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/Image',
	component: Image,
} as Meta<typeof Image>;

const StoryTemplate: StoryFn<typeof Image> = (args) => ({
	components: { DsImage: Image },
	setup() {
		return { ...args };
	},
	template: `
		<div style="width: 500px; height: 500px;">
			<ds-image
					:src="src"
			/>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = {
	src: 'https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg',
} as Args;
