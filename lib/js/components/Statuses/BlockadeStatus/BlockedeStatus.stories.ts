import BlockadeStatus from './BlockadeStatus.vue';
import { COURSE_BLOCKADE_ACCESS_STATUS } from '../../../consts/user';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Statuses/BlockadeStatus',
	component: BlockadeStatus,
} as Meta<typeof BlockadeStatus>;

const StoryTemplate: StoryFn<typeof BlockadeStatus> = (argTypes) => ({
	components: { BlockadeStatus },
	props: Object.keys(argTypes),
	template: `<blockade-status :status="status" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	status: COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE,
} as Args;

const argTypes = {
	status: {
		control: { type: 'select', options: Object.values(COURSE_BLOCKADE_ACCESS_STATUS) },
		defaultValue: COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE,
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