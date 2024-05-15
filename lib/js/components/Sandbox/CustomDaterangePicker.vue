<template>
	<div class="ds-daterange-single-picker">
		<el-date-picker
			ref="daterangePickerRef"
			popper-class="ds-daterange-popper-single-picker"
			v-model="form.daterange"
			type="daterange"
			:prefix-icon="() => {}"
			:unlink-panels="true"
		>
			<template #range-separator>
				<div>
					Custom trigger: {{form.daterange || 'data nie wybrana' }}
				</div>
			</template>
		</el-date-picker>
	</div>
</template>

<style lang="scss">
.ds-daterange-single-picker {
	& .el-date-editor--daterange.el-input__wrapper {
		border: 4px solid #c27028;
		padding: 8px;
		background: #ff0;
		box-shadow: none;
		margin: 0 auto;
		height: 50px;

		.el-icon,
		.el-range-input {
			display: none;
		}
	}
}

.ds-daterange-popper-single-picker {
	& .el-picker-panel__content.is-right {
		display: none;
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
</style>

<script>
import {ElDatePicker, ElFormItem} from 'element-plus';

export default {
	name: 'CustomDaterangePicker',
	components: {
		ElFormItem,
		ElDatePicker,
	},
	props: {
		form: {
			type: Object,
			required: true,
		},
	},
};
</script>