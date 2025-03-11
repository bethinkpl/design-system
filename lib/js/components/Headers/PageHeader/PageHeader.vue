<template>
	<div
		class="ds-pageHeader"
		:class="{ '-ds-horizontal': mobileLayout === PAGE_HEADER_MOBILE_LAYOUTS.HORIZONTAL }"
	>
		<div class="ds-pageHeader__wrapper">
			<div v-if="$slots.breadcrumbs" class="ds-pageHeader__breadcrumbs">
				<slot name="breadcrumbs" />
			</div>
			<div class="ds-pageHeader__contentWrapper">
				<div class="ds-pageHeader__textWrapper">
					<div class="ds-pageHeader__title">{{ pageTitle }}</div>
					<div v-if="supportingInfo" class="ds-pageHeader__supportingText"
						>{{ supportingInfo }}
					</div>
				</div>

				<div v-if="$slots.actions" class="ds-pageHeader__actions">
					<slot name="actions" />
				</div>
			</div>
		</div>
		<ds-divider v-if="divider" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/spacings';

.ds-pageHeader {
	$root: &;

	padding: 0;

	&__wrapper {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: $space-2xs;
		padding: $space-2xs 0;
	}

	&__contentWrapper {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: $space-2xs;
		justify-content: space-between;
		padding: 0;
		width: 100%;

		@media #{breakpoint-s()} {
			align-items: center;
			flex-direction: row;
		}
	}

	&__textWrapper {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: $space-4xs;
		justify-content: center;
		padding: $space-4xs 0;
	}

	&__title {
		@include pageHeading-s-default-bold;

		color: $color-default-text;
	}

	&__supportingText {
		@include info-m-default-regular;

		color: $color-neutral-text;
	}

	&__actions {
		flex-shrink: 0;
	}

	&.-ds-horizontal {
		#{$root}__contentWrapper {
			align-items: center;
			flex-direction: row;
		}
	}
}
</style>

<script lang="ts">
import DsDivider from '../../Divider';
import { PAGE_HEADER_MOBILE_LAYOUTS, PageHeaderMobileLayout } from './PageHeader.consts';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PageHeader',
	components: {
		DsDivider,
	},
	props: {
		pageTitle: {
			type: String,
			required: true,
		},
		supportingInfo: {
			type: String,
			default: null,
		},
		divider: {
			type: Boolean,
			default: true,
		},
		mobileLayout: {
			type: String,
			default: PAGE_HEADER_MOBILE_LAYOUTS.VERTICAL,
			validator: (value) =>
				Object.values(PAGE_HEADER_MOBILE_LAYOUTS).includes(value as PageHeaderMobileLayout),
		},
	},
	data() {
		return {
			PAGE_HEADER_MOBILE_LAYOUTS: Object.freeze(PAGE_HEADER_MOBILE_LAYOUTS),
		};
	},
});
</script>
