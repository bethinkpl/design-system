<template>
	<span>
		<wnl-icon
			fa-icon-class="fa-question-circle-o"
			class="o-helpModal__icon -cadetBlue"
			@click.native.stop="open"
		/>
		<wnl-modal v-if="showModal" @closeModal="close">
			<p>{{text}}</p>
		</wnl-modal>
	</span>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/spacings';

	.o-helpModal__icon {
		cursor: pointer;
		margin-right: $space-xs;
	}
</style>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import WnlModal from 'js/components/global/Modal';

export default {
	components: {
		WnlIcon,
		WnlModal
	},
	props: {
		text: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		open() {
			this.showModal = true;
		},
		close() {
			this.showModal = false;
		}
	}
};
</script>
