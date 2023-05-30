<template>
	<toggle
		:size="size"
		:label="label"
		:is-selected="isSelected"
		:selected-icon="ICONS.FA_DOT_CIRCLE_SOLID"
		:not-selected-icon="ICONS.FA_CIRCLE"
		:state="state"
		@toggle="$emit('toggle', $event)"
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
import Toggle from '../Toggle/Toggle.vue';
import { ICONS } from '../../Icons/Icon';

export default {
	name: 'RadioButton',
	components: { Toggle },
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
	emits: ['toggle'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
};
</script>
