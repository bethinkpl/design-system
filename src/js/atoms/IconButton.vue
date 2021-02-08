<template>
	<div
		class="a-iconButton"
		:class="{
			'-label-left': labelPosition === LABEL_POSITIONS.LEFT,
			'-label-right': labelPosition === LABEL_POSITIONS.RIGHT,

			'-x-small': size === ICON_BUTTON_SIZES.X_SMALL,
			'-small': size === ICON_BUTTON_SIZES.SMALL,
			'-large': size === ICON_BUTTON_SIZES.LARGE,
		}"
	>
		<div class="a-iconButton__label"><slot /></div>
		<wnl-button class="a-iconButton__button" :radius="radius" :type="type" :state="state">
			<wnl-icon :icon="icon" :size="ICON_SIZES.X_SMALL" />
		</wnl-button>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
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
		@include headlineXXS;

		color: $color-primary;
		font-weight: bold;
		margin-right: $space-xs;
		text-transform: uppercase;
	}

	&.-x-small {
		#{$self}__button {
			height: $icon-button-x-small-size;
			width: $icon-button-x-small-size;
		}

		#{$self}__label {
			@include textInfoS;
		}
	}

	&.-small {
		#{$self}__button {
			height: $icon-button-small-size;
			width: $icon-button-small-size;
		}

		#{$self}__label {
			@include textInfoM;
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

const LABEL_POSITIONS = {
	LEFT: 'left',
	RIGHT: 'right',
} as const;

export { BUTTON_STATES, ICON_BUTTON_SIZES, BUTTON_RADIUSES, BUTTON_TYPES, ICONS, LABEL_POSITIONS };

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
		labelPosition: {
			type: String,
			default: LABEL_POSITIONS.LEFT,
			validator(value) {
				return Object.values(LABEL_POSITIONS).includes(value);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
		this.LABEL_POSITIONS = LABEL_POSITIONS;
	},
};
</script>
