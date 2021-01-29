<template>
	<div class="m-emojiPoints" :class="{ '-vertical': vertical }">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="m-emojiPoints__item"
			:class="{ '-separated': separated, [sizeClass]: true }"
		>
			<div class="m-emojiPoints__item__emoji">{{ item.emoji }}</div>
			<div class="m-emojiPoints__item__text" v-html="item.text" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/media-queries';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';
@import 'resources/assets/styles/styleguide/settings/colors';

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
			@include textM;
		}

		&.-large {
			@include titleLevel4;
		}

		&.-small {
			@include textS;
		}

		&.-separated {
			border-bottom: 1px solid $color-mischka-gray;
			padding: $space-s 0;
			margin-bottom: 0;
		}
	}

	&.-vertical {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		.m-emojiPoints__item {
			margin-left: $space-l;
			width: 242px;

			@media #{breakpoint-s()} {
				flex: 1 1 auto;
				max-width: 360px;
				width: auto;
			}
		}
	}
}
</style>

<script>
export default {
	name: 'EmojiPoints',
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
		},
		vertical: {
			type: Boolean,
			default: false,
		},
		separated: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sizeClass() {
			if (this.large) {
				return '-large';
			}

			if (this.small) {
				return '-small';
			}

			return '-medium';
		},
	},
};
</script>
