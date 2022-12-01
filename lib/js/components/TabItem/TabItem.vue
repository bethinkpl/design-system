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
@import '../../../styles/settings/icons';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';

$tab-item-width: (2 * $space-s) + $icon-xs;

.a-tabItem {
	border-bottom: 1px solid $color-neutral-border;
	color: $color-neutral-icon;
	cursor: pointer;
	display: flex;
	justify-content: center;
	padding: $space-xxs $space-s;
	width: $tab-item-width;

	&:hover {
		border-bottom-color: $color-default-border;
		color: $color-default-icon;
	}

	&.-isActive {
		border-bottom-color: $color-primary-border;
		color: $color-primary-icon;
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';

import WnlIcon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'TabItem',
	components: {
		WnlIcon,
	},
	props: {
		icon: {
			type: Object,
			required: true,
			validator(icon: VueConstructor) {
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
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
};
</script>
