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
				class="ds-pinInputField"
				role="group"
				:model-value="chars as Array<string>"
				:otp="otp"
				:type="type"
				:required="formFieldProps.hasRequiredIndicator"
				:aria-labelledby="formFieldProps.label ? labelId : undefined"
				:aria-label="formFieldProps.label ? undefined : ariaLabel"
				:aria-describedby="hasMessage ? messageId : undefined"
				@complete="onPinComplete"
				@focusout="onFieldFocusOut"
				@update:model-value="onCharsUpdate"
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
import { PinChars, toPinChars } from './PinInputField.utils';
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

// The array, not the joined string, is the source of truth: clearing a middle box leaves a hole in
// it (`delete` in `type: 'number'` mode, `''` in `type: 'text'` mode), so rebuilding it from the
// string would shift the later boxes leftwards. In numeric mode reka also stores numbers rather than
// strings, which its own `modelValue` type does not admit — hence the cast on the binding.
const chars = ref<PinChars>(toPinChars(value.value, length));

// reka rewrites the whole array on every keystroke; `join('')` flattens the numbers it stores in
// numeric mode and the holes a cleared box leaves behind.
function onCharsUpdate(next: PinChars) {
	chars.value = next;
	value.value = next.join('');
}

// Inbound only: parent `v-model`, a vee-validate reset, or a shrinking `length`. The write from
// `onCharsUpdate` lands here too, but is already in sync — rebuilding would collapse a cleared
// middle box onto its neighbours.
watch([value, () => length], ([next]) => {
	const nextValue = next ?? '';

	if (chars.value.length <= length && chars.value.join('') === nextValue) {
		return;
	}

	chars.value = toPinChars(next, length);

	// A shrink drops the surplus characters, and the model has to follow: they no longer have a box
	// to edit them in.
	const joined = chars.value.join('');

	if (joined !== nextValue) {
		value.value = joined;
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
