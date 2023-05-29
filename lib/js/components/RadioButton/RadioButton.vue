<template>
	<div
		class="radioButton"
		:class="[
			`-${size}`,
			{
				'-selected': isSelected,
				'-default': state === RADIO_BUTTON_STATE.DEFAULT,
				'-disabled': state === RADIO_BUTTON_STATE.DISABLED,
				'-loading': state === RADIO_BUTTON_STATE.LOADING,
			},
		]"
		@click="onToggle"
	>
		<div class="radioButton__iconWrapper">
			<icon :icon="icon" :size="iconSize" class="radioButton__icon" />
		</div>
		<div v-if="label" class="radioButton__label">{{ label }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';

$radio-button-sizes: (
	'x-small': (
		'iconWrapperMargin': $space-xxxxs,
		'iconBorder': $space-xxxs,
	),
	'small': (
		'iconWrapperMargin': $space-xxs,
		'iconBorder': $space-xxxs,
	),
	'medium': (
		'iconWrapperMargin': $space-xxs,
		'iconBorder': $space-xxs,
	),
);

$radio-button-colors: (
	'default': (
		'not-selected': (
			'label': $color-neutral-text-heavy,
			'icon': $color-neutral-icon,
		),
		'selected': (
			'label': $color-neutral-text-heavy,
			'icon': $color-primary-icon,
		),
		'hoverable': true,
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
			'label': $color-neutral-text-heavy-disabled,
			'icon': $color-neutral-icon-disabled,
		),
		'selected': (
			'label': $color-neutral-text-heavy-disabled,
			'icon': $color-primary-icon-disabled,
		),
	),
);

.radioButton {
	$root: &;

	@each $name, $map in $radio-button-colors {
		@if map-get($map, 'hoverable') {
			&.-#{$name} {
				@each $size, $map in $radio-button-sizes {
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
				&:active {
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

				&:focus {
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
		}

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

	@each $size, $map in $radio-button-sizes {
		&.-#{$size} {
			column-gap: map-get($map, 'iconWrapperMargin');
		}
	}

	align-items: flex-start;
	display: inline-flex;

	&__iconWrapper {
		display: flex;
	}

	&__icon {
		position: relative;
	}

	&__label {
		align-self: center;
		flex: 1;
	}

	&.-x-small {
		#{$root}__label {
			@include formLabel-s-default-regular;
		}

		#{$root}__iconWrapper {
			padding: $space-xxxxxs;
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
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	RADIO_BUTTON_SIZE,
	RADIO_BUTTON_STATE,
	RadioButtonSize,
	RadioButtonState,
} from './RadioButton.consts';
import Icon from '../Icons/Icon/Icon.vue';
import { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	name: 'RadioButton',
	components: { Icon },
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
			RADIO_BUTTON_SIZE: Object.freeze(RADIO_BUTTON_SIZE),
			RADIO_BUTTON_STATE: Object.freeze(RADIO_BUTTON_STATE),
		};
	},
	computed: {
		icon() {
			return this.isSelected ? ICONS.FA_DOT_CIRCLE_SOLID : ICONS.FA_CIRCLE;
		},
		iconSize() {
			if (this.size === RADIO_BUTTON_SIZE.X_SMALL) {
				return ICON_SIZES.XX_SMALL;
			}

			if (this.size === RADIO_BUTTON_SIZE.SMALL) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
	methods: {
		onToggle() {
			if (
				this.state === RADIO_BUTTON_STATE.DISABLED ||
				this.state === RADIO_BUTTON_STATE.LOADING
			) {
				return;
			}

			this.$emit('toggle', !this.isSelected);
		},
	},
};
</script>
