<template>
	<div class="stepOne">
		Ten krok używa komponenty InputText Unstyled.
		<ds-input v-tooltip="'Podaj swoje imię'" type="text" name="firstName" label="Imię" />
		<ds-input type="text" name="lastName" label="Nazwisko (small)" size="small" />
		<ds-input type="text" name="email" label="E-mail (large)" size="large" />
		<ds-input type="password" name="password" label="Hasło" />
		<ds-checkbox name="accept" label="Akceptuję regulamin" />
		<ds-checkbox name="newsletter" label="Chcę newsletter" size="small" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.stepOne {
	display: flex;
	flex-direction: column;
	gap: $space-m;
	width: 50%;
	margin: auto;
}
</style>

<script lang="ts">
import DsInput from './Input.vue';
import DsCheckbox from './Checkbox.vue';

export default {
	name: 'StepOne',
	components: {
		DsCheckbox,
		DsInput,
	},
};
</script>
