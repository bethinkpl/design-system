<template>
	<ds-ripple :disable="!interactive" :color="rippleColor">
		<div :class="[tileColor, { '-interactive': interactive }]" class="a-tile">
			<ds-icon
				v-if="iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
				class="a-tile__iconLeft"
			/>
			<div class="a-tile__center">
				<span
					class="a-tile__eyebrowText"
					:class="{ '-uppercase': isEyebrowTextUppercase }"
					v-text="eyebrowText"
				/>
				<span class="a-tile__text" v-text="text" />
			</div>
			<ds-icon
				v-if="iconRight"
				:icon="iconRight"
				:size="ICON_SIZES.SMALL"
				:class="{ '-interactive': interactive }"
				class="a-tile__iconRight"
			/>
			<div v-else-if="additionalText" class="a-tile__additionalText"
				>{{ additionalText }}
			</div>
		</div>
	</ds-ripple>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

.a-tile {
	$self: &;

	align-items: center;
	display: flex;
	flex-direction: row;
	padding: $space-xxs $space-xs;
	border-radius: $radius-s;

	&__additionalText {
		@include textXS;

		flex-grow: 1;
		margin-left: $space-xs;
		max-width: 30%;
		text-align: right;
	}

	&__center {
		@include textBold;

		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	&__eyebrowText {
		@include textS;

		&.-uppercase {
			text-transform: uppercase;
		}
	}

	&__text {
		@include textM;

		color: $color-neutral-text-heavy;
		margin-top: $space-xxxxxs;
	}

	&__iconLeft {
		margin-right: $space-xs;
	}

	&__iconRight {
		margin-left: $space-xs;
	}

	&.-interactive {
		cursor: pointer;
	}

	&.-neutral {
		background-color: $color-neutral-background;

		#{$self}__eyebrowText,
		#{$self}__additionalText {
			color: $color-neutral-text-weak;
		}

		#{$self}__iconLeft,
		#{$self}__iconRight {
			color: $color-neutral-icon;
		}

		&.-interactive {
			#{$self}__iconRight {
				color: $color-primary-icon;
			}

			&:hover {
				background-color: $color-neutral-background-hovered;
			}
		}
	}

	&.-success {
		background-color: $color-success-background;

		#{$self}__eyebrowText,
		#{$self}__additionalText {
			color: $color-success-text;
		}

		#{$self}__iconLeft,
		#{$self}__iconRight {
			color: $color-success-icon;
		}

		&.-interactive {
			&:hover {
				background-color: $color-success-background-hovered;
			}
		}
	}

	&.-fail {
		background-color: $color-fail-background;

		#{$self}__eyebrowText,
		#{$self}__additionalText {
			color: $color-fail-text;
		}

		#{$self}__iconLeft,
		#{$self}__iconRight {
			color: $color-fail-icon;
		}

		&.-interactive {
			&:hover {
				background-color: $color-fail-background-hovered;
			}
		}
	}

	&.-primary {
		background-color: $color-primary-background;

		#{$self}__eyebrowText,
		#{$self}__additionalText {
			color: $color-primary-text;
		}

		#{$self}__iconLeft,
		#{$self}__iconRight {
			color: $color-primary-icon;
		}

		&.-interactive {
			&:hover {
				background-color: $color-primary-background-hovered;
			}
		}
	}
}
</style>

<script lang="ts">
import DsRipple, { RIPPLE_COLORS } from '../Ripple';
import DsIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';
import { TILE_COLORS } from './Tile.consts';

export default {
	name: 'Tile',
	components: {
		DsIcon,
		DsRipple,
	},
	props: {
		interactive: {
			type: Boolean,
			default: false,
		},
		iconLeft: {
			type: Object,
			default: null,
			validate(iconLeft: VueConstructor) {
				return Object.values(ICONS).includes(iconLeft);
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validate(iconRight: VueConstructor) {
				return Object.values(ICONS).includes(iconRight);
			},
		},
		text: {
			type: String,
			required: true,
		},
		eyebrowText: {
			type: String,
			required: true,
		},
		additionalText: {
			type: String,
			default: null,
		},
		color: {
			type: String,
			default: TILE_COLORS.NEUTRAL,
			validate(color) {
				return Object.values(TILE_COLORS).includes(color);
			},
		},
		isEyebrowTextUppercase: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		tileColor() {
			return {
				[TILE_COLORS.NEUTRAL]: '-neutral',
				[TILE_COLORS.PRIMARY]: '-primary',
				[TILE_COLORS.SUCCESS]: '-success',
				[TILE_COLORS.FAIL]: '-fail',
			}[this.color];
		},
		rippleColor() {
			return {
				[TILE_COLORS.NEUTRAL]: RIPPLE_COLORS.NEUTRAL,
				[TILE_COLORS.PRIMARY]: RIPPLE_COLORS.PRIMARY,
				[TILE_COLORS.SUCCESS]: RIPPLE_COLORS.SUCCESS,
				[TILE_COLORS.FAIL]: RIPPLE_COLORS.FAIL,
			}[this.color];
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
