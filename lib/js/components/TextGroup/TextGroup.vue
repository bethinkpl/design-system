<template>
	<div
		class="ds-textGroup"
		:class="{
			'-ds-small': size === TEXT_GROUP_SIZES.SMALL,

			'-ds-hovered': state === TEXT_GROUP_STATES.HOVERED,
			'-ds-loading': isLoading,
			'-ds-disabled': state === TEXT_GROUP_STATES.DISABLED,

			'-ds-interactive': isInteractive,
			'-ds-selected': isSelected,

			[loadingSizeClassName]: isLoading,

			[prominenceClassName]: true,
		}"
	>
		<div
			v-if="eyebrowText !== null"
			class="ds-textGroup__eyebrowWrapper"
			:class="{
				'-ds-mask-active': isEyebrowMaskActive,
				'-ds-mask-hidden': isEyebrowMaskHidden,
			}"
		>
			<div
				ref="eyebrowRef"
				class="ds-textGroup__eyebrow"
				:class="{
					'-ds-ellipsis': eyebrowTextEllipsis,
					'-ds-uppercase': isEyebrowTextUppercase,
					'-ds-mask': hasEyebrowMask,
				}"
			>
				<div v-if="isLoading" class="ds-textGroup__skeletonWrapper">
					<ds-skeleton width="50%" height="100%" />
				</div>
				<span v-else-if="eyebrowText === ''">&nbsp;</span>
				<span v-else>{{ eyebrowText }}</span>
			</div>
		</div>
		<div
			v-if="mainText !== null || $slots.mainText"
			class="ds-textGroup__main"
			:class="{
				'-ds-ellipsis': mainTextEllipsis,
			}"
		>
			<div v-if="isLoading" class="ds-textGroup__skeletonWrapper">
				<ds-skeleton width="100%" height="100%" />
			</div>
			<template v-else-if="$slots.mainText"><slot name="mainText" /></template>
			<span v-else-if="mainText === ''">&nbsp;</span>
			<span v-else>{{ mainText }}</span>
		</div>
		<div v-if="supportingText !== null" class="ds-textGroup__supportingWrapper">
			<div v-if="isLoading" class="ds-textGroup__skeletonWrapper">
				<ds-skeleton width="100%" height="100%" />
			</div>
			<span v-else-if="supportingText === ''">&nbsp;</span>
			<template v-else>
				<ds-tooltip
					class="ds-textGroup__supportingTooltip"
					:text="
						isSupportingTextTooltipAutoFilledWithContent
							? supportingText
							: supportingTextTooltipContent
					"
					:is-disabled="!isSupportingTextTooltipEnabled"
					:is-hidden-on-mobile="!isSupportingTextTooltipEnabledOnMobile"
					inline
				>
					<div
						class="ds-textGroup__supporting"
						:class="{
							'-ds-ellipsis': supportingTextEllipsis,
						}"
					>
						<span v-html="supportingText" />
					</div>
				</ds-tooltip>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/mixins/background-mask';

$text-group-colors: (
	'default': (
		'eyebrow-color': $color-neutral-text-weak,
		'eyebrow-color-hovered': $color-neutral-text-weak-hovered,
		'eyebrow-color-disabled': $color-neutral-text-weak-disabled,
		'main-text-color': $color-neutral-text-strong,
		'main-text-color-hovered': $color-neutral-text-strong-hovered,
		'main-text-color-disabled': $color-neutral-text-strong-disabled,
		'main-text-color-selected': $color-primary-text,
		'main-text-color-selected-hovered': $color-primary-text-hovered,
		'main-text-color-selected-disabled': $color-primary-text-disabled,
		'supporting-text-color': $color-neutral-text,
		'supporting-text-color-hovered': $color-neutral-text-hovered,
		'supporting-text-color-disabled': $color-neutral-text-disabled,
	),
	'strong': (
		'eyebrow-color': $color-neutral-text,
		'eyebrow-color-hovered': $color-neutral-text-hovered,
		'eyebrow-color-disabled': $color-neutral-text-disabled,
		'main-text-color': $color-neutral-text-heavy,
		'main-text-color-hovered': $color-neutral-text-heavy-hovered,
		'main-text-color-disabled': $color-neutral-text-heavy-disabled,
		'main-text-color-selected': $color-primary-text,
		'main-text-color-selected-hovered': $color-primary-text-hovered,
		'main-text-color-selected-disabled': $color-primary-text-disabled,
		'supporting-text-color': $color-neutral-text,
		'supporting-text-color-hovered': $color-neutral-text-hovered,
		'supporting-text-color-disabled': $color-neutral-text-disabled,
	),
);

