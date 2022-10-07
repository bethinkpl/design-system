import { ArgTypes, Meta, StoryFn } from '@storybook/vue';
import TagList from './TagList.vue';
import { TAG_LIST_COLORS, TAG_LIST_SIZES } from './TagList.consts';

export default {
	title: 'Components/TagList',
	component: TagList,
} as Meta<typeof TagList>;

const StoryTemplate: StoryFn<typeof TagList> = (argTypes) => ({
	components: { TagList },
	props: Object.keys(argTypes),
	template: `<tag-list v-bind=$props></tag-list>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	color: {
		control: { type: 'select', options: Object.values(TAG_LIST_COLORS) },
		defaultValue: TAG_LIST_COLORS.NEUTRAL_WEAK,
	},
	size: {
		control: { type: 'select', options: Object.values(TAG_LIST_SIZES) },
		defaultValue: TAG_LIST_SIZES.X_SMALL,
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
		url: 'https://www.figma.com/file/WeJCbVlnkL9HmEcoBpu5NU/LMS---Specific-Components-%26-Limbo?node-id=464%3A26198',
	},
};
