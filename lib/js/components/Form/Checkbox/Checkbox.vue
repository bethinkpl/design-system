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
			v-slot="{ state: rekaState }"
			v-model="modelValue"
			:disabled="state === CHECKBOX_STATES.DISABLED"
			class="ds-checkbox__root"
			:value="value"
		>
			<!-- As we also use icon for unchecked state, we need to force mount the indicator -->
			<checkbox-indicator :force-mount="true" class="ds-checkbox__indicator" as="div">
				<ds-icon
					v-if="rekaState === 'indeterminate'"
					:icon="ICONS.FAD_SQUARE_MINUS"
					:size="iconSize"
				/>
				<ds-icon v-else-if="rekaState" :icon="ICONS.FAD_SQUARE_CHECK" :size="iconSize" />
				<ds-icon v-else :icon="ICONS.FAD_SQUARE" :size="iconSize" />
			</checkbox-indicator>
		</checkbox-root>

		<ds-form-control-label v-if="$slots.default" :size="size" :state="labelState">
			<slot />
		</ds-form-control-label>
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

	align-items: flex-start;
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

	&:not(.-ds-disabled) {
		cursor: pointer;
	}

	&__root {
		$checkbox-root-xs-space: $space-3xs;
		$checkbox-root-s-space: $space-3xs;
		$checkbox-root-m-space: $space-2xs;

		--checkbox-circle-background-color-focused: #{$color-primary-background-ghost-focused};
		--checkbox-circle-background-color-hovered: #{$color-primary-background-ghost-hovered};

		background: none;
		border: none;
		line-height: 0;
		margin: 0;
		padding: 0;
		position: relative;

		&[data-state='unchecked'] {
			--checkbox-circle-background-color-focused: #{$color-primary-background-ghost-focused};
			--checkbox-circle-background-color-hovered: #{$color-neutral-background-ghost-hovered};
		}

		#{$root}.-ds-x-small & {
			padding: $checkbox-root-xs-space 0;
		}

		#{$root}.-ds-small & {
			padding: $checkbox-root-s-space 0;
		}

		#{$root}.-ds-medium & {
			padding: $checkbox-root-m-space 0;
		}

		&:focus {
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
			transition: $default-cubic-bezier-transition;
			width: auto;
		}

		#{$root}:hover:not(.-ds-disabled) &::before,
		&:focus-visible::before {
			transform: scale(1);
		}

		#{$root}.-ds-x-small &::before {
			left: -$checkbox-root-xs-space;
		}

		#{$root}.-ds-small &::before {
			left: -$checkbox-root-s-space;
		}

		#{$root}.-ds-medium &::before {
			left: -$checkbox-root-m-space;
		}

		#{$root}:hover &::before {
			background-color: var(--checkbox-circle-background-color-hovered);
		}

		&:focus-visible::before {
			background-color: var(--checkbox-circle-background-color-focused);
		}
	}

	&__indicator {
		--checkbox-color: #{$color-primary-icon};
		--checkbox-elevation-opacity: 0;

		position: relative;

		&[data-state='unchecked'] {
			--checkbox-color: #{$color-neutral-icon};
			--fa-primary-color: var(--checkbox-color);
			--fa-primary-opacity: 1;
			--fa-secondary-color: #{$color-default-background};
			--fa-secondary-opacity: var(--checkbox-elevation-opacity);
		}

		&[data-state='checked'] {
			--fa-primary-color: #{$color-default-background};
			--fa-primary-opacity: 1;
			--fa-secondary-color: var(--checkbox-color);
			--fa-secondary-opacity: 1;
		}

		&[data-state='indeterminate'] {
			--fa-primary-color: var(--checkbox-color);
			--fa-primary-opacity: 1;
			--fa-secondary-color: #{$color-default-background};
			--fa-secondary-opacity: var(--checkbox-elevation-opacity);
		}

		#{$root}__root:focus-visible & {
			--checkbox-color: #{$color-primary-icon};
		}

		#{$root}.-ds-error & {
			--checkbox-color: #{$color-danger-icon};
		}

		#{$root}.-ds-disabled & {
			--checkbox-color: #{$color-primary-icon-disabled};
		}

		#{$root}.-ds-disabled &[data-state='unchecked'] {
			--checkbox-color: #{$color-neutral-icon-disabled};
		}

		#{$root}.-ds-elevation & {
			--checkbox-elevation-opacity: 1;
		}
	}
}
</style>

<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui';
import {
	CHECKBOX_ELEVATIONS,
	CHECKBOX_SIZES,
	CHECKBOX_STATES,
	CheckboxElevation,
	CheckboxSize,
	CheckboxState,
	CheckboxValue,
} from './Checkbox.consts';
import DsIcon from '../../Icons/Icon/Icon.vue';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { computed, inject } from 'vue';
import { CHECKBOX_GROUP_INJECTION_KEY } from '../CheckboxGroupField/CheckboxGroupField.consts';
import DsFormControlLabel from '../FormControlLabel/FormControlLabel.vue';
import { FORM_CONTROL_STATE } from '../FormControlLabel/FormControlLabel.consts';

const props = defineProps<{
	size?: CheckboxSize;
	state?: CheckboxState;
	elevation?: CheckboxElevation;
	/**
	 * String value set when the checkbox is checked
	 */
	value?: string;
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

const value = computed(() => {
	if (groupContext && !props.value) {
		throw new Error(
			'[Checkbox]: When used inside a CheckboxGroupField, each Checkbox should have a unique "value" prop.',
		);
	}

	return props.value ?? 'on';
});

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

const labelState = computed(() => {
	if (state.value === CHECKBOX_STATES.DISABLED) {
		return FORM_CONTROL_STATE.DISABLED;
	}

	return FORM_CONTROL_STATE.DEFAULT;
});
</script>
