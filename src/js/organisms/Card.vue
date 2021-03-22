<template>
	<section class="o-card" :style="styles" @click="(e) => collapsed && toggleCollapse(e)">
		<header class="m-cardHeader">
			<slot name="header">
				<h5 v-if="title" class="m-cardHeader__title -headlineL">{{ title }}</h5>
			</slot>
			<div>
				<wnl-icon
					:icon="collapseIcon"
					class="-cadetGray"
					:size="ICON_SIZES.SMALL"
					@click.native.stop="toggleCollapse"
				/>
			</div>
		</header>
		<div v-if="$slots.summary" class="m-cardSummary" :class="{ '-collapsed': collapsed }">
			<slot name="summary" />
		</div>
		<template v-if="!collapsed">
			<slot name="content" />
			<slot name="footer" />
		</template>
	</section>
</template>

<style lang="scss" scoped>
@import 'src/styles/settings/spacings';
@import 'src/styles/settings/shadows';

.o-card {
	border-radius: 6px;
	box-shadow: $small-shadow;
	padding: $space-l;
}

.m-cardHeader {
	display: flex;
	justify-content: space-between;
	margin-bottom: $space-l;

	&__title {
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
import WnlIcon, { ICONS, ICON_SIZES } from 'src/js/atoms/Icon.vue';

export default {
	name: 'Card',
	components: {
		WnlIcon,
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		borderColor: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			collapsed: true,
		};
	},
	computed: {
		collapseIcon() {
			return this.collapsed ? ICONS.FA_ANGLE_DOWN : ICONS.FA_ANGLE_UP;
		},
		styles() {
			return {
				...(this.borderColor && { borderLeft: `6px solid ${this.borderColor}` }),
				...(this.collapsed && { cursor: 'pointer' }),
			};
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
	methods: {
		toggleCollapse() {
			this.collapsed = !this.collapsed;
			this.$emit('toggle-collapsed', this.collapsed);
		},
	},
};
</script>
