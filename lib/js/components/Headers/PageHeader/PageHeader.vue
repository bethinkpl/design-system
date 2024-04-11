<template>
	<div
		class="pageHeader"
		:class="{ '-horizontal': mobileLayout === PAGE_HEADER_MOBILE_LAYOUTS.HORIZONTAL }"
	>
		<div class="pageHeader__wrapper">
			<div v-if="$slots.breadcrumbs" class="pageHeader__breadcrumbs">
				<slot name="breadcrumbs" />
			</div>
			<div class="pageHeader__contentWrapper">
				<div class="pageHeader__textWrapper">
					<div class="pageHeader__title">{{ pageTitle }}</div>
					<div v-if="supportingInfo" class="pageHeader__supportingText"
						>{{ supportingInfo }}
					</div>
				</div>

				<div v-if="$slots.actions" class="pageHeader__actions">
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

.pageHeader {
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

	&.-horizontal {
		#{$root}__contentWrapper {
			align-items: center;
			flex-direction: row;
		}
	}
}
</style>

<script lang="ts">
import DsDivider from '../../Divider';
import { PAGE_HEADER_MOBILE_LAYOUTS } from './PageHeader.consts';

export default {
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
			validator: (value) => Object.values(PAGE_HEADER_MOBILE_LAYOUTS).includes(value),
		},
	},
	data() {
		return {
			PAGE_HEADER_MOBILE_LAYOUTS: Object.freeze(PAGE_HEADER_MOBILE_LAYOUTS),
		};
	},
};
</script>
