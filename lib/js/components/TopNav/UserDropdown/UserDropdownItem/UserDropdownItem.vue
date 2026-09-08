<template>
	<ds-select-list-item
		v-bind="$props"
		class="ds-userDropdownItem"
		:size="SELECT_LIST_ITEM_SIZES.X_SMALL"
	>
		<!-- Every forward is guarded: an unconditional `<template #metadata>` would make
			 SelectListItem's `hasMetadata` permanently true, suppressing the right-hand
			 placeholder on every item and shifting the list's right edge. -->
		<template v-if="$slots.accessory" #accessory>
			<slot name="accessory" />
		</template>
		<template v-if="$slots.metadata" #metadata>
			<slot name="metadata" />
		</template>
		<template v-if="$slots.text" #text>
			<slot name="text" />
		</template>
	</ds-select-list-item>
</template>

<script setup lang="ts">
import DsSelectListItem from '../../../SelectList/SelectListItem/SelectListItem.vue';
import { SELECT_LIST_ITEM_SIZES } from '../../../SelectList/SelectListItem/SelectListItem.consts';
import {
	SelectListItemProps,
	SelectListItemSlots,
} from '../../../SelectList/SelectListItem/SelectListItem.types';

// No defaults are declared on purpose: absent props forward as `undefined`, so SelectListItem
// applies its own and the two components can't drift.
defineProps<Omit<SelectListItemProps, 'size'>>();

defineSlots<SelectListItemSlots>();
</script>
