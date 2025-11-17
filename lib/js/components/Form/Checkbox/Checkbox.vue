<template>
	<label
		:class="[
			'ds-checkbox',
			{
				'-ds-x-small': size === CHECKBOX_SIZES.X_SMALL,
				'-ds-small': size === CHECKBOX_SIZES.SMALL,
				'-ds-medium': size === CHECKBOX_SIZES.MEDIUM,
				'-ds-elevation': elevation === CHECKBOX_ELEVATIONS.X_SMALL,
				'-ds-disabled': state === CHECKBOX_STATES.DISABLED,
				'-ds-error': state === CHECKBOX_STATES.ERROR,
			},
		]"
	>
		<checkbox-root
			v-model="modelValue"
			:disabled="state === CHECKBOX_STATES.DISABLED"
			class="ds-checkbox__root"
			:value="value"
		>
			<!-- As we also use icon for unchecked state, we need to force mount the indicator -->
			<checkbox-indicator :force-mount="true" class="ds-checkbox__indicator" as="div">
				<icon
					class="ds-checkbox__checked"
					:icon="ICONS.FA_SQUARE_CHECK_SOLID"
					:size="iconSize"
				/>
				<icon class="ds-checkbox__unchecked" :icon="ICONS.FA_SQUARE" :size="iconSize" />
				<icon
					class="ds-checkbox__indeterminate"
					:icon="ICONS.FA_SQUARE_MINUS"
					:size="iconSize"
				/>
			</checkbox-indicator>
		</checkbox-root>

		<span v-if="$slots.default" class="ds-checkbox__label">
			<slot />
		</span>
	</label>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/animations';

.ds-checkbox {
	$root: &;

	align-items: center;
	cursor: pointer;
	display: inline-flex;

	&.-ds-x-small {
		gap: $space-4xs;
	}

	&.-ds-small {
		gap: $space-2xs;
	}

	&.-ds-medium {
		gap: $space-2xs;
	}

	&__root {
		background: none;
		border: none;
		line-height: 0;
		margin: 0;
		padding: 0;
		position: relative;

		#{$root}.-ds-x-small & {
			padding: $space-3xs 0;
		}

		#{$root}.-ds-small & {
			padding: $space-3xs 0;
		}

		#{$root}.-ds-medium & {
			padding: $space-2xs 0;
		}

		&:focus-visible {
			outline: none;
		}

		&::before {
			aspect-ratio: 1;
			border-radius: $radius-xl;
			content: '';
			display: block;
			height: 100%;
			position: absolute;
			top: 0;
			transform: scale(0);
			// see https://cubic-bezier.com/#.23,1,.32,1
			transition: all $default-transition-time cubic-bezier(0.23, 1, 0.32, 1) 0ms;
			width: auto;
		}

		#{$root}:hover:not(.-ds-disabled) &::before,
		&:focus-visible::before {
			transform: scale(1);
		}

		#{$root}.-ds-x-small &::before {
			left: -6px;
		}

		#{$root}.-ds-small &::before {
			left: -6px;
		}

		#{$root}.-ds-medium &::before {
			left: -8px;
		}

		#{$root}:hover &::before {
			background-color: $color-neutral-background-ghost-hovered;
		}

		&:focus-visible::before {
			background-color: $color-neutral-background-ghost-focused;
		}
	}

	&__indicator {
		color: $color-neutral-icon;
		position: relative;

		#{$root}.-ds-error & {
			color: $color-danger-icon;
		}

		#{$root}.-ds-disabled & {
			color: $color-neutral-icon-disabled;
		}

		#{$root}.-ds-elevation &::before {
			background: $color-default-background;
			bottom: 2px;
			content: '';
			left: 2px;
			position: absolute;
			right: 2px;
			top: 2px;
		}

		&[data-state='checked'] {
			& #{$root}__unchecked,
			& #{$root}__indeterminate {
				display: none;
			}
		}

		&[data-state='unchecked'] {
			& #{$root}__checked,
			& #{$root}__indeterminate {
				display: none;
			}
		}

		&[data-state='indeterminate'] {
			& #{$root}__checked,
			& #{$root}__unchecked {
				display: none;
			}
		}
	}

	&__label {
		color: $color-neutral-text-strong;

		#{$root}.-ds-x-small & {
			@include formLabel-s-default-regular;
		}

		#{$root}.-ds-small & {
			@include formLabel-m-default-regular;
		}

		#{$root}.-ds-medium & {
			@include formLabel-l-default-regular;
		}

		#{$root}.-ds-disabled & {
			color: $color-neutral-text-strong-disabled;
		}
	}
}
</style>

<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui';
import {
	CHECKBOX_SIZES,
	CHECKBOX_STATES,
	CHECKBOX_ELEVATIONS,
	CheckboxSize,
	CheckboxState,
	CheckboxValue,
	CheckboxElevation,
} from './Checkbox.consts';
import Icon from '../../Icons/Icon/Icon.vue';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { computed, inject } from 'vue';
import { CHECKBOX_GROUP_INJECTION_KEY } from '../CheckboxGroupField/CheckboxGroupField.consts';

const props = defineProps<{
	size?: CheckboxSize;
	state?: CheckboxState;
	elevation?: CheckboxElevation;
	/**
	 * String value set when the checkbox is checked
	 */
	value: string;
}>();

const modelValue = defineModel<CheckboxValue>({
	default: false,
});

defineSlots<{
	default?(): any;
}>();

// Inject context from CheckboxGroupField
const groupContext = inject(CHECKBOX_GROUP_INJECTION_KEY, null);

// Use props if provided, otherwise fall back to injected values, then defaults
const size = computed(() => props.size ?? groupContext?.size.value ?? CHECKBOX_SIZES.SMALL);

const state = computed(() => props.state ?? groupContext?.state.value ?? CHECKBOX_STATES.DEFAULT);

const elevation = computed(
	() => props.elevation ?? groupContext?.elevation.value ?? CHECKBOX_ELEVATIONS.X_SMALL,
);

const iconSize = computed(() => {
	switch (size.value) {
		case CHECKBOX_SIZES.X_SMALL:
			return ICON_SIZES.XX_SMALL;
		case CHECKBOX_SIZES.SMALL:
			return ICON_SIZES.X_SMALL;
		default:
		case CHECKBOX_SIZES.MEDIUM:
			return ICON_SIZES.SMALL;
	}
});
</script>
