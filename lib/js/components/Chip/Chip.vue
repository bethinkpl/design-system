<template>
	<div
		class="ds-chip"
		:class="{
			'-ds-x-small': size === CHIP_SIZES.X_SMALL,
			[colorClassName]: true,
			'-ds-disabled': state === CHIP_STATES.DISABLED,
			'-ds-uppercase': isLabelUppercase,
			'-ds-rounded': radius === CHIP_RADIUSES.ROUNDED,
		}"
		:title="label"
		:style="{ backgroundColor: colorHex }"
	>
		<span v-if="$slots.accessory || leftIcon" class="ds-chip__leftIcon">
			<slot name="accessory">
				<icon
					:icon="leftIcon"
					:size="size === CHIP_SIZES.X_SMALL ? ICON_SIZES.XXX_SMALL : ICON_SIZES.XX_SMALL"
				/>
			</slot>
		</span>
		<span class="ds-chip__label">{{ label }}</span>
		<icon-button
			v-if="size !== CHIP_SIZES.X_SMALL && isRemovable"
			class="ds-chip__remove"
			:touchable="false"
			:state="
				state === CHIP_STATES.DISABLED
					? ICON_BUTTON_STATES.DISABLED
					: ICON_BUTTON_STATES.DEFAULT
			"
			:color="iconButtonColor"
			:size="ICON_BUTTON_SIZES.XX_SMALL"
			:icon="ICONS.FA_XMARK"
			:elevation="BUTTON_ELEVATIONS.X_SMALL"
			@click="$emit('remove')"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$chip-min-height: 16px;
$chip-colors: (
	'neutral': (
		'label': $color-neutral-text-strong,
		'icon': $color-neutral-icon,
		'background': $color-neutral-background-medium,
		'disabled': (
			'label': $color-neutral-text-strong-disabled,
			'icon': $color-neutral-icon-disabled,
			'background': $color-neutral-background-medium,
		),
	),
	'primaryStrong': (
		'label': $color-inverted-text,
		'icon': $color-inverted-icon,
		'background': $color-primary-background-strong,
		'disabled': (
			'label': $color-inverted-text,
			'icon': $color-inverted-icon,
			'background': $color-primary-background-strong-disabled,
		),
	),
	'primary': (
		'label': $color-primary-text,
		'icon': $color-primary-icon,
		'background': $color-primary-background,
		'disabled': (
			'label': $color-primary-text-disabled,
			'icon': $color-primary-icon-disabled,
			'background': $color-primary-background,
		),
	),
	'fail': (
		'label': $color-fail-text,
		'icon': $color-fail-icon,
		'background': $color-fail-background,
		'disabled': (
			'label': $color-fail-text-disabled,
			'icon': $color-fail-icon-disabled,
			'background': $color-fail-background,
		),
	),
	'warning': (
		'label': $color-warning-text,
		'icon': $color-warning-icon,
		'background': $color-warning-background,
		'disabled': (
			'label': $color-warning-text-disabled,
			'icon': $color-warning-icon-disabled,
			'background': $color-warning-background,
		),
	),
	'success': (
		'label': $color-success-text,
		'icon': $color-success-icon,
		'background': $color-success-background,
		'disabled': (
			'label': $color-success-text-disabled,
			'icon': $color-success-icon-disabled,
			'background': $color-success-background,
		),
	),
	'info': (
		'label': $color-info-text,
		'icon': $color-info-icon,
		'background': $color-info-background,
		'disabled': (
			'label': $color-info-text-disabled,
			'icon': $color-info-icon-disabled,
			'background': $color-info-background,
		),
	),
	'inverted': (
		'label': $color-neutral-text,
		'icon': $color-neutral-icon,
		'background': $color-default-background,
		'disabled': (
			'label': $color-neutral-text-disabled,
			'icon': $color-neutral-icon-disabled,
			'background': $color-default-background,
		),
	),
	'invertedHex': (
		'label': $color-inverted-text,
		'icon': $color-inverted-icon,
		'disabled': (
			'label': $color-inverted-text-disabled,
			'icon': $color-inverted-icon-disabled,
		),
	),
);

