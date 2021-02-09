<template>
	<div
		class="a-iconButton"
		:class="{
			'-label-left': labelPosition === LABEL_POSITIONS.LEFT,
			'-label-right': labelPosition === LABEL_POSITIONS.RIGHT,

			'-x-small': size === ICON_BUTTON_SIZES.X_SMALL,
			'-small': size === ICON_BUTTON_SIZES.SMALL,
			'-large': size === ICON_BUTTON_SIZES.LARGE,

			'-touchable': touchable,
		}"
	>
		<div
			v-if="$slots.default"
			class="a-iconButton__label"
			:class="{ '-minor': colorScheme === ICON_BUTTON_COLOR_SCHEMES.MINOR_LABEL }"
			><slot
		/></div>
		<wnl-button class="a-iconButton__button" :radius="radius" :type="type" :state="state">
			<wnl-icon
				class="a-iconButton__icon"
				:icon="icon"
				:size="computedIconSize"
				:class="{ '-minor': colorScheme === ICON_BUTTON_COLOR_SCHEMES.MINOR_ICON }"
			/>
		</wnl-button>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/icons';
@import 'resources/assets/styles/styleguide/settings/media-queries';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

$icon-button-x-small-size: 20px;
$icon-button-small-size: 28px;
$icon-button-medium-size: 32px;
$icon-button-large-size: 40px;

.a-iconButton {
	$self: &;
	align-items: center;
	display: inline-flex;

	&__button {
		height: $icon-button-medium-size;
		min-height: auto;
		min-width: auto;
		padding: 0;
		width: $icon-button-medium-size;
	}

	&__label {
		@include buttonM;

		color: $color-primary;
		display: none;
		font-weight: bold;
		margin-right: $space-xs;
		text-transform: uppercase;

		&.-minor {
			color: $color-minor;
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

	&.-label-right {
		flex-direction: row-reverse;

		.a-iconButton__label {
			margin: 0 0 0 $space-xs;
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
} from 'js/components/global/styleguide/atoms/Button';
import { VueConstructor } from 'vue';
import { ICON_SIZES } from 'js/components/global/styleguide/atoms/Icon.vue';

const ICON_BUTTON_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

const ICON_BUTTON_ICON_SIZES = {
	XX_SMALL: ICON_SIZES.XX_SMALL,
	X_SMALL: ICON_SIZES.X_SMALL,
	SMALL: ICON_SIZES.SMALL,
	MEDIUM: ICON_SIZES.MEDIUM,
} as const;

const ICON_BUTTON_COLOR_SCHEMES = {
	ALL_IN_COLOR: 'all-in-color',
	MINOR_ICON: 'minor-icon',
	MINOR_LABEL: 'minor-label',
} as const;

const LABEL_POSITIONS = {
	LEFT: 'left',
	RIGHT: 'right',
} as const;

export {
	BUTTON_STATES,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_ICON_SIZES,
	ICON_BUTTON_COLOR_SCHEMES,
	BUTTON_RADIUSES,
	BUTTON_TYPES,
	ICONS,
	LABEL_POSITIONS,
};

export default {
	name: 'IconButton',
	components: {
		WnlIcon,
		WnlButton,
	},
	props: {
		size: {
			type: String,
			default: ICON_BUTTON_SIZES.MEDIUM,
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
			default: BUTTON_TYPES.FILLED,
			validator(value) {
				return Object.values(BUTTON_TYPES).includes(value);
			},
		},
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		iconSize: {
			type: String,
			default: ICON_BUTTON_ICON_SIZES.X_SMALL,
			validate(value): boolean {
				return Object.values(ICON_BUTTON_ICON_SIZES).includes(value);
			},
		},
		labelPosition: {
			type: String,
			default: LABEL_POSITIONS.LEFT,
			validator(value) {
				return Object.values(LABEL_POSITIONS).includes(value);
			},
		},
		colorScheme: {
			type: String,
			default: ICON_BUTTON_COLOR_SCHEMES.ALL_IN_COLOR,
			validator(value): boolean {
				return Object.values(ICON_BUTTON_COLOR_SCHEMES).includes(value);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
		touchable: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		computedIconSize() {
			// TODO iconOnly
			return this.iconSize;
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
		this.ICON_BUTTON_COLOR_SCHEMES = ICON_BUTTON_COLOR_SCHEMES;
		this.LABEL_POSITIONS = LABEL_POSITIONS;
	},
};
</script>
