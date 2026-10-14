<template>
	<span ref="referenceElement">
		<slot v-if="triggerAction === POP_OVER_TRIGGER_ACTIONS.NONE" name="reference" />
		<popover-root v-else :open="isOpen" @update:open="setOpen">
			<!--
				The slot's own element is the anchor, as it was with vue-popperjs. Hover mode anchors to
				it instead of toggling on every click of it.
			-->
			<component
				:is="isHoverMode ? PopoverAnchor : PopoverTrigger"
				as-child
				v-on="referenceListeners"
			>
				<slot name="reference" />
			</component>

			<popover-portal :disabled="!appendToBody">
				<popover-content
					class="ds-popOver"
					:class="[
						rootClass,
						{
							'-ds-color-neutral': color === POP_OVER_COLORS.NEUTRAL,
							'-ds-small': size === POP_OVER_SIZES.SMALL,
							'-ds-medium': size === POP_OVER_SIZES.MEDIUM,
						},
					]"
					:side="side"
					:align="align"
					:side-offset="SIDE_OFFSET"
					:side-flip="sideFlip"
					:collision-boundary="collisionBoundary"
					position-strategy="absolute"
					v-on="contentListeners"
					@pointer-down-outside="onPointerDownOutside"
					@open-auto-focus="isFocusKeptInPlace && $event.preventDefault()"
					@close-auto-focus="isFocusKeptInPlace && $event.preventDefault()"
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
	z-index: $z-index-floating-panel;

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
		max-width: 100%;
	}

	&__content {
		@include text-m-default-regular;

		color: $color-neutral-text-heavy;
		padding: $space-8;
	}

	&__title {
		@include heading-m-default-bold;

		color: $color-default-text;
		margin-bottom: $space-4;
	}

	&__subtitle {
		@include heading-s-default-regular;

		color: $color-neutral-text;
		margin-bottom: $space-4;
	}

	&__button {
		align-self: flex-end;
		margin: 0 $space-8 $space-6;
	}
}
</style>

<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import {
	PopoverAnchor,
	PopoverArrow,
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger,
} from 'reka-ui';

import {
	POP_OVER_COLORS,
	POP_OVER_PLACEMENTS,
	POP_OVER_SIZES,
	POP_OVER_TRIGGER_ACTIONS,
	PopOverColor,
	PopOverPlacement,
	PopOverSize,
	PopOverTriggerAction,
} from './PopOver.consts';
import DsButton, { BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button';
import { useFloatingPanelOpen } from '../../composables/useFloatingPanelOpen';
import { useHoverOpen } from '../../composables/useHoverOpen';
import { resolveCollisionBoundary, splitPlacement } from '../../utils/placement';

// $space-6 * 2 by $space-8: the arrow's base and height.
const ARROW_WIDTH = 24;
const ARROW_HEIGHT = 16;
// Panels use `position-strategy="absolute"` (Reka defaults to fixed), as vue-popperjs did: a
// panel that runs past the bottom of the page extends it, so the page can scroll to it.
// $space-2: the gap between the reference and the panel. Reka adds the arrow's height on top.
const SIDE_OFFSET = 4;

const {
	boundariesSelector = null,
	triggerAction = POP_OVER_TRIGGER_ACTIONS.CLICK,
	placement = POP_OVER_PLACEMENTS.BOTTOM,
	forceShow = false,
	color = POP_OVER_COLORS.DEFAULT,
	titleText = null,
	subtitleText = null,
	buttonText = null,
	headerImageUrl = null,
	appendToBody = false,
	sideFlip = true,
	size = POP_OVER_SIZES.SMALL,
	maxHeight = false,
	isPointerVisible = true,
	rootClass = '',
} = defineProps<{
	boundariesSelector?: string | null;
	triggerAction?: PopOverTriggerAction;
	placement?: PopOverPlacement;
	forceShow?: boolean;
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
	rootClass?: string;
}>();

defineEmits<{
	'button-click': [];
}>();

const referenceElement = useTemplateRef<HTMLElement>('referenceElement');

const { isOpen, setOpen, onPointerDownOutside } = useFloatingPanelOpen({
	forceShow: () => forceShow,
	referenceElement,
});

const isHoverMode = computed(() => triggerAction === POP_OVER_TRIGGER_ACTIONS.HOVER);
// Moving focus into the panel is right when the user opened it on purpose, not when it opened
// on hover or by itself.
const isFocusKeptInPlace = computed(() => isHoverMode.value || forceShow);

const { onPointerEnter, onPointerLeave, onReferencePointerDown, onReferenceClick } = useHoverOpen({
	isOpen: () => isOpen.value,
	setOpen,
});
const referenceListeners = computed(() =>
	isHoverMode.value
		? {
				pointerenter: onPointerEnter,
				pointerleave: onPointerLeave,
				pointerdown: onReferencePointerDown,
				click: onReferenceClick,
			}
		: {},
);
const contentListeners = computed(() =>
	isHoverMode.value ? { pointerenter: onPointerEnter, pointerleave: onPointerLeave } : {},
);

const side = computed(() => splitPlacement(placement).side);
const align = computed(() => splitPlacement(placement).align);
const collisionBoundary = computed(() =>
	isOpen.value ? resolveCollisionBoundary(boundariesSelector) : undefined,
);

function close() {
	setOpen(false);
}

defineExpose({ close });
</script>
