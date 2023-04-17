<template>
	<div
		class="well"
		:class="{
			'-medium': WELL_PADDINGS.MEDIUM === padding,
			'-small': WELL_PADDINGS.SMALL === padding,
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
import { WELL_PADDINGS } from './Well.consts';

export default {
	name: 'Well',
	props: {
		padding: {
			type: String,
			default: null,
			validator(padding) {
				return Object.values(WELL_PADDINGS).includes(padding);
			},
		},
	},
	data() {
		return {
			WELL_PADDINGS: Object.freeze(WELL_PADDINGS),
		};
	},
};
</script>
