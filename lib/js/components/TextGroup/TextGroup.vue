<template>
	<div
		class="ds-textGroup"
		:class="{
			'-ds-small': isSmall,

			'-ds-hovered': state === TEXT_GROUP_STATES.HOVERED,
			'-ds-loading': isLoading,
			'-ds-disabled': state === TEXT_GROUP_STATES.DISABLED,

			'-ds-interactive': isInteractive,
			'-ds-selected': isSelected,

			[loadingSizeClassName]: isLoading,

			[colorClassName]: true,
		}"
	>
		<div
			v-if="eyebrowText !== null"
			class="ds-textGroup__eyebrow"
			:class="{
				'-ds-ellipsis': eyebrowTextEllipsis,
				'-ds-uppercase': isEyebrowTextUppercase,
			}"
		>
			<ds-skeleton
				v-if="isLoading"
				class="ds-textGroup__loadingSkeleton"
				width="50%"
				:height="isSmall ? '8px' : '10px'"
			/>
			<span v-else>{{ eyebrowText }}</span>
		</div>
		<div
			v-if="mainText !== null"
			class="ds-textGroup__main"
			:class="{
				'-ds-ellipsis': mainTextEllipsis,
			}"
		>
			<ds-skeleton
				v-if="isLoading"
				class="ds-textGroup__loadingSkeleton"
				width="100%"
				:height="isSmall ? '14px' : '16px'"
			/>
			<span v-else>{{ mainText }}</span>
		</div>
		<div
			v-if="supportingText !== null"
			class="ds-textGroup__supporting"
			:class="{
				'-ds-ellipsis': supportingTextEllipsis,
			}"
		>
			<ds-skeleton
				v-if="isLoading"
				class="ds-textGroup__loadingSkeleton"
				width="100%"
				height="14px"
			/>
			<span v-else>{{ supportingText }}</span>
		</div>
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';

.ds-textGroup {
	$self: &;

	display: flex;
	flex-direction: column;
	width: 100%;

	&__eyebrow {
		@include info-s-default-bold;

		color: $color-neutral-text-weak;
		min-height: 12px;

		&.-ds-uppercase {
			@include info-s-extensive-bold-uppercase;
		}
	}

	&__main {
		@include text-m-compact-bold;

		color: $color-neutral-text-strong;
		min-height: 18px;
	}

	&__supporting {
		@include text-s-compact-regular;

		color: $color-neutral-text;
		min-height: 16px;
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

			min-height: 10px;

			&.-ds-uppercase {
				@include info-xs-extensive-bold-uppercase;
			}
		}

		#{$self}__main {
			@include text-s-compact-bold;

			min-height: 16px;
		}
	}

	&.-ds-interactive:hover,
	&.-ds-hovered {
		#{$self}__eyebrow {
			color: $color-neutral-text-weak-hovered;
		}

		#{$self}__main {
			color: $color-neutral-text-strong-hovered;
		}

		#{$self}__supporting {
			color: $color-neutral-text-hovered;
		}
	}

	&.-ds-disabled.-ds-interactive:hover,
	&.-ds-disabled {
		#{$self}__eyebrow {
			color: $color-neutral-text-weak-disabled;
		}

		#{$self}__main {
			color: $color-neutral-text-strong-disabled;
		}

		#{$self}__supporting {
			color: $color-neutral-text-disabled;
		}
	}

	&.-ds-disabled.-ds-selected.-ds-interactive:hover,
	&.-ds-disabled.-ds-selected {
		#{$self}__main {
			color: $color-primary-text-disabled;
		}
	}

	&.-ds-selected {
		#{$self}__main {
			color: $color-primary-text;
		}
	}

	&.-ds-selected.-ds-interactive:hover,
	&.-ds-selected.-ds-hovered {
		#{$self}__main {
			color: $color-primary-text-hovered;
		}
	}

	&__loadingSkeleton {
		margin: 1px 0;
	}

	&.-ds-loading-small {
		width: 50%;
	}

	&.-ds-loading-medium {
		width: 70%;
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DsSkeleton from '../Skeleton/Skeleton.vue';
import {
	TEXT_GROUP_COLORS,
	TEXT_GROUP_LOADING_SIZES,
	TEXT_GROUP_SIZES,
	TEXT_GROUP_STATES,
	TextGroupColor,
	TextGroupLoadingSize,
	TextGroupSize,
	TextGroupState,
} from './TextGroup.consts';

export default defineComponent({
	name: 'TextGroup',
	components: {
		DsSkeleton,
	},
	props: {
		size: {
			type: String as PropType<TextGroupSize>,
			default: TEXT_GROUP_SIZES.MEDIUM,
		},
		color: {
			type: String as PropType<TextGroupColor>,
			default: TEXT_GROUP_COLORS.NEUTRAL,
		},
		eyebrowText: {
			type: String as PropType<string | null>,
			default: null,
		},
		eyebrowTextEllipsis: {
			type: Boolean,
			default: false,
		},
		isEyebrowTextUppercase: {
			type: Boolean,
			default: true,
		},
		mainText: {
			type: String as PropType<string | null>,
			default: null,
		},
		mainTextEllipsis: {
			type: Boolean,
			default: false,
		},
		supportingText: {
			type: String as PropType<string | null>,
			default: null,
		},
		supportingTextEllipsis: {
			type: Boolean,
			default: false,
		},
		isInteractive: {
			type: Boolean,
			default: true,
		},
		skeletonLoadingSize: {
			type: String as PropType<TextGroupLoadingSize>,
			default: TEXT_GROUP_LOADING_SIZES.LARGE,
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String as PropType<TextGroupState>,
			default: TEXT_GROUP_STATES.DEFAULT,
		},
	},
	data() {
		return {
			TEXT_GROUP_SIZES: Object.freeze(TEXT_GROUP_SIZES),
			TEXT_GROUP_STATES: Object.freeze(TEXT_GROUP_STATES),
		};
	},
	computed: {
		colorClassName(): string {
			return `-ds-color-${this.color}`;
		},
		isLoading(): boolean {
			return this.state === TEXT_GROUP_STATES.LOADING;
		},
		isSmall(): boolean {
			return this.size === TEXT_GROUP_SIZES.SMALL;
		},
		loadingSizeClassName(): string {
			return `-ds-loading-${this.skeletonLoadingSize}`;
		},
	},
});
</script>
