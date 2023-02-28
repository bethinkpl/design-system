<template>
	<select-list-item
		class="selectListItemToggle"
		:icon-left="icon"
		:state="isLoading ? SELECT_LIST_ITEM_STATES.LOADING : SELECT_LIST_ITEM_STATES.DEFAULT"
		:label="label"
		:selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE"
		:size="size"
	/>
</template>

<script lang="ts">
import {
	SELECT_LIST_ITEM_STATES,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_SELECTION_MODE,
} from '../SelectListItem/SelectListItem.consts';
import { IconItem, ICONS } from '../../Icons/Icon';
import SelectListItem from '../SelectListItem/SelectListItem.vue';

export default {
	name: 'SelectListItemToggle',
	components: {
		SelectListItem,
	},
	props: {
		iconOff: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(icon);
			},
		},
		iconOn: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(icon);
			},
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		isOn: {
			type: Boolean,
			default: false,
		},
		labelOff: {
			type: String,
			required: true,
		},
		labelOn: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			default: SELECT_LIST_ITEM_SIZES.SMALL,
			validator(size) {
				return Object.values(SELECT_LIST_ITEM_SIZES).includes(size);
			},
		},
	},
	data() {
		return {
			SELECT_LIST_ITEM_SELECTION_MODE: Object.freeze(SELECT_LIST_ITEM_SELECTION_MODE),
			SELECT_LIST_ITEM_STATES: Object.freeze(SELECT_LIST_ITEM_STATES),
		};
	},
	computed: {
		icon(): IconItem | null {
			if (this.isLoading) {
				return ICONS.FAD_SPINNER_THIRD;
			}

			return this.isOn ? this.iconOn : this.iconOff;
		},
		label(): string {
			return this.isOn ? this.labelOn : this.labelOff;
		},
	},
};
</script>
