<template>
	<select-list>
		<select-list-item
			v-for="n in count"
			:key="n"
			:label="`Item ${n}`"
			@click="$emit('pick', n)"
		/>
	</select-list>
</template>

<script setup lang="ts">
import SelectList from '../../components/SelectList/SelectList.vue';
import SelectListItem from '../../components/SelectList/SelectListItem/SelectListItem.vue';

defineProps<{ count: number }>();
defineEmits<{ pick: [n: number] }>();
</script>
