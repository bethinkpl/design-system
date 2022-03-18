<template>
	<div :class="{ 'theme-bodywork': true }">
		<colors-list
			:colors-lists="[{ title: 'Tokens Bodywork', list: tokensBodywork }]"
		></colors-list>
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/colors/raw-bodywork';
</style>

<script lang="ts">
import ColorsList from './../ColorsList.vue';

export default {
	name: 'ColorsTokensBodywork',
	components: {
		ColorsList,
	},
	props: {
		tokensBodywork: {
			type: Object,
			required: true,
		},
	},
};
</script>
