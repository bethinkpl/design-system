<template>
	<FormKit type="form" #default="{ value }" :actions="false">
		<slot />
		<pre>{{ value }}</pre>
	</FormKit>
</template>

<script lang="ts">
export default {
	name: 'Form',
};
</script>
