import DrawerContent from './DrawerContent.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Drawer/DrawerContent',
	component: DrawerContent,
} as Meta<typeof DrawerContent>;

const StoryTemplate: StoryFn<typeof DrawerContent> = (args) => ({
	components: { DrawerContent },
	setup() {
		return args;
	},
	template: `
		<drawer-content>
			<div>One</div>
			<div>Two</div>
		</drawer-content>`,
});

export const Static = StoryTemplate.bind({});

Static.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111039&t=ojEtzUKoNdQTh0X8-4',
	},
};
