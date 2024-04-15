<template>
	<div class="m-modal" @click.stop="$emit('close-modal')">
		<div class="m-modal__contentWrapper" @click.stop>
			<div v-if="showHeader" class="m-modal__header">
				<slot name="header" />
				<wnl-icon
					touchable
					:icon="ICONS.FA_XMARK"
					class="m-modal__header__close"
					:size="ICON_SIZES.SMALL"
					@click.stop="$emit('close-modal')"
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
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/z-indexes';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

.m-modal {
	@include text-l-default-regular;

	align-items: center;
	background-color: rgba(10, 10, 10, 0.85);
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: $z-index-modal;

	&__contentWrapper {
		background-color: $color-default-background;
		box-shadow: $shadow-xl;
		display: flex;
		flex-direction: column;
		margin: $space-xl $space-s $space-l;
		max-height: calc(100vh - #{$space-xl + $space-l});
		overflow: hidden;
		position: relative;
		width: 100%;

		@media #{breakpoint-m()} {
			margin: $space-2xl auto $space-xl;
			max-height: calc(100vh - #{$space-2xl + $space-xl});
			width: 640px;
		}
	}

	&__header {
		align-items: center;
		box-shadow: 0 $space-4xs $space-4xs var(--raw-white);
		display: flex;
		justify-content: space-between;
		padding: $space-xs $space-xs $space-3xs;
		z-index: 1;

		&__close {
			color: $color-neutral-icon-weak;

			&:only-child {
				margin-left: auto;
			}
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
			box-shadow: 0 #{-$space-4xs} $space-4xs var(--raw-white);
			content: ' ';
			height: $space-4xs;
			z-index: 1;
		}
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

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
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['close-modal'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
};
</script>
