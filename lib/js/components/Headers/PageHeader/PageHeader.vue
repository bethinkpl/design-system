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
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: $space-xxs 0;
		gap: $space-xxs;
	}

	&__contentWrapper {
		display: flex;
		padding: 0;
		gap: $space-xs;
		width: 100%;
		justify-content: space-between;
		flex-direction: column;
		align-items: flex-start;

		@media #{breakpoint-s()} {
			flex-direction: row;
			align-items: center;
		}
	}

	&__textWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: $space-xxxxs 0;
		gap: $space-xxxxs;
	}

	&__title {
		@include pageHeading-s-default-bold;
		color: $color-default-text;
	}

	&__supportingText {
		@include info-m-default-regular;
		color: $color-neutral-text;
	}

	&.-horizontal {
		#{$root}__contentWrapper {
			flex-direction: row;
			align-items: center;
		}
	}
}
</style>

<script lang="ts">
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
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
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			PAGE_HEADER_MOBILE_LAYOUTS: Object.freeze(PAGE_HEADER_MOBILE_LAYOUTS),
		};
	},
};
</script>
