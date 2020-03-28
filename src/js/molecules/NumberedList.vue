<template>
	<div
		class="m-numberedList"
	>
		<div
			v-for="index in listItemsCount"
			:key="index"
			class="m-numberedList__row"
		>
			<wnl-number-in-circle
				:index="colorAlizarinCrimson ? null : index"
				:medium="mediumPoints"
				:color-alizarin-crimson="colorAlizarinCrimson"
			>{{index}}</wnl-number-in-circle>
			<div class="m-numberedList__row__content">
				<slot :name="`item${index}`" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/spacings';

	.m-numberedList {
		display: flex;
		flex-direction: column;

		&__row {
			align-items: flex-start;
			display: flex;
			margin-bottom: $space-m;

			&:last-child {
				margin-bottom: 0;
			}

			&__content {
				flex: 1 1 auto;
				padding-left: $space-s;
			}
		}
	}
</style>

<script>
import WnlNumberInCircle from 'js/components/global/styleguide/atoms/NumberInCircle';
export default {
	name: 'OnboardingNumberedList',
	components: {
		WnlNumberInCircle
	},
	props: {
		listItemsCount: {
			type: Number,
			required: true,
		},
		mediumPoints: {
			type: Boolean,
			default: false,
		},
		colorAlizarinCrimson: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		listItemColorClass(index) {
			return !this.colorAlizarinCrimson ? `-is${index}` : null;
		}
	},
};
</script>