@mixin setTextGroupColors($self, $map) {
	#{$self}__eyebrow {
		color: map-get($map, 'eyebrow-color');
	}

	#{$self}__main {
		color: map-get($map, 'main-text-color');
	}

	#{$self}__supporting {
		color: map-get($map, 'supporting-text-color');
	}

	&.-ds-interactive:hover,
	&.-ds-hovered {
		#{$self}__eyebrow {
			color: map-get($map, 'eyebrow-color-hovered');
		}

		#{$self}__main {
			color: map-get($map, 'main-text-color-hovered');
		}

		#{$self}__supporting {
			color: map-get($map, 'supporting-text-color-hovered');
		}
	}

	&.-ds-disabled {
		pointer-events: none;

		#{$self}__eyebrow {
			color: map-get($map, 'eyebrow-color-disabled');
		}

		#{$self}__main {
			color: map-get($map, 'main-text-color-disabled');
		}

		#{$self}__supporting {
			color: map-get($map, 'supporting-text-color-disabled');
		}
	}

	&.-ds-selected {
		#{$self}__main {
			color: map-get($map, 'main-text-color-selected');
		}

		&.-ds-interactive:hover,
		&.-ds-hovered {
			#{$self}__main {
				color: map-get($map, 'main-text-color-selected-hovered');
			}
		}

		&.-ds-disabled {
			#{$self}__main {
				color: map-get($map, 'main-text-color-selected-disabled');
			}
		}
	}
}

.ds-textGroup {
	$self: &;

	@each $color-name, $color-map in $text-group-colors {
		&.-ds-#{$color-name} {
			@include setTextGroupColors($self, $color-map);
		}
	}

	display: flex;
	flex-direction: column;
	width: 100%;

	&__eyebrow {
		@include info-s-default-bold;

		margin-bottom: $space-5xs;

		&.-ds-uppercase {
			@include info-s-extensive-bold-uppercase;
		}

		&.-ds-mask {
			overflow: auto;
			white-space: nowrap;

			&::-webkit-scrollbar {
				display: none;
			}
		}
	}

	&__eyebrowWrapper {
		&.-ds-mask-active {
			direction: rtl;
			position: relative;

			&:not(.-ds-mask-hidden)::before {
				@include backgroundMask(white, -90deg);

				bottom: 0;
				content: '';
				display: block;
				left: 0;
				position: absolute;
				top: 0;
				width: 20px;
			}
		}
	}

	&__main {
		@include text-m-compact-bold;
	}

	&__supportingWrapper {
		display: flex;
	}

	&__supportingTooltip {
		display: inline-flex;
		max-width: 100%;
		overflow: hidden;
	}

	&__supporting {
		@include text-s-compact-regular;
	}

	&__eyebrow.-ds-ellipsis,
	&__main.-ds-ellipsis,
	&__supporting.-ds-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&.-ds-small {
		#{$self}__eyebrow {
			@include info-xs-default-bold;

			margin-bottom: 0;

			&.-ds-uppercase {
				@include info-xs-extensive-bold-uppercase;
			}
		}

		#{$self}__main {
			@include text-s-compact-bold;
		}
	}

	&.-ds-interactive:hover,
	&.-ds-hovered {
		cursor: pointer;
	}

	&.-ds-disabled {
		pointer-events: none;
	}

	&.-ds-loading {
		pointer-events: none;

		#{$self}__eyebrow,
		#{$self}__main,
		#{$self}__supporting {
			align-items: center;
			display: flex;
			height: 1.25em; // Fallback for older browsers
			/* stylelint-disable-next-line unit-no-unknown */
			height: 1lh;
		}

		#{$self}__skeletonWrapper {
			height: 1em;
			width: 100%;
		}
	}

	&.-ds-loading-small {
		width: 50%;
	}

	&.-ds-loading-medium {
		width: 70%;
	}
}
</style>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';
import { throttle } from 'lodash';
import { useElementSize } from '@vueuse/core';
import DsSkeleton from '../Skeleton/Skeleton.vue';
import {
	TEXT_GROUP_LOADING_SIZES,
	TEXT_GROUP_SIZES,
	TEXT_GROUP_STATES,
	TextGroupProminence,
	TextGroupLoadingSize,
	TextGroupSize,
	TextGroupState,
	TEXT_GROUP_PROMINENCE,
} from './TextGroup.consts';
import DsTooltip from '../Tooltip';

