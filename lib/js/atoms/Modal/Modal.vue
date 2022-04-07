<template>
	<div class="m-modal" @click.stop="$emit('close-modal')">
		<div class="m-modal__contentWrapper" @click.stop>
			<div v-if="showHeader" class="m-modal__header">
				<slot name="header" />
				<wnl-icon
					touchable
					:icon="ICONS.FA_XMARK_LIGHT"
					class="-stormGray m-modal__header__close"
					:size="ICON_SIZES.SMALL"
					@click.native.stop="$emit('close-modal')"
				/>
			</div>
			<div
				class="m-modal__content"
				:class="{ 'scrollable-main-container': animateScrollingContent }"
			>
				<slot />
			</div>
			<div class="m-modal__content__shadow" />
			<div v-if="$slots.footer" class="m-modal__footer">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/z-indexes';
@import '../../../styles/settings/typography';

.m-modal {
	align-items: center;
	background-color: rgba(10, 10, 10, 0.85);
	bottom: 0;
	display: flex;
	font-size: $font-size-text-l;
	justify-content: center;
	left: 0;
	line-height: $line-height-text-l;
	position: fixed;
	right: 0;
	top: 0;
	z-index: $z-index-modal;

	&__contentWrapper {
		background-color: $color-total-white;
		box-shadow: 0 4px 34px rgba(0, 0, 0, 0.85);
		display: flex;
		flex-direction: column;
		margin: $space-xl $space-s $space-l;
		max-height: calc(100vh - #{$space-xl + $space-l});
		overflow: hidden;
		position: relative;
		width: 100%;

		@media #{breakpoint-m()} {
			margin: $space-xxl auto $space-xl;
			max-height: calc(100vh - #{$space-xxl + $space-xl});
			width: 640px;
		}
	}

	&__header {
		align-items: center;
		box-shadow: 0 $space-xxxxs $space-xxxxs $color-total-white;
		display: flex;
		justify-content: space-between;
		padding: $space-xs $space-xs $space-xxxs;
		z-index: 1;

		&__close:only-child {
			margin-left: auto;
		}
	}

	&__footer {
		padding: $space-m 0;
		text-align: center;
	}

	&__content {
		overflow: auto;
		padding: $space-s;

		&__shadow {
			box-shadow: 0 #{-$space-xxxxs} $space-xxxxs $color-total-white;
			content: ' ';
			height: $space-xxxxs;
			z-index: 1;
		}
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'Modal',
	components: { WnlIcon },
	props: {
		showHeader: {
			type: Boolean,
			default: true,
		},
		animateScrollingContent: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
