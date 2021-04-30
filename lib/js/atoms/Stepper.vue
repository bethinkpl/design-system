<template>
	<div class="stepper">
		<div v-for="(step, index) in steps" class="stepper__item">
			<div class="stepper__icon" :class="{ '-active': step.isActive }">
				<icon :icon="ICONS[step.iconKey]" :size="ICON_SIZES.X_SMALL"></icon>
			</div>
			<div class="stepper__label" :class="{ '-active': step.isActive }">
				{{ step.label }}
			</div>
			<div v-if="index + 1 !== steps.length" class="stepper__separator"></div>
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

		color: #6f7285;

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

		&.-active {
			background-color: #d8eeee; // TODO: var
			color: $color-primary;
		}
	}

	&__separator {
		height: 2px;
		width: 32px;
		border-radius: 2.5px;
		background-color: #e6e8ee;
		margin: 0 $space-xs;

		@media #{breakpoint-s()} {
			width: 151px;
		}
	}
}
</style>

<script lang="ts">
import { Prop } from 'vue/types/options';
import Icon from './Icon.vue';
import { ICONS, ICON_SIZES } from './Icon.vue';

export interface Step {
	label: string;
	iconKey: string;
	isActive: boolean;
}

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
