import Drawer from './Drawer.vue';
import { DRAWER_POSITIONS } from './Drawer.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Drawer',
	component: Drawer,
} as Meta<typeof Drawer>;

const StoryTemplate: StoryFn<typeof Drawer> = (argTypes) => ({
	components: { Drawer },
	props: Object.keys(argTypes),
	template: `<div style="height: 400px; width: 200px;">
            <drawer :position="position">
                <template v-slot:header><div style="border: 1px solid #000">Header</div></template>
                <div style="border: 1px solid #000">Content</div>
                <template v-slot:footer><div style="border: 1px solid #000">Footer</div></template>
            </drawer>
        </div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	position: DRAWER_POSITIONS.RIGHT,
} as Args;

const argTypes = {
	position: {
		control: { type: 'select', options: Object.values(DRAWER_POSITIONS) },
		defaultValue: DRAWER_POSITIONS.RIGHT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3343%3A61189',
	},
};
