<template>
	<el-form-item label="Switch 2" prop="secondSwitch">
		<el-switch v-model="form.secondSwitch" />
	</el-form-item>
	<el-form-item label="Text 2" prop="secondText">
		<el-input v-model="form.secondText" />
	</el-form-item>
</template>

<script>
import { ElSwitch, ElInput, ElFormItem } from 'element-plus';

export default {
	name: 'MyComponent',
	components: {
		ElSwitch,
		ElFormItem,
		ElInput,
	},
	props: {
		form: {
			type: Object,
			required: true,
		},
	},
};
</script>