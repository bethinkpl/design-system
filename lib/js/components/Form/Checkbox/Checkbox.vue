<template>
	<selection-control
		:size="size"
		:label="label"
		:is-selected="isSelected"
		:selected-icon="ICONS.FA_SQUARE_CHECK_SOLID"
		:not-selected-icon="ICONS.FA_SQUARE"
		:state="state"
		:type="SELECTION_CONTROL_TYPE.CHECKBOX"
		@update:isSelected="$emit('update:isSelected', $event)"
	/>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { CHECKBOX_SIZE, CHECKBOX_STATE, CheckboxSize, CheckboxState } from './Checkbox.consts';
import SelectionControl from '../SelectionControl/SelectionControl.vue';
import { ICONS } from '../../Icons/Icon';
import { SELECTION_CONTROL_TYPE } from '../SelectionControl/SelectionControl.consts';

export default {
	name: 'Checkbox',
	components: { SelectionControl },
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
	emits: ['update:isSelected'],
	data() {
		return {
			SELECTION_CONTROL_TYPE: Object.freeze(SELECTION_CONTROL_TYPE),
			ICONS: Object.freeze(ICONS),
		};
	},
};
</script>
