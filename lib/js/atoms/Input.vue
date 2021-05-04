<template>
	<mcw-textfield v-model="text" label="Hint text" />
</template>

<script lang='ts'>
export default {
	name: 'Input',
	data() {
		return {
			text: '',
		};
	}
}
</script>