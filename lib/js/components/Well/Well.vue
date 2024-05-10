<template>
	<div
		class="ds-well"
		:class="{
			'-ds-medium': WELL_PADDINGS.MEDIUM === padding,
			'-ds-small': WELL_PADDINGS.SMALL === padding,
		}"
	>
		<slot />
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

.ds-well {
	background-color: $color-neutral-background;
	border-radius: $radius-m;

	&.-ds-medium {
		padding: $space-s;
	}

	&.-ds-small {
		padding: $space-xs;
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
