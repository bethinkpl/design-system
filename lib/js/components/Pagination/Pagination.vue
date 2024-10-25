<template>
	<div
		class="ds-pagination"
		:class="{
			'-ds-forceCompact': forceCompact,
			'-ds-centered': isCentered && !$slots.accessory,
		}"
	>
		<div class="ds-pagination__itemsWrapper">
			<div
				v-if="navigationItems.length > 1 && !forceCompact"
				class="ds-pagination__items -ds-default"
			>
				<template v-for="(navigationItem, index) in navigationItems">
					<div
						v-if="isPage(navigationItem)"
						:key="index"
						class="ds-pagination__itemWrapper"
						:class="{ '-ds-touchable': currentPage !== navigationItem }"
						role="link"
						@click="changePage(navigationItem)"
					>
						<span
							class="ds-pagination__item"
							:class="{ '-ds-selected': currentPage === navigationItem }"
						>
							{{ navigationItem }}
						</span>
					</div>
					<div v-else :key="`ellipsis${index}`">
						<dropdown
							:radius="DROPDOWN_RADIUSES.BOTTOM"
							max-height="250px"
							:placement="
								ellipsisAsSecond(index)
									? DROPDOWN_PLACEMENTS.BOTTOM_START
									: DROPDOWN_PLACEMENTS.BOTTOM_END
							"
						>
							<template #reference="{ isOpened }">
								<div class="ds-pagination__itemWrapper -ds-touchable">
									<span
										class="ds-pagination__item"
										:class="{ '-ds-selected': isOpened }"
										>&hellip;</span
									>
								</div>
							</template>

							<template #default="{ close }">
								<select-list v-if="navigationItemsForDropdown.length">
									<select-list-item
										v-for="(
											dropdownNavigationItem, dropdownIndex
										) in navigationItemsForDropdown"
										:key="dropdownIndex"
										:label="dropdownNavigationItem.label"
										:is-selected="currentPage === dropdownNavigationItem.value"
										@click="
											onDropdownClick(dropdownNavigationItem.value, close)
										"
									/>
								</select-list>
							</template>
						</dropdown>
					</div>
				</template>
			</div>

			<div v-if="navigationItems.length > 1" class="ds-pagination__items -ds-compact">
				<icon-button
					:size="ICON_BUTTON_SIZES.MEDIUM"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:icon="ICONS.FA_ANGLE_LEFT"
					:state="
						currentPage <= FIRST_PAGE_NUMBER
							? ICON_BUTTON_STATES.DISABLED
							: ICON_BUTTON_STATES.DEFAULT
					"
					@click="changePage(currentPage - 1)"
				/>

				<div class="ds-pagination__compactItem">
					<input
						class="ds-pagination__input"
						type="number"
						:value="currentPage"
						:min="FIRST_PAGE_NUMBER"
						:step="1"
						:max="lastPage"
						@change="onInputValueConfirmed"
						@keyup.enter="onInputValueConfirmed"
					/>
					<span class="ds-pagination__text">z {{ lastPage }}</span>
				</div>

				<icon-button
					:size="ICON_BUTTON_SIZES.MEDIUM"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:icon="ICONS.FA_ANGLE_RIGHT"
					:state="
						currentPage >= lastPage
							? ICON_BUTTON_STATES.DISABLED
							: ICON_BUTTON_STATES.DEFAULT
					"
					@click="changePage(currentPage + 1)"
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
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/radiuses';
@import '../../../styles/mixins/layout';

$pagination-item-min-width: 32px;
$pagination-input-height: 32px;