.ds-chip {
	$self: &;

	@each $color-name, $color-map in $chip-colors {
		&.-ds-color-#{$color-name} {
			background-color: map-get($color-map, 'background');

			#{$self}__leftIcon {
				color: map-get($color-map, 'icon');
				fill: map-get($color-map, 'icon');
			}

			#{$self}__label {
				color: map-get($color-map, 'label');
			}

			&.-ds-disabled {
				background-color: map-get(map-get($color-map, 'disabled'), 'background');

				#{$self}__leftIcon {
					color: map-get(map-get($color-map, 'disabled'), 'icon');
					fill: map-get($color-map, 'icon');
				}

				#{$self}__label {
					color: map-get(map-get($color-map, 'disabled'), 'label');
				}
			}
		}
	}

	align-items: center;
	border-radius: $radius-xl;
	display: inline-flex;
	padding: $space-5xs $space-5xs $space-5xs $space-2xs;

	&.-ds-disabled {
		pointer-events: none;
	}

	&.-ds-rounded {
		border-radius: $radius-s;
	}

	&.-ds-uppercase {
		#{$self}__label {
			@include label-s-default-bold-uppercase;
		}
	}

	&__label {
		@include label-s-default-bold;

		margin: $space-5xs $space-3xs $space-5xs 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__leftIcon {
		display: flex;
		margin-right: $space-4xs;
	}

	&.-ds-x-small {
		min-height: $chip-min-height;
		padding-left: $space-3xs;

		#{$self}__leftIcon {
			margin-right: $space-5xs;
		}

		#{$self}__label {
			@include label-xs-default-bold;

			margin: 0 $space-4xs 0 0;
		}

		&.-ds-uppercase {
			#{$self}__label {
				@include label-xs-default-bold-uppercase;
			}
		}

		&.-ds-rounded {
			border-radius: $radius-xs;
		}
	}
}
</style>

<script lang="ts">
import { CHIP_COLORS, CHIP_RADIUSES, CHIP_SIZES, CHIP_STATES } from './Chip.consts';
import IconButton, {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
} from '../Buttons/IconButton';
import Icon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { BUTTON_ELEVATIONS } from '../Buttons/Button';
import { Value } from '../../utils/type.utils';
import { toRaw } from 'vue';

const CHIP_ICON_BUTTONS_COLOR_MAP = {
	[CHIP_COLORS.INVERTED]: ICON_BUTTON_COLORS.PRIMARY,
	[CHIP_COLORS.NEUTRAL]: ICON_BUTTON_COLORS.NEUTRAL,
	[CHIP_COLORS.PRIMARY]: ICON_BUTTON_COLORS.PRIMARY,
	[CHIP_COLORS.PRIMARY_STRONG]: ICON_BUTTON_COLORS.PRIMARY,
	[CHIP_COLORS.FAIL]: ICON_BUTTON_COLORS.FAIL,
	[CHIP_COLORS.WARNING]: ICON_BUTTON_COLORS.WARNING,
	[CHIP_COLORS.SUCCESS]: ICON_BUTTON_COLORS.SUCCESS,
	[CHIP_COLORS.INFO]: ICON_BUTTON_COLORS.INFO,
};

export default {
	name: 'Chip',
	components: { Icon, IconButton },
	props: {
		label: {
			type: String,
			required: true,
		},
		isLabelUppercase: {
			type: Boolean,
			default: false,
		},
		leftIcon: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		radius: {
			type: String,
			default: CHIP_RADIUSES.CAPSULE,
			validator(value: Value<typeof CHIP_RADIUSES>) {
				return Object.values(CHIP_RADIUSES).includes(value);
			},
		},
		size: {
			type: String,
			default: CHIP_SIZES.SMALL,
			validator(size) {
				return Object.values(CHIP_SIZES).includes(size);
			},
		},
		color: {
			type: String,
			default: CHIP_COLORS.NEUTRAL,
			validator(color) {
				return Object.values(CHIP_COLORS).includes(color);
			},
		},
		colorHex: {
			type: String,
			default: null,
		},
		state: {
			type: String,
			default: CHIP_STATES.DEFAULT,
			validator(value: Value<typeof CHIP_STATES>) {
				return Object.values(CHIP_STATES).includes(value);
			},
		},
		isRemovable: {
			type: Boolean,
			default: false,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['remove'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			BUTTON_ELEVATIONS: Object.freeze(BUTTON_ELEVATIONS),
			ICON_BUTTON_STATES: Object.freeze(ICON_BUTTON_STATES),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			CHIP_SIZES: Object.freeze(CHIP_SIZES),
			CHIP_STATES: Object.freeze(CHIP_STATES),
			CHIP_RADIUSES: Object.freeze(CHIP_RADIUSES),
		};
	},
	computed: {
		colorClassName(): string {
			if (this.colorHex) {
				return `-ds-color-invertedHex`;
			}
			return `-ds-color-${this.color}`;
		},
		customStyle() {
			const styles: { backgroundColor?: string } = {};
			if (this.colorHex) {
				styles.backgroundColor = this.colorHex;
			}
			return styles;
		},
		iconButtonColor(): string {
			if (this.colorHex) {
				return ICON_BUTTON_COLORS.NEUTRAL;
			}
			return CHIP_ICON_BUTTONS_COLOR_MAP[this.color] || ICON_BUTTON_COLORS.PRIMARY;
		},
	},
};
</script>
