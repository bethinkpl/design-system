<template>
	<div class="stepper" :class="{ '-forceVerticalLabels': forceVerticalLabels }">
		<div v-for="(step, index) in steps" :key="index" class="stepper__item">
			<div
				v-if="index !== 0"
				class="stepper__separator"
				:class="{ '-done': [STEP_TYPES.DONE, STEP_TYPES.ACTIVE].includes(step.type) }"
			></div>
			<div class="stepper__step">
				<ripple-wrapper class="stepper__ripple" :disable="!step.isClickable">
					<icon
						class="stepper__icon"
						:class="{
							'-done': step.type === STEP_TYPES.DONE,
							'-active': step.type === STEP_TYPES.ACTIVE,
							'-disabled': step.disabled,
						}"
						:icon="step.icon"
						:size="ICON_SIZES.X_SMALL"
						@click.native="onStepClick(step)"
					></icon>
				</ripple-wrapper>
				<div
					class="stepper__label"
					:class="{ '-active': [STEP_TYPES.DONE, STEP_TYPES.ACTIVE].includes(step.type) }"
				>
					{{ step.label }}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../styles/atoms/buttons';
@import '../../styles/settings/colors';
@import '../../styles/settings/transitions';
@import '../../styles/settings/media-queries';
@import '../../styles/settings/spacings';
@import '../../styles/settings/typography';
@import '../../styles/mixins/flex';

$step-icon-size: 32px;

.stepper {
	display: flex;
	justify-content: space-between;

	&__item {
		@include flex-space-between();

		flex-grow: 1;

		&:first-of-type {
			flex-grow: 0;
		}
	}

	&__step {
		@include flex-center();

		flex-direction: column;
		margin: 0 $space-xs;

		@media #{breakpoint-m()} {
			flex-direction: row;
		}
	}

	&__label {
		@include textInfoM();
		@include textBold();

		color: $color-minor;
		margin-top: $space-xxxxs;
		max-width: $step-icon-size + 2 * $space-s;

		@media #{breakpoint-m()} {
			margin-left: $space-xxs;
			margin-top: 0;
		}

		&.-active {
			color: $color-primary;
		}
	}

	&__icon {
		@include flex-center();

		background-color: $color-minor-background;
		border-radius: 100%;
		color: $color-minor;
		height: $step-icon-size;
		margin-right: $space-xxs;
		width: $step-icon-size;
		transition: background-color $basic-transition-time;

		&.-done {
			background-color: $color-primary-background;
			color: $color-primary;

			&:hover:not(.-disabled) {
				background-color: $color-primary-background-hovered;
			}
		}

		&.-active {
			background-color: $color-primary;
			color: $color-total-white;

			&:hover:not(.-disabled) {
				background-color: $color-primary-background-hovered;
			}
		}

		&:not(.-disabled) {
			cursor: pointer;

			&:hover:not(.-done):not(.-active) {
				background-color: mix(
					$color-minor-background,
					$color-firefly-black,
					(1 - $button-hover-alpha) * 100%
				);
			}
		}
	}

	&__separator {
		background-color: $color-athens-gray;
		border-radius: $radius-xs;
		height: 2px;
		margin-bottom: $space-xs;
		transition: background-color $basic-transition-time;
		min-width: 60px;
		flex-grow: 1;

		@media #{breakpoint-m()} {
			margin-bottom: 0;
		}

		&.-done {
			background-color: $color-primary;
		}
	}

	&__ripple {
		height: $step-icon-size;
		width: $step-icon-size;

		::v-deep & > div {
			// prevent squerify ripple
			border-radius: 100%;
		}
	}

	&.-forceVerticalLabels {
		.stepper__label {
			margin-left: 0;
			margin-top: $space-xxxxs;
		}

		.stepper__step {
			flex-direction: column;
		}

		.stepper__separator {
			margin-bottom: $space-xs;
		}
	}
}
</style>

<script lang="ts">
import { Prop } from 'vue/types/options';

import RippleWrapper from '../utils/RippleWrapper.vue';
import { arrayOfObjectValidator } from '../utils/validatior.utils';

import Icon, { ICON_SIZES, ICONS } from './Icon.vue';
import { Step, STEP_TYPES } from './Stepper.types';

export default {
	name: 'Stepper',
	components: { RippleWrapper, Icon },
	props: {
		steps: {
			type: Array as Prop<Array<Step>>,
			required: true,
			validate(steps: Array<Step>) {
				return arrayOfObjectValidator(steps) && steps.length > 2;
			},
		},
		forceVerticalLabels: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.STEP_TYPES = STEP_TYPES;
	},
	methods: {
		onStepClick(step: Step) {
			if (step.disabled) {
				return;
			}
			this.$emit('stepClick', step.name);
		},
	},
};
</script>
