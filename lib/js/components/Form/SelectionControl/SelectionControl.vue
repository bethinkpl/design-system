<template>
	<div
		class="selectionControl"
		:class="[
			`-${size}`,
			{
				'-selected': isSelected,
				'-default': state === SELECTION_CONTROL_STATE.DEFAULT,
				'-disabled': state === SELECTION_CONTROL_STATE.DISABLED,
				'-loading': state === SELECTION_CONTROL_STATE.LOADING,
				'-focused': isFocused,
			},
		]"
		@click="onToggle"
	>
		<div class="selectionControl__iconWrapper">
			<icon :icon="icon" :size="iconSize" class="selectionControl__icon" />
		</div>
		<div v-if="label" class="selectionControl__labelWrapper">
			<div class="selectionControl__label">{{ label }}</div>
		</div>
		<input
			type="checkbox"
			class="selectionControl__checkbox"
			:value="isSelected"
			@change="onToggle"
			@focus="onFocus"
			@blur="onBlur"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

$selection-control-sizes: (
	'x-small': (
		'gap': $space-xxxxs,
		'iconWrapperPadding': $space-xxxs,
		'labelWrapperPadding': $space-xxxxs,
		'iconBorder': $space-xxxs,
	),
	'small': (
		'gap': $space-xxs,
		'iconWrapperPadding': $space-xxxs,
		'labelWrapperPadding': $space-xxxs,
		'iconBorder': $space-xxxs,
	),
	'medium': (
		'gap': $space-xxs,
		'iconWrapperPadding': $space-xxs,
		'labelWrapperPadding': $space-xxs,
		'iconBorder': $space-xxs,
	),
);

$selection-control-colors: (
	'default': (
		'not-selected': (
			'label': $color-neutral-text-heavy,
			'icon': $color-neutral-icon,
		),
		'selected': (
			'label': $color-neutral-text-heavy,
			'icon': $color-primary-icon,
		),
	),
	'disabled': (
		'not-selected': (
			'label': $color-neutral-text-heavy-disabled,
			'icon': $color-neutral-icon-disabled,
		),
		'selected': (
			'label': $color-neutral-text-heavy-disabled,
			'icon': $color-primary-icon-disabled,
		),
	),
	'loading': (
		'not-selected': (
			'label': $color-neutral-text-heavy,
			'icon': $color-neutral-icon,
		),
		'selected': (
			'label': $color-neutral-text-heavy,
			'icon': $color-primary-icon,
		),
	),
);

.selectionControl {
	$root: &;

	@each $name, $map in $selection-control-colors {
		&.-#{$name} {
			$colors: map-get($map, 'not-selected');

			#{$root}__label {
				color: map-get($colors, 'label');
			}

			#{$root}__icon {
				color: map-get($colors, 'icon');
			}
		}

		&.-selected.-#{$name} {
			$colors: map-get($map, 'selected');

			#{$root}__label {
				color: map-get($colors, 'label');
			}

			#{$root}__icon {
				color: map-get($colors, 'icon');
			}
		}
	}

	@each $size, $map in $selection-control-sizes {
		&.-#{$size} {
			column-gap: map-get($map, 'gap');

			#{$root}__iconWrapper {
				padding: map-get($map, 'iconWrapperPadding') 0;
			}

			#{$root}__labelWrapper {
				padding: map-get($map, 'labelWrapperPadding') 0;
			}
		}
	}

	align-items: center;
	display: inline-flex;
	position: relative;

	&.-default {
		@each $size, $map in $selection-control-sizes {
			&.-#{$size} {
				#{$root}__icon::before {
					bottom: -#{map-get($map, 'iconBorder')};
					left: -#{map-get($map, 'iconBorder')};
					right: -#{map-get($map, 'iconBorder')};
					top: -#{map-get($map, 'iconBorder')};
				}
			}
		}

		cursor: pointer;

		#{$root}__icon::before {
			background-color: transparent;
			border-radius: 50%;
			content: '';
			position: absolute;
			transform: scale(0);
			transition: all $default-transition-time ease 0ms;
			z-index: -1;
		}

		&:hover,
		&:focus,
		&:active,
		&.-focused {
			#{$root}__icon::before {
				transform: scale(1);
				// see https://cubic-bezier.com/#.23,1,.32,1
				transition: all $default-transition-time cubic-bezier(0.23, 1, 0.32, 1) 0ms;
			}
		}

		&:hover {
			#{$root}__icon::before {
				background-color: $color-neutral-background-ghost-hovered;
			}

			&.-selected {
				#{$root}__icon::before {
					background-color: $color-primary-background-ghost-hovered;
				}
			}
		}

		&:focus,
		&.-focused {
			#{$root}__icon::before {
				background-color: $color-neutral-background-ghost-focused;
			}

			&.-selected {
				#{$root}__icon::before {
					background-color: $color-primary-background-ghost-focused;
				}
			}
		}

		&:active {
			#{$root}__icon::before {
				background-color: $color-neutral-background-ghost-pressed;
			}

			&.-selected {
				#{$root}__icon::before {
					background-color: $color-primary-background-ghost-pressed;
				}
			}
		}
	}

	&__iconWrapper {
		display: flex;
	}

	&__labelWrapper {
		display: flex;
	}

	&__icon {
		position: relative;
	}

	&.-x-small {
		#{$root}__label {
			@include formLabel-s-default-regular;
		}
	}

	&.-small {
		#{$root}__label {
			@include formLabel-m-default-regular;
		}
	}

	&.-medium {
		#{$root}__label {
			@include formLabel-l-default-regular;
		}
	}

	&__checkbox {
		height: 0;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 0;
		z-index: -1;
	}
}
</style>

<script lang="ts">
import { PropType, toRaw } from 'vue';
import {
	SELECTION_CONTROL_SIZE,
	SELECTION_CONTROL_STATE,
	SelectionControlSize,
	SelectionControlState,
} from './SelectionControl.consts';
import Icon from '../../Icons/Icon/Icon.vue';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';

export default {
	name: 'SelectionControl',
	components: { Icon },
	props: {
		size: {
			type: String as PropType<SelectionControlSize>,
			default: SELECTION_CONTROL_SIZE.SMALL,
			validator(size) {
				return Object.values(SELECTION_CONTROL_SIZE).includes(size);
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
			type: String as PropType<SelectionControlState>,
			default: SELECTION_CONTROL_STATE.DEFAULT,
			validator(state) {
				return Object.values(SELECTION_CONTROL_STATE).includes(state);
			},
		},
		selectedIcon: {
			type: Object,
			required: true,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		notSelectedIcon: {
			type: Object,
			required: true,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
	},
	emits: ['update:isSelected'],
	data() {
		return {
			isFocused: false,
			SELECTION_CONTROL_STATE: Object.freeze(SELECTION_CONTROL_STATE),
		};
	},
	computed: {
		icon() {
			return this.isSelected ? this.selectedIcon : this.notSelectedIcon;
		},
		iconSize() {
			if (this.size === SELECTION_CONTROL_SIZE.X_SMALL) {
				return ICON_SIZES.XX_SMALL;
			}

			if (this.size === SELECTION_CONTROL_SIZE.SMALL) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
	methods: {
		onToggle() {
			if (
				this.state === SELECTION_CONTROL_STATE.DISABLED ||
				this.state === SELECTION_CONTROL_STATE.LOADING
			) {
				return;
			}

			this.$emit('update:isSelected', !this.isSelected);
		},
		onFocus() {
			this.isFocused = true;
		},
		onBlur() {
			this.isFocused = false;
		},
	},
};
</script>
