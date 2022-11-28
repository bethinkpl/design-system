<template>
	<vue-popper
		ref="popper"
		:key="key"
		:boundaries-selector="boundariesSelector"
		:force-show="forceShow"
		:options="{ placement }"
		:trigger="triggerAction"
		:delay-on-mouse-over="300"
		:delay-on-mouse-out="300"
	>
		<div
			class="popper popOver"
			:class="{ '-color-neutral': color === POP_OVER_COLORS.NEUTRAL }"
		>
			<img v-if="headerImageUrl" class="popOver__image" :src="headerImageUrl" alt="" />
			<div class="popOver__content">
				<div v-if="titleText" class="popOver__title"> {{ titleText }} </div>
				<slot :close="close" />
			</div>
			<ds-button
				v-if="buttonText"
				class="popOver__button"
				:type="BUTTON_TYPES.TEXT"
				:size="BUTTON_SIZES.LARGE"
				@click="$emit('button-click')"
			>
				{{ buttonText }}
			</ds-button>
		</div>

		<!-- TODO IT-4909 -->
		<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
		<slot slot="reference" name="reference" />
	</vue-popper>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.popOver {
	background-color: $color-default-background;
	// override popperjs styles
	border: none;
	border-radius: $radius-m;
	box-shadow: $shadow-l;
	display: flex;
	flex-direction: column;
	padding: 0;
	max-width: 320px;

	&.-color-neutral ::v-deep .popper__arrow {
		border-color: $color-neutral-background transparent !important;
	}

	&.-color-neutral {
		background-color: $color-neutral-background;
	}

	&[x-placement^='bottom'] {
		margin-top: $space-s;

		::v-deep .popper__arrow {
			border-color: transparent transparent $color-inverted-border transparent;
			border-width: 0 $space-xs $space-s $space-xs;
			left: calc(50% - #{$space-xs});
			margin-bottom: 0;
			margin-top: 0;
			top: -$space-s;
		}
	}

	&[x-placement^='top'] {
		margin-bottom: $space-s;

		::v-deep .popper__arrow {
			border-color: $color-inverted-border transparent transparent transparent;
			border-width: $space-s $space-xs 0 $space-xs;
			bottom: -$space-s;
			left: calc(50% - #{$space-xs});
			margin-bottom: 0;
			margin-top: 0;
		}
	}

	&[x-placement^='right'] {
		margin-left: $space-s;

		::v-deep .popper__arrow {
			border-color: transparent $color-inverted-border transparent transparent;
			border-width: $space-xs $space-s $space-xs 0;
			left: -$space-s;
			margin-left: 0;
			margin-right: 0;
			top: calc(50% - #{$space-xs});
		}
	}

	&[x-placement^='left'] {
		margin-right: $space-s;

		::v-deep .popper__arrow {
			border-color: transparent transparent transparent $color-inverted-border;
			border-width: $space-xs 0 $space-xs $space-s;
			margin-left: 0;
			margin-right: 0;
			right: -$space-s;
			top: calc(50% - #{$space-xs});
		}
	}

	&__image {
		border-top-left-radius: $radius-m;
		border-top-right-radius: $radius-m;
		max-width: 100%;
	}

	&__content {
		@include textM;

		color: $color-neutral-text-heavy;
		padding: $space-s;
		// Override popperjs styles
		text-align: left;
	}

	&__title {
		@include headlineS;

		color: $color-default-text;
		font-weight: bold;
		margin-bottom: $space-xxs;
	}

	&__button {
		margin: 0 $space-s $space-xs;
		align-self: flex-end;
	}
}
</style>

<script>
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import { POP_OVER_COLORS, POP_OVER_PLACEMENTS, POP_OVER_TRIGGER_ACTIONS } from './PopOver.consts';
import DsButton, { BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button';

export default {
	name: 'PopOver',
	components: {
		VuePopper,
		DsButton,
	},
	props: {
		boundariesSelector: {
			type: String,
			default: null,
		},
		triggerAction: {
			type: String,
			default: POP_OVER_TRIGGER_ACTIONS.CLICK,
			validator(triggerAction) {
				return Object.values(POP_OVER_TRIGGER_ACTIONS).includes(triggerAction);
			},
		},
		placement: {
			type: String,
			default: POP_OVER_PLACEMENTS.BOTTOM,
			validator(placement) {
				return Object.values(POP_OVER_PLACEMENTS).includes(placement);
			},
		},
		forceShow: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: POP_OVER_COLORS.DEFAULT,
			validator(color) {
				return Object.values(POP_OVER_COLORS).includes(color);
			},
		},
		titleText: {
			type: String,
			default: null,
		},
		buttonText: {
			type: String,
			default: null,
		},
		headerImageUrl: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			POP_OVER_COLORS: Object.freeze(POP_OVER_COLORS),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			BUTTON_SIZES: Object.freeze(BUTTON_SIZES),
			key: 1,
		};
	},
	watch: {
		triggerAction() {
			this.updateKey();
		},
		placement() {
			this.updateKey();
		},
		boundariesSelector() {
			this.updateKey();
		},
	},
	methods: {
		close() {
			this.$refs.popper.doClose();
		},
		updateKey() {
			// Force component rerender to apply new vue-popperjs options.
			// vue-popperjs doesn't support changing props in existing component
			this.key++;
		},
	},
};
</script>
