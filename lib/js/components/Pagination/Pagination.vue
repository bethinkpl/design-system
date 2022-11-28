<template>
	<div
		class="ds-pagination"
		:class="{
			'-compact': layout === PAGINATION_LAYOUTS.COMPACT,
			'-centered': isCentered && !$slots.accessory,
		}"
	>
		<div class="ds-pagination__itemsWrapper">
			<div class="ds-pagination__items -default">
				<template v-for="(navigationItem, index) in navigationItems">
					<div :key="index" class="ds-pagination__itemWrapper">
						<span
							v-if="isPage(navigationItem)"
							class="ds-pagination__item"
							:class="{ '-selected': currentPageSanitized === navigationItem }"
							role="link"
							@click.prevent.stop="changePage(navigationItem)"
						>
							{{ navigationItem }}
						</span>

						<span v-else class="ds-pagination__ellipsis">&hellip;</span>
					</div>
				</template>
			</div>

			<div class="ds-pagination__items -compact">
				<icon-button
					:size="ICON_BUTTON_SIZES.MEDIUM"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:icon="ICONS.FA_ANGLE_LEFT"
					:state="
						currentPageSanitized <= 1
							? ICON_BUTTON_STATES.DISABLED
							: ICON_BUTTON_STATES.DEFAULT
					"
					@click.native="changePage(currentPageSanitized - 1)"
				/>

				<div class="ds-pagination__compactItem">
					<input
						class="ds-pagination__input"
						type="number"
						:value="currentPageSanitized"
						:min="1"
						:step="1"
						:max="lastPage"
						@input="onInputValueChange"
					/>
					<span class="ds-pagination__text">z {{ lastPage }}</span>
				</div>

				<icon-button
					:size="ICON_BUTTON_SIZES.MEDIUM"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:icon="ICONS.FA_ANGLE_RIGHT"
					:state="
						currentPageSanitized >= lastPage
							? ICON_BUTTON_STATES.DISABLED
							: ICON_BUTTON_STATES.DEFAULT
					"
					@click.native="changePage(currentPageSanitized + 1)"
				/>
			</div>
		</div>

		<div class="ds-pagination__accessorySlot">
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

$pagination-item-min-width: 32px;
$pagination-input-height: 32px;
$pagination-ellipsis-width: 22px;

.ds-pagination {
	$self: &;

	@include centeredSpread();

	flex-grow: 1;
	flex-direction: row;
	align-items: stretch;

	&__itemsWrapper {
		display: flex;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: center;
	}

	&.-compact {
		#{$self}__items.-compact {
			display: flex !important;
		}

		#{$self}__items.-default {
			display: none;
		}
	}

	&.-centered {
		#{$self}__itemsWrapper {
			flex-grow: 1;
			align-items: center;
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
		height: $pagination-input-height;

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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: $pagination-item-min-width;
		background: $color-neutral-background-weak;
		border-radius: $radius-xs;
		color: $color-neutral-text;
		padding: $space-xxxs;

		&.-selected {
			@include textBold();

			background: $color-neutral-background-medium;
			color: $color-neutral-text-heavy;
		}

		&:hover:not(.-selected) {
			background: $color-neutral-background-weak-hovered;
			cursor: pointer;
		}

		&:active:not(.-selected) {
			background: $color-neutral-background-weak-hovered;
			box-shadow: $shadow-inset-s;
		}
	}

	&__ellipsis {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: $pagination-ellipsis-width;
		color: $color-neutral-text-weak;
	}

	&__accessorySlot {
		display: flex;
		align-items: center;
		padding: 0;
		min-height: 0;
	}
}
</style>

<script lang="ts">
import { PAGINATION_DEFAULT_ITEMS_PER_PAGE, PAGINATION_LAYOUTS } from './Pagination.consts';
import IconButton from '../Buttons/IconButton/IconButton.vue';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES, ICON_BUTTON_STATES } from '../Buttons/IconButton';
import { ICONS } from '../Icon';

const MAX_NAVIGATION_ITEMS = 7;
const ELLIPSIS_FILL = 'ellipsis';
const FIRST_PAGE_NUMBER = 1;

export default {
	name: 'Pagination',
	components: { IconButton },
	props: {
		layout: {
			type: String,
			default: PAGINATION_LAYOUTS.DEFAULT,
			validator(layout) {
				return Object.values(PAGINATION_LAYOUTS).includes(layout);
			},
		},
		currentPage: {
			type: Number,
			default: FIRST_PAGE_NUMBER,
			validator(page) {
				return page > 0;
			},
		},
		itemsPerPage: {
			type: Number,
			default: PAGINATION_DEFAULT_ITEMS_PER_PAGE,
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
		lastPage(): number {
			return Math.ceil(this.itemsTotalAmount / this.itemsPerPage);
		},
		currentPageSanitized(): number {
			const currentPage = Math.ceil(this.currentPage);

			if (this.pageIsSmallerThanFirstPage(currentPage)) {
				return FIRST_PAGE_NUMBER;
			}

			if (this.pageIsLargerThanLastPage(currentPage)) {
				return this.lastPage;
			}

			return currentPage;
		},
		navigationItems(): Array<number | string> {
			let delta: number;
			if (this.lastPage <= MAX_NAVIGATION_ITEMS) {
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

			let navigationItems: Array<number> =
				this.currentPage > delta
					? this.getRange(
							Math.min(range.start, this.lastPage - delta),
							Math.min(range.end, this.lastPage),
					  )
					: this.getRange(1, Math.min(this.lastPage, delta + 1));

			const withDots = (value, pair) =>
				navigationItems.length + 1 !== this.lastPage ? pair : [value];

			if (navigationItems[0] !== 1) {
				navigationItems = withDots(1, [1, ELLIPSIS_FILL]).concat(navigationItems);
			}

			if (navigationItems[navigationItems.length - 1] < this.lastPage) {
				navigationItems = navigationItems.concat(
					withDots(this.lastPage, [ELLIPSIS_FILL, this.lastPage]),
				);
			}

			return navigationItems;
		},
	},
	methods: {
		getRange(start: number, end: number): Array<number> {
			return Array(end - start + 1)
				.fill(null)
				.map((_v, i) => i + start);
		},
		changePage(page): void {
			if (this.currentPageSanitized === page) {
				return;
			}

			this.$emit('change-page', page);
		},
		isPage(item): boolean {
			return typeof item === 'number';
		},
		pageIsSmallerThanFirstPage(page): boolean {
			return page < FIRST_PAGE_NUMBER;
		},
		pageIsLargerThanLastPage(page): boolean {
			return page > this.lastPage;
		},
		onInputValueChange(event): void {
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
