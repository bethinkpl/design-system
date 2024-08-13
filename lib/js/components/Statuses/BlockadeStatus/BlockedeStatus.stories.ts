import BlockadeStatus from './BlockadeStatus.vue';
import { COURSE_BLOCKADE_ACCESS_STATUS } from '../../../consts/user';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Statuses/BlockadeStatus',
	component: BlockadeStatus,
} as Meta<typeof BlockadeStatus>;

const StoryTemplate: StoryFn<typeof BlockadeStatus> = (args) => ({
	components: { BlockadeStatus },
	setup() {
		return { ...args };
	},
	template: `<blockade-status :status="status" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	status: COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE,
} as Args;

const argTypes = {
	status: {
		control: 'select',
		options: Object.values(COURSE_BLOCKADE_ACCESS_STATUS),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3040%3A70712',
	},
};