.ds-pagination {
	$self: &;

	@include centeredSpread();

	align-items: stretch;
	flex-direction: row;
	flex-grow: 1;

	&__itemsWrapper {
		align-content: center;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
	}

	&.-ds-centered {
		#{$self}__itemsWrapper {
			align-items: center;
			flex-grow: 1;
		}
	}

	&__items {
		align-items: center;
		flex-direction: row;
		padding: 0;

		&.-ds-default {
			display: none;

			@media #{breakpoint-s()} {
				display: flex;

				#{$self}.-ds-forceCompact & {
					display: none;
				}
			}
		}

		&.-ds-compact {
			display: flex;

			@media #{breakpoint-s()} {
				display: none;

				#{$self}.-ds-forceCompact & {
					display: flex;
				}
			}
		}
	}

	&__input {
		background: $color-default-background;
		border: 1px solid $color-neutral-border-strong;
		border-radius: $radius-s;
		box-shadow: inset 0 1px 3px $color-neutral-border-strong;
		height: $pagination-input-height;
		padding: $space-3xs $space-2xs;

		&:hover {
			border-color: $color-neutral-border-strong-hovered;
		}

		&:focus {
			border-color: $color-primary-border;
			outline: none;
		}
	}

	&__text {
		@include label-l-default-regular;

		color: $color-neutral-text;
		padding: $space-2xs $space-3xs;
		text-align: center;
	}

	&__compactItem {
		@include centeredSpread();

		flex-direction: row;
	}

	&__itemWrapper {
		@include label-l-default-regular;

		padding: $space-4xs;
		text-align: center;

		&.-ds-touchable:hover {
			cursor: pointer;

			#{$self}__item:not(.-ds-selected) {
				background: $color-neutral-background-weak-hovered;
			}
		}
	}

	&__item {
		align-items: center;
		background: $color-neutral-background-weak;
		border-radius: $radius-xs;
		color: $color-neutral-text;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: $pagination-item-min-width;
		padding: $space-2xs;

		&.-ds-selected {
			@include label-l-default-bold;

			background: $color-neutral-background-medium;
			color: $color-neutral-text-heavy;
		}

		&:active:not(.-ds-selected) {
			background: $color-neutral-background-weak-hovered;
			box-shadow: $shadow-inset-s;
		}
	}

	&__accessorySlot {
		align-items: center;
		display: flex;
		min-height: 0;
		padding: 0;
	}
}
</style>

<script lang="ts">
import { PAGINATION_DEFAULT_ITEMS_PER_PAGE } from './Pagination.consts';
import IconButton from '../Buttons/IconButton/IconButton.vue';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES, ICON_BUTTON_STATES } from '../Buttons/IconButton';
import { ICONS } from '../Icons/Icon';

import { DROPDOWN_PLACEMENTS, DROPDOWN_RADIUSES } from '../Dropdown/Dropdown.consts';
import Dropdown from '../Dropdown/Dropdown.vue';

import SelectList from '../SelectList/SelectList.vue';
import SelectListItem from '../SelectList/SelectListItem/SelectListItem.vue';
import { defineComponent } from 'vue';

const MAX_NAVIGATION_ITEMS = 7;
const ELLIPSIS_FILL = 'ellipsis';
const FIRST_PAGE_NUMBER = 1;

export default defineComponent({
	name: 'Pagination',
	components: { IconButton, Dropdown, SelectListItem, SelectList },
	props: {
		currentPage: {
			type: Number,
			default: FIRST_PAGE_NUMBER,
			validator(page) {
				return page > 0;
			},
		},
		forceCompact: {
			type: Boolean,
			default: false,
		},
		isCentered: {
			type: Boolean,
			default: false,
		},
		itemsPerPage: {
			type: Number,
			default: PAGINATION_DEFAULT_ITEMS_PER_PAGE,
			validator(itemsPerPage) {
				return itemsPerPage > 0;
			},
		},
		itemsTotalAmount: {
			type: Number,
			required: true,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['change-page'],
	data() {
		return {
			DROPDOWN_PLACEMENTS: Object.freeze(DROPDOWN_PLACEMENTS),
			DROPDOWN_RADIUSES: Object.freeze(DROPDOWN_RADIUSES),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_STATES: Object.freeze(ICON_BUTTON_STATES),
			ICONS: Object.freeze(ICONS),
			FIRST_PAGE_NUMBER,
		};
	},
	computed: {
		lastPage(): number {
			return Math.ceil(this.itemsTotalAmount / this.itemsPerPage) || FIRST_PAGE_NUMBER;
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
		navigationItemsForDropdown() {
			return this.getRange(FIRST_PAGE_NUMBER, this.lastPage).map((pageNumber: number) => {
				const startItem = (pageNumber - 1) * this.itemsPerPage;
				const endItem =
					pageNumber < this.lastPage
						? startItem + this.itemsPerPage
						: this.itemsTotalAmount;

				return {
					label: `${pageNumber} (${startItem + 1} - ${endItem})`,
					value: pageNumber,
				};
			});
		},
	},
	methods: {
		ellipsisAsSecond(index: number) {
			return index === 1;
		},
		getRange(start: number, end: number): Array<number> {
			return Array(end - start + 1)
				.fill(null)
				.map((_v, i) => i + start);
		},
		changePage(page): void {
			if (this.currentPage === page) {
				return;
			}

			this.$emit('change-page', page);
		},
		isPage(item): boolean {
			return typeof item === 'number';
		},
		onInputValueConfirmed(event): void {
			const page = +event.target.value;

			this.changePage(page);
		},
		onDropdownClick(page: number, close: () => void) {
			this.changePage(page);
			close();
		},
	},
});
</script>
