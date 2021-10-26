<template>
	<div class="card">
		<slot name="header"></slot>
		<div class="card__content">
			<slot name="content"></slot>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/radiuses';

.card {
	border-radius: $radius-m;
	box-shadow: $shadow-xl;

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
