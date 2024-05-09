<template>
	<div class="dsSampleTextInput">
		Here comes sample text input:
		<FormKit
			type="text"
			name="name"
			outer-class="text-sm"
			id="name"
			label="Name"
			help="Your full name"
			placeholder="Jon Doe"
			prefixIcon="check"
		>
			<template #prefix>
				<p>test</p>
			</template>
		</FormKit>
		<FormKit type="form" #default="{ value }" :actions="false">
			<FormKit
				type="text"
				name="name2"
				outer-class="text-sm"
				id="name2"
				label="Name"
				help="Color"
				placeholder="red"
			/>
			<pre>{{ value }}</pre>
		</FormKit>
	</div>
</template>

<style lang="scss" scoped>
.dsSampleTextInput {
	color: #f00;
}
</style>

<script lang="ts">
export default {
	name: 'SampleTextInput',
};
</script>
