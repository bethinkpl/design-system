<template>
	<div
		class="a-tabItem"
		:title="title"
		:class="{ '-isActive': isActive }"
		@click="$emit('click')"
	>
		<wnl-icon :icon="icon" :size="ICON_SIZES.X_SMALL" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/icons';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';

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
import { VueConstructor } from 'vue';

import WnlIcon, { ICON_SIZES, ICONS } from '../Icon';

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
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
