<template>
	<select-item
		as-child
		:value="option.value"
		:disabled="option.isDisabled"
		:text-value="option.label"
		:aria-label="option.eyebrowText ? getOptionAccessibleName(option) : undefined"
		class="ds-selectFieldOption"
	>
		<ds-select-list-item
			:label="option.label"
			:icon-left="option.iconLeft"
			:eyebrow-text="option.eyebrowText"
			:is-selected="isSelected"
			:state="
				option.isDisabled
					? SELECT_LIST_ITEM_STATES.DISABLED
					: SELECT_LIST_ITEM_STATES.DEFAULT
			"
		>
			<!--
				reka-ui names each option via `aria-labelledby` pointing at the id rendered by
				SelectItemText, so the visible label must live inside it.
			-->
			<template #text>
				<select-item-text>{{ option.label }}</select-item-text>
			</template>
		</ds-select-list-item>
	</select-item>
</template>

<style lang="scss">
.ds-selectFieldOption {
	// The highlighted state is conveyed by SelectListItem's own styling, so the UA focus ring
	// is suppressed
	outline: none;
}
</style>

<script lang="ts" setup>
import { SelectItem, SelectItemText } from 'reka-ui';
import DsSelectListItem from '../../SelectList/SelectListItem/SelectListItem.vue';
import { SELECT_LIST_ITEM_STATES } from '../../SelectList/SelectListItem/SelectListItem.consts';
import { SelectFieldOption as SelectFieldOptionType } from './SelectField.types';
import { getOptionAccessibleName } from './SelectField.utils';

const { option, isSelected = false } = defineProps<{
	option: SelectFieldOptionType;
	isSelected?: boolean;
}>();
</script>
