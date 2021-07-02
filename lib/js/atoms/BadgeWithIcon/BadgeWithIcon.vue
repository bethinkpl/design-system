<template>
	<div class="badgeWithIcon">
		<badge :color="color" :label="label">
			<icon :icon="icon" :size="ICON_SIZES.XX_SMALL" />
		</badge>
	</div>
</template>

<style lang="scss" scoped>
.badgeWithIcon {
	display: inline-block;
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';

import Icon, { ICONS, ICON_SIZES } from '../Icon';
import Badge, { BADGE_COLORS } from '../Badge';
import { Value } from '../../utils/type.utils';

export default {
	name: 'BadgeWithIcon',
	components: {
		Icon,
		Badge,
	},
	props: {
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		label: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
			validator(value: Value<typeof BADGE_COLORS>) {
				return Object.values(BADGE_COLORS).includes(value);
			},
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
