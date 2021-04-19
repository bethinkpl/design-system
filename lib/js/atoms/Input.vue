<template>
	<v-app>
		<div class="a-input" :class="{ '-success': success, '-error': error || !!errorMessage }">
			<v-text-field
				:id="id"
				:autofocus="autofocus"
				:color="COLOR"
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
				<template v-slot:prepend-inner>
					<template v-if="leftIcon">
						<icon :icon="leftIcon" :size="ICON_SIZES.X_SMALL"></icon>
					</template>
				</template>

				<template v-slot:append>
					<template v-if="rightIconComputed">
						<icon :icon="rightIconComputed" :size="ICON_SIZES.X_SMALL"></icon>
					</template>
				</template>

				<template v-slot:label>
					<template>
						<span class="a-input__label">
							{{ label }}
						</span>
						<span v-if="labelAddition" class="a-input__labelAddition">
							{{ labelAddition }}
						</span>
					</template>
				</template>
			</v-text-field>
		</div>
	</v-app>
</template>

<style lang="scss" scoped>
@import '../../styles/settings/colors';
@import '../../styles/settings/typography';

.a-input {
	&__labelAddition {
		color: $color-primary;
	}

	&.-error {
		.a-input__labelAddition {
			color: $color-danger;
		}
	}
}
</style>

<style lang="scss">
@import '../../styles/settings/colors';
@import '../../styles/settings/spacings';

.a-input {
	.v-input__slot {
		margin-bottom: $space-xxxxs !important;
		min-height: 54px !important;
		background: rgba($color-firefly-black, 0.06) !important;
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

	.v-input__prepend-inner,
	.v-input__append-inner {
		margin-top: 19px !important; // total height is 54px, size od XS icon is 16 so (54-16) / 2 = 19
		padding-right: $space-xxs !important;
	}

	.v-input--is-disabled .v-input__slot::before {
		border-image: none !important;
	}

	.v-label--active {
		//margin-left: -19px;
	}

	.v-text-field--filled .v-label--active,
	.v-text-field--full-width .v-label--active {
		transform: translateY(-10px) scale(0.75);
	}

	.v-input__slot input {
		//padding-bottom: 4px;
		padding-top: 2px;
	}

	.v-input.error--text .v-label,
	v-messages__message {
		color: $color-danger !important;
		caret-color: $color-danger !important;
	}
}
</style>

<script lang="ts">
import 'vuetify/dist/vuetify.min.css';
import Vue, { VueConstructor } from 'vue';
import { Prop } from 'vue/types/options';
import Vuetify from 'vuetify';

import { THEME_COLORS } from '../consts/colors';
import Icon, { ICON_SIZES } from './Icon.vue';
import { ICONS } from './Icon.vue';

Vue.use(Vuetify);

export default {
	name: 'Input',
	vuetify: new Vuetify({}), // TODO: remove it
	components: {
		Icon,
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
			if (this.error) {
				return ICONS.FA_EXCLAMATION_CIRCLE;
			}
			if (this.success) {
				return ICONS.FA_CHECK_CIRCLE;
			}
			return this.rightIcon;
		},
	},
	created() {
		this.COLOR = THEME_COLORS.PRIMARY;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
