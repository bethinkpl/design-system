<template>
	<div
		class="ds-selectionTile"
		:class="[
			{
				'-ds-selected': isSelected,
				'-ds-default': state === SELECTION_TILE_STATE.DEFAULT,
				'-ds-disabled': state === SELECTION_TILE_STATE.DISABLED,
				'-ds-loading': isLoading,
			},
		]"
		@click="updateIsSelected(!isSelected)"
	>
		<div class="ds-selectionTile__wrapper">
			<radio-button
				v-if="type === SELECTION_TILE_TYPE.RADIO_BUTTON"
				:size="SELECTION_CONTROL_SIZE.X_SMALL"
				:is-selected="isSelected"
				:state="SELECTION_CONTROL_STATE_MAP[state]"
				@update:is-selected="updateIsSelected($event)"
			/>
			<checkbox
				v-else
				:size="CHECKBOX_SIZES.X_SMALL"
				:model-value="isSelected"
				:state="CHECKBOX_STATE_MAP[state]"
				@update:model-value="(value) => updateIsSelected(value !== false)"
			/>

			<div class="ds-selectionTile__textWrapper">
				<div class="ds-selectionTile__title">{{ title }}</div>

				<div v-if="supportingText" class="ds-selectionTile__supportingText"
					>{{ supportingText }}
				</div>
			</div>
		</div>
		<icon
			v-if="icon || isLoading"
			class="ds-selectionTile__icon"
			:icon="isLoading ? ICONS.FAD_SPINNER_THIRD : icon"
			:size="ICON_SIZES.X_SMALL"
			:spinning="isLoading"
			@click="onIconClick"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/radiuses';

$selection-tile-min-height: 48px;

.ds-selectionTile {
	$root: &;

	align-items: center;
	background-color: $color-neutral-background-weak;
	border-radius: $radius-s;
	column-gap: $space-2xs;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	min-height: $selection-tile-min-height;
	outline: 1px solid $color-neutral-border;
	padding: $space-xs;
	transition:
		color ease-in-out $default-transition-time,
		outline-color ease-in-out $default-transition-time,
		background-color ease-in-out $default-transition-time;
	width: 100%;

	&.-ds-loading {
		cursor: initial;
	}

	&__wrapper {
		align-items: center;
		column-gap: $space-2xs;
		display: flex;
	}

	&__textWrapper {
		display: flex;
		flex-direction: column;
		row-gap: $space-4xs;
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
		display: flex;
	}

	&:focus-within:not(.-ds-loading),
	&:hover:not(.-ds-loading) {
		background-color: $color-neutral-background-weak-hovered;
		outline-color: $color-neutral-border-hovered;
	}

	&.-ds-selected {
		background-color: $color-primary-background;
		outline-color: $color-primary-border;

		&:focus-within:not(.-ds-loading),
		&:hover:not(.-ds-loading) {
			background-color: $color-primary-background-hovered;
			outline-color: $color-primary-border-hovered;
		}

		#{$root}__icon {
			color: $color-primary-icon;
		}
	}

	&.-ds-disabled,
	&.-ds-disabled:hover {
		background-color: $color-neutral-background-weak-disabled;
		cursor: initial;
		outline-color: $color-neutral-border-disabled;

		#{$root}__title {
			color: $color-neutral-text-heavy-disabled;
		}

		#{$root}__supportingText {
			color: $color-neutral-text-disabled;
		}

		#{$root}__icon {
			color: $color-neutral-icon-disabled;
		}

		&.-ds-selected {
			background-color: $color-primary-background-disabled;
			outline-color: $color-primary-border-disabled;

			#{$root}__icon {
				color: $color-primary-icon-disabled;
			}
		}
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import {
	SELECTION_TILE_STATE,
	SELECTION_TILE_TYPE,
	SelectionTileState,
	SelectionTileType,
} from './SelectionTile.consts';
import { ICON_SIZES, IconItem, ICONS } from '../Icons/Icon';
import Icon from '../Icons/Icon/Icon.vue';
import {
	SELECTION_CONTROL_SIZE,
	SELECTION_CONTROL_STATE,
	SelectionControlState,
} from '../Form/SelectionControl/SelectionControl.consts';
import { CHECKBOX_SIZES, CHECKBOX_STATES, CheckboxState } from '../Form/Checkbox';
import Checkbox from '../Form/Checkbox/Checkbox.vue';
import RadioButton from '../Form/RadioButton/RadioButton.vue';

const SELECTION_CONTROL_STATE_MAP: Record<SelectionTileState, SelectionControlState> = {
	[SELECTION_TILE_STATE.DEFAULT]: SELECTION_CONTROL_STATE.DEFAULT,
	[SELECTION_TILE_STATE.LOADING]: SELECTION_CONTROL_STATE.LOADING,
	[SELECTION_TILE_STATE.DISABLED]: SELECTION_CONTROL_STATE.DISABLED,
};

const CHECKBOX_STATE_MAP: Record<SelectionTileState, CheckboxState> = {
	[SELECTION_TILE_STATE.DEFAULT]: CHECKBOX_STATES.DEFAULT,
	[SELECTION_TILE_STATE.LOADING]: CHECKBOX_STATES.DEFAULT,
	[SELECTION_TILE_STATE.DISABLED]: CHECKBOX_STATES.DISABLED,
};

// Props
const {
	type = SELECTION_TILE_TYPE.RADIO_BUTTON,
	supportingText = null,
	icon = null,
	isSelected = false,
	state = SELECTION_TILE_STATE.DEFAULT,
} = defineProps<{
	type?: SelectionTileType;
	title: string;
	supportingText?: string | null;
	icon?: IconItem | null;
	isSelected?: boolean;
	state?: SelectionTileState;
}>();

const emit = defineEmits<{
	'update:is-selected': [value: boolean];
	'icon-click': [];
}>();

const isLoading = computed(() => {
	return state === SELECTION_TILE_STATE.LOADING;
});

const updateIsSelected = (value: boolean) => {
	if (isLoading.value || state === SELECTION_TILE_STATE.DISABLED) {
		return;
	}

	emit('update:is-selected', value);
};

const onIconClick = (event: Event) => {
	if (!isLoading.value) {
		event.stopPropagation();
		emit('icon-click');
	}
};
</script>
