<template>
	<auto-complete v-model="value" v-bind="computedProps" @complete="search" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AutoComplete, { AutoCompleteCompleteEvent, AutoCompleteProps } from 'primevue/autocomplete';

interface Item {
	name: string;
}

interface Props {
	options: Array<Item>;
	autoCompleteProps?: AutoCompleteProps;
}

const value = defineModel();
const props = defineProps<Props>();

const computedProps = computed<AutoCompleteProps>(() => {
	const { options, autoCompleteProps } = props;
	return {
		...autoCompleteProps,
		placeholder: 'Select an item...',
		emptySearchMessage: 'Brak',
		delay: 0,
		optionLabel: 'name',
		suggestions: items.value,
		forceSelection: true,
	};
});

const items = ref<Array<Item>>([]);

function search(event: AutoCompleteCompleteEvent) {
	console.log(event.query);
	items.value = props.options.filter((item) =>
		item.name.toLowerCase().includes(event.query.toLowerCase()),
	);
}
</script>
