<template>
	<div class="ds-sectionTitle">
		<div class="ds-sectionTitle__title">{{ titleText }}</div>
		<div class="ds-sectionTitle__supportingText">{{ supportingText }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/spacings';

.ds-sectionTitle {
	display: flex;
	flex-direction: column;
	gap: $space-4xs;
	overflow-wrap: break-word;
	padding: $space-2xs 0;

	&__title {
		@include heading-xs-default-bold;

		color: $color-neutral-text-heavy;
	}

	&__supportingText {
		@include info-s-default-regular;

		color: $color-neutral-text-weak;
	}
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { SECTION_TITLE_SIZES } from './SectionTitle.consts';

export default defineComponent({
	name: 'SectionTitle',
	props: {
		// It's unused for now but we want to have the prop already
		size: {
			type: String,
			default: SECTION_TITLE_SIZES.XS,
			validator(size) {
				return Object.values(SECTION_TITLE_SIZES).includes(size);
			},
		},
		supportingText: {
			type: String,
			default: null,
		},
		titleText: {
			type: String,
			required: true,
		},
	},
});
</script>
