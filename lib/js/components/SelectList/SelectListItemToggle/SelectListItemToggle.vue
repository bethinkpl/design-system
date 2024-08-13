<template>
	<select-list-item
		class="ds-selectListItemToggle"
		:icon-left="icon"
		:state="state"
		:label="label"
		:selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE"
		:size="size"
	/>
</template>

<script lang="ts">
import {
	SELECT_LIST_ITEM_SELECTION_MODE,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_STATES,
} from '../SelectListItem/SelectListItem.consts';
import { IconItem, ICONS } from '../../Icons/Icon';
import SelectListItem from '../SelectListItem/SelectListItem.vue';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	name: 'SelectListItemToggle',
	components: {
		SelectListItem,
	},
	props: {
		iconOff: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconOn: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
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
		state: {
			type: String,
			default: SELECT_LIST_ITEM_STATES.DEFAULT,
			validator(size) {
				return Object.values(SELECT_LIST_ITEM_STATES).includes(size);
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
			return this.isOn ? this.iconOn : this.iconOff;
		},
		label(): string {
			return this.isOn ? this.labelOn : this.labelOff;
		},
	},
});
</script>
