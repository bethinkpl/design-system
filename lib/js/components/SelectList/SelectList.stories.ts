import SelectList from './SelectList.vue';
import { SELECT_LIST_ITEM_SIZES } from './SelectListItem/SelectListItem.consts';
import { ICONS } from '../Icons/Icon';

import { Meta, StoryFn } from '@storybook/vue';
import SelectListItem from './SelectListItem/SelectListItem.vue';
import SelectListItemDivider from './SelectListItemDivider/SelectListItemDivider.vue';
import SelectListItemToggle from './SelectListItemToggle/SelectListItemToggle.vue';

export default {
	title: 'Components/SelectList',
	component: SelectList,
} as Meta<typeof SelectList>;

const StoryTemplate: StoryFn<typeof SelectList> = (argTypes) => ({
	components: { SelectList, SelectListItem, SelectListItemDivider, SelectListItemToggle },
	props: Object.keys(argTypes),
	template: `<select-list>
		<select-list-item label="Small" :size="SELECT_LIST_ITEM_SIZES.SMALL" />
		<select-list-item :icon-left="ICONS.FA_BAN" label="Medium" :size="SELECT_LIST_ITEM_SIZES.MEDIUM" is-selected />
		<select-list-item-divider />
		<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-on label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji" />
		<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji" />
		<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-loading label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji" />
	</select-list>`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			SELECT_LIST_ITEM_SIZES: Object.freeze(SELECT_LIST_ITEM_SIZES),
		};
	},
});

export const Static = StoryTemplate.bind({});

Static.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=0%3A1',
	},
};
