<template>
	<div class="pageHeader">
		<div class="pageHeader__wrapper">
			<slot v-if="$slots.breadcrumbs" name="breadcrumbs" />
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
		padding: 8px 0;
		gap: 8px;
	}

	&__contentWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0;
		gap: 12px;
	}

	&__textWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 4px 0;
		gap: 4px;
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
	}
}
</style>

<script lang="ts">
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
import DsDivider from '../../Divider';

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
			// TODO should we use breakpoints?
			type: String,
			default: 'vertical',
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
};
</script>
