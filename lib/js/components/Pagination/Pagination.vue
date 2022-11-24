<template>
	<div
		:class="{
			pagination: true,
			'-compact': layout === PAGINATION_LAYOUTS.COMPACT,
		}">
		<div class='pagination__items -compact'>
			<icon-button
				:size='ICON_BUTTON_SIZES.MEDIUM'
				:color='ICON_BUTTON_COLORS.NEUTRAL'
				:icon='ICONS.FA_ANGLE_LEFT'
				:state='page <= 1 ? ICON_BUTTON_STATES.DISABLED: ICON_BUTTON_STATES.DEFAULT'
				@click.native='changePage(page - 1)' />

			<div class='pagination__compactItem'>
				<input
					class='pagination__input' type='number' :value='page'
					:min='1'
					:step='1'
					:max='lastPage'
					@input='changePage($event.target.value)'
				/>
				<span class='pagination__text'>z {{ lastPage }}</span>
			</div>

			<icon-button
				:size='ICON_BUTTON_SIZES.MEDIUM'
				:color='ICON_BUTTON_COLORS.NEUTRAL'
				:icon='ICONS.FA_ANGLE_RIGHT'
				:state='page >= lastPage ? ICON_BUTTON_STATES.DISABLED: ICON_BUTTON_STATES.DEFAULT'
				@click.native='changePage(page + 1)' />
		</div>

		<div class='pagination__items -default'>
			<template v-for='(n, index) in items'>
				<div
					v-if='isPage(n)'
					:key='index'
					class='pagination__itemWrapper'>
					<a
						class='pagination__item'
						:class="{'-selected': page === n }"
						@click.prevent.stop='changePage(n)'>
						{{ n }}
					</a>
				</div>
				<div
					v-else
					:key='index' class='pagination__itemWrapper'>
					<span class='pagination__ellipsis'>&hellip;</span>
				</div>
			</template>
		</div>
		<div class='pagination__accessory'>
			<slot name='accessory' />
		</div>
	</div>
</template>

<style scoped lang='scss'>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/radiuses';
@import '../../../styles/mixins/layout';

$pagination-item-width: 32px;
$pagination-item-height: 32px;

.pagination {
	$self: &;

	@include centeredSpread();

	flex-direction: row;
	background: lightblue; // TODO remove

	&.-compact {
		#{$self}__items.-compact {
			display: flex;
		}

		#{$self}__items.-default {
			display: none;
		}
	}


	&__items {
		display: none;
		flex-direction: row;
		align-items: center;
		padding: 0;

		&.-compact {
			display: flex;
		}

		@media #{breakpoint-s()} {
			&.-compact {
				display: none;
			}

			&.-default {
				display: flex;
			}
		}
	}

	&__input {
		// TODO
		padding: 6px 8px;
		width: 48px;
		background: $color-default-background;
		border: 1px solid $color-neutral-border-strong;
		box-shadow: inset 0px 1px 3px $color-neutral-border-strong;
		border-radius: 4px;
		height: $pagination-item-height;
	}

	&__text {
		@include textM();

		text-align: center;
		color: $color-neutral-text;
		padding: $space-xxxs;
	}

	&__compactItem {
		@include centeredSpread();

		flex-direction: row;
	}

	&__itemWrapper {
		@include textM();
		text-align: center;
		padding: $space-xxxxs;
	}

	&__item {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: $pagination-item-width;
		height: $pagination-item-height;
		background: $color-neutral-background-weak;
		border-radius: $radius-xs;
		color: $color-neutral-text;
		text-decoration: none;

		&.-selected {
			@include textBold();

			background: $color-neutral-background-medium;
			color: $color-neutral-text-heavy;
		}

		&:active, &:focus, &:hover {
			outline: none;
		}

		&:hover {
			background: $color-neutral-background-weak-hovered;
		}

		&:active {
			background: $color-neutral-background-weak-hovered;
			box-shadow: $shadow-inset-s;
		}
	}

	&__ellipsis {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 22px;
		height: $pagination-item-height;
		color: $color-neutral-text-weak;
	}
}
</style>

