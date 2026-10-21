<template>
	<span>
		<slot v-if="disabled" name="reference" />
		<popover-root v-else :open="open" @update:open="onOpenChange">
			<popover-trigger :as="PopoverTriggerReference">
				<slot name="reference" />
			</popover-trigger>

			<popover-portal :disabled="!appendToBody">
				<popover-content
					class="ds-popOver"
					:class="{
						'-ds-color-neutral': color === POP_OVER_COLORS.NEUTRAL,
						'-ds-small': size === POP_OVER_SIZES.SMALL,
						'-ds-medium': size === POP_OVER_SIZES.MEDIUM,
					}"
					:side="side"
					:align="align"
					:side-offset="SIDE_OFFSET"
					:side-flip="sideFlip"
					:collision-boundary="collisionBoundary ?? undefined"
					position-strategy="fixed"
					hide-when-detached
					@escape-key-down="onDismiss"
					@interact-outside="onDismiss"
				>
					<img
						v-if="headerImageUrl"
						class="ds-popOver__image"
						:src="headerImageUrl"
						alt=""
					/>
					<div class="ds-popOver__content">
						<div v-if="titleText" class="ds-popOver__title"> {{ titleText }}</div>
						<div v-if="subtitleText" class="ds-popOver__subtitle">
							{{ subtitleText }}</div
						>
						<div
							class="ds-popOver__contentSlot"
							:class="{ '-ds-maxHeight': maxHeight }"
						>
							<slot :close="close" />
						</div>
					</div>
					<ds-button
						v-if="buttonText"
						class="ds-popOver__button"
						:type="BUTTON_TYPES.TEXT"
						:size="BUTTON_SIZES.LARGE"
						@click="$emit('button-click')"
					>
						{{ buttonText }}
					</ds-button>
					<popover-arrow
						v-if="isPointerVisible"
						class="ds-popOver__arrow"
						:width="ARROW_WIDTH"
						:height="ARROW_HEIGHT"
					/>
				</popover-content>
			</popover-portal>
		</popover-root>
	</span>
</template>

<!--
	Styled unscoped on purpose: PopoverContent renders the panel through Presence's slot rather than
	as its root, so Vue never forwards this component's scope id to it and a scoped rule would not
	match. Same approach as SelectField.vue.
-->
<style lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/z-indexes';

.ds-popOver {
	$self: &;

	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-l;
	display: flex;
	flex-direction: column;
	// Shrinks to the space left on its side of the reference, so a tall panel scrolls its content
	// slot instead of running off the screen, where a locked page could never scroll to it.
	max-height: var(--reka-popover-content-available-height);
	z-index: $z-index-top-layer;

	&__arrow {
		fill: $color-inverted-border;
	}

	&.-ds-color-neutral {
		background-color: $color-neutral-background;

		#{$self}__arrow {
			fill: $color-neutral-background;
		}
	}

	&__contentSlot {
		min-height: 0;
		overflow-y: auto;
		word-break: break-word;
	}

	&__contentSlot.-ds-maxHeight {
		overflow: hidden scroll;
	}

	&.-ds-small {
		width: 320px;

		#{$self}__contentSlot.-ds-maxHeight {
			max-height: 160px;
		}
	}

	&.-ds-medium {
		width: min(90vw, 460px);

		#{$self}__contentSlot.-ds-maxHeight {
			max-height: 250px;
		}
	}

	&__image {
		border-top-left-radius: $radius-m;
		border-top-right-radius: $radius-m;
		flex-shrink: 0;
		max-width: 100%;
	}

	&__content {
		@include text-m-default-regular;

		color: $color-neutral-text-heavy;
		display: flex;
		flex-direction: column;
		min-height: 0;
		padding: $space-8;
	}

	&__title {
		@include heading-m-default-bold;

		color: $color-default-text;
		flex-shrink: 0;
		margin-bottom: $space-4;
	}

	&__subtitle {
		@include heading-s-default-regular;

		color: $color-neutral-text;
		flex-shrink: 0;
		margin-bottom: $space-4;
	}

	&__button {
		align-self: flex-end;
		flex-shrink: 0;
		margin: 0 $space-8 $space-6;
	}
}
</style>

<script setup lang="ts">
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui';

import PopoverTriggerReference from '../shared/PopoverTriggerReference.vue';

import {
	POP_OVER_ALIGNS,
	POP_OVER_COLORS,
	POP_OVER_SIDES,
	POP_OVER_SIZES,
	PopOverAlign,
	PopOverColor,
	PopOverSide,
	PopOverSize,
} from './PopOver.consts';
import DsButton, { BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button';

// $space-6 * 2 by $space-8: the arrow's base and height.
const ARROW_WIDTH = 24;
const ARROW_HEIGHT = 16;
// $space-2: the gap between the reference and the panel. Reka adds the arrow's height on top.
const SIDE_OFFSET = 4;

const {
	collisionBoundary = null,
	disabled = false,
	manual = false,
	side = POP_OVER_SIDES.BOTTOM,
	align = POP_OVER_ALIGNS.CENTER,
	color = POP_OVER_COLORS.DEFAULT,
	titleText = null,
	subtitleText = null,
	buttonText = null,
	headerImageUrl = null,
	appendToBody = true,
	sideFlip = true,
	size = POP_OVER_SIZES.SMALL,
	maxHeight = false,
	isPointerVisible = true,
} = defineProps<{
	// The element the panel stays within; the viewport when not set.
	collisionBoundary?: Element | null;
	disabled?: boolean;
	// Only model updates and explicit close() calls change the open state.
	manual?: boolean;
	side?: PopOverSide;
	align?: PopOverAlign;
	color?: PopOverColor;
	titleText?: string | null;
	subtitleText?: string | null;
	buttonText?: string | null;
	headerImageUrl?: string | null;
	appendToBody?: boolean;
	// Whether the panel may move to the opposite side when it doesn't fit. It still shifts along
	// its side to stay within the boundary either way.
	sideFlip?: boolean;
	size?: PopOverSize;
	maxHeight?: boolean;
	isPointerVisible?: boolean;
}>();

defineEmits<{
	'button-click': [];
}>();

const open = defineModel<boolean>('open', { default: false });

function onOpenChange(value: boolean) {
	if (!manual) open.value = value;
}

function onDismiss(event: Event) {
	if (manual) event.preventDefault();
}

function close() {
	open.value = false;
}

defineExpose({ close });
</script>
