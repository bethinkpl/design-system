<template>
	<div class="a-input" :class="{ '-error': error || !!errorMessage, '-disabled': disabled }">
		<v-text-field
			:id="id"
			filled
			:autofocus="autofocus"
			:disabled="disabled"
			:error-messages="errorMessage"
			:error="error"
			:hint="helpMessage"
			:persistent-hint="!!helpMessage"
			:readonly="readonly"
			:value="value"
			@blur="$emit('blur', $event)"
			@click="$emit('click', $event)"
			@change="$emit('change', $event)"
			@input="$emit('input', $event)"
		>
			<template #prepend-inner>
				<template v-if="leftIcon">
					<icon
						class="a-input__leftIcon"
						:icon="leftIcon"
						:size="ICON_SIZES.X_SMALL"
					></icon>
				</template>
			</template>

			<template #append>
				<template v-if="rightIcon">
					<icon
						class="a-input__rightIcon"
						:icon="rightIcon"
						:size="ICON_SIZES.X_SMALL"
					></icon>
				</template>
			</template>

			<template #label>
				<div>
					<span class="a-input__label">
						{{ label }}
					</span>
					<span v-if="labelAddition" class="a-input__labelAddition">
						{{ labelAddition }}
					</span>
				</div>
			</template>

			<template #message>
				<div class="a-input__helpMessage">
					<icon
						v-if="error || errorMessage"
						class="a-input__labelErrorIcon"
						:icon="ICONS.FA_EXCLAMATION_TRIANGLE"
						:size="ICON_SIZES.XX_SMALL"
					></icon>
					<span>
						{{ errorMessage || helpMessage }}
					</span>
				</div>
			</template>
		</v-text-field>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors';
@import '../../../styles/settings/typography';

.a-input {
	&__label {
		color: $color-rhino-gray;
	}

	&__labelAddition {
		color: $color-primary;
		font-style: italic;
	}

	&__helpMessage {
		color: $color-minor;
		hyphens: initial;
	}

	&__leftIcon {
		color: $color-minor-supporting;
	}

	&__rightIcon {
		color: $color-minor-supporting;
	}

	&.-error {
		.a-input__labelAddition {
			color: $color-danger;
		}

		.a-input__helpMessage {
			color: $color-danger;
		}
	}

	&.-disabled {
		.a-input__label,
		.a-input__labelAddition,
		.a-input__helpMessage {
			color: $color-minor-supporting;
		}
	}
}
</style>

<style lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';

$color-input-background: rgba($color-firefly-black, 0.06);
$color-input-background-hovered: rgba($color-firefly-black, 0.12);

.a-input {
	.v-input__slot {
		background: $color-input-background !important;

		&::before {
			border-color: $color-minor !important;
		}

		&:hover {
			border-color: $color-input-background-hovered !important;
		}
	}

	&__labelErrorIcon > svg {
		margin-right: $space-xxxxs;
	}

	&__helpMessage {
		display: flex;
		align-items: center;
	}

	.v-label--active .a-input__label {
		color: $color-minor;
	}

	.v-input--is-focused {
		.v-input__slot {
			background: $color-input-background !important;

			.a-input__label {
				color: $color-primary;
			}
		}

		.a-input__leftIcon {
			color: $color-primary;
		}
	}

	&.-error .v-input__slot {
		background: $color-danger-background !important;
	}

	.v-input--is-disabled .v-input__slot::before {
		border-image: none !important;
	}

	.v-input input {
		color: $color-firefly-black;
	}

	&.-error {
		.v-input__prepend-inner,
		.v-input__append-inner {
			color: $color-danger;
		}
	}

	&.-disabled {
		.v-input__append-inner,
		input {
			color: $color-minor-supporting;
		}

		.a-input__leftIcon {
			color: $color-mischka-gray;
		}
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';
import { Prop } from 'vue/types/options';
import { VTextField } from 'vuetify/lib';

import Icon from '../Icon';
import { ICON_SIZES, ICONS } from '../Icon/Icon.consts';

export default {
	name: 'Input',
	components: {
		Icon,
		VTextField,
	},
	props: {
		label: {
			type: String,
			default: undefined,
		},
		labelAddition: {
			type: String,
			default: undefined,
		},
		value: {
			type: String,
			default: undefined,
		},
		leftIcon: {
			type: Object as Prop<VueConstructor | undefined>,
			default: undefined,
			validate(icon?: VueConstructor) {
				return !icon || Object.values(ICONS).includes(icon);
			},
		},
		rightIcon: {
			type: Object as Prop<VueConstructor | undefined>,
			default: undefined,
			validate(icon?: VueConstructor) {
				return !icon || Object.values(ICONS).includes(icon);
			},
		},
		helpMessage: {
			type: String,
			default: undefined,
		},
		errorMessage: {
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
		disabled: {
			type: Boolean,
			default: false,
		},
		autofocus: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
};
</script>
