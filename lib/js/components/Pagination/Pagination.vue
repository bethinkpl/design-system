<template>
	<div
		:class="{
			pagination: true,
			'-compact': layout === PAGINATION_LAYOUTS.COMPACT,
		}"
	>
		<div class="pagination__items -default">
			<template v-for="(n, index) in items">
				<div :key="index" class="pagination__itemWrapper">
					<a
						v-if="isPage(n)"
						class="pagination__item"
						:class="{ '-selected': page === n }"
						@click.prevent.stop="changePage(n)"
					>
						{{ n }}
					</a>

					<span v-else class="pagination__ellipsis">&hellip;</span>
				</div>
			</template>
		</div>

		<div class="pagination__items -compact">
			<icon-button
				:size="ICON_BUTTON_SIZES.MEDIUM"
				:color="ICON_BUTTON_COLORS.NEUTRAL"
				:icon="ICONS.FA_ANGLE_LEFT"
				:state="page <= 1 ? ICON_BUTTON_STATES.DISABLED : ICON_BUTTON_STATES.DEFAULT"
				@click.native="changePage(page - 1)"
			/>

			<div class="pagination__compactItem">
				<input
					class="pagination__input"
					type="number"
					:value="page"
					:min="1"
					:step="1"
					:max="lastPage"
					@input="onInputValueChange"
				/>
				<span class="pagination__text">z {{ lastPage }}</span>
			</div>

			<icon-button
				:size="ICON_BUTTON_SIZES.MEDIUM"
				:color="ICON_BUTTON_COLORS.NEUTRAL"
				:icon="ICONS.FA_ANGLE_RIGHT"
				:state="page >= lastPage ? ICON_BUTTON_STATES.DISABLED : ICON_BUTTON_STATES.DEFAULT"
				@click.native="changePage(page + 1)"
			/>
		</div>

		<div class="pagination__accessorySlot">
			<slot name="accessory" />
		</div>
	</div>
</template>

<style scoped lang="scss">
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

	&.-compact {
		#{$self}__items.-compact {
			display: flex !important;
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

		@media #{breakpoint-s()} {
			&.-default {
				display: flex;
			}

			&.-compact {
				display: none !important;
			}
		}

		&.-compact {
			display: flex;
		}
	}

	&__input {
		padding: $space-xxxs $space-xxs;
		background: $color-default-background;
		border: 1px solid $color-neutral-border-strong;
		box-shadow: inset 0 1px 3px $color-neutral-border-strong;
		border-radius: $radius-s;
		height: $pagination-item-height;

		&:focus {
			outline: none;
		}
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

		&:active,
		&:focus,
		&:hover {
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

<script lang="ts">
import { PAGINATION_LAYOUTS } from './Pagination.consts';
import IconButton from '../Buttons/IconButton/IconButton.vue';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES, ICON_BUTTON_STATES } from '../Buttons/IconButton';
import { ICONS } from '../Icon';

const MAX_DISPLAYED_ITEMS = 7;
const ELLIPSIS_FILL = 'ellipsis';
const FIRST_PAGE_NUMBER = 1;

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
			required: true,
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
			let delta: number;
			if (this.lastPage <= MAX_DISPLAYED_ITEMS) {
				// delta === 7: [1 2 3 4 5 6 7]
				delta = 7;
			} else {
				// delta === 2: [1 ... 4 5 6 ... 10]
				// delta === 4: [1 2 3 4 5 ... 10]
				delta = this.currentPage > 4 && this.currentPage < this.lastPage - 3 ? 2 : 4;
			}

			const range = {
				start: Math.round(this.currentPage - delta / 2),
				end: Math.round(this.currentPage + delta / 2),
			};

			if (range.start - 1 === 1 || range.end + 1 === this.lastPage) {
				range.start += 1;
				range.end += 1;
			}

			let pages: any =
				this.currentPage > delta
					? this.getRange(
							Math.min(range.start, this.lastPage - delta),
							Math.min(range.end, this.lastPage),
					  )
					: this.getRange(1, Math.min(this.lastPage, delta + 1));

			const withDots = (value, pair) => (pages.length + 1 !== this.lastPage ? pair : [value]);

			if (pages[0] !== 1) {
				pages = withDots(1, [1, ELLIPSIS_FILL]).concat(pages);
			}

			if (pages[pages.length - 1] < this.lastPage) {
				pages = pages.concat(withDots(this.lastPage, [ELLIPSIS_FILL, this.lastPage]));
			}

			return pages;
		},
	},
	methods: {
		getRange(start: number, end: number) {
			return Array(end - start + 1)
				.fill(null)
				.map((_v, i) => i + start);
		},
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
		onInputValueChange(event) {
			const page = +event.target.value;
			if (this.pageIsSmallerThanFirstPage(page)) {
				return this.changePage(FIRST_PAGE_NUMBER);
			}

			if (this.pageIsLargerThanLastPage(page)) {
				return this.changePage(this.lastPage);
			}

			this.changePage(page);
		},
	},
};
</script>