<script lang='ts'>
import { PAGINATION_LAYOUTS } from './Pagination.consts';
import IconButton from '../Buttons/IconButton/IconButton.vue';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES, ICON_BUTTON_STATES } from '../Buttons/IconButton';
import { ICONS } from '../Icon';

const fill = 'ellipsis';
const FIRST_PAGE_NUMBER = 1;
const ADJACENT_ITEMS = 1;

export default {
	name: 'Pagination',
	components: { IconButton },
	props: {
		layout: {
			type: String,
			default: PAGINATION_LAYOUTS.DEFAULT,
			validate(layout) {
				return Object.values(PAGINATION_LAYOUTS).includes(layout);
			},
		},
		currentPage: {
			type: Number,
			default: FIRST_PAGE_NUMBER,
			validate(page) {
				return page > 0;
			},
		},
		itemsPerPage: {
			type: Number,
			default: 30,
		},
		initialPage: {
			type: Number,
			default: FIRST_PAGE_NUMBER,
		},
		isCentered: {
			type: Boolean,
			default: false,
		},
		itemsTotalAmount: {
			type: Number,
			default: 600, // todo
		},
	},
	data() {
		return {
			PAGINATION_LAYOUTS: Object.freeze(PAGINATION_LAYOUTS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_STATES: Object.freeze(ICON_BUTTON_STATES),
			ICONS: Object.freeze(ICONS),
		};
	},
	computed: {
		lastPage() {
			return Math.ceil(this.itemsTotalAmount / this.itemsPerPage);
		},
		page() {
			if (this.pageIsSmallerThanFirstPage(this.currentPage)) {
				return FIRST_PAGE_NUMBER;
			}

			if (this.pageIsLargerThanLastPage(this.currentPage)) {
				return this.lastPage;
			}

			return this.currentPage;
		},
		items() {
			let items: Array<number | string> = [];

			let adjacentLeft = Math.min(this.page - this.initialPage, ADJACENT_ITEMS) + (ADJACENT_ITEMS - Math.min(this.lastPage - this.page, ADJACENT_ITEMS));
			console.log(adjacentLeft);
			let adjacentRight = Math.min(this.lastPage - this.page, ADJACENT_ITEMS) + (ADJACENT_ITEMS - Math.min(this.page - this.initialPage, ADJACENT_ITEMS));
			let displayInitial = this.page - adjacentLeft > this.initialPage;
			let displayLast = this.page + adjacentRight < this.lastPage;
			let hasLeftEllipsis = this.page - adjacentLeft > this.initialPage + 1;
			let hasRightEllipsis = this.page + adjacentRight < this.lastPage - 1;

			// Add extra item for not displayed ellipsis and initial and last pages
			adjacentLeft = adjacentLeft + !hasRightEllipsis + !displayLast;
			adjacentRight = adjacentRight + !hasLeftEllipsis + !displayInitial;

			// And now, calculate it again...
			displayInitial = this.page - adjacentLeft > this.initialPage;
			displayLast = this.page + adjacentRight < this.lastPage;
			hasLeftEllipsis = this.page - adjacentLeft > this.initialPage + 1;
			hasRightEllipsis = this.page + adjacentRight < this.lastPage - 1;

			if (displayInitial) {
				items.push(this.initialPage);
			}

			if (hasLeftEllipsis) {
				items.push(fill);
			}

			if (adjacentLeft > 0) {
				for (let n = Math.max(this.page - adjacentLeft, this.initialPage); n < this.page; n++) {
					items.push(n);
				}
			}

			items.push(this.page);

			if (adjacentRight > 0) {
				for (let n = this.page + 1; n <= Math.min(this.page + adjacentRight, this.lastPage); n++) {
					items.push(n);
				}
			}

			if (hasRightEllipsis) {
				items.push(fill);
			}
			if (displayLast) {
				items.push(this.lastPage);
			}

			return items;
		},
	},
	methods: {
		async changePage(page) {
			if (this.page === page) {
				return;
			}

			this.$emit('change-page', page);
		},
		isPage(item) {
			return typeof item === 'number';
		},
		pageIsSmallerThanFirstPage(page) {
			return page < FIRST_PAGE_NUMBER || page % FIRST_PAGE_NUMBER !== 0;
		},
		pageIsLargerThanLastPage(page) {
			return page > this.lastPage;
		},
	},
};
</script>
