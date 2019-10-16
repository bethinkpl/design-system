<template>
	<i :class="faIconClass" class="a-icon" />
</template>

<script>
export default {
	props: {
		faIconClass: {
			type: String,
			required: true
		}
	}
};
</script>
