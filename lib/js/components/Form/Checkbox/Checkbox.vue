<template>
	<toggle
		:size="size"
		:label="label"
		:is-selected="isSelected"
		:selected-icon="ICONS.FA_SQUARE_CHECK_SOLID"
		:not-selected-icon="ICONS.FA_SQUARE"
		:state="state"
		@toggle="$emit('toggle', $event)"
	/>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { CHECKBOX_SIZE, CHECKBOX_STATE, CheckboxSize, CheckboxState } from './Checkbox.consts';
import Toggle from '../Toggle/Toggle.vue';
import { ICONS } from '../../Icons/Icon';

export default {
	name: 'Checkbox',
	components: { Toggle },
	props: {
		size: {
			type: String as PropType<CheckboxSize>,
			default: CHECKBOX_SIZE.SMALL,
			validator(size) {
				return Object.values(CHECKBOX_SIZE).includes(size);
			},
		},
		label: {
			type: String,
			default: null,
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String as PropType<CheckboxState>,
			default: CHECKBOX_STATE.DEFAULT,
			validator(state) {
				return Object.values(CHECKBOX_STATE).includes(state);
			},
		},
	},
	emits: ['toggle'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
};
</script>
