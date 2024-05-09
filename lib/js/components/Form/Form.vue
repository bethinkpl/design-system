<template>
	<form-kit type="form" #default="{ value }" :actions="false">
		<slot />
		<pre>{{ value }}</pre>
	</form-kit>
</template>

<script lang="ts">
export default {
	name: 'Form',
};
</script>
