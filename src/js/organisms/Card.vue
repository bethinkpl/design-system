<template>
	<section class="o-card" :style="borderStyle">
		<header class="m-cardHeader">
			<wnl-title
				:level="4"
				:text="title"
			/>
			<div>
				<wnl-icon fa-icon-class="fa-question-circle-o" class="-cadetBlue" />
				<wnl-icon
					:fa-icon-class="collapseIconClass"
					class="-cadetBlue"
					@click.native="toggleCollapse"
				/>
			</div>
		</header>
		<slot name="summary" />
		<slot v-if="!collapsed" name="content" />
	</section>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/spacings';

	.o-card {
		border-radius: 6px;
		box-shadow: 0 2px 6px rgba(89, 89, 89, 0.25);
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
			required: true
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
		borderStyle() {
			if (!this.borderColor) return {};

			return {
				borderLeft: `${this.borderColor} 6px solid`
			};
		}
	},
	methods: {
		toggleCollapse() {
			this.collapsed = !this.collapsed;
		}
	}
};
</script>
