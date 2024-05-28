<template>
	<div class="ds-inputTextWrapper">
		<v-field :name="name as string" v-slot="{ field }">
			<pv-float-label :pt="{
				root: [
					'ds-inputTextWrapper__floatLabel',
					{
						'-small': size === 'small',
						'-medium': size === 'medium',
						'-large': size === 'large',
					}
				]
			}">
				<pv-input-text
					:id="name"
					:type="type"
					:pt="{
						root: [
							'ds-inputTextWrapper__inputText',
							{
								'-small': size === 'small',
								'-medium': size === 'medium',
								'-large': size === 'large',
								'p-filled': !!field.value,
							}
						]
					}"
					v-bind="field"
					unstyled
				/>
				<label :for="name" v-if="label">{{ label }}</label>
			</pv-float-label>
		</v-field>
		<v-error-message :name="name as string" class="ds-inputTextWrapper__error" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/typography/tokens';

.ds-inputTextWrapper {
	&__floatLabel {
		&.-large label {
			left: 1.75rem;
		}

		&:has(input:focus),
		&:has(input.p-filled){
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

	&__inputText {
		@include text-l-default-regular();

		border: 1px solid $color-neutral-border-weak;
		border-radius: $radius-s;
		box-sizing: border-box;
		margin: 1px 0;
		padding: $space-xs $space-s;
		width: 100%;

		&:focus {
			border: 2px solid $color-accent-border;
			box-shadow: none;
			margin: 0;
			outline: none;
		}

		&.-small {
			@include text-s-default-regular();

			padding: $space-3xs $space-xs;
		}

		&.-large {
			@include text-xl-compact-bold();

			padding: $space-s $space-m;
		}
	}

	&__error {
		color: red;
	}
}
</style>

<script lang="ts">
import PvInputText from 'primevue/inputtext';
import PvFloatLabel from 'primevue/floatlabel';
import { Field as VField, ErrorMessage as VErrorMessage } from 'vee-validate';

export default {
	name: 'Input',
	components: {
		PvInputText,
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
		label: String,
		size: {
			type: String,
			default: 'medium',
		},
	},
};
</script>
