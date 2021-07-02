<template>
	<div class="badge" :class="{ '-minor': color === BADGE_COLORS.MINOR }">
		<div class="badge__slot">
			<slot />
		</div>
		<div class="badge__label">{{ label }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/atoms/icons';

.badge {
	border-radius: $radius-s;
	display: flex;
	padding: $space-xxxxs $space-xxs;

	&.-minor {
		background-color: $color-minor-background;

		.badge__label {
			color: $color-minor;
		}
	}

	&__slot {
		display: flex;
		align-items: center;
		margin-right: $space-xxs;
		height: $icon-xxs;
		width: $icon-xxs;
	}

	&__label {
		@include textInfoS();
		@include textBold();

		text-transform: uppercase;
	}
}
</style>

<script lang="ts">
import { Value } from '../../utils/type.utils';

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
	created() {
		this.BADGE_COLORS = BADGE_COLORS;
	},
};
</script>
