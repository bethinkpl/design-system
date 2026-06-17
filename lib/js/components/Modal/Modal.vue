<template>
	<teleport to="body">
		<div class="m-modal" v-bind="$attrs" @click.stop="$emit('close-modal')">
			<div class="m-modal__contentWrapper" @click.stop>
				<div v-if="showHeader" class="m-modal__header">
					<slot name="header" />
					<wnl-icon
						touchable-deprecated
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
	</teleport>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/z-indexes';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

// Deprecated component, no need to prefix class names.
/* stylelint-disable-next-line selector-class-pattern */
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
		margin: $space-20 $space-8 $space-16;
		max-height: calc(100vh - #{$space-20 + $space-16});
		overflow: hidden;
		position: relative;
		width: 100%;

		@media #{breakpoint-m()} {
			margin: $space-28 auto $space-20;
			max-height: calc(100vh - #{$space-28 + $space-20});
			width: 640px;
		}
	}

	&__header {
		align-items: center;
		box-shadow: 0 $space-2 $space-2 var(--raw-white);
		display: flex;
		justify-content: space-between;
		padding: $space-6 $space-6 $space-3;
		z-index: 1;

		&__close {
			color: $color-neutral-icon-weak;

			&:only-child {
				margin-left: auto;
			}
		}
	}

	&__footer {
		padding: $space-12 0;
		text-align: center;
	}

	&__content {
		overflow: auto;
		padding: $space-8;

		&__shadow {
			box-shadow: 0 #{-$space-2} $space-2 var(--raw-white);
			content: ' ';
			height: $space-2;
			z-index: 1;
		}
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Modal',
	components: { WnlIcon },
	inheritAttrs: false,
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
});
</script>
