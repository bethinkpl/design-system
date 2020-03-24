<template>
	<div class="m-emojiPoints">
		<div
			v-for="(item, index) in items"
			:key="index"
			:class="['m-emojiPoints__item', large ? '-large' : textSizeClass]"
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

			&.-large {
				@include titleLevel4;
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
		textSizeClass: {
			type: String,
			default: '-textMinus1'
		},
		large: {
			type: Boolean,
			default: false,
		}
	},
};
</script>
