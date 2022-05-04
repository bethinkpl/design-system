<template>
	<div class="sectionHeader" :class="{ [sizeClass]: true }">
		<div class="sectionHeader__titleWrapper">{{ text }}</div>
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography';

.sectionHeader {
	align-items: center;
	display: flex;
	justify-content: space-between;

	&__titleWrapper {
		@include textBold();
	}

	&.-size-l &__titleWrapper {
		@include headlineL();
	}

	&.-size-m &__titleWrapper {
		@include headlineM();
	}
}
</style>

<script lang="ts">
import { SECTION_HEADER_SIZES } from './SectionHeader.consts';

export default {
	name: 'SectionHeader',
	props: {
		size: {
			type: String,
			default: SECTION_HEADER_SIZES.M,
			validate(size) {
				Object.values(SECTION_HEADER_SIZES).includes(size);
			},
		},
		text: {
			type: String,
			required: true,
		},
	},
	computed: {
		sizeClass(): string {
			return `-size-${this.size}`;
		},
	},
};
</script>
