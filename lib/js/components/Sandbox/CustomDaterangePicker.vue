<template>
	<div class="ds-dateRangeSinglePicker">
		<el-date-picker
			ref="daterangePickerRef"
			popper-class="ds-dateRangeSinglePicker__popOver"
			:popper-options="{ placement: 'bottom-start' }"
			v-model="form.daterange"
			type="daterange"
			value-format="DD.MM"
		>
			<template #range-separator>
				<div class="ds-dateRangeSinglePicker__trigger">
					<small>Zakres dat</small>
					<strong>{{selectedDateRange}}</strong>
				</div>
			</template>
		</el-date-picker>
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

.ds-dateRangeSinglePicker {
	& .el-date-editor--daterange.el-input__wrapper {
		display: flex;
		width: 150px;
		flex-direction: column;
		align-items: flex-start;
		gap: $space-4xs;
		height: auto;
		box-shadow: none;
		border-radius: $radius-s;
		border: 1px solid $color-neutral-border-weak;
		background: $color-neutral-background-medium;

		.el-icon,
		.el-range-input {
			display: none;
		}
	}

& .ds-dateRangeSinglePicker__trigger {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: $space-2xs;
		line-height: 14px;
		margin: $space-2xs 0;
	}

	&__popOver {
		& .el-picker-panel__content.is-right {
			padding: 0;
			position: initial;

			.el-date-range-picker__header {
				position: absolute;
				top: 16px;
				right: 16px;

				div {
					display: none;
				}
			}

			.el-date-table {
				display: none;
			}
		}

		& .el-picker-panel__content.is-left {
			width: 100%;
		}

		& .el-date-range-picker {
			width: 300px;
		}
		& .el-picker-panel__body {
			min-width: auto;
		}
	}
}
</style>

<script>
import { ElDatePicker } from 'element-plus';

export default {
	name: 'CustomDaterangePicker',
	components: {
		ElDatePicker,
	},
	props: {
		form: {
			type: Object,
			required: true,
		},
	},
	computed: {
		selectedDateRange() {
			if (this.form.daterange && this.form.daterange.length === 2) {
				return `${this.form.daterange[0]} - ${this.form.daterange[1]}`;
			}

			return '-';
		}
	}
};
</script>