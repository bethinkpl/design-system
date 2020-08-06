<template>
	<span v-if="access.extra.role">
		Rola: {{access.extra.role}}
	</span>
	<span v-else-if="access.order_id">
		Zamówienie nr: <router-link :to="{ name: 'my-orders' }">{{access.order_id}}</router-link>
	</span>
</template>


<script>

export default {
	props: {
		access: {
			type: Object,
			required: true,
		},
	},
};
</script>
