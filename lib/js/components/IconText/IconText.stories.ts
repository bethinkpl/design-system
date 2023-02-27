import { ArgTypes, Meta, StoryFn } from '@storybook/vue';
import IconText from './IconText.vue';
import { ICON_TEXT_COLORS, ICON_TEXT_SIZES } from './IconText.consts';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/IconText',
	component: IconText,
} as Meta<typeof IconText>;

const StoryTemplate: StoryFn<{
	color: string;
	size: string;
	tagNames: Array<string>;
	icon: string | null;
}> = (argTypes) => ({
	components: { IconText },
	props: Object.keys(argTypes),
	template: `<icon-text :color="color" :size="size" :tag-names="tagNames" :icon="ICONS[icon]" ></icon-text>`,
	created() {
		this.ICONS = ICONS;
	},
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = {
	color: ICON_TEXT_COLORS.NEUTRAL_WEAK,
	size: ICON_TEXT_SIZES.X_SMALL,
	tagNames: ['Tagi', 'po', 'przecinku'],
	icon: 'FA_TAGS',
};

const argTypes = {
	color: {
		control: { type: 'select' },
		options: Object.values(ICON_TEXT_COLORS),
	},
	size: {
		control: { type: 'select' },
		options: Object.values(ICON_TEXT_SIZES),
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
