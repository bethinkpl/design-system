<template>
	<div :class="['ds-toast', toastSize, toastPosition, toastColor]">
		<ds-card :loading-bar-color="color" has-loading-bar :loading-bar-time="disappearingTimeout">
			<template #content>
				<div class="ds-toast__body">
					<div v-if="title.length" class="ds-toast__title">{{ title }}</div>
					<div class="ds-toast__content">
						<slot name="content" />
					</div>
				</div>
			</template>
			<template
				v-if="footerPrimaryButtonText.length > 0 || footerSecondaryButtonText.length > 0"
				#footer
			>
				<div class="ds-toast__footerButtons">
					<ds-button
						v-if="footerSecondaryButtonText.length"
						:color="buttonSecondaryColor"
						:size="buttonSize"
						:icon-right="footerSecondaryButtonIcon"
						:type="BUTTON_TYPES.OUTLINED"
						:radius="BUTTON_RADIUSES.ROUNDED"
						@click="$emit('secondary-button-click')"
						>{{ footerSecondaryButtonText }}
					</ds-button>
					<ds-button
						v-if="footerPrimaryButtonText.length"
						:color="buttonPrimaryColor"
						:size="buttonSize"
						:icon-right="footerPrimaryButtonIcon"
						:radius="BUTTON_RADIUSES.ROUNDED"
						@click="$emit('primary-button-click')"
						>{{ footerPrimaryButtonText }}
					</ds-button>
				</div>
			</template>
		</ds-card>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/media-queries';

.ds-toast {
	$root: &;

	max-width: var(--ds-toast-max-width);
	width: 100%;

	&.-ds-size-small {
		--ds-toast-max-width: 320px;
	}

	&.-ds-size-medium {
		--ds-toast-max-width: 500px;
	}

	&.-ds-size-large {
		--ds-toast-max-width: 700px;
	}

	// The viewport spacing lives in the offsets rather than in padding, so it applies only to the
	// fixed positions — `none` lets the consumer place (and space) the toast themselves.
	&.-ds-position-left,
	&.-ds-position-center,
	&.-ds-position-right {
		--ds-toast-offset: #{$space-8};

		bottom: var(--ds-toast-offset);
		max-width: min(var(--ds-toast-max-width), calc(100% - var(--ds-toast-offset) * 2));
		position: fixed;

		@media (#{breakpoint-s()}) {
			&.-ds-size-medium,
			&.-ds-size-large {
				--ds-toast-offset: #{$space-12};
			}
		}
	}

	&.-ds-position-left {
		left: var(--ds-toast-offset);
	}

	&.-ds-position-right {
		right: var(--ds-toast-offset);
	}

	&.-ds-position-center {
		left: 50%;
		transform: translateX(-50%);
	}

	&__body {
		display: flex;
		flex-direction: column;
		row-gap: $space-2;
	}

	&__title {
		@include heading-s-default-bold;

		color: $color-neutral-text-heavy;

		#{$root}.-ds-size-large & {
			@include heading-m-default-bold;
		}

		#{$root}.-ds-color-success & {
			color: $color-success-text-strong;
		}

		#{$root}.-ds-color-warning & {
			color: $color-warning-text-strong;
		}

		#{$root}.-ds-color-danger & {
			color: $color-danger-text-strong;
		}

		#{$root}.-ds-color-info & {
			color: $color-info-text-strong;
		}
	}

	&__content {
		@include text-m-default-regular;
	}

	&__footerButtons {
		column-gap: $space-6;
		display: flex;
		justify-content: flex-end;
		padding: 0 $space-8 $space-8;
	}
}
</style>

<script lang="ts" setup>
import DsButton, {
	BUTTON_COLORS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_TYPES,
} from '../Buttons/Button';
import DsCard from '../Cards/Card';
import {
	TOAST_COLORS,
	TOAST_POSITIONS,
	TOAST_SIZES,
	ToastColors,
	ToastPositions,
	ToastSizes,
} from './Toast.consts';
import { computed, onMounted } from 'vue';
import { IconItem } from '../Icons/Icon';

const {
	title = '',
	size = TOAST_SIZES.MEDIUM,
	position = TOAST_POSITIONS.CENTER,
	color = TOAST_COLORS.INFO,
	footerPrimaryButtonText = '',
	footerPrimaryButtonIcon = null,
	footerSecondaryButtonText = '',
	footerSecondaryButtonIcon = null,
	isDisappearing = true,
	disappearingTimeout = '0',
} = defineProps<{
	title?: string;
	size?: ToastSizes;
	position?: ToastPositions;
	color?: ToastColors;
	footerPrimaryButtonText?: string;
	footerPrimaryButtonIcon?: IconItem | null;
	footerSecondaryButtonText?: string;
	footerSecondaryButtonIcon?: IconItem | null;
	isDisappearing?: boolean;
	/** Seconds, as a numeric string. `'0'` disables the auto-close. */
	disappearingTimeout?: string;
}>();

const emit = defineEmits<{
	close: [];
	'primary-button-click': [];
	'secondary-button-click': [];
}>();

defineSlots<{
	content?: () => any;
}>();

const buttonPrimaryColor = computed(() =>
	color === TOAST_COLORS.DANGER ? BUTTON_COLORS.NEUTRAL : BUTTON_COLORS.PRIMARY,
);

const buttonSecondaryColor = computed(() =>
	color === TOAST_COLORS.DANGER ? BUTTON_COLORS.DANGER : BUTTON_COLORS.NEUTRAL,
);

const buttonSize = computed(() =>
	size === TOAST_SIZES.SMALL ? BUTTON_SIZES.SMALL : BUTTON_SIZES.MEDIUM,
);

const toastSize = computed(() => `-ds-size-${size.toLowerCase()}`);

const toastPosition = computed(() => `-ds-position-${position.toLowerCase()}`);

const toastColor = computed(() => `-ds-color-${color}`);

onMounted(() => {
	if (isDisappearing && disappearingTimeout !== '0') {
		setTimeout(
			() => emit('close'),
			parseInt(disappearingTimeout, 10) * 1000 + 100, // 100 ms is to let loading bar animation to finish
		);
	}
});
</script>
