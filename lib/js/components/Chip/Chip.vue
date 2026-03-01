<template>
	<div
		class="ds-chip"
		:class="{
			'-ds-x-small': size === CHIP_SIZES.X_SMALL,
			[colorClassName]: true,
			'-ds-disabled': state === CHIP_STATES.DISABLED,
			'-ds-uppercase': isLabelUppercase,
			'-ds-rounded': radius === CHIP_RADIUSES.ROUNDED,
			'-ds-removable': size !== CHIP_SIZES.X_SMALL && isRemovable,
		}"
		:title="label ?? undefined"
		:style="colorHex ? { backgroundColor: colorHex } : undefined"
	>
		<span v-if="$slots.accessory || leftIcon" class="ds-chip__leftIcon">
			<slot name="accessory">
				<icon
					:icon="leftIcon"
					:size="size === CHIP_SIZES.X_SMALL ? ICON_SIZES.XXX_SMALL : ICON_SIZES.XX_SMALL"
				/>
			</slot>
		</span>
		<span v-if="label" class="ds-chip__label">{{ label }}</span>
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
			@click.stop="$emit('remove')"
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
	'neutralWeak': (
		'label': $color-neutral-text,
		'icon': $color-neutral-icon,
		'background': $color-neutral-background,
		'disabled': (
			'label': $color-neutral-text-disabled,
			'icon': $color-neutral-icon-disabled,
			'background': $color-neutral-background,
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
	'danger': (
		'label': $color-danger-text,
		'icon': $color-danger-icon,
		'background': $color-danger-background,
		'disabled': (
			'label': $color-danger-text-disabled,
			'icon': $color-danger-icon-disabled,
			'background': $color-danger-background,
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
	gap: $space-4xs;
	padding: $space-4xs $space-2xs;

	&.-ds-removable {
		padding: $space-5xs $space-5xs $space-5xs $space-2xs;
	}

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

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__leftIcon {
		display: flex;
	}

	&.-ds-x-small {
		gap: $space-5xs;
		min-height: $chip-min-height;
		padding: $space-5xs $space-3xs;

		#{$self}__label {
			@include label-xs-default-bold;
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

<script setup lang="ts">
import { computed } from 'vue';
import { BUTTON_ELEVATIONS } from '../Buttons/Button';
import IconButton, {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
	IconButtonColor,
} from '../Buttons/IconButton';
import Icon, { ICON_SIZES, ICONS, IconItem } from '../Icons/Icon';
import {
	CHIP_COLORS,
	CHIP_RADIUSES,
	CHIP_SIZES,
	CHIP_STATES,
	CHIP_DEFAULT_COLOR,
	ChipColor,
	ChipRadius,
	ChipSize,
	ChipState,
} from './Chip.consts';

const CHIP_ICON_BUTTONS_COLOR_MAP: Record<ChipColor, IconButtonColor> = {
	[CHIP_COLORS.INVERTED]: ICON_BUTTON_COLORS.PRIMARY,
	[CHIP_COLORS.NEUTRAL]: ICON_BUTTON_COLORS.NEUTRAL,
	[CHIP_COLORS.NEUTRAL_WEAK]: ICON_BUTTON_COLORS.NEUTRAL,
	[CHIP_COLORS.PRIMARY]: ICON_BUTTON_COLORS.PRIMARY,
	[CHIP_COLORS.PRIMARY_STRONG]: ICON_BUTTON_COLORS.PRIMARY,
	[CHIP_COLORS.FAIL]: ICON_BUTTON_COLORS.FAIL,
	[CHIP_COLORS.DANGER]: ICON_BUTTON_COLORS.DANGER,
	[CHIP_COLORS.WARNING]: ICON_BUTTON_COLORS.WARNING,
	[CHIP_COLORS.SUCCESS]: ICON_BUTTON_COLORS.SUCCESS,
	[CHIP_COLORS.INFO]: ICON_BUTTON_COLORS.INFO,
};

const {
	label = null,
	isLabelUppercase = false,
	leftIcon = null,
	radius = CHIP_RADIUSES.CAPSULE,
	size = CHIP_SIZES.SMALL,
	color = CHIP_DEFAULT_COLOR,
	colorHex = null,
	state = CHIP_STATES.DEFAULT,
	isRemovable = false,
} = defineProps<{
	label?: string | null;
	isLabelUppercase?: boolean;
	leftIcon?: IconItem | null;
	radius?: ChipRadius;
	size?: ChipSize;
	color?: ChipColor;
	colorHex?: string | null;
	state?: ChipState;
	isRemovable?: boolean;
}>();

defineEmits<{
	remove: [];
}>();

const colorClassName = computed(() => {
	if (colorHex) {
		return `-ds-color-invertedHex`;
	}
	return `-ds-color-${color}`;
});

const iconButtonColor = computed(() => {
	if (colorHex) {
		return ICON_BUTTON_COLORS.NEUTRAL;
	}
	return CHIP_ICON_BUTTONS_COLOR_MAP[color] || ICON_BUTTON_COLORS.PRIMARY;
});
</script>
