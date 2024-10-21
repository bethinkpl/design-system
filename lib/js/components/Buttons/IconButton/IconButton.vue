<template>
	<div
		class="ds-iconButton"
		:class="{
			'-ds-xx-small': size === ICON_BUTTON_SIZES.XX_SMALL,
			'-ds-x-small': size === ICON_BUTTON_SIZES.X_SMALL,
			'-ds-small': size === ICON_BUTTON_SIZES.SMALL,
			'-ds-large': size === ICON_BUTTON_SIZES.LARGE,

			'-ds-hovered': state === ICON_BUTTON_STATES.HOVERED,
			'-ds-focused': state === ICON_BUTTON_STATES.FOCUSED,
			'-ds-disabled': state === ICON_BUTTON_STATES.DISABLED,
			'-ds-loading': state === ICON_BUTTON_STATES.LOADING,

			[colorClassName]: isButtonColor,

			'-ds-touchable': touchable,
		}"
		:style="{ color: computedColor }"
		@mouseover="mouseOver"
		@mouseleave="mouseLeave"
		@touchstart="touchStart"
		@touchend="touchEnd"
	>
		<div
			v-if="$slots.default && type !== ICON_BUTTON_TYPES.ICON_ONLY"
			class="ds-iconButton__label"
			:class="{
				'-ds-neutral': colorScheme === ICON_BUTTON_COLOR_SCHEMES.NEUTRAL_LABEL,
			}"
		>
			<slot />
		</div>
		<wnl-button
			ref="button"
			class="ds-iconButton__button"
			:class="{
				'-ds-iconOnly': type === ICON_BUTTON_TYPES.ICON_ONLY,
				'-ds-hovered': state === ICON_BUTTON_STATES.HOVERED,
				'-ds-focused': state === ICON_BUTTON_STATES.FOCUSED,
				'-ds-disabled': state === ICON_BUTTON_STATES.DISABLED,
			}"
			:radius="radius"
			:type="buttonType"
			:state="hovered ? ICON_BUTTON_STATES.HOVERED : ICON_BUTTON_STATES.DEFAULT"
			:elevation="elevation"
			:color="isButtonColor ? color : null"
		>
			<wnl-icon
				v-if="state === ICON_BUTTON_STATES.LOADING"
				class="ds-iconButton__icon"
				:icon="ICONS.FAD_SPINNER_THIRD"
				:size="iconSize"
				spinning
			/>
			<wnl-icon v-else class="ds-iconButton__icon" :icon="icon" :size="iconSize" />
		</wnl-button>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/buttons';
@import '../../../../styles/settings/icons';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

@mixin setIconButtonAdditions($border: null, $icon: null) {
	@if $border != null {
		border: 1px solid $border;
	}

	@if $icon != null {
		.ds-iconButton {
			&__icon,
			&__loadingIcon {
				color: $icon;
			}
		}
	}
}

