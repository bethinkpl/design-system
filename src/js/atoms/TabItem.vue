<template>
	<div
		class="a-tabItem"
		:title="title"
		:class="{ '-isActive': isActive }"
		@click="$emit('click')"
	>
		<wnl-icon :icon="icon" size="x-small" />
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
	border-bottom: 1px solid $color-mischka-gray;
	color: $color-storm-gray;
	cursor: pointer;
	display: flex;
	justify-content: center;
	padding: $space-xxs $space-s;
	width: $tab-item-width;

	&:hover {
		border-bottom-color: $color-firefly-black;
		color: $color-firefly-black;
	}

	&.-isActive {
		border-bottom-color: $color-primary;
		color: $color-primary;
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICONS } from 'js/components/global/styleguide/atoms/Icon.vue';
import { VueConstructor } from 'vue';

export { ICONS };

export default {
	name: 'TabItem',
	components: {
		WnlIcon,
	},
	props: {
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		isActive: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
</script>
