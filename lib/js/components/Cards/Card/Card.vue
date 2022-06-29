<template>
	<div class="card">
		<div
			v-if="$slots.header"
			class="card__header"
			:class="{ '-withPadding': headerHasPadding }"
		>
			<slot name="header"></slot>
		</div>
		<ds-divider
			v-if="$slots.header && dividerUnderHeader"
			class="card__headerDivider"
			:class="{ '-withHorizontalMargin': headerHasPadding }"
		/>
		<div class="card__content">
			<slot name="content"></slot>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/colors/tokens';

.card {
	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-s;

	&__header {
		&.-withPadding {
			padding: $space-s;
		}
	}

	&__headerDivider {
		&.-withHorizontalMargin {
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
