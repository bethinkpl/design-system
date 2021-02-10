<template>
	<div
		class="a-iconButton"
		:class="{
			'-x-small': size === ICON_BUTTON_SIZES.X_SMALL,
			'-small': size === ICON_BUTTON_SIZES.SMALL,
			'-large': size === ICON_BUTTON_SIZES.LARGE,

			[colorClassName]: isButtonColor,

			'-touchable': touchable,
		}"
		:style="{ color: computedColor }"
		@mouseover="hovered = true"
		@mouseleave="hovered = false"
	>
		<div
			v-if="$slots.default && type !== ICON_BUTTON_TYPES.ICON_ONLY"
			class="a-iconButton__label"
			:class="{ '-minor': colorScheme === ICON_BUTTON_COLOR_SCHEMES.MINOR_LABEL }"
			><slot
		/></div>
		<wnl-button
			class="a-iconButton__button"
			:class="{ '-iconOnly': type === ICON_BUTTON_TYPES.ICON_ONLY }"
			:radius="radius"
			:type="buttonType"
			:state="hovered ? BUTTON_STATES.HOVERED : BUTTON_STATES.DEFAULT"
			:elevation="elevation"
			:color="isButtonColor ? color : null"
		>
			<wnl-icon
				class="a-iconButton__icon"
				:icon="icon"
				:size="iconSize"
				:class="{ '-minor': colorScheme === ICON_BUTTON_COLOR_SCHEMES.MINOR_ICON }"
			/>
		</wnl-button>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/buttons';
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/icons';
@import 'resources/assets/styles/styleguide/settings/media-queries';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

$icon-button-x-small-size: 20px;
$icon-button-small-size: 28px;
$icon-button-medium-size: 32px;
$icon-button-large-size: 40px;

@mixin iconButtonColor($color, $hover-color: '') {
	color: $color;

	@if $hover-color == '' {
		$hover-color: mix($color, $color-firefly-black, (1 - $button-hover-alpha) * 100%);
	}

	&:hover,
	&:active {
		color: $hover-color;
	}
}

.a-iconButton {
	$self: &;
	align-items: center;
	color: $color-primary;
	cursor: pointer;
	display: inline-flex;
	transition: color ease-in-out $button-animation-time;

	&:hover {
		color: $color-primary-hovered;
	}

	&__button {
		height: $icon-button-medium-size;
		min-height: auto;
		min-width: auto;
		padding: 0;
		width: $icon-button-medium-size;

		&.-iconOnly {
			border: none;
			color: currentColor;
		}
	}

	&__label {
		@include buttonM;

		display: none;
		font-weight: bold;
		margin-right: $space-xs;
		text-transform: uppercase;

		&.-minor {
			@include iconButtonColor($color-minor);
		}

		@media #{breakpoint-s()} {
			display: initial;
		}
	}

	&__icon {
		&.-minor {
			color: $color-minor;
		}
	}

	@each $color-name, $color-map in $theme-calculated-colors {
		&.-color-#{$color-name} {
			@include iconButtonColor(map-get($color-map, 'color'), map-get($color-map, 'hovered'));
		}
	}

	@each $color-name, $color in $regular-colors {
		&.-color-#{$color-name} {
			@include iconButtonColor($color);
		}
	}

	&.-x-small {
		#{$self}__button {
			height: $icon-button-x-small-size;
			width: $icon-button-x-small-size;
		}

		#{$self}__label {
			@include buttonXS;
		}
	}

	&.-small {
		#{$self}__button {
			height: $icon-button-small-size;
			width: $icon-button-small-size;
		}

		#{$self}__label {
			@include buttonS;
		}
	}

	&.-large {
		#{$self}__button {
			height: $icon-button-large-size;
			width: $icon-button-large-size;
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
import WnlIcon, { ICONS } from 'js/components/global/styleguide/atoms/Icon';

import WnlButton, {
	BUTTON_STATES,
	BUTTON_RADIUSES,
	BUTTON_TYPES,
	BUTTON_ELEVATIONS,
	BUTTON_COLORS,
} from 'js/components/global/styleguide/atoms/Button';
import { VueConstructor } from 'vue';
import { ICON_SIZES } from 'js/components/global/styleguide/atoms/Icon.vue';
import { COLORS } from 'js/consts/colors';

const ICON_BUTTON_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

const ICON_BUTTON_TYPES = {
	FILLED: BUTTON_TYPES.FILLED,
	OUTLINED: BUTTON_TYPES.OUTLINED,
	ICON_ONLY: 'icon-only',
} as const;

const ICON_BUTTON_COLOR_SCHEMES = {
	ALL_IN_COLOR: 'all-in-color',
	MINOR_ICON: 'minor-icon',
	MINOR_LABEL: 'minor-label',
} as const;

const ICON_BUTTON_COLORS = {
	...COLORS,
	...BUTTON_COLORS,
} as const;

export {
	ICON_BUTTON_SIZES,
	ICON_BUTTON_COLOR_SCHEMES,
	ICON_BUTTON_TYPES,
	ICON_BUTTON_COLORS,
	BUTTON_RADIUSES,
	BUTTON_ELEVATIONS,
	ICONS,
};

const ICON_ONLY_ICON_SIZES_MAP = {
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
			default: BUTTON_COLORS.PRIMARY,
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
	},
	data() {
		return {
			hovered: false,
		};
	},
	computed: {
		iconSize(): string {
			if (this.type === ICON_BUTTON_TYPES.ICON_ONLY) {
				return ICON_ONLY_ICON_SIZES_MAP[this.size];
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
			return Object.values(BUTTON_COLORS).includes(this.color);
		},
		colorClassName(): string {
			return `-color-${this.color}`;
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
		this.ICON_BUTTON_COLOR_SCHEMES = ICON_BUTTON_COLOR_SCHEMES;
		this.ICON_BUTTON_TYPES = ICON_BUTTON_TYPES;
		this.BUTTON_STATES = BUTTON_STATES;
		this.BUTTON_COLORS = BUTTON_COLORS;
	},
};
</script>
