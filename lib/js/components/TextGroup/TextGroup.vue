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
			<ds-skeleton v-if="isLoading" width="50%" height="100%" />
			<span v-else>{{ eyebrowText }}</span>
		</div>
		<div
			v-if="mainText !== null"
			class="ds-textGroup__main"
			:class="{
				'-ds-ellipsis': mainTextEllipsis,
			}"
		>
			<ds-skeleton v-if="isLoading" width="100%" height="100%" />
			<span v-else>{{ mainText }}</span>
		</div>
		<div
			v-if="supportingText !== null"
			class="ds-textGroup__supporting"
			:class="{
				'-ds-ellipsis': supportingTextEllipsis,
			}"
		>
			<ds-skeleton v-if="isLoading" width="100%" height="100%" />
			<span v-else v-html="supportingText" />
		</div>
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';

.ds-textGroup {
	$self: &;

	display: flex;
	flex-direction: column;
	width: 100%;

	&__eyebrow {
		@include info-s-default-bold;

		color: $color-neutral-text-weak;
		margin-bottom: $space-5xs;
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

			margin-bottom: 0;
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

	&.-ds-disabled {
		pointer-events: none;

		#{$self}__eyebrow {
			color: $color-neutral-text-weak-disabled;
		}

		#{$self}__main {
			color: $color-neutral-text-strong-disabled;
		}

		#{$self}__supporting {
			color: $color-neutral-text-disabled;
		}

		&.-ds-selected {
			#{$self}__main {
				color: $color-primary-text-disabled;
			}
		}
	}

	&.-ds-selected {
		#{$self}__main {
			color: $color-primary-text;
		}

		&.-ds-interactive:hover,
		&.-ds-hovered {
			#{$self}__main {
				color: $color-primary-text-hovered;
			}
		}
	}

	&.-ds-loading {
		gap: $space-4xs;

		#{$self}__eyebrow,
		#{$self}__supporting {
			height: 12px;
			margin-bottom: 0;
			min-height: auto;
		}

		#{$self}__main {
			height: 16px;
			min-height: auto;
		}

		&.-ds-small {
			#{$self}__eyebrow,
			#{$self}__supporting {
				height: 10px;
			}

			#{$self}__main {
				height: 14px;
			}
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
		loadingSizeClassName(): string {
			return `-ds-loading-${this.skeletonLoadingSize}`;
		},
	},
});
</script>
