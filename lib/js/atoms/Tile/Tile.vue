<template>
	<div class="a-tile" :class="{ '-clickable': clickable }">
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
@import '../../../styles/settings/colors';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';

.a-tile {
	width: 100%;
	min-height: $space-xl;
	background-color: $color-alabaster-gray;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: $space-xxs $space-xs $space-xxs $space-xs;

	&.-clickable {
		cursor: pointer;

		&:hover {
			background-color: $color-ice-gray;
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
		color: $color-primary;
	}

	&__right {
		margin-left: $space-xs;
		color: $color-storm-gray;
	}

	&__text {
		@include textXS;

		margin-left: $space-xs;
		flex-grow: 1;
		max-width: 30%;
		color: $color-storm-gray;
		text-align: right;
	}

	&__eyebrow {
		@include textS;

		color: $color-mischka-gray;
	}

	&__title {
		@include textM;

		color: $color-storm-gray;
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';

export default {
	name: 'Tile',
	components: {
		WnlIcon,
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
