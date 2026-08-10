<template>
	<form-field v-bind="formFieldProps">
		<template #field="{ fieldId, messageId, labelId }">
			<div v-if="isLoading" class="ds-pinInputField -ds-loading" aria-busy="true">
				<ds-icon
					class="ds-pinInputField__spinner"
					:icon="ICONS.FAD_SPINNER_THIRD"
					:size="ICON_SIZES.LARGE"
					spinning
				/>
			</div>
			<!--
				`required` reaches a 1px-clipped, `aria-hidden` input inside reka's root, so in a
				native `<form>` the browser blocks `submit` while the pin is empty and
				`@submit.prevent` never runs. vee-validate forms need `novalidate`. `SelectField`
				forwards it the same way.
			-->
			<pin-input-root
				v-else
				:id="fieldId"
				v-model="chars"
				class="ds-pinInputField"
				role="group"
				:otp="otp"
				:type="type"
				:required="formFieldProps.hasRequiredIndicator"
				:aria-labelledby="formFieldProps.label ? labelId : undefined"
				:aria-label="formFieldProps.label ? undefined : ariaLabel"
				:aria-describedby="hasMessage ? messageId : undefined"
				@complete="onPinComplete"
				@focusout="onFieldFocusOut"
			>
				<pin-input-input
					v-for="index in length"
					:key="index"
					class="ds-pinInputField__item"
					:index="index - 1"
				/>
			</pin-input-root>
		</template>
		<!-- begin: FormField slots -->
		<template v-if="$slots.help" #help>
			<slot name="help" />
		</template>
		<template v-if="$slots.labelAside" #labelAside>
			<slot name="labelAside" />
		</template>
		<template v-if="$slots.message" #message="{ messageId }">
			<slot name="message" :message-id="messageId" />
		</template>
		<template v-if="$slots.fieldStatus" #fieldStatus>
			<slot name="fieldStatus" />
		</template>
		<!-- end: FormField slots -->
	</form-field>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/shadows';

.ds-pinInputField {
	align-items: center;
	align-self: stretch;
	display: flex;
	gap: $space-4;

	&.-ds-loading {
		flex-direction: column;
		min-height: 48px;
	}

	&__item {
		@include formText-m-default-bold;

		background: $color-default-background;
		border: $border-xs solid $color-neutral-border-strong;
		border-radius: $radius-s;
		box-shadow: $shadow-inset-m;
		color: $color-neutral-text-heavy;
		flex: 0 1 48px;
		height: 48px;
		max-width: 48px;
		min-width: 24px;
		outline: none;
		padding: 0 $space-3;
		text-align: center;

		&:focus {
			border-color: $color-primary-border;
		}

		&:hover:not(:focus) {
			border-color: $color-neutral-border-strong-hovered;
		}
	}

	&__spinner {
		color: $color-neutral-icon;
	}
}
</style>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { PinInputInput, PinInputRoot } from 'reka-ui';
import FormField, { FORM_FIELD_STATES, FormFieldProps } from '../FormField';
import { extractFormFieldProps } from '../FormField/FormField.utils';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import {
	PIN_INPUT_FIELD_DEFAULT_LENGTH,
	PIN_INPUT_FIELD_STATES,
	PIN_INPUT_FIELD_TYPES,
} from './PinInputField.consts';
import { PinInputFieldProps, PinInputFieldSlots } from './PinInputField.types';
import { toPinChars } from './PinInputField.utils';
import { usePinInputFieldWithinForm } from './usePinInputFieldWithinForm';

const {
	length = PIN_INPUT_FIELD_DEFAULT_LENGTH,
	state = PIN_INPUT_FIELD_STATES.DEFAULT,
	otp = true,
	type = PIN_INPUT_FIELD_TYPES.NUMBER,
	ariaLabel,
	name,
	...rest
} = defineProps<PinInputFieldProps>();

const slots = defineSlots<PinInputFieldSlots>();

const emit = defineEmits<{
	/** Fires whenever the pin becomes complete, including programmatic fills. */
	complete: [value: string];
}>();

/** The filled boxes joined, in order. A cleared middle box shortens it (`1 2 _ 4 5 6` → `'12456'`). */
const modelValue = defineModel<string>();

const { value, errors, onComplete, onBlur } = usePinInputFieldWithinForm(() => name, modelValue);

// The array, not the joined string, is the source of truth: reka writes `''` into a cleared middle
// box, so rebuilding it from the string would shift the later boxes leftwards. In `type: 'number'`
// mode reka stores numbers rather than strings, which `join('')` handles either way.
const chars = ref<Array<string>>(toPinChars(value.value, length));

watch(chars, (next) => {
	const joined = next.join('');

	if (joined !== (value.value ?? '')) {
		value.value = joined;
	}
});

watch([value, () => length], ([next]) => {
	if (chars.value.length > length || chars.value.join('') !== (next ?? '')) {
		chars.value = toPinChars(next, length);
	}
});

const formFieldProps = computed<FormFieldProps>(() => {
	// this is needed to avoid passing modelValue to FormField as prop
	return extractFormFieldProps(
		{
			...rest,
			state: state === PIN_INPUT_FIELD_STATES.ERROR ? FORM_FIELD_STATES.ERROR : undefined,
		},
		errors.value,
	);
});

const isLoading = computed(() => state === PIN_INPUT_FIELD_STATES.LOADING);

// Avoids pointing `aria-describedby` at a message element that is never rendered.
const hasMessage = computed(() => !!(formFieldProps.value.messageText || slots.message));

// Boxes blur on every hop between boxes; only focus leaving the field is a real blur.
function onFieldFocusOut(event: FocusEvent) {
	const root = event.currentTarget as HTMLElement | null;

	if (root?.contains(event.relatedTarget as Node | null)) {
		return;
	}

	onBlur(event);
}

function onPinComplete() {
	onComplete(new Event('blur'));
	emit('complete', chars.value.join(''));
}
</script>
