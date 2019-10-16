<template>
	<section class="o-card">
		<header class="o-card__header">
			<wnl-title :level="3" :text="title" />
			<div class="o-card__header__actions">
				<span class="a-icon fa-question-circle-o -cadetBlue"></span>
				<span :class="[collapsed ? 'fa-angle-down' : 'fa-angle-up']" class="a-icon -cadetBlue"></span>
			</div>
		</header>
		<slot/>
	</section>
</template>

<style lang="scss" scoped>
	.o-card__header {
		display: flex;
	}
</style>

<script>
import WnlTitle from 'js/components/global/styleguide/atoms/Title';

export default {
	components: {
		WnlTitle
	},
	props: {
		title: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			collapsed: true
		};
	}
};
</script>
