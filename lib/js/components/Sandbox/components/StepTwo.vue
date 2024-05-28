<template>
	<div class="stepTwo">
		<ds-date-picker label="Wybierz zakres dat" name="dateRange" />
		<ds-date-picker
			label="Wybierz drugi zakres dat"
			name="dateRange2"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.stepTwo {
	display: flex;
	flex-direction: column;
	gap: $space-m;
	width: 50%;
	margin: auto;
}
</style>

<script lang="ts">
import DsDatePicker from './DatePicker.vue';

export default {
	name: 'StepTwo',
	components: {
		DsDatePicker,
	},
	props: {
		form: {
			type: Object,
			required: true,
		},
	},
};
</script>
