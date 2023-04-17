<template>
	<div
		class="well"
		:class="{
			'-medium': WELL_SIZES.MEDIUM === size,
			'-small': WELL_SIZES.SMALL === size,
		}"
	>
		<div class="well__content">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

.well {
	background-color: $color-neutral-background;
	border-radius: $radius-m;

	&.-medium {
		padding: $space-s;
	}

	&.-small {
		padding: $space-xs;
	}

	&__content {
		padding: $space-xxs $space-xxxxs;
	}
}
</style>

<script>
import { WELL_SIZES } from './Well.consts';

export default {
	name: 'Well',
	props: {
		size: {
			type: String,
			default: null,
			validator(size) {
				return Object.values(WELL_SIZES).includes(size);
			},
		},
	},
	data() {
		return {
			WELL_SIZES: Object.freeze(WELL_SIZES),
		};
	},
};
</script>
