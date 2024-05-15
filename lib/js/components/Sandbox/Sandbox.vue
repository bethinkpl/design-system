<template>
	Form:
	<el-form ref="myForm" :model="form" :rules="rules" scroll-to-error label-position="top">
		<el-form-item label="Text" prop="text">
			<el-input v-model="form.text" placeholder="Please input"/>
		</el-form-item>
		<el-form-item label="Password" prop="password">
			<el-input
				v-model="form.password"
				type="password"
				placeholder="Please input password"
				show-password
				onpaste="return false;"
			/>
		</el-form-item>
		<el-form-item label="Daterange with single calendar" prop="daterange">
			<custom-daterange-picker :form="form" />
		</el-form-item>
		<hr/>
		<el-form-item label="Cascader" prop="cascader">
			<el-cascader
				size="small"
				v-model="form.cascader"
				:options="options"
			/>
		</el-form-item>
		<hr/>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">Submit</el-button>
		</el-form-item>
	</el-form>
	<pre>{{ JSON.stringify(form) }}</pre>
	<hr/>
	<hr/>
	<hr/>
	<el-button>Test</el-button>
	<hr/>
	<el-dropdown class="m-4" type="primary">
		<el-button type="primary" plain>
			Dropdown List
		</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>Action 1</el-dropdown-item>
				<el-dropdown-item>Action 2</el-dropdown-item>
				<el-dropdown-item>Action 3</el-dropdown-item>
				<el-dropdown-item>Action 4</el-dropdown-item>
				<el-dropdown-item>Action 5</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script>

import 'element-plus/es/components/date-picker/style/css';
import 'element-plus/es/components/dropdown/style/css';
import 'element-plus/es/components/dropdown-item/style/css';
import 'element-plus/es/components/cascader/style/css';
import 'element-plus/es/components/switch/style/css';
import 'element-plus/es/components/button/style/css';
import 'element-plus/es/components/form/style/css';
import 'element-plus/es/components/form-item/style/css';

import 'element-plus/es/components/form-item/style/css';

import {
	ElButton,
	ElCascader,
	ElInput,
	ElDatePicker,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElSwitch,
	ElForm,
	ElFormItem
} from 'element-plus';
import {reactive} from 'vue';
import MyComponent from "./MyComponent.vue";
import CustomDaterangePicker from "./CustomDaterangePicker.vue";

