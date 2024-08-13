import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import DsSkeleton from './Skeleton.vue';
import { SKELETON_RADIUS_SIZES } from './Skeleton.consts';

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
	radius: SKELETON_RADIUS_SIZES.MEDIUM,
	width: '100%',
} as Args;

Interactive.argTypes = {
	radius: {
		control: 'select',
		options: Object.values(SKELETON_RADIUS_SIZES),
	},
} as ArgTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10069-3679&m=dev',
	},
};
