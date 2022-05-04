<template>
	<div class="sectionHeader" :class="{ [sizeClass]: true }">
		<div class="sectionHeader__titleWrapper">
			<ds-icon
				v-if="iconLeft"
				class="sectionHeader__iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
			/>
			<span>{{ text }}</span>
		</div>
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.sectionHeader {
	align-items: center;
	display: flex;
	justify-content: space-between;

	&__titleWrapper {
		@include textBold();

		align-items: center;
		display: flex;
	}

	&.-size-l &__titleWrapper {
		@include headlineL();
	}

	&.-size-m &__titleWrapper {
		@include headlineM();
	}

	&__iconLeft {
		margin-right: $space-xxs;
	}
}
</style>

<script lang="ts">
import { SECTION_HEADER_SIZES } from './SectionHeader.consts';
import DsIcon, { IconItem, ICONS, ICON_SIZES } from '../Icon';

export default {
	name: 'SectionHeader',
	components: {
		DsIcon,
	},
	props: {
		iconLeft: {
			type: Object as () => IconItem,
			default: null,
			validate(iconLeft: IconItem) {
				return Object.values(ICONS).includes(iconLeft);
			},
		},
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
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
