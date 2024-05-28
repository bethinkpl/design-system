<template>
	<div
		class="ds-checkboxWrapper"
		 :class="{
			'-small': size === 'small',
			'-medium': size === 'medium',
			'-large': size === 'large',
		}"
	>
		<v-field :name="name" v-slot="{ field }">
			<pv-checkbox
				:pt="{
					root: 'ds-checkboxWrapper__checkbox',
					input: { id: name },
					box: 'ds-checkboxWrapper__box'
				}"
				v-model="field.value"
				@update:model-value="field.onChange"
				@blur="field.onBlur"
				binary
			/>
			<label :for="name" v-if="label">{{ label }}</label>
		</v-field>
		<v-error-message :name="name" class="ds-checkboxWrapper__error" />
	</div>
</template>

<style lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

.ds-checkboxWrapper {
	display: flex;
	flex-direction: row;
	gap: $space-xs;

	&.-small {
		gap: $space-4xs;
	}

	&.-small &__box {
		width: 1rem;
		height: 1rem;
	}

	&.-small label {
		@include text-s-default-regular();
	}

	&__error {
		color: red;
	}
}
</style>

<script lang="ts">
import PvCheckbox from 'primevue/checkbox';
import { Field as VField, ErrorMessage as VErrorMessage } from 'vee-validate';

export default {
	name: 'Checkbox',
	components: {
		PvCheckbox,
		VField,
		VErrorMessage,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		modelValue: Boolean,
		label: String,
		size: {
			type: String,
			default: 'medium',
		},
	},
	emits: [
		'update:modelValue',
	],
};
</script>
