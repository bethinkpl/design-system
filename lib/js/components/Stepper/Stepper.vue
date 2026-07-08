<template>
	<div class="ds-stepper">
		<div v-if="title || counterLabel || hasCounterValue" class="ds-stepper__header">
			<div class="ds-stepper__title">
				{{ title }}
			</div>
			<div v-if="counterLabel || hasCounterValue" class="ds-stepper__counter">
				<span v-if="counterLabel" class="ds-stepper__counterLabel">
					{{ counterLabel }}
				</span>
				<span v-if="hasCounterValue" class="ds-stepper__counterValue">
					{{ currentStep }}/{{ totalSteps }}
				</span>
			</div>
		</div>
		<div class="ds-stepper__steps">
			<div
				v-for="step in totalSteps"
				:key="step"
				class="ds-stepper__step"
				:class="{ '-ds-active': step <= currentStep }"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/radiuses';

.ds-stepper {
	display: flex;
	flex-direction: column;
	gap: $space-2;
	width: 100%;

	&__header {
		align-items: baseline;
		display: flex;
		gap: $space-4;
		width: 100%;
	}

	&__title {
		@include heading-m-default-regular;

		color: $color-neutral-text-heavy;
		flex: 1 0 0;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__counter {
		@include label-m-default-regular;

		align-items: baseline;
		color: $color-neutral-text-weak;
		display: flex;
		flex-shrink: 0;
		gap: $space-2;
		text-align: right;
	}

	&__steps {
		align-items: center;
		display: flex;
		gap: $space-2;
		width: 100%;
	}

	&__step {
		background-color: $color-neutral-background-medium;
		border-radius: $radius-xs;
		flex: 1 0 0;
		height: 4px;
		min-width: 0;

		&.-ds-active {
			background-color: $color-primary-background-strong;
		}
	}
}
</style>

<script setup lang="ts">
const { hasCounterValue = true } = defineProps<{
	title?: string;
	counterLabel?: string;
	hasCounterValue?: boolean;
	totalSteps: number;
	currentStep: number;
}>();
</script>
