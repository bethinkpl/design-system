<template>
	<div class="selectList">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="selectList__item"
			:class="getClassNamesForItem(item)"
			@click="onItemClick(item)"
		>
			<divider v-if="item.type === 'divider'" />
			<template v-else-if="item.type === 'text'">
				<ds-icon
					v-if="item.icon"
					class="selectList__itemIcon"
					:icon="item.icon"
					:size="ICON_SIZES.X_SMALL"
				/>
				{{ item.label }}
			</template>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.selectList {
	padding: $space-xxs 0;

	&__item {
		background-color: $color-neutral-background-ghost;

		&.-divider {
			padding: $space-xxs 0;
		}

		&.-text {
			@include headlineS();

			color: $color-neutral-text-heavy;
			cursor: pointer;
			display: flex;
			padding: $space-xs;

			&:focus {
				background-color: $color-neutral-background-ghost-focused;
			}

			&:hover {
				background-color: $color-neutral-background-ghost-hovered;
			}

			&:active {
				background-color: $color-neutral-background-ghost-pressed;
			}
		}

		&.-selected {
			background-color: $color-neutral-background;
		}
	}

	&__itemIcon {
		color: $color-neutral-icon-strong;
		margin-right: $space-xxxs;
	}
}
</style>

<script lang="ts">
import { SELECT_LIST_SIZES } from './SelectList.consts';
import DsIcon, { ICONS, ICON_SIZES } from '../Icon';
import { PropType } from 'vue';
import { SelectListItem } from './SelectList.domain';
import Divider from '../Divider/Divider.vue';

export default {
	name: 'SelectList',
	components: {
		Divider,
		DsIcon,
	},
	props: {
		items: {
			type: Array as PropType<Array<SelectListItem>>,
			required: true,
		},
		// Unused for now but we want clients to specify size explicitly
		size: {
			type: String,
			required: true,
			validate(size) {
				Object.values(SELECT_LIST_SIZES).includes(size);
			},
		},
		value: {
			type: String,
			default: null,
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
	methods: {
		getClassNamesForItem(item: SelectListItem): Array<string> {
			const classNames: Array<string> = [];

			if (item.type === 'text') {
				classNames.push('-text');

				if (item.value === this.value) {
					classNames.push('-selected');
				}
			}

			if (item.type === 'divider') {
				classNames.push('-divider');
			}

			return classNames;
		},
		onItemClick(item: SelectListItem): void {
			if (item.type === 'text') {
				this.$emit('input', item.value);
			}
		},
	},
};
</script>
