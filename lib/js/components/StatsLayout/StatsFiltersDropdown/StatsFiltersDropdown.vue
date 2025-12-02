<template>
	<ds-dropdown :placement="DROPDOWN_PLACEMENTS.BOTTOM_END">
		<template #reference="{ isOpened }">
			<ds-button
				:icon-left="ICONS.FA_CHART_COLUMN"
				:icon-right="isOpened ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
				:type="BUTTON_TYPES.TEXT"
				>{{ t('ds.statsLayout.filtersDropdown.title') }}</ds-button
			>
		</template>
		<template #default="{ close }">
			<select-list>
				<select-list-item
					v-for="filterItem in filterItems"
					:key="filterItem.key"
					:label="filterItem.label"
					:is-selected="filterItem.key === selectedFilterKey"
					@click="select(filterItem, close)"
				/>
			</select-list>
		</template>
	</ds-dropdown>
</template>

<script setup lang="ts">
import DsButton from '../../Buttons/Button';
import { ICONS } from '../../Icons/Icon/Icon.consts';
import DsDropdown from '../../Dropdown/Dropdown.vue';
import SelectList from '../../SelectList/SelectList.vue';
import SelectListItem from '../../SelectList/SelectListItem/SelectListItem.vue';
import { BUTTON_TYPES } from '../../Buttons/Button/Button.consts';
import { DROPDOWN_PLACEMENTS } from '../../Dropdown/Dropdown.consts';
import { useLegacyI18n } from '../../../composables/useLegacyI18n';

interface FilterItem {
	key: string;
	label: string;
}

export interface StatsFiltersDropdownProps {
	filterItems?: Array<FilterItem>;
	selectedFilterKey?: string | null;
}

const { filterItems = [], selectedFilterKey = null } = defineProps<StatsFiltersDropdownProps>();

const emit = defineEmits<{ select: [key: string] }>();

const { t } = useLegacyI18n();

const select = (filterItem: FilterItem, close: () => void) => {
	emit('select', filterItem.key);
	close();
};
</script>
