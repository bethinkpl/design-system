<template>
	<v-field :name="name" v-slot="{ field }">
		<pv-float-label :pt="{
			root: [
				'ds-floatLabel',
				{
					'-small': size === 'small',
					'-medium': size === 'medium',
					'-large': size === 'large',
				}
			]
		}">
			<pv-date-picker
				:id="name"
				:type="type"
				v-model="field.value"
				@update:model-value="field.onChange"
				@blur="field.onBlur"
				selection-mode="range"
				date-format="dd.mm"
			/>
			<label :for="name" v-if="label">{{ label }}</label>
		</pv-float-label>

	</v-field>
	<v-error-message :name="name" class="ds-checkboxWrapper__error" />
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/typography/tokens';

.ds-floatLabel {
	&.-large label {
		left: 1.75rem;
	}

	&:has(.p-inputwrapper-focus),
	&:has(.p-inputwrapper-filled) {
		&.-large label {
			left: 0.75rem;
		}

		& label {
			background: white;
			cursor: default;
			padding: 3px 4px;
			top: 0;
		}
	}
}
</style>

<script lang="ts">
import PvDatePicker from 'primevue/datepicker';
import PvFloatLabel from 'primevue/floatlabel';
import { Field as VField, ErrorMessage as VErrorMessage } from 'vee-validate';

export default {
	name: 'Input',
	components: {
		PvDatePicker,
		PvFloatLabel,
		VField,
		VErrorMessage,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		type: String,
		modelValue: {
			type: Array,
			default: () => ([]),
		},
		label: String,
		size: {
			type: String,
			default: 'medium',
		},
	},
	emits: [
		'update:modelValue',
	],
	computed: {
		nullSafeValue() {
			return this.modelValue || '';
		},
	},
};
</script>
