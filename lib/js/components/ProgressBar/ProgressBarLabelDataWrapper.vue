<template>
	<div class="ds-progressBarLabelDataWrapper">
		<span v-if="labelData" class="ds-progressBarLabelDataWrapper__labelData">{{
			labelData
		}}</span>
		<span
			v-if="labelDataSupporting"
			class="ds-progressBarLabelDataWrapper__labelDataSupporting"
		>
			<span class="ds-progressBarLabelDataWrapper__labelDataSeparator">/</span>
			{{ labelDataSupporting }}
		</span>
		<span v-if="labelDataSuffix" class="ds-progressBarLabelDataWrapper__labelDataSuffix">{{
			labelDataSuffix
		}}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$progress-bar-label-data-max-width: 30%;

.ds-progressBarLabelDataWrapper {
	@include label-m-default-bold;

	align-items: baseline;
	color: $color-neutral-text-heavy;
	display: flex;
	flex-wrap: wrap;
	justify-content: right;
	margin-left: $space-2xs;
	max-width: $progress-bar-label-data-max-width;

	&__labelDataSupporting {
		color: $color-neutral-text;
		display: flex;
		margin-left: $space-5xs;
	}

	&__labelDataSeparator {
		margin-right: $space-5xs;
	}

	&__labelDataSuffix {
		@include label-s-default-regular;

		color: $color-neutral-text-weak;
		margin-left: $space-4xs;
	}
}
</style>

<script lang="ts" setup>
defineProps<{
	labelData?: string;
	labelDataSupporting?: string;
	labelDataSuffix?: string;
}>();
</script>
