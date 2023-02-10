import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import IconList from './IconList.vue';
import { ICON_LIST_COLORS, ICON_LIST_SIZES } from './IconList.consts';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/IconList',
	component: IconList,
} as Meta<typeof IconList>;

const StoryTemplate: StoryFn<{
	color: string;
	size: string;
	tagNames: Array<string>;
	icon: string | null;
}> = (args) => ({
	components: { IconList },
	setup() {
		return { ...args };
	},
	template: `
		<icon-list :color="color" :size="size" :tag-names="tagNames" :icon="ICONS[icon]"></icon-list>`,
	created() {
		this.ICONS = ICONS;
	},
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = {
	color: ICON_LIST_COLORS.NEUTRAL_WEAK,
	size: ICON_LIST_SIZES.X_SMALL,
	tagNames: ['Tagi', 'po', 'przecinku'],
	icon: 'FA_TAGS',
};

const argTypes = {
	color: {
		control: { type: 'select' },
		options: Object.values(ICON_LIST_COLORS),
	},
	size: {
		control: { type: 'select' },
		options: Object.values(ICON_LIST_SIZES),
	},
	tagNames: {
		control: { type: 'array' },
	},
	icon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4832%3A81133',
	},
};
