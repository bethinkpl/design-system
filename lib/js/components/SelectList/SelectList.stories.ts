import SelectList from './SelectList.vue';
import { SELECT_LIST_SIZES } from './SelectList.consts';
import { ICONS } from '../Icons/Icon';

import { Meta, StoryFn } from '@storybook/vue';
import SelectListItem from './SelectListItem.vue';
import SelectListItemDivider from './SelectListItemDivider.vue';

export default {
	title: 'Components/SelectList',
	component: SelectList,
} as Meta<typeof SelectList>;

const StoryTemplate: StoryFn<typeof SelectList> = (argTypes) => ({
	components: { SelectList, SelectListItem, SelectListItemDivider },
	props: Object.keys(argTypes),
	template: `<select-list>
		<select-list-item label="Wróc do listy poleceń" :size="SELECT_LIST_SIZES.MEDIUM" />
		<select-list-item-divider />
		<select-list-item :icon="ICONS.FA_CIRCLE" label="POLECENIE 1 / 2" :size="SELECT_LIST_SIZES.MEDIUM" is-selected />
		<select-list-item :icon="ICONS.FA_CIRCLE" label="POLECENIE 2 / 2" :size="SELECT_LIST_SIZES.MEDIUM" />
	</select-list>`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			SELECT_LIST_SIZES: Object.freeze(SELECT_LIST_SIZES),
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
