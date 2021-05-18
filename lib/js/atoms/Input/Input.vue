<template>
	<div class="a-input" :class="{ '-success': success, '-error': error || !!errorMessage }">
		<v-text-field
			:id="id"
			:autofocus="autofocus"
			:disabled="disabled"
			:error-messages="errorMessage"
			:error="error"
			:hint="helpMessage"
			:persistent-hint="!!helpMessage"
			:readonly="readonly"
			:success="success"
			:value="value"
			filled
		>
			<template #prepend-inner>
				<template v-if="leftIcon">
					<icon :icon="leftIcon" :size="ICON_SIZES.X_SMALL"></icon>
				</template>
			</template>

			<template #append>
				<template v-if="rightIconComputed">
					<icon :icon="rightIconComputed" :size="ICON_SIZES.X_SMALL"></icon>
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
						{{ helpMessage }}
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
	&__labelAddition {
		color: $color-primary;
	}

	&.-error {
		.a-input__labelAddition {
			color: $color-danger;
		}
	}

	&.-success {
		.a-input__labelAddition {
			color: $color-success;
		}
	}
}
</style>

<style lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';

.a-input {
	.v-input__slot {
		margin-bottom: $space-xxxs !important;
		background: rgba($color-firefly-black, 0.06) !important;
	}

	&__labelErrorIcon > svg {
		margin-right: $space-xxxxs;
	}

	&__helpMessage {
		display: flex;
		align-items: center;
	}

	.v-input--is-focused .v-input__slot {
		background: rgba($color-firefly-black, 0.12) !important;
	}

	&.-error .v-input__slot {
		background: $color-danger-background !important;
	}

	&.-success .v-input__slot {
		background: $color-success-background !important;
	}

	.v-input--is-disabled .v-input__slot::before {
		border-image: none !important;
	}

	&.-success {
		.v-input__prepend-inner {
			fill: $color-success;
		}
	}

	&.-error {
		.v-input__prepend-inner {
			fill: $color-danger;
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
		success: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		rightIconComputed() {
			if (this.success) {
				return ICONS.FA_CHECK_CIRCLE;
			}
			return this.rightIcon;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
};
</script>
