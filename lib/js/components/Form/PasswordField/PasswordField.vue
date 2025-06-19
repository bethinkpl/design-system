<template>
	<input-field
		v-bind="$props"
		v-model="value"
		:input-props="inputProps"
		:left-icon="ICONS.FA_LOCK_KEYHOLE"
	>
		<template #action>
			<icon-button
				:icon="eyeIcon"
				:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
				:size="ICON_BUTTON_SIZES.X_SMALL"
				:touchable="false"
				data-test-id="password-toggle"
				@click="isPasswordVisible = !isPasswordVisible"
			/>
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
	</input-field>
</template>

<script setup lang="ts">
import InputField from '../InputField';
import IconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../../Buttons/IconButton';
import { ICONS } from '../../Icons/Icon';
import { computed, ref, InputHTMLAttributes } from 'vue';
import { InputFieldProps, InputFieldSlots } from '../InputField/InputField.types';

const { inputProps: baseInputProps } = defineProps<Omit<InputFieldProps, 'leftIcon'>>();
const value = defineModel<string>();
defineSlots<Omit<InputFieldSlots, 'action'>>();

const isPasswordVisible = ref(false);
const inputProps = computed<InputHTMLAttributes>(() => ({
	...baseInputProps,
	type: isPasswordVisible.value ? 'text' : 'password',
}));

const eyeIcon = computed(() => {
	return isPasswordVisible.value ? ICONS.FA_EYE_SLASH : ICONS.FA_EYE;
});
</script>
