<template>
	<section
		class="o-card"
		:style="styles"
		@click="e => collapsed && toggleCollapse(e)"
	>
		<header class="m-cardHeader">
			<slot name="header">
				<wnl-title
					v-if="title"
					:level="4"
					:text="title"
					class="-textBold"
				/>
			</slot>
			<div>
				<wnl-icon fa-icon-class="fa-question-circle-o" class="-cadetBlue" />
				<wnl-icon
					:fa-icon-class="collapseIconClass"
					class="-cadetBlue"
					@click.native.stop="toggleCollapse"
				/>
			</div>
		</header>
		<slot name="summary" />
		<template v-if="!collapsed">
			<slot name="content" />
			<slot name="footer" />
		</template>
	</section>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/shadows';

	.o-card {
		border-radius: 6px;
		box-shadow: $medium-shadow;
		padding: $space-l;
	}

	.m-cardHeader {
		display: flex;
		margin-bottom: $space-l;

		.a-title {
			flex-grow: 1;
		}

		.a-icon {
			cursor: pointer;
			margin-right: $space-xs;

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
</style>

<script>
import WnlTitle from 'js/components/global/styleguide/atoms/Title';
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export default {
	components: {
		WnlTitle,
		WnlIcon
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		borderColor: {
			type: String,
			default: '',
		}
	},
	data() {
		return {
			collapsed: true
		};
	},
	computed: {
		collapseIconClass() {
			return this.collapsed ? 'fa-angle-down' : 'fa-angle-up';
		},
		styles() {
			return {
				...(this.borderColor && { borderLeft: `6px solid ${this.borderColor}` }),
				...(this.collapsed && { cursor: 'pointer' }),
			};
		}
	},
	methods: {
		toggleCollapse() {
			this.collapsed = !this.collapsed;
		},
	}
};
</script>
