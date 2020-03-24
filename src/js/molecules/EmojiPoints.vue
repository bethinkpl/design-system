<template>
	<div class="m-emojiPoints">
		<div
			v-for="(item, index) in items"
			:key="index"
			:class="['m-emojiPoints__item', sizeClass]"
		>
			<div class="m-emojiPoints__item__emoji">{{item.emoji}}</div>
			<div class="m-emojiPoints__item__text" v-html="item.text" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.m-emojiPoints {
		&__item {
			display: flex;
			margin-bottom: $space-s;

			&:last-child {
				margin-bottom: 0;
			}

			&__emoji {
				width: 20px;
				margin-right: $space-xxs;
				text-align: center;
			}

			&.-medium {
				@include textMinus1
			}

			&.-large {
				@include titleLevel4;
			}

			&.-small {
				@include textMinus2
			}
		}
	}
</style>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => [],
		},
		large: {
			type: Boolean,
			default: false,
		},
		small: {
			type: Boolean,
			default: false,
		},
		medium: {
			type: Boolean,
			default: true,
		}
	},
	computed: {
		sizeClass() {
			if (!this.large && !this.small) {
				return '-medium';
			}

			if (this.large) {
				return '-large';
			}

			if (this.small) {
				return '-small';
			}
		}
	}
};
</script>
