<template>
	<div class="a-select" :class="{ '-error': isErrorComputed, '-disabled': disabled }">
		<v-select
			:id="id"
			:disabled="disabled"
			:error="isErrorComputed"
			:items="items"
			:messages="errorMessage || helpMessage"
			:readonly="readonly"
			filled
			@blur="$emit('blur', $event)"
			@click="$emit('click', $event)"
			@change="$emit('change', $event)"
		>
			<template slot="message">
				<div class="a-select__helpMessage">
					<icon
						v-if="isErrorComputed"
						class="a-select__labelErrorIcon"
						:icon="ICONS.FA_EXCLAMATION_TRIANGLE"
						:size="ICON_SIZES.XX_SMALL"
					></icon>
					<span>
						{{ errorMessage || helpMessage }}
					</span>
				</div>
			</template>

			<template #prepend-inner>
				<template v-if="leftIcon">
					<icon :icon="leftIcon" :size="ICON_SIZES.X_SMALL"></icon>
				</template>
			</template>

			<template #append>
				<icon
					class="a-select__rightIcon"
					:icon="ICONS.FA_CHEVRON_DOWN_SOLID"
					:size="ICON_SIZES.XX_SMALL"
				></icon>
			</template>

			<template #label>
				<div>
					<span class="a-select__label">
						{{ label }}
					</span>
					<span v-if="labelAddition" class="a-select__labelAddition">
						{{ labelAddition }}
					</span>
				</div>
			</template>
		</v-select>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';

.a-select {
	&__label {
		color: $color-storm-gray;
	}

	&__labelAddition {
		color: $color-primary;
	}

	&.-error {
		.a-select__label {
			color: $color-danger;
		}

		.a-select__labelAddition {
			color: $color-danger;
		}

		.a-select__helpMessage {
			color: $color-danger;
		}
	}

	&.-disabled {
		.a-select__label {
			color: rgba($color-total-black, 0.38);
		}

		.a-select__labelAddition {
			color: rgba($color-total-black, 0.38);
		}
	}
}
</style>

<style lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';

.v-menu__content {
	// input's label has to be visible
	transform: translateY(56px); // 54px of select + 2px of border
}

.a-select {
	.v-input__slot {
		margin-bottom: $space-xxxs !important;
		background: rgba($color-firefly-black, 0.06) !important;

		&:hover {
			background: rgba($color-firefly-black, 0.12) !important;
		}
	}

	&.-error .v-input__slot {
		background: $color-danger-background !important;
	}

	&__rightIcon {
		color: $color-storm-gray;
	}

	.v-input__append-inner {
		margin-top: 21px; // (54 - 12) / 2
	}

	.v-select--is-menu-active {
		.a-select__rightIcon {
			color: $color-primary;
			transform: rotate(180deg);
		}
	}

	&.-disabled {
		.v-input__slot::before {
			border-image: none !important;
		}

		.v-input__prepend-inner {
			color: rgba($color-total-black, 0.38);
		}

		.v-input__append-inner {
			color: rgba($color-total-black, 0.38);
		}

		.a-select__rightIcon {
			color: rgba($color-total-black, 0.38);
		}
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';
import { VSelect } from 'vuetify/lib';
import { Prop } from 'vue/types/options';

import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'Select',
	components: {
		VSelect,
		Icon,
	},
	props: {
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
		items: {
			type: Array,
			required: true,
		},
		id: {
			type: String,
			default: undefined,
		},
		label: {
			type: String,
			default: '',
		},
		helpMessage: {
			type: String,
			default: undefined,
		},
		labelAddition: {
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
		readonly: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		isErrorComputed(): boolean {
			return this.error || !!this.errorMessage;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
};
</script>
