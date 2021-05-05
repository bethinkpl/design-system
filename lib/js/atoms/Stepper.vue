<template>
	<div class="stepper">
		<div v-for="(step, index) in steps" :key="index" class="stepper__item">
			<div
				v-if="index !== 0"
				class="stepper__separator"
				:class="{ '-active': step.isActive }"
			></div>
			<div class="stepper__icon" :class="{ '-active': step.isActive }">
				<icon :icon="ICONS[step.iconKey]" :size="ICON_SIZES.X_SMALL"></icon>
			</div>
			<div class="stepper__label" :class="{ '-active': step.isActive }">
				{{ step.label }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../styles/settings/spacings';
@import '../../styles/settings/colors';
@import '../../styles/settings/media-queries';
@import '../../styles/settings/typography';

.stepper {
	display: flex;

	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__label {
		@include textInfoM();
		@include textBold();

		color: $color-minor;

		&.-active {
			color: $color-primary;
		}
	}

	&__icon {
		align-self: center;
		background-color: $color-minor-background;
		border-radius: 100%;
		color: $color-minor;
		display: flex;
		height: 32px;
		justify-content: center;
		margin-right: $space-xxs;
		width: 32px;
		transition: background-color 0.33s;

		&.-active {
			background-color: $color-primary-background;
			color: $color-primary;
		}
	}

	&__separator {
		height: 2px;
		width: 32px;
		border-radius: 2.5px;
		background-color: #e6e8ee;
		margin: 0 $space-xs;
		transition: background-color 0.33s;

		@media #{breakpoint-s()} {
			width: 151px;
		}

		&.-active {
			background-color: $color-primary;
		}
	}
}
</style>

<script lang="ts">
import { Prop } from 'vue/types/options';

import Icon, { ICON_SIZES, ICONS } from './Icon.vue';
import { Step } from './Stepper.types';

export default {
	name: 'Stepper',
	components: { Icon },
	props: {
		steps: {
			type: Array as Prop<Array<Step>>,
			required: true,
			validate: (steps: Array<Step>) => {
				return steps.every((step) => {
					if (typeof step.label !== 'string') {
						return false;
					}
					if (typeof step.iconKey !== 'string') {
						return false;
					}
					if (typeof step.isActive !== 'boolean') {
						return false;
					}

					return true;
				});
			},
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
