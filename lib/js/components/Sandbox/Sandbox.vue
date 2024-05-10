<template>
	<div>
		<prime-button :label="buttonLabel" @click="onSubmit" />
		<br /><br />
		<float-label>
			<calendar id="cal" v-model="calendarValue" />
			<label for="cal">Calendar</label>
		</float-label>
		<input-switch v-model="checked" />
	</div>
</template>

<style scoped lang="scss">
</style>

<script lang="ts">
import PrimeButton from 'primevue/button';
import Calendar from 'primevue/calendar';
import FloatLabel from 'primevue/floatlabel';
import InputSwitch from 'primevue/inputswitch';

export default {
	name: 'Sandbox',
	components: {
		Calendar,
		FloatLabel,
		PrimeButton,
		InputSwitch,
	},
	data() {
		return {
			calendarValue: null,
			checked: false,
			buttonLabel: 'Submit',
		};
	},
	methods: {
		onSubmit() {
			this.buttonLabel = this.buttonLabel + ' Submit';
		}
	}
};
</script>
