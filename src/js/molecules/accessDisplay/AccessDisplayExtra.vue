<template>
	<span v-if="access.extra.role">Rola: {{ access.extra.role }}</span>
	<span v-else-if="access.extra.reason">
		{{ access.extra.reason }}
	</span>
	<span v-else-if="access.order_id">
		Zamówienie:
		<router-link :to="{ name: 'my-orders' }">{{ access.order_id }}</router-link>
		<span v-if="access.extra.comment">
			{{ access.extra.comment }}
		</span>
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
