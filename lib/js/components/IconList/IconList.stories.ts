import { ArgTypes, Meta, StoryFn } from '@storybook/vue';
import IconList from './IconList.vue';
import { ICON_LIST_COLORS, ICON_LIST_SIZES } from './IconList.consts';

export default {
	title: 'Components/IconList',
	component: IconList,
} as Meta<typeof IconList>;

const StoryTemplate: StoryFn<typeof IconList> = (argTypes) => ({
	components: { IconList },
	props: Object.keys(argTypes),
	template: `<icon-list v-bind=$props></icon-list>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	color: {
		control: { type: 'select' },
		options: Object.values(ICON_LIST_COLORS),
		defaultValue: ICON_LIST_COLORS.NEUTRAL_WEAK,
	},
	size: {
		control: { type: 'select' },
		options: Object.values(ICON_LIST_SIZES),
		defaultValue: ICON_LIST_SIZES.X_SMALL,
	},
	tagNames: {
		control: { type: 'array' },
		defaultValue: ['Tagi', 'po', 'przecinku'],
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4832%3A81133',
	},
};
