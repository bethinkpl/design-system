<template>
	<div
		class="a-checkbox"
		:class="{
			'-error': isErrorComputed,
			'-disabled': disabled,
			'-medium': size === CHECKBOX_SIZES.MEDIUM,
			'-small': size === CHECKBOX_SIZES.SMALL,
			'-xsmall': size === CHECKBOX_SIZES.X_SMALL,
		}"
	>
		<v-layout>
			<v-checkbox
				:id="id"
				:disabled="disabled"
				:error="isErrorComputed"
				:error-message="errorMessage"
				:label="label"
				:messages="errorMessage || helpMessage"
				:readonly="readonly"
				:value="value"
				@click="$emit('click', $event)"
				@change="$emit('input', !!$event)"
			>
				<template #label>
					<div class="a-checkbox__labelContainer">
						<span class="a-checkbox__label">
							{{ label }}
						</span>
						<span v-if="labelAddition" class="a-checkbox__labelAddition">
							&nbsp;{{ labelAddition }}
						</span>
					</div>
				</template>

				<template #message>
					<div class="a-checkbox__helpMessage">
						<icon
							v-if="isErrorComputed"
							class="a-checkbox__labelErrorIcon"
							:icon="ICONS.FA_EXCLAMATION_TRIANGLE"
							:size="ICON_SIZES.XX_SMALL"
						></icon>
						<span>
							{{ errorMessage || helpMessage }}
						</span>
					</div>
				</template>
			</v-checkbox>
		</v-layout>
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

$checkbox-xs-size: 12px;
$checkbox-s-size: 16px;
$checkbox-m-size: 20px;

.a-checkbox {
	&__labelContainer {
		// forced vertical center on XS and S
		display: flex;
	}

	&__label {
		@include headlineS();

		color: $color-rhino-gray;
	}

	&__labelAddition {
		color: $color-primary;
		font-style: italic;
	}

	.v-icon {
		color: $color-minor;
	}

	&.-error {
		.a-checkbox__label,
		.a-checkbox__labelAddition,
		.a-checkbox__helpMessage {
			color: $color-danger;
		}
	}

	&.-disabled {
		.a-checkbox__label,
		.a-checkbox__labelAddition {
			color: rgba($color-total-black, 0.38);
		}
	}

	&.-xsmall {
		.v-icon {
			font-size: $checkbox-xs-size;
		}

		.v-input--selection-controls__input {
			margin-right: 0;
		}

		.a-checkbox__label,
		.a-checkbox__labelAddition {
			@include headlineXXS();
		}

		.v-input--selection-controls__input:hover .v-input--selection-controls__ripple::before,
		.v-input--selection-controls__ripple > .v-ripple__container {
			transform: scale(0.8);
		}
	}

	&.-small {
		.v-icon {
			font-size: $checkbox-s-size;
		}

		.v-input--selection-controls__input {
			margin-right: $space-xxxxs;
		}

		.a-checkbox__label,
		.a-checkbox__labelAddition {
			@include headlineXS();
		}

		.v-input--selection-controls__input:hover .v-input--selection-controls__ripple::before,
		.v-input--selection-controls__ripple > .v-ripple__container {
			transform: scale(1);
		}
	}

	&.-medium {
		.v-icon {
			font-size: $checkbox-m-size;
		}

		.a-checkbox .v-input--selection-controls__input {
			margin-right: $space-xxs;
		}
	}
}
</style>

<script lang="ts">
import { VCheckbox, VLayout } from 'vuetify/lib';

import { CHECKBOX_SIZES } from './Checkbox.consts';
import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'Checkbox',
	components: {
		VCheckbox,
		VLayout,
		Icon,
	},
	props: {
		label: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
		errorMessage: {
			type: String,
			default: undefined,
		},
		helpMessage: {
			type: String,
			default: '',
		},
		labelAddition: {
			type: String,
			default: undefined,
		},
		id: {
			type: String,
			default: undefined,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		value: {
			type: Boolean,
			default: undefined,
		},
		size: {
			type: String,
			default: CHECKBOX_SIZES.MEDIUM,
			validate(size) {
				Object.values(CHECKBOX_SIZES).includes(size);
			},
		},
	},
	computed: {
		isErrorComputed(): boolean {
			return this.error || !!this.errorMessage;
		},
	},
	created() {
		this.CHECKBOX_SIZES = CHECKBOX_SIZES;
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
