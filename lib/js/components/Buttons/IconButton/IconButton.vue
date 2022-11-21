<template>
	<div
		class="a-iconButton"
		:class="{
			'-xx-small': size === ICON_BUTTON_SIZES.XX_SMALL,
			'-x-small': size === ICON_BUTTON_SIZES.X_SMALL,
			'-small': size === ICON_BUTTON_SIZES.SMALL,
			'-large': size === ICON_BUTTON_SIZES.LARGE,

			'-hovered': state === ICON_BUTTON_STATES.HOVERED,
			'-focused': state === ICON_BUTTON_STATES.FOCUSED,
			'-disabled': state === ICON_BUTTON_STATES.DISABLED,
			'-loading': state === ICON_BUTTON_STATES.LOADING,

			[colorClassName]: isButtonColor,

			'-touchable': touchable,
		}"
		:style="{ color: computedColor }"
		@mouseover="hovered = true"
		@mouseleave="hovered = false"
		@click="onClick"
	>
		<div
			v-if="$slots.default && type !== ICON_BUTTON_TYPES.ICON_ONLY"
			class="a-iconButton__label"
			:class="{
				'-neutral': colorScheme === ICON_BUTTON_COLOR_SCHEMES.NEUTRAL_LABEL,
			}"
			><slot
		/></div>
		<wnl-button
			ref="button"
			class="a-iconButton__button"
			:class="{
				'-iconOnly': type === ICON_BUTTON_TYPES.ICON_ONLY,
				'-hovered': state === ICON_BUTTON_STATES.HOVERED,
				'-focused': state === ICON_BUTTON_STATES.FOCUSED,
				'-disabled': state === ICON_BUTTON_STATES.DISABLED,
			}"
			:radius="radius"
			:type="buttonType"
			:state="hovered ? ICON_BUTTON_STATES.HOVERED : ICON_BUTTON_STATES.DEFAULT"
			:elevation="elevation"
			:color="isButtonColor ? color : null"
		>
			<wnl-icon
				v-if="state === ICON_BUTTON_STATES.LOADING"
				class="a-iconButton__icon"
				:icon="ICONS.FAD_SPINNER_THIRD"
				:size="iconSize"
				spinning
			/>
			<wnl-icon v-else class="a-iconButton__icon" :icon="icon" :size="iconSize" />
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

@mixin setIconButtonAdditions($ripple: null, $border: null, $icon: null) {
	@if $ripple != null {
		.ripple {
			background-color: $ripple !important;
		}
	}

	@if $ripple == null {
		.ripple {
			display: none;
		}
	}

	@if $border != null {
		border: 1px solid $border;
	}

	@if $icon != null {
		.a-iconButton {
			&__icon,
			&__loadingIcon {
				color: $icon;
			}
		}
	}
}

.a-iconButton {
	$self: &;

	@each $color-name, $color-map in $icon-button-colors {
		&.-color-#{$color-name} {
			@include setIconButtonAdditions(
				map-get($color-map, 'filled', 'ripple'),
				null,
				map-get($color-map, 'filled', 'icon')
			);

			#{$self}__label {
				color: map-get($color-map, 'outlined', 'color');
			}

			&:hover,
			&.-hovered {
				#{$self}__label {
					color: map-get($color-map, 'filled', 'color-hovered');
				}
			}

			&:focus,
			&.-focused {
				#{$self}__label {
					color: map-get($color-map, 'filled', 'color-focused');
				}
			}

			&.-disabled {
				#{$self}__button {
					&.-outlined {
						.a-iconButton__icon {
							color: map-get($color-map, 'outlined', 'disabled', 'icon');
						}
					}
				}
				#{$self}__label {
					color: map-get($color-map, 'outlined', 'disabled', 'color');
				}
			}

			.-outlined {
				@include setIconButtonAdditions(
					map-get($color-map, 'outlined', 'ripple'),
					map-get($color-map, 'outlined', 'border'),
					map-get($color-map, 'outlined', 'icon')
				);

				&.-disabled {
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
	&.-disabled {
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

		&.-iconOnly.-outlined {
			border: none;
		}
	}

	&__label {
		@include ButtonMBoldUppercase();

		display: none;
		margin-right: $space-xs;

		@media #{breakpoint-s()} {
			display: initial;
		}

		&.-neutral {
			color: $color-neutral-text !important;
		}
	}

	/* Exception for scheme neutral-label, it has class `-neutral` deep in a-iconButton__label only for 1 case.
	So there is no sense to set it in main loop
	*/
	&:hover,
	&.-hovered {
		.a-iconButton__label {
			&.-neutral {
				color: $color-neutral-text-hovered !important;
			}
		}
	}

	&:focus,
	&.-focused {
		.a-iconButton__label {
			&.-neutral {
				color: $color-neutral-text-focused !important;
			}
		}
	}

	&.-disabled {
		#{$self}__label {
			&.-neutral {
				color: $color-neutral-text-disabled !important;
			}
		}
	}

	&.-xx-small {
		#{$self}__button {
			height: $icon-button-xx-small-size;
			width: $icon-button-xx-small-size;
		}

		#{$self}__label {
			@include ButtonXSBoldUppercase();
		}
	}

	&.-x-small {
		#{$self}__button {
			height: $icon-button-x-small-size;
			width: $icon-button-x-small-size;
		}

		#{$self}__label {
			@include ButtonXSBoldUppercase();
		}
	}

	&.-small {
		#{$self}__button {
			height: $icon-button-small-size;
			width: $icon-button-small-size;
		}

		#{$self}__label {
			@include ButtonSBoldUppercase();
		}
	}

	&.-large {
		#{$self}__button {
			height: $icon-button-large-size;
			width: $icon-button-large-size;
		}
		#{$self}__label {
			@include ButtonLBoldUppercase();
		}
	}

	&.-touchable {
		align-items: center;
		justify-content: center;
		min-height: $min-touchable-size;
		min-width: $min-touchable-size;
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';

import WnlIcon, { ICONS, ICON_SIZES } from '../../Icon';
import WnlButton from '../Button';
import {
	ICON_BUTTON_COLOR_SCHEMES,
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_TYPES,
	ICON_BUTTON_STATES,
} from './IconButton.consts';
import {
	BUTTON_COLORS,
	BUTTON_ELEVATIONS,
	BUTTON_RADIUSES,
	BUTTON_TYPES,
} from '../Button/Button.consts';
import { Value } from '../../../utils/type.utils';

const ICON_ONLY_ICON_SIZES_MAP = {
	[ICON_BUTTON_SIZES.XX_SMALL]: ICON_SIZES.XXX_SMALL,
	[ICON_BUTTON_SIZES.X_SMALL]: ICON_SIZES.XX_SMALL,
	[ICON_BUTTON_SIZES.SMALL]: ICON_SIZES.X_SMALL,
	[ICON_BUTTON_SIZES.MEDIUM]: ICON_SIZES.SMALL,
	[ICON_BUTTON_SIZES.LARGE]: ICON_SIZES.MEDIUM,
} as const;

export default {
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
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
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
	data() {
		return {
			hovered: false,
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
			return `-color-${this.color}`;
		},
	},
	methods: {
		onClick(evt): void {
			if (evt.target.closest('.a-iconButton__button')) {
				// click on button, ripple effect was triggered by component
				return;
			}

			// trigger ripple effect
			this.$refs.button.$el.dispatchEvent(new MouseEvent('mousedown'));
			this.$refs.button.$el.dispatchEvent(new MouseEvent('mouseup'));
		},
	},
};
</script>