export default {
	name: 'Sandbox',
	components: {
		CustomDaterangePicker,
		ElButton,
		ElDatePicker,
		ElDropdown,
		ElDropdownItem,
		ElDropdownMenu,
		ElCascader,
		ElSwitch,
		ElForm,
		ElInput,
		ElFormItem,
		MyComponent,
	},
	data() {
		const rules = reactive({
			text: [
				{required: true, message: 'Please input Activity name', trigger: 'blur'},
				{min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
			],
			daterange: [
				{required: true, message: 'Please select daterange', trigger: 'blur'},
			],
			cascader: [{required: true, message: 'Please select a cascader', trigger: 'change'}],
			switch: [{required: true, message: 'Please select a switch', trigger: 'change'}],
			secondSwitch: [{required: true, message: 'Please select a random', trigger: 'change'}],
			secondText: [
				{required: true, message: 'Please input Activity name', trigger: 'blur'},
				{min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
			],
		});
		return {
			rules,
			form: reactive({
				daterange: null,
				text: '',
				cascader: null,
				switch: false,
				secondSwitch: true,
				secondText: '1',
			}),
			options: [
				{
					value: 'guide',
					label: 'Guide',
					children: [
						{
							value: 'disciplines',
							label: 'Disciplines',
							children: [
								{
									value: 'consistency',
									label: 'Consistency',
								},
								{
									value: 'feedback',
									label: 'Feedback',
								},
								{
									value: 'efficiency',
									label: 'Efficiency',
								},
								{
									value: 'controllability',
									label: 'Controllability',
								},
							],
						},
						{
							value: 'navigation',
							label: 'Navigation',
							children: [
								{
									value: 'side nav',
									label: 'Side Navigation',
								},
								{
									value: 'top nav',
									label: 'Top Navigation',
								},
							],
						},
					],
				},
				{
					value: 'component',
					label: 'Component',
					children: [
						{
							value: 'basic',
							label: 'Basic',
							children: [
								{
									value: 'layout',
									label: 'Layout',
								},
								{
									value: 'color',
									label: 'Color',
								},
								{
									value: 'typography',
									label: 'Typography',
								},
								{
									value: 'icon',
									label: 'Icon',
								},
								{
									value: 'button',
									label: 'Button',
								},
							],
						},
						{
							value: 'form',
							label: 'Form',
							children: [
								{
									value: 'radio',
									label: 'Radio',
								},
								{
									value: 'checkbox',
									label: 'Checkbox',
								},
								{
									value: 'input',
									label: 'Input',
								},
								{
									value: 'input-number',
									label: 'InputNumber',
								},
								{
									value: 'select',
									label: 'Select',
								},
								{
									value: 'cascader',
									label: 'Cascader',
								},
								{
									value: 'switch',
									label: 'Switch',
								},
								{
									value: 'slider',
									label: 'Slider',
								},
								{
									value: 'time-picker',
									label: 'TimePicker',
								},
								{
									value: 'date-picker',
									label: 'DatePicker',
								},
								{
									value: 'datetime-picker',
									label: 'DateTimePicker',
								},
								{
									value: 'upload',
									label: 'Upload',
								},
								{
									value: 'rate',
									label: 'Rate',
								},
								{
									value: 'form',
									label: 'Form',
								},
							],
						},
						{
							value: 'data',
							label: 'Data',
							children: [
								{
									value: 'table',
									label: 'Table',
								},
								{
									value: 'tag',
									label: 'Tag',
								},
								{
									value: 'progress',
									label: 'Progress',
								},
								{
									value: 'tree',
									label: 'Tree',
								},
								{
									value: 'pagination',
									label: 'Pagination',
								},
								{
									value: 'badge',
									label: 'Badge',
								},
							],
						},
						{
							value: 'notice',
							label: 'Notice',
							children: [
								{
									value: 'alert',
									label: 'Alert',
								},
								{
									value: 'loading',
									label: 'Loading',
								},
								{
									value: 'message',
									label: 'Message',
								},
								{
									value: 'message-box',
									label: 'MessageBox',
								},
								{
									value: 'notification',
									label: 'Notification',
								},
							],
						},
						{
							value: 'navigation',
							label: 'Navigation',
							children: [
								{
									value: 'menu',
									label: 'Menu',
								},
								{
									value: 'tabs',
									label: 'Tabs',
								},
								{
									value: 'breadcrumb',
									label: 'Breadcrumb',
								},
								{
									value: 'dropdown',
									label: 'Dropdown',
								},
								{
									value: 'steps',
									label: 'Steps',
								},
							],
						},
						{
							value: 'others',
							label: 'Others',
							children: [
								{
									value: 'dialog',
									label: 'Dialog',
								},
								{
									value: 'tooltip',
									label: 'Tooltip',
								},
								{
									value: 'popover',
									label: 'Popover',
								},
								{
									value: 'card',
									label: 'Card',
								},
								{
									value: 'carousel',
									label: 'Carousel',
								},
								{
									value: 'collapse',
									label: 'Collapse',
								},
							],
						},
					],
				},
				{
					value: 'resource',
					label: 'Resource',
					children: [
						{
							value: 'axure',
							label: 'Axure Components',
						},
						{
							value: 'sketch',
							label: 'Sketch Templates',
						},
						{
							value: 'docs',
							label: 'Design Documentation',
						},
					],
				},
			]
		}
	},
	methods: {
		async onSubmit() {
			await this.$refs.myForm.validate((valid, fields) => {
				console.log(fields);
				if (valid) {
					console.log('submit!')
				} else {
					console.log('error submit!', fields)
				}
			})
		}
	}
};
</script>