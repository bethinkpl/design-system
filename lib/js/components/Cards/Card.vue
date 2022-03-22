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
@import '../../../styles/settings/colors';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/radiuses';

.card {
	background-color: $color-total-white;
	border-radius: $radius-m;
	box-shadow: $shadow-s;

	&__header {
		padding: $space-s;

		@media #{breakpoint-s()} {
			padding: $space-m;
		}
	}

	&__content {
		padding: $space-s;

		@media #{breakpoint-s()} {
			padding: $space-m;
		}
	}
}
</style>

<script lang="ts">
export default {
	name: 'Card',
};
</script>
