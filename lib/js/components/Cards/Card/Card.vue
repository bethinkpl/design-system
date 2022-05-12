<template>
	<div class="card">
		<div v-if="$slots.header" class="card__header">
			<slot name="header"></slot>
		</div>
		<div class="card__content">
			<slot name="content"></slot>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/colors/tokens';

.card {
	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-s;
	overflow: hidden;

	&__header {
		padding: $space-s;
	}

	&__content {
		padding: $space-s;
	}
}
</style>

<script lang="ts">
export default {
	name: 'Card',
};
</script>
