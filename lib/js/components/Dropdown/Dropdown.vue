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
			class="popper dsDropdown"
			:class="{
				'-radiusBottom': radius === DROPDOWN_RADIUSES.BOTTOM,
				'-radiusTop': radius === DROPDOWN_RADIUSES.TOP,
				'-radiusBottom -radiusTop': radius === DROPDOWN_RADIUSES.BOTH,
				'-heightLimited': !!maxHeight,
			}"
			:style="maxHeight ? { maxHeight } : null"
		>
			<slot :close="close" />
		</div>

		<template #reference>
			<slot name="reference" :is-opened="forceShow ? true : isOpened" />
		</template>
	</vue-popper>
</template>

<style lang="scss" scoped>
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/radiuses';
@import '../../../../lib/styles/settings/spacings';
@import '../../../../lib/styles/settings/shadows';

.dsDropdown {
	background-color: $color-default-background;
	border: 0;
	border-radius: 0;
	box-shadow: $shadow-m;
	max-width: 100%;
	min-width: 128px;
	padding: 0;
	text-align: left;

	&.-radiusBottom {
		border-bottom-left-radius: $radius-s;
		border-bottom-right-radius: $radius-s;
	}

	&.-radiusTop {
		border-top-left-radius: $radius-s;
		border-top-right-radius: $radius-s;
	}

	&[x-placement^='bottom'] {
		margin-top: $space-xxxxs;
	}

	&[x-placement^='top'] {
		margin-bottom: $space-xxxxs;
	}

	&.-heightLimited {
		overflow-y: auto;
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
} from './Dropdown.consts';

export default {
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
			validator(triggerAction) {
				return Object.values(DROPDOWN_TRIGGER_ACTIONS).includes(triggerAction);
			},
		},
		radius: {
			type: String,
			default: DROPDOWN_RADIUSES.BOTH,
			validate(radius) {
				return Object.values(DROPDOWN_RADIUSES).includes(radius);
			},
		},
		placement: {
			type: String,
			default: DROPDOWN_PLACEMENTS.BOTTOM_START,
			validate(placement) {
				return Object.values(DROPDOWN_PLACEMENTS).includes(placement);
			},
		},
		maxHeight: {
			type: String,
			default: null,
		},
	},
	emits: ['document-click', 'hide', 'show'],
	data() {
		return {
			key: 1,
			isOpened: false,
			DROPDOWN_RADIUSES: Object.freeze(DROPDOWN_RADIUSES),
		};
	},
	computed: {
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
};
</script>
