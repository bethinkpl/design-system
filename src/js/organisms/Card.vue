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
				/>
			</slot>
			<div>
				<wnl-help-modal
					v-if="clarification"
					:text="clarification"
				/>
				<wnl-icon
					:fa-icon-class="collapseIconClass"
					class="-cadetBlue"
					@click.native.stop="toggleCollapse"
				/>
			</div>
		</header>
		<div
			v-if="$slots.summary"
			class="m-cardSummary"
			:class="{'-collapsed': collapsed}"
		>
			<slot name="summary" />
		</div>
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

	.m-cardSummary {
		margin-bottom: $space-l;

		&.-collapsed {
			margin-bottom: 0;
		}
	}
</style>

<script>
import WnlTitle from 'js/components/global/styleguide/atoms/Title';
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import WnlHelpModal from 'js/components/global/styleguide/molecules/HelpModal.vue';

export default {
	components: {
		WnlHelpModal,
		WnlIcon,
		WnlTitle,
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		clarification: {
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
