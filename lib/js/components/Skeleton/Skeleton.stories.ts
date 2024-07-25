import { Args, Meta, StoryFn } from '@storybook/vue3';
import DsSkeleton from './Skeleton.vue';
import { SKELETON_RADIUSES } from './Skeleton.consts';

export default {
	title: 'Prime Vue Components/Skeleton',
	component: DsSkeleton,
} as Meta<typeof DsSkeleton>;

const StoryTemplate: StoryFn<typeof DsSkeleton> = (args) => ({
	components: { DsSkeleton },
	setup() {
		return { ...args };
	},
	template: `
		<div style="height: 500px; width: 800px;">
			<ds-skeleton :radius="radius" />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	radius: SKELETON_RADIUSES.MD,
	src: 'https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg',
} as Args;

Interactive.argTypes = {
	radius: {
		control: { type: 'select', options: Object.values(SKELETON_RADIUSES) },
		defaultValue: SKELETON_RADIUSES.MD,
	},
};
