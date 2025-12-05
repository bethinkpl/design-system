<template>
	<span
		:class="[
			'ds-formControlLabel',
			{
				'-ds-x-small': size === FORM_CONTROL_SIZE.X_SMALL,
				'-ds-small': size === FORM_CONTROL_SIZE.SMALL,
				'-ds-medium': size === FORM_CONTROL_SIZE.MEDIUM,
				'-ds-disabled': state === FORM_CONTROL_STATE.DISABLED,
			},
		]"
	>
		<slot />
	</span>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';

.ds-formControlLabel {
	color: $color-neutral-text-strong;

	&.-ds-x-small {
		@include formLabel-s-default-regular;

		padding: $space-4xs 0;
	}

	&.-ds-small {
		@include formLabel-m-default-regular;

		padding: $space-3xs 0;
	}

	&.-ds-medium {
		@include formLabel-l-default-regular;

		padding: $space-2xs 0;
	}

	&.-ds-disabled {
		color: $color-neutral-text-strong-disabled;
	}
}
</style>

<script setup lang="ts">
import {
	FORM_CONTROL_SIZE,
	FORM_CONTROL_STATE,
	FormControlSize,
	FormControlState,
} from './FormControlLabel.consts';

const { state = FORM_CONTROL_STATE.DEFAULT, size = FORM_CONTROL_SIZE.SMALL } = defineProps<{
	size?: FormControlSize;
	state?: FormControlState;
}>();
</script>
