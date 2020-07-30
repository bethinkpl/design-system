<template>
	<div
		class="a-numberInCircle"
		:class="{
			'-medium': medium,
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
		display: inline-flex;
		font-size: $font-size-header-6;
		height: $icon-l;
		justify-content: center;
		line-height: 1;
		min-width: $icon-l;
		padding: 0 $space-xxxs;
		text-align: center;

		@media #{$breakpoint-s} {
			font-size: $font-size-header-4;
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

		&.-danger {
			color: $color-alizarin-crimson;
		}

		&.-primary {
			color: $color-blue-chill;
		}

		&.-medium {
			height: $icon-m;
			font-size: $font-size-text-s;
			min-width: $icon-m;
		}
	}

</style>
<script>

export default {
	props: {
		index: {
			type: Number,
			default: 1,
		},
		medium: {
			type: Boolean,
			default: false,
		},
		danger: {
			type: Boolean,
			default: false,
		},
		primary: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		colorClass() {
			if (this.danger) {
				return '-danger';
			}
			if (this.primary) {
				return '-primary';
			}
			return `-is${this.index}`;
		}
	}
};
</script>
