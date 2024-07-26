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
		<div style="height: 200px; width: 300px;">
			<ds-skeleton :height="height" :radius="radius" :width="width" />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

Interactive.args = {
	height: '100%',
	radius: SKELETON_RADIUSES.MD,
	width: '100%',
} as Args;

Interactive.argTypes = {
	radius: {
		control: { type: 'select', options: Object.values(SKELETON_RADIUSES) },
		defaultValue: SKELETON_RADIUSES.MD,
	},
};
