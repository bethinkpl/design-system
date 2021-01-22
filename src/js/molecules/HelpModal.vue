<template>
	<span class="o-helpModal">
		<wnl-icon
			:icon="ICONS.QUESTION_CIRCLE"
			class="o-helpModal__icon -cadetGray"
			:size="ICON_SIZES.SMALL"
			@click.native.stop="open"
		/>
		<wnl-modal v-if="showModal" @close-modal="close">
			<div class="o-helpModal__content content" v-html="text" />
		</wnl-modal>
	</span>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.o-helpModal {
	line-height: 1;
}

.o-helpModal__icon {
	cursor: pointer;
	margin-right: $space-xs;
}

.o-helpModal__content ::v-deep {
	p,
	ul,
	ol {
		font-size: $font-size-text-m;
		margin-bottom: $space-m;
		text-transform: none;

		&:last-child {
			margin-bottom: 0;
		}
	}
}

.o-helpModal__content ::v-deep h3 {
	color: $color-firefly-black;
	font-size: 1.75rem;
	line-height: 1.5em;
	text-transform: none;
}
</style>

<script>
import WnlIcon, { ICONS, ICON_SIZES } from 'js/components/global/styleguide/atoms/Icon';

import WnlModal from 'js/components/global/Modal';

export default {
	components: {
		WnlIcon,
		WnlModal,
	},
	props: {
		text: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			showModal: false,
		};
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
	methods: {
		open() {
			this.showModal = true;
			this.$emit('open');
		},
		close() {
			this.showModal = false;
		},
	},
};
</script>
