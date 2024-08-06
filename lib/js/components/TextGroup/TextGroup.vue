<template>
	<div class="ds-textGroup">
		<div class="ds-textGroup__eyebrow">{{ eyebrowText }}</div>
		<div class="ds-textGroup__main">{{ mainText }}</div>
		<div class="ds-textGroup__supporting">{{ supportingText }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DsSkeleton from '../Skeleton/Skeleton.vue';
import {
	TEXT_GROUP_COLORS, TEXT_GROUP_LOADING_SIZES,
	TEXT_GROUP_SIZES, TEXT_GROUP_STATES,
	TextGroupColor,
	TextGroupLoadingSize,
	TextGroupSize, TextGroupState
} from "./TextGroup.consts";

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
			type: String,
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
			type: String,
			default: null,
		},
		mainTextEllipsis: {
			type: Boolean,
			default: false,
		},
		supportingText: {
			type: String,
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
		};
	},
	computed: {
		loadingSizeTranslated(): string {
			const map = {
				[TEXT_GROUP_LOADING_SIZES.SMALL]: 50,
				[TEXT_GROUP_LOADING_SIZES.MEDIUM]: 70,
				[TEXT_GROUP_LOADING_SIZES.LARGE]: 100,
			};

			return `${map[this.radius]}px`;
		},
	},
});
</script>
