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
		@hide="$emit('hide')"
		@show="$emit('show')"
	>
		<div class="popper dsDropdown">
			<slot :close="close" />
		</div>

		<slot slot="reference" name="reference" />
	</vue-popper>
</template>

<style lang="scss" scoped>
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/radiuses';
@import '../../../../lib/styles/settings/shadows';

.dsDropdown {
	background-color: $color-default-background;
	border: 0;
	border-radius: 0 0 $radius-s $radius-s;
	box-shadow: $shadow-m;
	min-width: 128px;
	padding: 0;
	text-align: left;
}
</style>

<script lang="ts">
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import { DROPDOWN_TRIGGER_ACTIONS } from './Dropdown.consts';

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
			validate(triggerAction) {
				return Object.values(DROPDOWN_TRIGGER_ACTIONS).includes(triggerAction);
			},
		},
	},
	data() {
		return {
			key: 1,
		};
	},
	computed: {
		options() {
			return {
				modifiers: { preventOverflow: { padding: 0 } },
				placement: 'bottom-start',
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
