<template>
	<ds-app>
		<div class="a-select" :class="{ '-error': error || !!errorMessage, '-disabled': disabled }">
			<v-select
				:items="['a', 'b', 'c']"
				:messages="helpMessage"
				:error="error"
				:readonly="readonly"
				:disabled="disabled"
				filled
			>
				<template slot="message">
					<div class="a-select__helpMessage">
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
	</ds-app>
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

	&__rightIcon svg {
		fill: $color-storm-gray;
		color: $color-storm-gray;
	}

	&.-disabled {
		.v-input__slot::before {
			border-image: none !important;
		}

		.v-input__prepend-inner {
			fill: rgba($color-total-black, 0.38);
		}

		.v-input__append-inner {
			fill: rgba($color-total-black, 0.38);
		}

		.a-select__rightIcon svg {
			fill: rgba($color-total-black, 0.38);
			color: rgba($color-total-black, 0.38);
		}
	}
}
</style>

<script lang="ts">
import { VSelect } from 'vuetify/lib';

import DsApp from '../App';
import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'Select',
	components: {
		VSelect,
		DsApp,
		Icon,
	},
	props: {
		label: {
			type: String,
			default: '',
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
			default: undefined,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		labelAddition: {
			type: String,
			default: undefined,
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
};
</script>
