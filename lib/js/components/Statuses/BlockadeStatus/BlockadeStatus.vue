<template>
	<div class="blockadeStatus" :class="statusClass">
		<icon :size="ICON_SIZES.X_SMALL" :icon="icon" class="blockadeStatus__icon" />
		<span class="blockadeStatus__text">{{ text }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography';

.blockadeStatus {
	align-items: center;
	color: $color-storm-gray;
	display: flex;

	&.-active {
		color: $color-crimson-red;
	}

	&__icon {
		margin-right: $space-xxxxs;
	}

	&__text {
		@include textXS;
		@include textBold;

		text-transform: uppercase;
	}
}
</style>

<script lang="ts">
import Icon from '../../Icon';
import { ICONS, ICON_SIZES } from '../../Icon';

import { COURSE_BLOCKADE_ACCESS_STATUS } from '../../../consts/user';

export default {
	name: 'BlockadeStatus',
	components: {
		Icon,
	},
	props: {
		status: {
			type: String,
			required: true,
		},
	},
	computed: {
		icon() {
			if (this.status === COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE) {
				return ICONS.FA_LOCK_ALT;
			}
			return ICONS.FA_UNLOCK_ALT;
		},
		statusClass() {
			if (this.status === COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE) {
				return '-active';
			}
			return '';
		},
		text() {
			if (this.status === COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE) {
				return 'Blokada dostępu';
			}
			return 'Blokada zakończona';
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
