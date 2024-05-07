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
