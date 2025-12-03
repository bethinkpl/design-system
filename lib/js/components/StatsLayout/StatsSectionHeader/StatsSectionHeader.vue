<template>
	<section-header
		:title="t('ds.statsLayout.sectionHeader.title')"
		:icon-left="ICONS.FA_CHART_COLUMN"
		:has-divider="false"
		:info="!!$slots.infoContent"
		:mobile-layout="SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL"
		@info-click="infoContentModalVisible = true"
	>
		<template v-if="filterItems && filterItems.length > 0" #default>
			<slot name="accessory">
				<stats-filters-dropdown
					:filter-items="filterItems"
					:selected-filter-key="selectedFilterKey"
					@select="selectFilter"
				/>
			</slot>
		</template>
	</section-header>

	<ds-modal
		v-if="infoContentModalVisible && !!$slots.infoContent"
		@close-modal="infoContentModalVisible = false"
	>
		<template #default>
			<slot name="infoContent" />
		</template>
	</ds-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionHeader from '../../Headers/SectionHeader/SectionHeader.vue';
import StatsFiltersDropdown from '../StatsFiltersDropdown/StatsFiltersDropdown.vue';
import { SECTION_HEADER_MOBILE_LAYOUTS } from '../../Headers/SectionHeader/SectionHeader.consts';
import { ICONS } from '../../Icons/Icon/Icon.consts';
import DsModal from '../../Modals/Modal/Modal.vue';
import { useLegacyI18n } from '../../../composables/useLegacyI18n';

interface FilterItem {
	key: string;
	label: string;
}

const { filterItems = [], selectedFilterKey = null } = defineProps<{
	filterItems?: Array<FilterItem>;
	selectedFilterKey?: string | null;
}>();

defineSlots<{
	accessory?: string;
	infoContent?: string;
}>();

const emit = defineEmits<{
	'select-filter': [filterKey: string];
}>();

const infoContentModalVisible = ref(false);

const selectFilter = (filterKey: string) => {
	emit('select-filter', filterKey);
};

const { t } = useLegacyI18n();
</script>