.ds-iconButton {
	$self: &;

	@each $color-name, $color-map in $icon-button-colors {
		&.-ds-color-#{$color-name} {
			@include setIconButtonAdditions(null, map-get($color-map, 'filled', 'icon'));

			#{$self}__label {
				color: map-get($color-map, 'outlined', 'color');
			}

			&:hover,
			&.-ds-hovered {
				#{$self}__label {
					color: map-get($color-map, 'filled', 'color-hovered');
				}
			}

			&:focus,
			&.-ds-focused {
				#{$self}__label {
					color: map-get($color-map, 'filled', 'color-focused');
				}
			}

			&.-ds-disabled {
				#{$self}__button {
					&.-ds-outlined {
						.ds-iconButton__icon {
							color: map-get($color-map, 'outlined', 'disabled', 'icon');
						}
					}
				}

				#{$self}__label {
					color: map-get($color-map, 'outlined', 'disabled', 'color');
				}
			}

			.-ds-outlined {
				@include setIconButtonAdditions(
					map-get($color-map, 'outlined', 'border'),
					map-get($color-map, 'outlined', 'icon')
				);

				&.-ds-disabled {
					border-color: map-get($color-map, 'outlined', 'disabled', 'border');
				}
			}
		}
	}

	align-items: center;
	color: $color-primary-text;
	cursor: pointer;
	display: inline-flex;
	transition: color ease-in-out $default-transition-time;

	&:disabled,
	&.-ds-disabled {
		pointer-events: none;
	}

	&:hover {
		color: map-get($icon-button-colors, 'theme', 'hovered');
	}

	&__button {
		height: $icon-button-medium-size;
		min-height: auto;
		min-width: auto;
		padding: 0;
		width: $icon-button-medium-size;

		&.-ds-iconOnly.-ds-outlined {
			border: none;
		}
	}

	&__label {
		@include button-m-default-bold-uppercase;

		display: none;
		margin-right: $space-xs;

		@media #{breakpoint-s()} {
			display: initial;
		}

		&.-ds-neutral {
			color: $color-neutral-text !important;
		}
	}

	/* Exception for scheme neutral-label, it has class `-neutral` deep in ds-iconButton__label only for 1 case.
	So there is no sense to set it in main loop
	*/
	&:hover,
	&.-ds-hovered {
		.ds-iconButton__label {
			&.-ds-neutral {
				color: $color-neutral-text-hovered !important;
			}
		}
	}

	&:focus,
	&.-ds-focused {
		.ds-iconButton__label {
			&.-ds-neutral {
				color: $color-neutral-text-focused !important;
			}
		}
	}

	&.-ds-disabled {
		#{$self}__label {
			&.-ds-neutral {
				color: $color-neutral-text-disabled !important;
			}
		}
	}

	&.-ds-xx-small {
		#{$self}__button {
			height: $icon-button-xx-small-size;
			padding: $space-4xs;
			width: $icon-button-xx-small-size;
		}

		#{$self}__label {
			@include button-xs-default-bold-uppercase;
		}
	}

	&.-ds-x-small {
		#{$self}__button {
			height: $icon-button-x-small-size;
			padding: $space-4xs;
			width: $icon-button-x-small-size;
		}

		#{$self}__label {
			@include button-xs-default-bold-uppercase;
		}
	}

	&.-ds-small {
		#{$self}__button {
			height: $icon-button-small-size;
			width: $icon-button-small-size;
		}

		#{$self}__label {
			@include button-s-default-bold-uppercase;
		}
	}

	&.-ds-large {
		#{$self}__button {
			height: $icon-button-large-size;
			width: $icon-button-large-size;
		}

		#{$self}__label {
			@include button-l-default-bold-uppercase;
		}
	}

	&.-ds-touchable {
		align-items: center;
		justify-content: center;
		min-height: $min-touchable-size;
		min-width: $min-touchable-size;
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import WnlButton, {
	BUTTON_COLORS,
	BUTTON_ELEVATIONS,
	BUTTON_RADIUSES,
	BUTTON_TYPES,
} from '../Button';
import {
	ICON_BUTTON_COLOR_SCHEMES,
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
	ICON_BUTTON_TYPES,
} from './IconButton.consts';
import { Value } from '../../../utils/type.utils';
import { defineComponent, toRaw } from 'vue';
import { useHoverState } from '../../../composables/hover-state';

const ICON_ONLY_ICON_SIZES_MAP = {
	[ICON_BUTTON_SIZES.XX_SMALL]: ICON_SIZES.XXX_SMALL,
	[ICON_BUTTON_SIZES.X_SMALL]: ICON_SIZES.XX_SMALL,
	[ICON_BUTTON_SIZES.SMALL]: ICON_SIZES.X_SMALL,
	[ICON_BUTTON_SIZES.MEDIUM]: ICON_SIZES.SMALL,
	[ICON_BUTTON_SIZES.LARGE]: ICON_SIZES.MEDIUM,
} as const;

export default defineComponent({
	name: 'IconButton',
	components: {
		WnlIcon,
		WnlButton,
	},
	props: {
		size: {
			type: String,
			default: ICON_BUTTON_SIZES.LARGE,
			validator(value) {
				return Object.values(ICON_BUTTON_SIZES).includes(value);
			},
		},
		radius: {
			type: String,
			default: BUTTON_RADIUSES.CAPSULE,
			validator(value) {
				return Object.values(BUTTON_RADIUSES).includes(value);
			},
		},
		type: {
			type: String,
			default: ICON_BUTTON_TYPES.ICON_ONLY,
			validator(value) {
				return Object.values(ICON_BUTTON_TYPES).includes(value);
			},
		},
		icon: {
			type: Object,
			required: true,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		color: {
			type: String,
			default: ICON_BUTTON_COLORS.PRIMARY,
			validator(value): boolean {
				return Object.values(ICON_BUTTON_COLORS).includes(value);
			},
		},
		colorScheme: {
			type: String,
			default: ICON_BUTTON_COLOR_SCHEMES.ALL_IN_COLOR,
			validator(value): boolean {
				return Object.values(ICON_BUTTON_COLOR_SCHEMES).includes(value);
			},
		},
		elevation: {
			type: String,
			default: BUTTON_ELEVATIONS.NONE,
			validator(value) {
				return Object.values(BUTTON_ELEVATIONS).includes(value);
			},
		},
		touchable: {
			type: Boolean,
			default: true,
		},
		state: {
			type: String,
			default: ICON_BUTTON_STATES.DEFAULT,
			validator(value: Value<typeof ICON_BUTTON_STATES>) {
				return Object.values(ICON_BUTTON_STATES).includes(value);
			},
		},
	},
	setup() {
		return {
			...useHoverState(),
		};
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLOR_SCHEMES: Object.freeze(ICON_BUTTON_COLOR_SCHEMES),
			ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES),
			ICON_BUTTON_STATES: Object.freeze(ICON_BUTTON_STATES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			BUTTON_COLORS: Object.freeze(BUTTON_COLORS),
		};
	},
	computed: {
		iconSize(): string {
			if (this.type === ICON_BUTTON_TYPES.ICON_ONLY) {
				return ICON_ONLY_ICON_SIZES_MAP[this.size];
			}

			if (this.size === ICON_BUTTON_SIZES.XX_SMALL) {
				return ICON_SIZES.XXX_SMALL;
			}

			if (this.size === ICON_BUTTON_SIZES.X_SMALL) {
				return ICON_SIZES.XX_SMALL;
			}

			return ICON_SIZES.X_SMALL;
		},
		buttonType(): string {
			if (this.type === ICON_BUTTON_TYPES.ICON_ONLY) {
				return BUTTON_TYPES.OUTLINED;
			}
			return this.type;
		},
		computedColor(): string | null {
			if (this.isButtonColor) {
				return null;
			}
			if (this.type === ICON_BUTTON_TYPES.ICON_ONLY) {
				return this.color;
			}
			throw new Error(`Color: ${this.color} is supported only in type: "icon-only"`);
		},
		isButtonColor(): boolean {
			return Object.values(ICON_BUTTON_COLORS).includes(this.color);
		},
		colorClassName(): string {
			return `-ds-color-${this.color}`;
		},
	},
});
</script>
