<template>
	<div
		class="a-tabItem"
		:data-tooltip-text="tooltipText"
		:class="{ '-isActive': isActive }"
		@click="$emit('click')"
	>
		<wnl-icon :fa-icon-class="faIconClass" size="x-small" />
	</div>
</template>

<style scoped lang="scss">
@import 'resources/assets/styles/variables';
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/icons';
@import 'resources/assets/styles/styleguide/settings/typography';
@import 'resources/assets/styles/styleguide/settings/spacings';

$tab-item-width: (2 * $space-s) + $icon-xs;

.a-tabItem {
	display: flex;
	justify-content: center;
	color: $color-storm-gray;
	cursor: pointer;
	padding: $space-xxs $space-s;
	border-bottom: 1px solid $color-storm-gray;
	width: $tab-item-width;

	&:hover {
		color: $color-firefly-black;
		border-bottom: 1px solid $color-firefly-black;
	}

	&.-isActive {
		color: $color-primary;
		border-bottom: 1px solid $color-primary;
	}
}

[data-tooltip-text] {
	&:hover {
		position: relative;
	}

	&::after {
		@include textInfoS();

		background-color: #eff0f3;
		border-radius: 2px;
		box-shadow: 0 4px 8px 0 rgba(12, 23, 38, 0.12);
		color: #0c1726;
		content: attr(data-tooltip-text);
		font-size: 8px;
		letter-spacing: 0;
		line-height: 12px;
		min-width: $tab-item-width;
		position: absolute;
		text-align: center;
		top: 120%;
		width: auto;
		white-space: nowrap;
		z-index: $z-index-tooltip;
	}
}
</style>

<script lang="ts">
import WnlIcon from 'js/components/global/styleguide/atoms/Icon.vue';

export default {
	name: 'TabItem',
	components: {
		WnlIcon,
	},
	props: {
		faIconClass: {
			type: String,
			required: true,
			validate(faIconClass: string) {
				return faIconClass.startsWith('fa-');
			},
		},
		isActive: {
			type: Boolean,
			required: true,
		},
		tooltipText: {
			type: String,
			required: true,
		},
	},
};
</script>
