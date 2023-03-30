<template>
	<div
		class="pill"
		:class="{
			'-x-small': size === PILL_SIZES.X_SMALL,
			[colorClassName]: true,
			'-disabled': state === PILL_STATES.DISABLED,
		}"
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
			:state="
				state === PILL_STATES.DISABLED
					? ICON_BUTTON_STATES.DISABLED
					: ICON_BUTTON_STATES.DEFAULT
			"
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

			&.-disabled {
				background-color: map-get(map-get($color-map, 'disabled'), 'background');

				#{$self}__leftIcon {
					color: map-get(map-get($color-map, 'disabled'), 'icon');
				}

				#{$self}__label {
					color: map-get(map-get($color-map, 'disabled'), 'label');
				}
			}
		}
	}

	align-items: center;
	border-radius: 100px;
	display: inline-flex;
	padding: $space-xxxxxs $space-xxxxxs $space-xxxxxs $space-xxs;

	&.-disabled {
		pointer-events: none;
	}

	&__label {
		@include label-s-default-bold;

		margin: $space-xxxxxs $space-xxxs $space-xxxxxs 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__leftIcon {
		margin-right: $space-xxxxs;
	}

	&.-x-small {
		min-height: $pill-min-height;
		padding-left: $space-xxxs;

		#{$self}__leftIcon {
			margin-right: $space-xxxxxs;
		}

		#{$self}__label {
			@include label-xs-default-bold;

			margin: 0 $space-xxxxs 0 0;
		}
	}
}
</style>

<script lang="ts">
import { PILL_COLORS, PILL_SIZES, PILL_STATES } from './Pill.consts';
import IconButton, {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
} from '../Buttons/IconButton';
import Icon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { BUTTON_ELEVATIONS } from '../Buttons/Button';
import { VueConstructor } from 'vue';
import { Value } from '../../utils/type.utils';

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
			validator(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		size: {
			type: String,
			default: PILL_SIZES.SMALL,
			validator(size) {
				return Object.values(PILL_SIZES).includes(size);
			},
		},
		color: {
			type: String,
			default: PILL_COLORS.NEUTRAL,
			validator(color) {
				return Object.values(PILL_COLORS).includes(color);
			},
		},
		state: {
			type: String,
			default: PILL_STATES.DEFAULT,
			validator(value: Value<typeof PILL_STATES>) {
				return Object.values(PILL_STATES).includes(value);
			},
		},
		hasDelete: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			BUTTON_ELEVATIONS: Object.freeze(BUTTON_ELEVATIONS),
			ICON_BUTTON_STATES: Object.freeze(ICON_BUTTON_STATES),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			PILL_SIZES: Object.freeze(PILL_SIZES),
			PILL_STATES: Object.freeze(PILL_STATES),
		};
	},
	computed: {
		colorClassName(): string {
			return `-color-${this.color}`;
		},

		iconButtonColor(): string {
			return PILL_ICON_BUTTONS_COLOR_MAP[this.color] || ICON_BUTTON_COLORS.PRIMARY;
		},
	},
};
</script>
