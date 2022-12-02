<template>
	<div class="badge" :class="{ '-neutral': color === BADGE_COLORS.NEUTRAL }">
		<div class="badge__slot">
			<slot />
		</div>
		<div class="badge__label">{{ label }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/components/icons';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

$badge-min-height: 20px;

.badge {
	align-items: center;
	border-radius: $radius-s;
	display: flex;
	min-height: $badge-min-height;
	padding: $space-xxxxs $space-xxs;

	&__label {
		@include label-xs-bold-uppercase();
	}

	&.-neutral {
		background-color: $color-neutral-background-medium;

		.badge__label {
			color: $color-neutral-text;
		}
	}

	&__slot {
		display: flex;
		align-items: center;
		margin-right: $space-xxs;
		height: $icon-xxs;
		width: $icon-xxs;
	}
}
</style>

<script lang="ts">
import { Value } from '../../../utils/type.utils';

import { BADGE_COLORS } from './Badge.consts';

export default {
	name: 'Badge',
	props: {
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
	data() {
		return {
			BADGE_COLORS: Object.freeze(BADGE_COLORS),
		};
	},
};
</script>
