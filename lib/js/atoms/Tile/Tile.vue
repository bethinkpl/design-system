<template>
	<ripple-wrapper :disable="!interactive">
		<div :class="{ '-interactive': interactive }" class="a-tile">
			<icon
				v-if="iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
				class="a-tile__iconLeft"
			/>
			<div class="a-tile__center">
				<span class="a-tile__eyebrowText" v-text="eyebrowText" />
				<span class="a-tile__text" v-text="text" />
			</div>
			<icon
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
	background-color: $color-neutral-ripple !important;
}

.a-tile {
	width: 100%;
	min-height: $space-xl;
	background-color: $color-neutral-background;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: $space-xxs $space-xs;

	&.-interactive {
		cursor: pointer;

		&:hover {
			background-color: $color-neutral-background-hovered;
		}
	}

	&__iconLeft {
		margin-right: $space-xs;
	}

	&__center {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	&__interactiveIcon {
		margin-left: $space-xs;
		color: $color-primary-icon;
	}

	&__iconRight {
		margin-left: $space-xs;
		color: $color-neutral-icon;

		&.-interactive {
			color: $color-primary-icon;
		}
	}

	&__additionalText {
		@include textXS;

		margin-left: $space-xs;
		flex-grow: 1;
		max-width: 30%;
		color: $color-neutral-text;
		text-align: right;
	}

	&__eyebrowText {
		@include textS;

		color: $color-neutral-text-weak;
	}

	&__text {
		@include textM;

		color: $color-neutral-text-heavy;
	}
}
</style>

<script lang="ts">
import RippleWrapper from '../../utils/RippleWrapper.vue';
import Icon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';

export default {
	name: 'Tile',
	components: {
		Icon,
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
