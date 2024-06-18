<template>
	<selection-control
		:size="size"
		:label="label"
		:is-selected="isSelected"
		:selected-icon="ICONS.FA_DOT_CIRCLE_SOLID"
		:not-selected-icon="ICONS.FA_CIRCLE"
		:state="state"
		:type="SELECTION_CONTROL_TYPE.RADIO_BUTTON"
		@update:is-selected="$emit('update:is-selected', $event)"
		@input:focus="$emit('input:focus')"
		@input:blur="$emit('input:blur')"
	/>
</template>

<script lang="ts">
import { PropType } from 'vue';
import {
	RADIO_BUTTON_SIZE,
	RADIO_BUTTON_STATE,
	RadioButtonSize,
	RadioButtonState,
} from './RadioButton.consts';
import SelectionControl from '../SelectionControl/SelectionControl.vue';
import { ICONS } from '../../Icons/Icon';
import { SELECTION_CONTROL_TYPE } from '../SelectionControl/SelectionControl.consts';

export default {
	name: 'RadioButton',
	components: { SelectionControl },
	props: {
		size: {
			type: String as PropType<RadioButtonSize>,
			default: RADIO_BUTTON_SIZE.SMALL,
			validator(size) {
				return Object.values(RADIO_BUTTON_SIZE).includes(size);
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
			type: String as PropType<RadioButtonState>,
			default: RADIO_BUTTON_STATE.DEFAULT,
			validator(state) {
				return Object.values(RADIO_BUTTON_STATE).includes(state);
			},
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['update:is-selected', 'input:focus', 'input:blur'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			SELECTION_CONTROL_TYPE: Object.freeze(SELECTION_CONTROL_TYPE),
		};
	},
};
</script>
