<template>
	<div class="stepper">
		<div v-for="(step, index) in steps" :key="index" class="stepper__item">
			<div
				v-if="index !== 0"
				class="stepper__separator"
				:class="{ '-filled': step.isFilled }"
			></div>
			<div class="stepper__step">
				<ripple-wrapper class="stepper__ripple" :disable="!step.isClickable">
					<icon
						class="stepper__icon"
						:class="{
							'-filled': step.isFilled,
							'-disabled': !step.isClickable,
						}"
						:icon="ICONS[step.iconKey]"
						:size="ICON_SIZES.X_SMALL"
						@click.native="onStepClick(step)"
					></icon>
				</ripple-wrapper>
				<div class="stepper__label" :class="{ '-filled': step.isFilled }">
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

	&__item {
		@include flex-center();
	}

	&__step {
		@include flex-center();

		flex-direction: column;

		@media #{breakpoint-s()} {
			flex-direction: row;
		}
	}

	&__label {
		@include textInfoM();
		@include textBold();

		color: $color-minor;
		margin-top: $space-xxxxs;

		@media #{breakpoint-s()} {
			margin-left: $space-xxs;
			margin-top: 0;
		}

		&.-filled {
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

		&.-filled {
			background-color: $color-primary-background;
			color: $color-primary;

			&:hover:not(.-disabled) {
				background-color: $color-primary-background-hovered;
			}
		}

		&:not(.-disabled) {
			cursor: pointer;

			&:hover:not(.-filled) {
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
		margin: 0 $space-xs;
		transition: background-color $basic-transition-time;
		width: 32px;

		@media #{breakpoint-s()} {
			width: 151px;
		}

		&.-filled {
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
}
</style>

<script lang="ts">
import { Prop } from 'vue/types/options';

import RippleWrapper from '../utils/RippleWrapper.vue';
import { arrayOfObjectValidator } from '../utils/validatior.utils';

import Icon, { ICON_SIZES, ICONS } from './Icon.vue';
import { Step } from './Stepper.types';

export default {
	name: 'Stepper',
	components: { RippleWrapper, Icon },
	props: {
		steps: {
			type: Array as Prop<Array<Step>>,
			required: true,
			validate: arrayOfObjectValidator,
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
	methods: {
		onStepClick(step: Step) {
			if (!step.isClickable) {
				return;
			}
			this.$emit('click', step.name);
		},
	},
};
</script>
