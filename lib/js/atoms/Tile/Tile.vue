<template>
	<div v-ripple :class="{ '-clickable': clickable }" class="a-tile">
		<div v-if="left" class="a-tile__left">
			<wnl-icon :icon="left" :size="ICON_SIZES.SMALL" />
		</div>
		<div class="a-tile__center">
			<div class="a-tile__eyebrow"><slot name="eyebrow" /></div>
			<div class="a-tile__title"><slot /></div>
		</div>
		<div v-if="clickable" class="a-tile__clickableIcon">
			<wnl-icon :icon="ICONS.FA_CHEVRON_RIGHT" :size="ICON_SIZES.SMALL" />
		</div>
		<div v-else-if="right" class="a-tile__right">
			<wnl-icon :icon="right" :size="ICON_SIZES.SMALL" />
		</div>
		<div v-else-if="text" class="a-tile__text">{{ text }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';

.a-tile {
	width: 100%;
	min-height: $space-xl;
	background-color: $neutral-background;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: $space-xxs $space-xs;

	&::v-deep .ripple-container {
		display: none;
	}

	&.-clickable {
		cursor: pointer;

		&::v-deep .ripple-container {
			display: initial;
		}

		&:hover {
			background-color: $neutral-background-hovered;
		}
	}

	&__left {
		margin-right: $space-xs;
	}

	&__center {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	&__clickableIcon {
		margin-left: $space-xs;
		color: $primary-icon;
	}

	&__right {
		margin-left: $space-xs;
		color: $neutral-icon;
	}

	&__text {
		@include textXS;

		margin-left: $space-xs;
		flex-grow: 1;
		max-width: 30%;
		color: $neutral-text;
		text-align: right;
	}

	&__eyebrow {
		@include textS;

		color: $neutral-text-weak ;
	}

	&__title {
		@include textM;

		color: $neutral-text-heavy;
	}
}
</style>

<script lang="ts">
import Ripple from 'vue-ripple-directive';
import WnlIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';

export default {
	name: 'Tile',
	components: {
		WnlIcon,
	},
	directives: {
		ripple: Ripple,
	},
	props: {
		clickable: {
			type: Boolean,
			required: false,
			default: true,
		},
		left: {
			type: Object,
			required: false,
			default: null,
			validate(left: VueConstructor) {
				return Object.values(ICONS).includes(left);
			},
		},
		right: {
			type: Object,
			required: false,
			default: null,
			validate(right: VueConstructor) {
				return Object.values(ICONS).includes(right);
			},
		},
		text: {
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
