<template>
	<div
		class="a-numberInCircle"
		:class="{
			'-medium': medium,
			'-colorAlizarinCrimson': colorAlizarinCrimson,
			[colorClass]: true
		}"
	><slot /></div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/icons';
	@import 'resources/assets/styles/styleguide/settings/media-queries';
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.a-numberInCircle {
		align-items: center;
		border-radius: 50%;
		border: 1px solid currentColor;
		display: flex;
		font-size: $font-size-plus-2;
		height: $icon-l;
		justify-content: center;
		line-height: 1;
		min-width: $icon-l;
		padding: 0 $space-xxxs;
		text-align: center;

		@media #{$breakpoint-s} {
			font-size: $font-size-plus-4;
			height: $icon-xl;
			min-width: $icon-xl;
		}

		&.-is1 {
			color: $color-blue-chill;
		}

		&.-is2 {
			color: $color-ocean-green;
		}

		&.-is3 {
			color: $color-deluge;
		}

		&.-is4 {
			color: $color-governor-bay;
		}

		&.-colorAlizarinCrimson {
			color: $color-alizarin-crimson;
		}

		&.-medium {
			height: $icon-m;
			font-size: $font-size-minus-1;
			min-width: $icon-m;
		}
	}

</style>
<script>

export default {
	props: {
		index: {
			type: Number,
			default: null,
			validator: function (value) {
				return [1,2,3,4].includes(value);
			}
		},
		medium: {
			type: Boolean,
			default: false,
		},
		colorAlizarinCrimson: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		colorClass() {
			return this.index ? `-is${this.index}` : '';
		}
	}
};
</script>
