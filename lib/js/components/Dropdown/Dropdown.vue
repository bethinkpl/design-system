<template>
	<vue-popper
		ref="popper"
		:key="key"
		:boundaries-selector="boundariesSelector"
		:force-show="forceShow"
		:options="options"
		:visible-arrow="false"
		:trigger="triggerAction"
		:delay-on-mouse-out="300"
		@document-click="$emit('document-click')"
		@hide="onHide"
		@show="onShow"
	>
		<div
			class="popper ds-dropdown"
			:class="{
				'-ds-radiusBottom': radius === DROPDOWN_RADIUSES.BOTTOM,
				'-ds-radiusTop': radius === DROPDOWN_RADIUSES.TOP,
				'-ds-radiusBottom -ds-radiusTop': radius === DROPDOWN_RADIUSES.BOTH,
			}"
		>
			<div
				class="ds-dropdown__scrollableWrapper"
				:class="{ '-ds-heightLimited': !!maxHeight }"
				:style="scrollableWrapperStyles"
			>
				<slot :close="close" />
			</div>
		</div>

		<template #reference>
			<slot name="reference" :is-opened="isOpened" />
		</template>
	</vue-popper>
</template>

<style lang="scss" scoped>
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/radiuses';
@import '../../../../lib/styles/settings/spacings';
@import '../../../../lib/styles/settings/shadows';

.ds-dropdown {
	background-color: $color-default-background;
	border: 0;
	border-radius: 0;
	box-shadow: $shadow-m;
	max-width: 100%;
	min-width: 128px;
	overflow: hidden;
	padding: 0;
	text-align: left;

	&.-ds-radiusBottom {
		border-bottom-left-radius: $radius-s;
		border-bottom-right-radius: $radius-s;
	}

	&.-ds-radiusTop {
		border-top-left-radius: $radius-s;
		border-top-right-radius: $radius-s;
	}

	&[x-placement^='bottom'] {
		margin-top: $space-4xs;
	}

	&[x-placement^='top'] {
		margin-bottom: $space-4xs;
	}

	&__scrollableWrapper {
		&.-ds-heightLimited {
			overflow-y: auto;
		}
	}
}
</style>

<script lang="ts">
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import {
	DROPDOWN_PLACEMENTS,
	DROPDOWN_RADIUSES,
	DROPDOWN_TRIGGER_ACTIONS,
	DropdownPlacement,
	DropdownRadius,
	DropdownTriggerAction,
} from './Dropdown.consts';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Dropdown',
	components: {
		VuePopper,
	},
	props: {
		boundariesSelector: {
			type: String,
			default: null,
		},
		forceShow: {
			type: Boolean,
			default: false,
		},
		sameWidth: {
			type: Boolean,
			default: false,
		},
		triggerAction: {
			type: String,
			default: DROPDOWN_TRIGGER_ACTIONS.CLICK,
			validator(triggerAction: DropdownTriggerAction) {
				return Object.values(DROPDOWN_TRIGGER_ACTIONS).includes(triggerAction);
			},
		},
		radius: {
			type: String,
			default: DROPDOWN_RADIUSES.BOTH,
			validate(radius: DropdownRadius) {
				return Object.values(DROPDOWN_RADIUSES).includes(radius);
			},
		},
		placement: {
			type: String,
			default: DROPDOWN_PLACEMENTS.BOTTOM_START,
			validate(placement: DropdownPlacement) {
				return Object.values(DROPDOWN_PLACEMENTS).includes(placement);
			},
		},
		maxHeight: {
			type: String,
			default: null,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['document-click', 'hide', 'show'],
	data() {
		return {
			key: 1,
			isOpened: false,
			DROPDOWN_RADIUSES: Object.freeze(DROPDOWN_RADIUSES),
		};
	},
	computed: {
		scrollableWrapperStyles() {
			return {
				...(this.maxHeight && { maxHeight: this.maxHeight }),
			};
		},
		options() {
			return {
				modifiers: { preventOverflow: { padding: 0 } },
				placement: this.placement,
				...(this.sameWidth && {
					// See https://github.com/floating-ui/floating-ui/issues/794
					// We can't use onCreate because vue-popper overrides it.
					// Width is set just fine without it, though.
					onUpdate: ({ instance: { reference, popper } }) => {
						popper.style.width = `${reference.offsetWidth}px`;
					},
				}),
			};
		},
	},
	watch: {
		triggerAction() {
			this.updateKey();
		},
		sameWidth() {
			this.updateKey();
		},
		boundariesSelector() {
			this.updateKey();
		},
		placement() {
			this.updateKey();
		},
	},
	methods: {
		close() {
			this.isOpened = false;
			this.$refs.popper.doClose();
		},
		updateKey() {
			// Force component rerender to apply new vue-popperjs options.
			// vue-popperjs doesn't support changing props in existing component
			this.key++;
		},
		onHide() {
			this.isOpened = false;
			this.$emit('hide');
		},
		onShow() {
			this.isOpened = true;
			this.$emit('show');
		},
	},
});
</script>
