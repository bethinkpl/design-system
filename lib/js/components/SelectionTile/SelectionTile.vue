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
		@click="updateIsSelected(!isSelected)"
	>
		<div class="selectionTile__wrapper">
			<radio-button
				v-if="type === SELECTION_TILE_TYPE.RADIO_BUTTON"
				:size="RADIO_BUTTON_SIZE.X_SMALL"
				:is-selected="isSelected"
				:state="selectionControlState"
				@update:isSelected="updateIsSelected($event)"
			/>
			<checkbox
				v-else
				:size="CHECKBOX_SIZE.X_SMALL"
				:is-selected="isSelected"
				:state="selectionControlState"
				@update:isSelected="updateIsSelected($event)"
			/>
			<div class="selectionTile__textWrapper">
				<div class="selectionTile__title">{{ title }}</div>

				<div v-if="supportingText" class="selectionTile__supportingText"
					>{{ supportingText }}
				</div>
			</div>
		</div>
		<div v-if="icon || isLoading" class="selectionTile__icon">
			<icon
				:icon="isLoading ? ICONS.FAD_SPINNER_THIRD : icon"
				:size="ICON_SIZES.X_SMALL"
				:spinning="isLoading"
				@click="onIconClick"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/radiuses';

$selection-tile-min-height: 48px;

.selectionTile {
	$root: &;

	align-items: center;
	background-color: $color-neutral-background-weak;
	border-radius: $radius-s;
	column-gap: $space-xxs;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	min-height: $selection-tile-min-height;
	outline: 1px solid $color-neutral-border;
	padding: $space-xs;
	width: 100%;

	&.-loading {
		cursor: initial;
	}

	&__wrapper {
		align-items: center;
		column-gap: $space-xxs;
		display: flex;
	}

	&__textWrapper {
		display: flex;
		flex-direction: column;
		row-gap: $space-xxxxs;
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

	&:hover:not(.-loading) {
		background-color: $color-neutral-background-hovered;
		outline-color: $color-neutral-border-hovered;
	}

	&.-selected {
		background-color: $color-primary-background;
		outline-color: $color-primary-border;

		&:hover:not(.-loading) {
			background-color: $color-primary-background-hovered;
			outline-color: $color-primary-border-hovered;
		}

		#{$root}__icon {
			color: $color-primary-icon;
		}
	}

	&.-disabled,
	&.-disabled:hover {
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

		&.-selected {
			background-color: $color-primary-background-disabled;
			outline-color: $color-primary-border-disabled;

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
import { RADIO_BUTTON_SIZE, RADIO_BUTTON_STATE } from '../Form/RadioButton/RadioButton.consts';
import Icon from '../Icons/Icon/Icon.vue';
import Checkbox from '../Form/Checkbox/Checkbox.vue';
import { CHECKBOX_SIZE, CHECKBOX_STATE } from '../Form/Checkbox/Checkbox.consts';

const RADIO_BUTTON_STATE_MAP = {
	[SELECTION_TILE_STATE.DEFAULT]: RADIO_BUTTON_STATE.DEFAULT,
	[SELECTION_TILE_STATE.LOADING]: RADIO_BUTTON_STATE.LOADING,
	[SELECTION_TILE_STATE.DISABLED]: RADIO_BUTTON_STATE.DISABLED,
};

const CHECKBOX_STATE_MAP = {
	[SELECTION_TILE_STATE.DEFAULT]: CHECKBOX_STATE.DEFAULT,
	[SELECTION_TILE_STATE.LOADING]: CHECKBOX_STATE.LOADING,
	[SELECTION_TILE_STATE.DISABLED]: CHECKBOX_STATE.DISABLED,
};

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
	emits: ['update:isSelected', 'icon-click'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			RADIO_BUTTON_SIZE: Object.freeze(RADIO_BUTTON_SIZE),
			SELECTION_TILE_STATE: Object.freeze(SELECTION_TILE_STATE),
			SELECTION_TILE_TYPE: Object.freeze(SELECTION_TILE_TYPE),
			CHECKBOX_SIZE: Object.freeze(CHECKBOX_SIZE),
		};
	},
	computed: {
		selectionControlState() {
			return this.type === SELECTION_TILE_TYPE.RADIO_BUTTON
				? RADIO_BUTTON_STATE_MAP[this.state]
				: CHECKBOX_STATE_MAP[this.state];
		},
		isLoading() {
			return this.state === SELECTION_TILE_STATE.LOADING;
		},
	},
	methods: {
		updateIsSelected(value: boolean) {
			if (this.isLoading || this.state === SELECTION_TILE_STATE.DISABLED) {
				return;
			}

			this.$emit('update:isSelected', value);
		},
		onIconClick(event: Event) {
			if (!this.isLoading) {
				event.stopPropagation();
				this.$emit('icon-click');
			}
		},
	},
});
</script>
