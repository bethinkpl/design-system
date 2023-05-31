<template>
	<div
		class="selectionTile"
		:class="[
			{
				'-selected': isSelected,
				'-default': state === SELECTION_TILE_STATE.DEFAULT,
				'-disabled': state === SELECTION_TILE_STATE.DISABLED,
				'-loading': state === SELECTION_TILE_STATE.LOADING,
			},
		]"
	>
		<div class="selectionTile__wrapper">
			<div class="selectionTile__selectionControl">
				<radio-button
					v-if="type === SELECTION_TILE_TYPE.RADIO_BUTTON"
					:size="RADIO_BUTTON_SIZE.X_SMALL"
					:is-selected="isSelected"
					:state="selectionControlState"
					@update:isSelected="$emit('update:isSelected', $event)"
				/>
				<checkbox
					v-else
					:size="CHECKBOX_SIZE.X_SMALL"
					:is-selected="isSelected"
					:state="selectionControlState"
					@update:isSelected="$emit('update:isSelected', $event)"
				/>
			</div>
			<div class="selectionTile__textWrapper">
				<div class="selectionTile__title">{{ title }}</div>

				<div v-if="supportingText" class="selectionTile__supportingText"
					>{{ supportingText }}
				</div>
			</div>
		</div>
		<div v-if="icon" class="selectionTile__icon">
			<icon :icon="icon" :size="ICON_SIZES.X_SMALL" />
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';

.selectionTile {
	$root: &;
	border: 1px solid $color-neutral-border;
	border-radius: 4px;
	padding: 12px;
	display: flex;
	background-color: $color-neutral-background-weak;
	cursor: pointer;
	min-height: 48px;
	align-items: center;
	justify-content: space-between;
	column-gap: 8px;

	&__wrapper {
		display: flex;
		align-items: center;
		column-gap: 8px;
	}

	&__selectionControl {
	}

	&__textWrapper {
		display: flex;
		flex-direction: column;
		row-gap: 4px;
	}

	&__title {
		@include label-m-default-bold;

		color: $color-neutral-text-heavy;
	}

	&__supportingText {
		@include info-m-default-regular;

		color: $color-neutral-text;
	}

	&__icon {
		color: $color-neutral-icon;
	}

	&:hover {
		border-color: $color-neutral-border-hovered;
		background-color: $color-neutral-background-hovered;
	}

	&.-selected {
		border-color: $color-primary-border;
		background-color: $color-primary-background;

		&:hover {
			border-color: $color-primary-border-hovered;
			background-color: $color-primary-background-hovered;
		}

		#{$root}__icon {
			color: $color-primary-icon;
		}
	}

	&.-disabled,
	&.-disabled:hover {
		cursor: initial;
		border-color: $color-neutral-border-disabled;
		background-color: $color-neutral-background-weak-disabled;

		#{$root}__title {
			color: $color-neutral-text-heavy-disabled;
		}

		#{$root}__supportingText {
			color: $color-neutral-text-disabled;
		}

		#{$root}__icon {
			color: $color-neutral-icon-disabled;
		}

		&.-selected {
			border-color: $color-primary-border-disabled;
			background-color: $color-primary-background-disabled;

			#{$root}__icon {
				color: $color-primary-icon-disabled;
			}
		}
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import {
	SELECTION_TILE_STATE,
	SELECTION_TILE_TYPE,
	SelectionTileState,
	SelectionTileType,
} from './SelectionTile.consts';
import { ICON_SIZES, IconItem, ICONS } from '../Icons/Icon';
import RadioButton from '../Form/RadioButton/RadioButton.vue';
import { RADIO_BUTTON_SIZE } from '../Form/RadioButton/RadioButton.consts';
import Icon from '../Icons/Icon/Icon.vue';
import Checkbox from '../Form/Checkbox/Checkbox.vue';
import { CHECKBOX_SIZE } from '../Form/Checkbox/Checkbox.consts';

export default defineComponent({
	name: 'SelectionTile',
	components: { Checkbox, Icon, RadioButton },
	props: {
		type: {
			type: String as PropType<SelectionTileType>,
			default: SELECTION_TILE_TYPE.RADIO_BUTTON,
			validator(type: SelectionTileType) {
				return Object.values(SELECTION_TILE_TYPE).includes(type);
			},
		},
		title: {
			type: String,
			required: true,
		},
		supportingText: {
			type: String,
			default: null,
		},
		icon: {
			type: Object,
			default: null,
			validator(icon: IconItem) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String as PropType<SelectionTileState>,
			default: SELECTION_TILE_STATE.DEFAULT,
			validator(state: SelectionTileState) {
				return Object.values(SELECTION_TILE_STATE).includes(state);
			},
		},
	},
	emits: ['update:isSelected'],
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
			RADIO_BUTTON_SIZE: Object.freeze(RADIO_BUTTON_SIZE),
			SELECTION_TILE_STATE: Object.freeze(SELECTION_TILE_STATE),
			SELECTION_TILE_TYPE: Object.freeze(SELECTION_TILE_TYPE),
			CHECKBOX_SIZE: Object.freeze(CHECKBOX_SIZE),
		};
	},
	computed: {
		selectionControlState() {
			return this.state;
		},
	},
});
</script>
