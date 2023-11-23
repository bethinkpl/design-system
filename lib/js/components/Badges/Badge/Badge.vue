<template>
	<div
		class="badge"
		:class="{
			'-neutral': color === BADGE_COLORS.NEUTRAL,
			'-primary': color === BADGE_COLORS.PRIMARY,
		}"
	>
		<div v-if="icon" class="badge__icon">
			<icon :icon="icon" :size="size" />
		</div>
		<div v-else-if="$slots.default" class="badge__slot">
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
		@include label-xs-default-bold-uppercase;
	}

	&__icon {
		align-items: center;
		display: flex;
		height: $icon-xxs;
		margin-right: $space-xxs;
		width: $icon-xxs;
	}

	&.-neutral {
		background-color: $color-neutral-background-medium;

		.badge__label {
			color: $color-neutral-text;
		}

		.badge__icon {
			color: $color-neutral-text;
		}
	}

	&.-primary {
		background-color: $color-primary-background-medium;

		.badge__label {
			color: $color-primary-text;
		}

		.badge__icon {
			color: $color-primary-text;
		}
	}

	&__slot {
		align-items: center;
		display: flex;
		height: $icon-xxs;
		margin-right: $space-xxs;
		width: $icon-xxs;
	}
}
</style>

<script lang="ts">
import { Value } from '../../../utils/type.utils';
import { BADGE_COLORS } from './Badge.consts';
import Icon from '../../Icons/Icon/Icon.vue';
import { ICONS, ICON_SIZES } from '../../Icons/Icon/Icon.consts';
import { toRaw } from 'vue';

export default {
	name: 'Badge',
	components: {
		Icon,
	},
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
		icon: {
			type: String,
			required: true,
			validate: (icon) => Object.values(ICONS).includes(toRaw(icon)),
		},
		size: {
			type: String,
			required: true,
			validate: (size) => Object.values(ICON_SIZES).includes(toRaw(size)),
		},
	},
	data() {
		return {
			BADGE_COLORS: Object.freeze(BADGE_COLORS),
		};
	},
};
</script>
