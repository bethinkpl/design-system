<template>
	<div class="m-textWithIcon">
		<div v-if="$slots.icon" class="m-textWithIcon__icon">
			<slot name="icon" />
		</div>
		<span v-if="$slots.text" class="m-textWithIcon__text">
			<slot name="text" />
		</span>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/spacings';

.m-textWithIcon {
	align-items: center;
	display: flex;

	&__icon {
		margin-right: $space-s;
	}

	&__text {
		white-space: nowrap;
	}
}
</style>
