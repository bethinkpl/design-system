<template>
	<div class="ds-card">
		<div
			v-if="$slots.header"
			class="ds-card__header"
			:class="{ '-ds-withPadding': headerHasPadding }"
		>
			<slot name="header" />
		</div>
		<ds-divider
			v-if="$slots.header && $slots.content && dividerUnderHeader"
			class="ds-card__headerDivider"
			:class="{ '-ds-withHorizontalMargin': headerHasPadding }"
		/>
		<div v-if="$slots.content" class="ds-card__content">
			<slot name="content" />
		</div>
		<slot name="footer" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/colors/tokens';

.ds-card {
	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-s;

	&__header {
		&.-ds-withPadding {
			padding: $space-s;
		}
	}

	&__headerDivider {
		&.-ds-withHorizontalMargin {
			margin: 0 $space-s;
		}
	}

	&__content {
		padding: $space-s;
	}
}
</style>

<script lang="ts">
import DsDivider from '../../Divider/Divider.vue';

export default {
	name: 'Card',
	components: { DsDivider },
	props: {
		headerHasPadding: {
			type: Boolean,
			default: false,
		},
		dividerUnderHeader: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
