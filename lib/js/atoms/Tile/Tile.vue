<template>
	<ripple-wrapper :disable="!interactive">
		<div :class="{ '-interactive': interactive }" class="a-tile">
			<icon
				v-if="leftIcon"
				:icon="leftIcon"
				:size="ICON_SIZES.SMALL"
				class="a-tile__leftIcon"
			/>
			<div class="a-tile__center">
				<span class="a-tile__eyebrowText" v-text="eyebrowText" />
				<span class="a-tile__text" v-text="text" />
			</div>
			<icon
				v-if="interactive"
				:icon="ICONS.FA_CHEVRON_RIGHT"
				:size="ICON_SIZES.SMALL"
				class="a-tile__interactiveIcon"
			/>
			<icon
				v-else-if="rightIcon"
				:icon="rightIcon"
				:size="ICON_SIZES.SMALL"
				class="a-tile__rightIcon"
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

	&__leftIcon {
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

	&__rightIcon {
		margin-left: $space-xs;
		color: $color-neutral-icon;
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
			required: false,
			default: null,
		},
		interactive: {
			type: Boolean,
			required: false,
			default: false,
		},
		leftIcon: {
			type: Object,
			required: false,
			default: null,
			validate(leftIcon: VueConstructor) {
				return Object.values(ICONS).includes(leftIcon);
			},
		},
		rightIcon: {
			type: Object,
			required: false,
			default: null,
			validate(rightIcon: VueConstructor) {
				return Object.values(ICONS).includes(rightIcon);
			},
		},
		additionalText: {
			type: String,
			required: false,
			default: null,
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
};
</script>