const {
	size = TEXT_GROUP_SIZES.MEDIUM,
	prominence = TEXT_GROUP_PROMINENCE.DEFAULT,
	eyebrowText,
	eyebrowTextEllipsis = false,
	isEyebrowTextUppercase = true,
	hasEyebrowMask = false,
	mainText,
	mainTextEllipsis = false,
	supportingText,
	supportingTextEllipsis = false,
	isInteractive = true,
	skeletonLoadingSize = TEXT_GROUP_LOADING_SIZES.LARGE,
	isSelected = false,
	state = TEXT_GROUP_STATES.DEFAULT,
	isSupportingTextTooltipEnabled = false,
	isSupportingTextTooltipEnabledOnMobile = true,
	isSupportingTextTooltipAutoFilledWithContent = true,
	supportingTextTooltipContent,
} = defineProps<{
	size?: TextGroupSize;
	prominence?: TextGroupProminence;
	eyebrowText?: string | null;
	eyebrowTextEllipsis?: boolean;
	isEyebrowTextUppercase?: boolean;
	hasEyebrowMask?: boolean;
	mainText?: string | null;
	mainTextEllipsis?: boolean;
	supportingText?: string | null;
	supportingTextEllipsis?: boolean;
	isInteractive?: boolean;
	skeletonLoadingSize?: TextGroupLoadingSize;
	isSelected?: boolean;
	state?: TextGroupState;
	isSupportingTextTooltipEnabled?: boolean;
	isSupportingTextTooltipEnabledOnMobile?: boolean;
	isSupportingTextTooltipAutoFilledWithContent?: boolean;
	supportingTextTooltipContent?: string;
}>();

const prominenceClassName = computed(() => `-ds-${prominence}`);
const isLoading = computed(() => state === TEXT_GROUP_STATES.LOADING);
const loadingSizeClassName = computed(() => `-ds-loading-${skeletonLoadingSize}`);

const eyebrowRef = useTemplateRef('eyebrowRef');
const isEyebrowMaskActive = ref(false);
const isEyebrowMaskHidden = ref(false);

const { width: eyebrowWidth } = useElementSize(eyebrowRef);

const throttledCheckEyebrowMask = throttle(() => {
	if (eyebrowRef.value) {
		// Hide the mask when scrolled to the start (1px tolerance for sub-pixel rendering)
		isEyebrowMaskHidden.value =
			eyebrowRef.value.scrollLeft -
				(eyebrowRef.value.clientWidth - eyebrowRef.value.scrollWidth) <
			1;
	}
}, 100);

onMounted(() => {
	eyebrowRef.value?.addEventListener('scroll', throttledCheckEyebrowMask);
});

onUnmounted(() => {
	eyebrowRef.value?.removeEventListener('scroll', throttledCheckEyebrowMask);
});

watch(
	() => ({
		hasEyebrowMask,
		eyebrowText,
		isEyebrowTextUppercase,
		eyebrowTextEllipsis,
		state,
		eyebrowWidth: eyebrowWidth.value,
	}),
	async () => {
		await nextTick();

		if (hasEyebrowMask && eyebrowRef.value && !eyebrowTextEllipsis) {
			const eyebrowElement = eyebrowRef.value as HTMLElement;

			isEyebrowMaskActive.value = eyebrowElement.scrollWidth > eyebrowElement.clientWidth;

			if (isEyebrowMaskActive.value) {
				throttledCheckEyebrowMask();
			}
		} else {
			isEyebrowMaskActive.value = false;
		}
	},
	{
		immediate: true,
	},
);
</script>
