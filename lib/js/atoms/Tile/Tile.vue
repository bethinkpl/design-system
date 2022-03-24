<template>
	<ripple-wrapper :disable="!interactive">
		<div :class="{ '-interactive': interactive }" class="a-tile">
			<ds-icon
				v-if="iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
				class="a-tile__iconLeft"
			/>
			<div class="a-tile__center">
				<span class="a-tile__eyebrowText" v-text="eyebrowText" />
				<span class="a-tile__text" v-text="text" />
			</div>
			<ds-icon
				v-if="iconRightDisplayed"
				:icon="iconRightDisplayed"
				:size="ICON_SIZES.SMALL"
				:class="{ '-interactive': interactive }"
				class="a-tile__iconRight"
			/>
			<div v-else-if="additionalText" class="a-tile__additionalText">{{
				additionalText
			}}</div>
		</div>
	</ripple-wrapper>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';

::v-deep .ripple {
	background-color: $color-default-ripple !important;
}

.a-tile {
	align-items: center;
	background-color: $color-neutral-background;
	display: flex;
	flex-direction: row;
	padding: $space-xxs $space-xs;

	&__additionalText {
		@include textXS;

		color: $color-neutral-text;
		flex-grow: 1;
		margin-left: $space-xs;
		max-width: 30%;
		text-align: right;
	}

	&__center {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	&__eyebrowText {
		@include textS;

		color: $color-neutral-text-weak;
	}

	&__iconLeft {
		margin-right: $space-xs;
	}

	&__iconRight {
		color: $color-neutral-icon;
		margin-left: $space-xs;

		&.-interactive {
			color: $color-primary-icon;
		}
	}

	&.-interactive {
		cursor: pointer;

		&:hover {
			background-color: $color-neutral-background-hovered;
		}
	}

	&__interactiveIcon {
		color: $color-primary-icon;
		margin-left: $space-xs;
	}

	&__text {
		@include textM;

		color: $color-neutral-text-heavy;
	}
}
</style>

<script lang="ts">
import RippleWrapper from '../../utils/RippleWrapper.vue';
import DsIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';

export default {
	name: 'Tile',
	components: {
		DsIcon,
		RippleWrapper,
	},
	props: {
		text: {
			type: String,
			required: true,
		},
		eyebrowText: {
			type: String,
			default: null,
		},
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
		additionalText: {
			type: String,
			default: null,
		},
	},
	computed: {
		iconRightDisplayed() {
			return this.interactive ? ICONS.FA_CHEVRON_RIGHT : this.iconRight;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
