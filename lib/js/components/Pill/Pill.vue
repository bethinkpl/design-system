<template>
	<div
		class="pill"
		:class="{ '-x-small': size === PILL_SIZES.X_SMALL, [colorClassName]: true }"
		:title="label"
	>
		<icon
			v-if="leftIcon"
			class="pill__leftIcon"
			:icon="leftIcon"
			:size="size === PILL_SIZES.X_SMALL ? ICON_SIZES.XXX_SMALL : ICON_SIZES.XX_SMALL"
		/>
		<span class="pill__label">{{ label }}</span>
		<icon-button
			v-if="size !== PILL_SIZES.X_SMALL && hasDelete"
			class="pill__delete"
			:touchable="false"
			:color="iconButtonColor"
			:size="ICON_BUTTON_SIZES.XX_SMALL"
			:icon="ICONS.FA_XMARK"
			:elevation="BUTTON_ELEVATIONS.X_SMALL"
			@click.native="$emit('delete')"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$pill-min-height: 16px;
$pill-colors: (
	'neutral': (
		'label': $color-neutral-text-strong,
		'icon': $color-neutral-icon,
		'background': $color-neutral-background-medium,
	),
	'primaryStrong': (
		'label': $color-inverted-text,
		'icon': $color-inverted-icon,
		'background': $color-primary-background-strong,
	),
	'primary': (
		'label': $color-primary-text,
		'icon': $color-primary-icon,
		'background': $color-primary-background,
	),
	'fail': (
		'label': $color-fail-text,
		'icon': $color-fail-icon,
		'background': $color-fail-background,
	),
	'warning': (
		'label': $color-warning-text,
		'icon': $color-warning-icon,
		'background': $color-warning-background,
	),
	'success': (
		'label': $color-success-text,
		'icon': $color-success-icon,
		'background': $color-success-background,
	),
	'info': (
		'label': $color-info-text,
		'icon': $color-info-icon,
		'background': $color-info-background,
	),
	'inverted': (
		'label': $color-neutral-text,
		'icon': $color-neutral-icon,
		'background': $color-default-background,
	),
);

.pill {
	$self: &;

	@each $color-name, $color-map in $pill-colors {
		&.-color-#{$color-name} {
			background-color: map-get($color-map, 'background');

			#{$self}__leftIcon {
				color: map-get($color-map, 'icon');
			}

			#{$self}__label {
				color: map-get($color-map, 'label');
			}
		}
	}

	align-items: center;
	border-radius: 100px;
	display: inline-flex;
	padding: $space-xxxxxs $space-xxxxxs $space-xxxxxs $space-xxs;

	&__label {
		@include LabelSBold();

		font-weight: bold;
		overflow: hidden;
		margin: $space-xxxxxs $space-xxxs $space-xxxxxs 0;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__leftIcon {
		margin-right: $space-xxxxs;
	}

	&.-x-small {
		padding-left: $space-xxxs;
		min-height: $pill-min-height;

		#{$self}__leftIcon {
			margin-right: $space-xxxxxs;
		}

		#{$self}__label {
			@include LabelXSBold();

			margin: 0 $space-xxxxs 0 0;
		}
	}
}
</style>

<script lang="ts">
import { PILL_SIZES, PILL_COLORS } from './Pill.consts';
import IconButton, { ICON_BUTTON_SIZES, ICON_BUTTON_COLORS } from '../Buttons/IconButton';
import Icon, { ICONS, ICON_SIZES } from '../Icon';
import { BUTTON_ELEVATIONS } from '../Buttons/Button';
import { VueConstructor } from 'vue';

const PILL_ICON_BUTTONS_COLOR_MAP = {
	[PILL_COLORS.INVERTED]: ICON_BUTTON_COLORS.PRIMARY,
	[PILL_COLORS.NEUTRAL]: ICON_BUTTON_COLORS.NEUTRAL,
	[PILL_COLORS.PRIMARY]: ICON_BUTTON_COLORS.PRIMARY,
	[PILL_COLORS.PRIMARY_STRONG]: ICON_BUTTON_COLORS.PRIMARY,
	[PILL_COLORS.FAIL]: ICON_BUTTON_COLORS.FAIL,
	[PILL_COLORS.WARNING]: ICON_BUTTON_COLORS.WARNING,
	[PILL_COLORS.SUCCESS]: ICON_BUTTON_COLORS.SUCCESS,
	[PILL_COLORS.INFO]: ICON_BUTTON_COLORS.INFO,
};

export default {
	name: 'Pill',
	components: { Icon, IconButton },
	props: {
		label: {
			type: String,
			required: true,
		},
		leftIcon: {
			type: Object,
			default: null,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		size: {
			type: String,
			default: PILL_SIZES.SMALL,
			validate(size) {
				return Object.values(PILL_SIZES).includes(size);
			},
		},
		color: {
			type: String,
			default: PILL_COLORS.NEUTRAL,
			validate(color) {
				return Object.values(PILL_COLORS).includes(color);
			},
		},
		hasDelete: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		colorClassName(): string {
			return `-color-${this.color}`;
		},

		iconButtonColor(): string {
			return PILL_ICON_BUTTONS_COLOR_MAP[this.color] || ICON_BUTTON_COLORS.PRIMARY;
		},
	},
	created() {
		this.ICONS = ICONS;
		this.BUTTON_ELEVATIONS = BUTTON_ELEVATIONS;
		this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
		this.ICON_SIZES = ICON_SIZES;
		this.PILL_SIZES = PILL_SIZES;
	},
};
</script>
