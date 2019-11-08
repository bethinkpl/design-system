<template>
	<span class="o-helpModal">
		<wnl-icon
			fa-icon-class="fa-question-circle-o"
			class="o-helpModal__icon -cadetBlue"
			@click.native="open"
		/>
		<wnl-modal v-if="showModal" @closeModal="close">
			<div class="o-helpModal__content" v-html="text" />
		</wnl-modal>
	</span>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/variables';
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.o-helpModal__icon {
		cursor: pointer;
		margin-right: $space-xs;
	}

	.o-helpModal__content /deep/ p {
		font-size: $font-size-minus-1;
		margin-bottom: $space-m;
		text-transform: none;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.o-helpModal__content /deep/ h3 {
		color: $color-darkest-gray;
		font-size: 1.75rem;
		line-height: 1.5em;
		text-transform: none;
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
