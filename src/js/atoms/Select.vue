<template>
	<select
		:id="id"
		:value="value"
		class="a-select"
		:required="isRequired"
		@input="$emit('input', $event.target.value)"
	>
		<option value="" disabled>Wybierz wartość</option>
		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.text }}
		</option>
	</select>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			default: undefined,
		},
		isRequired: {
			type: Boolean,
			default: false,
		},
		options: {
			type: Array,
			required: true,
		},
		value: {
			type: [Number, String],
			required: true,
		},
	},
};
</script>
