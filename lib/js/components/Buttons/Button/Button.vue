<template>
	<span
		class="a-button"
		:class="{
			'-outlined': type === BUTTON_TYPES.OUTLINED,
			'-text': type === BUTTON_TYPES.TEXT,

			'-small': size === SIZES.SMALL,
			'-large': size === SIZES.LARGE,

			'-rounded': type !== BUTTON_TYPES.TEXT && radius === RADIUSES.ROUNDED,

			'-hovered': state === STATES.HOVERED,
			'-focused': state === STATES.FOCUSED,
			'-loading': state === STATES.LOADING,
			'-disabled': state === STATES.DISABLED,

			[colorClassName]: true,

			'-elevation-x-small': elevation === ELEVATIONS.X_SMALL,
			'-elevation-small': elevation === ELEVATIONS.SMALL,
		}"
	>
		<span class="a-button__content">
			<wnl-icon
				v-if="iconLeft"
				class="a-button__icon -left"
				:icon="iconLeft"
				:size="ICON_SIZES.X_SMALL"
			/>
			<slot />
			<wnl-icon
				v-if="iconRight"
				class="a-button__icon -right"
				:icon="iconRight"
				:size="ICON_SIZES.X_SMALL"
			/>
		</span>
		<wnl-icon
			v-if="state === STATES.LOADING"
			class="a-button__loadingIcon"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="loadingIconSize"
		/>
	</span>
</template>

<style lang="scss">
@import '../../../../styles/components/buttons';
</style>

<script lang="ts">
import { Value } from '../../../utils/type.utils';

import WnlIcon, { ICONS, ICON_SIZES } from '../../Icon';
import {
	BUTTON_COLORS,
	BUTTON_ELEVATIONS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STATES,
	BUTTON_TYPES,
} from './Button.consts';

import { ICON_BUTTON_COLORS } from '../IconButton/IconButton.consts';

export default {
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Button',
	components: {
		WnlIcon,
	},
	props: {
		size: {
			type: String,
			default: BUTTON_SIZES.MEDIUM,
			validator(value: Value<typeof BUTTON_SIZES>) {
				return Object.values(BUTTON_SIZES).includes(value);
			},
		},
		type: {
			type: String,
			default: BUTTON_TYPES.FILLED,
			validator(value: Value<typeof BUTTON_TYPES>) {
				return Object.values(BUTTON_TYPES).includes(value);
			},
		},
		color: {
			type: String,
			default: BUTTON_COLORS.PRIMARY,
			validator(value: Value<typeof ICON_BUTTON_COLORS>) {
				return Object.values(ICON_BUTTON_COLORS).includes(value);
			},
		},
		radius: {
			type: String,
			default: BUTTON_RADIUSES.CAPSULE,
			validator(value: Value<typeof BUTTON_RADIUSES>) {
				return Object.values(BUTTON_RADIUSES).includes(value);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value: Value<typeof BUTTON_STATES>) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
		iconLeft: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(icon);
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(icon);
			},
		},
		elevation: {
			type: String,
			default: BUTTON_ELEVATIONS.NONE,
			validator(value: Value<typeof BUTTON_ELEVATIONS>) {
				return Object.values(BUTTON_ELEVATIONS).includes(value);
			},
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			COLORS: Object.freeze(BUTTON_COLORS),
			RADIUSES: Object.freeze(BUTTON_RADIUSES),
			SIZES: Object.freeze(BUTTON_SIZES),
			STATES: Object.freeze(BUTTON_STATES),
			ELEVATIONS: Object.freeze(BUTTON_ELEVATIONS),
		};
	},
	computed: {
		colorClassName(): string {
			return `-color-${this.color}`;
		},
		loadingIconSize(): string {
			if (this.size === BUTTON_SIZES.LARGE) {
				return ICON_SIZES.MEDIUM;
			}

			if (this.size === BUTTON_SIZES.SMALL) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
};
</script>
