import Flag from './Flag.vue';
import { FLAG_SIZES } from './Flag.consts';
import * as FLAGS from './flags';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { toRefs } from 'vue';

export default {
	title: 'Components/Flag',
	component: Flag,
} as Meta<typeof Flag>;

const FLAG_OPTIONS = Object.keys(FLAGS) as Array<keyof typeof FLAGS>;

const StoryTemplate: StoryFn<typeof Flag> = (args) => ({
	components: { Flag },
	setup() {
		const { size, flag } = toRefs(args);

		return {
			size,
			flag,
			FLAGS,
		};
	},
	template: '<flag :flag="FLAGS[flag]" :size="size" />',
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = {
	size: {
		control: 'select',
		options: Object.values(FLAG_SIZES),
	},
	flag: {
		control: 'select',
		options: FLAG_OPTIONS,
	},
} as ArgTypes;

Interactive.args = {
	size: FLAG_SIZES.M,
	flag: 'FLAG_POLAND',
} as Args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=16265-4959',
	},
};
