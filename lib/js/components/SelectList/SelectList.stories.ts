import SelectList from './SelectList.vue';
import {
	SELECT_LIST_ITEM_SELECTION_MODE,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_STATES,
} from './SelectListItem/SelectListItem.consts';
import { ICONS } from '../Icons/Icon';

import { Meta, StoryFn } from '@storybook/vue3';
import SelectListItem from './SelectListItem/SelectListItem.vue';
import SelectListItemDivider from './SelectListItemDivider/SelectListItemDivider.vue';
import SelectListItemToggle from './SelectListItemToggle/SelectListItemToggle.vue';
import SelectListSectionTitle from './SelectListSectionTitle/SelectListSectionTitle.vue';

export default {
	title: 'Components/SelectList',
	component: SelectList,
} as Meta<typeof SelectList>;

export const Mix: StoryFn<typeof SelectList> = (args) => ({
	components: {
		SelectList,
		SelectListItem,
		SelectListItemDivider,
		SelectListItemToggle,
		SelectListSectionTitle,
	},
	setup() {
		return args;
	},
	template: `
			<select-list>
				<select-list-section-title label="Nazwa sekcji uppercasem tutaj" />
				<select-list-item label="Small" :size="SELECT_LIST_ITEM_SIZES.SMALL"
													:selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE" />
				<select-list-item :icon-left="ICONS.FA_BAN" label="Medium" :size="SELECT_LIST_ITEM_SIZES.MEDIUM" is-selected
													:selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY" />
				<select-list-item-divider />
				<select-list-section-title label="I nazwa sekcji bez uppercase tutaj" :is-uppercase="false" />
				<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-on label-on="Usuń z kolekcji"
																 label-off="Dodaj do kolekcji" />
				<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" label-on="Usuń z kolekcji"
																 label-off="Dodaj do kolekcji" />
				<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" :state="SELECT_LIST_ITEM_STATES.LOADING"
															 label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji w trakcie ładowania" />
				<select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" :state="SELECT_LIST_ITEM_STATES.DISABLED"
															 label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji w stanie disabled" />
			</select-list>`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			SELECT_LIST_ITEM_SELECTION_MODE: Object.freeze(SELECT_LIST_ITEM_SELECTION_MODE),
			SELECT_LIST_ITEM_SIZES: Object.freeze(SELECT_LIST_ITEM_SIZES),
			SELECT_LIST_ITEM_STATES: Object.freeze(SELECT_LIST_ITEM_STATES),
		};
	},
});

Mix.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=0%3A1',
	},
};

export const SelectableList: StoryFn<typeof SelectList> = (argTypes) => ({
	components: { SelectList, SelectListItem },
	props: Object.keys(argTypes),
	template: `
			<select-list>
			<select-list-item
					:is-selected="selected === 0"
					label="Short text"
					@click.native="selected = 0"
			/>
			<select-list-item
					:is-selected="selected === 1"
					label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada commodo diam, a venenatis ipsum. Praesent vitae bibendum dolor."
					@click.native="selected = 1"
			/>
			</select-list>`,
	data() {
		return {
			selected: 0,
		};
	},
});
