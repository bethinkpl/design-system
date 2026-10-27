<template>
	<span>
		<slot v-if="isDisabled" name="reference" />
		<popover-root v-else :open="open" @update:open="onOpenChange">
			<popover-trigger :as="PopoverTriggerReference">
				<slot name="reference" />
			</popover-trigger>

			<popover-portal :disabled="!appendToBody">
				<popover-content
					class="ds-popover"
					:class="{
						'-ds-color-neutral': color === POPOVER_COLORS.NEUTRAL,
						'-ds-small': size === POPOVER_SIZES.SMALL,
						'-ds-medium': size === POPOVER_SIZES.MEDIUM,
					}"
					:side="side"
					:align="align"
					:side-offset="SIDE_OFFSET"
					:arrow-padding="ARROW_PADDING"
					:side-flip="sideFlip"
					:collision-boundary="collisionBoundary ?? undefined"
					position-strategy="absolute"
					:hide-when-detached="hideWhenDetached"
					:sticky="stickToBoundary ? 'always' : 'partial'"
					:prioritize-position="stickToBoundary"
					@open-auto-focus="preventInManualMode"
					@close-auto-focus="preventInManualMode"
					@escape-key-down="preventInManualMode"
					@interact-outside="preventInManualMode"
				>
					<img
						v-if="headerImageUrl"
						class="ds-popover__image"
						:src="headerImageUrl"
						alt=""
					/>
					<div class="ds-popover__content">
						<div v-if="titleText" class="ds-popover__title"> {{ titleText }}</div>
						<div v-if="subtitleText" class="ds-popover__subtitle">
							{{ subtitleText }}</div
						>
						<div class="ds-popover__contentSlot" :style="contentSlotStyles">
							<slot :close="close" />
						</div>
					</div>
					<ds-button
						v-if="buttonText"
						class="ds-popover__button"
						:type="BUTTON_TYPES.TEXT"
						:size="BUTTON_SIZES.LARGE"
						@click="$emit('button-click')"
					>
						{{ buttonText }}
					</ds-button>
					<popover-arrow
						v-if="isPointerVisible"
						class="ds-popover__arrow"
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

.ds-popover {
	$self: &;

	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-l;
	display: flex;
	flex-direction: column;
	z-index: $z-index-top-layer;

	&__arrow {
		fill: $color-default-background;
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

	&.-ds-small {
		width: min(90vw, 320px);
	}

	&.-ds-medium {
		width: min(90vw, 460px);
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
import { computed, watch } from 'vue';
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui';

import PopoverTriggerReference from '../shared/PopoverTriggerReference.vue';

import {
	POPOVER_ALIGNS,
	POPOVER_COLORS,
	POPOVER_SIDES,
	POPOVER_SIZES,
	PopoverAlign,
	PopoverColor,
	PopoverSide,
	PopoverSize,
} from './Popover.consts';
import DsButton, { BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button';

// $space-6 * 2 by $space-8: the arrow's base and height.
const ARROW_WIDTH = 24;
const ARROW_HEIGHT = 16;
// $space-2: the gap between the reference and the panel. Reka adds the arrow's height on top.
const SIDE_OFFSET = 4;
// $space-6: keeps the arrow off the panel's rounded corners ($radius-m) when aligned to start or end.
// Reka measures the arrow before rotating it, so on the left and right sides the visible gap is 4px
// smaller. The panel shifts instead when that is needed to keep pointing at the reference's center.
const ARROW_PADDING = 12;

const {
	collisionBoundary = null,
	isDisabled = false,
	isManual = false,
	side = POPOVER_SIDES.BOTTOM,
	align = POPOVER_ALIGNS.CENTER,
	color = POPOVER_COLORS.DEFAULT,
	titleText = null,
	subtitleText = null,
	buttonText = null,
	headerImageUrl = null,
	appendToBody = true,
	sideFlip = true,
	size = POPOVER_SIZES.SMALL,
	maxHeight = null,
	isPointerVisible = true,
	hideWhenDetached = false,
	stickToBoundary = false,
} = defineProps<{
	// The element the panel stays within; the viewport when not set.
	collisionBoundary?: Element | null;
	isDisabled?: boolean;
	// Only model updates and explicit close() calls change the open state, and focus stays put.
	isManual?: boolean;
	side?: PopoverSide;
	align?: PopoverAlign;
	color?: PopoverColor;
	titleText?: string | null;
	subtitleText?: string | null;
	buttonText?: string | null;
	headerImageUrl?: string | null;
	appendToBody?: boolean;
	// Whether the panel may move to the opposite side when it doesn't fit. It still shifts along
	// its side to stay within the boundary either way. Turn it off for a panel that can be taller
	// than the space on both sides of the reference (a long list, a large max height, or a
	// reference near the top of the page): flipped above, its top would run past the page start,
	// where scrolling can't reach it. Unflipped, it stays below and the page scrolls to reveal it.
	sideFlip?: boolean;
	size?: PopoverSize;
	// Caps the content slot; the title, subtitle and button stay visible above and below it.
	maxHeight?: string | null;
	isPointerVisible?: boolean;
	// On: the panel hides when the reference leaves the boundary (the viewport by default; a
	// scrolling container counts only when passed as collisionBoundary).
	// Off: it keeps following the reference, also out of view.
	hideWhenDetached?: boolean;
	// On: the panel stays within the boundary even after the reference leaves it, detaching from
	// the reference and sticking to the boundary's edge, like the Legacy components did. Pass a
	// scrolling container as collisionBoundary to keep the panel inside it. hideWhenDetached wins
	// when both are on.
	stickToBoundary?: boolean;
}>();

defineEmits<{
	'button-click': [];
}>();

const open = defineModel<boolean>('open', { default: false });

const contentSlotStyles = computed(() => (maxHeight ? { maxHeight } : {}));

function onOpenChange(value: boolean) {
	if (!isManual) open.value = value;
}

// Manual mode keeps both the open state and the focus where the parent left them.
function preventInManualMode(event: Event) {
	if (isManual) event.preventDefault();
}

function close() {
	open.value = false;
}

// Disabling removes PopoverRoot, so close first or the panel would come back with the next enable.
// Not on mount, so a popover that starts disabled opens with the parent's state once enabled, and
// not in manual mode, where only the parent changes the state.
watch(
	() => isDisabled,
	(disabled) => {
		if (disabled && !isManual) close();
	},
);

defineExpose({ close });
</script>
