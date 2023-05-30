<template>
	<div
		class="toggle"
		:class="[
			`-${size}`,
			{
				'-selected': isSelected,
				'-default': state === TOGGLE_STATE.DEFAULT,
				'-disabled': state === TOGGLE_STATE.DISABLED,
				'-loading': state === TOGGLE_STATE.LOADING,
			},
		]"
		@click="onToggle"
	>
		<div class="toggle__iconWrapper">
			<icon :icon="icon" :size="iconSize" class="toggle__icon" />
		</div>
		<div v-if="label" class="toggle__labelWrapper">
			<div class="toggle__label">{{ label }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

$toggle-sizes: (
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

$toggle-colors: (
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

.toggle {
	$root: &;

	@each $name, $map in $toggle-colors {
		@if map-get($map, 'hoverable') {
			&.-#{$name} {
				@each $size, $map in $toggle-sizes {
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

	@each $size, $map in $toggle-sizes {
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

	align-items: flex-start;
	display: inline-flex;

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
}
</style>

<script lang="ts">
import { PropType, toRaw } from 'vue';
import { TOGGLE_SIZE, TOGGLE_STATE, ToggleSize, ToggleState } from './Toggle.consts';
import Icon from '../../Icons/Icon/Icon.vue';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';

export default {
	name: 'Toggle',
	components: { Icon },
	props: {
		size: {
			type: String as PropType<ToggleSize>,
			default: TOGGLE_SIZE.SMALL,
			validator(size) {
				return Object.values(TOGGLE_SIZE).includes(size);
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
			type: String as PropType<ToggleState>,
			default: TOGGLE_STATE.DEFAULT,
			validator(state) {
				return Object.values(TOGGLE_STATE).includes(state);
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
	emits: ['toggle'],
	data() {
		return {
			TOGGLE_SIZE: Object.freeze(TOGGLE_SIZE),
			TOGGLE_STATE: Object.freeze(TOGGLE_STATE),
		};
	},
	computed: {
		icon() {
			return this.isSelected ? this.selectedIcon : this.notSelectedIcon;
		},
		iconSize() {
			if (this.size === TOGGLE_SIZE.X_SMALL) {
				return ICON_SIZES.XX_SMALL;
			}

			if (this.size === TOGGLE_SIZE.SMALL) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
	methods: {
		onToggle() {
			if (this.state === TOGGLE_STATE.DISABLED || this.state === TOGGLE_STATE.LOADING) {
				return;
			}

			this.$emit('toggle', !this.isSelected);
		},
	},
};
</script>
