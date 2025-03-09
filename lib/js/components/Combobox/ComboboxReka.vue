<template>
	<div class="bg-amber-300">
		<combobox-root v-model="value" class="ComboboxRoot">
			<combobox-anchor class="ComboboxAnchor">
				<combobox-input
					class="ComboboxInput"
					placeholder="Placeholder..."
					:display-value="(val) => val?.name ?? ''"
				/>
				<combobox-cancel v-if="value" @click="value = undefined">
					<icon size="xx-small" :icon="ICONS.FA_XMARK" />
				</combobox-cancel>
				<combobox-trigger>
					<icon size="xx-small" :icon="ICONS.FA_CHEVRON_DOWN" />
				</combobox-trigger>
			</combobox-anchor>

			<combobox-content class="ComboboxContent">
				<combobox-viewport class="ComboboxViewport">
					<combobox-empty class="ComboboxEmpty">Brak elementów</combobox-empty>

					<combobox-item
						v-for="option in options"
						:key="option.name"
						:value="option"
						class="ComboboxItem"
					>
						<combobox-item-indicator class="ComboboxItemIndicator">
							<icon size="xx-small" :icon="ICONS.FA_CHECK_SOLID" />
						</combobox-item-indicator>
						<span>
							{{ option.name }}
						</span>
					</combobox-item>
				</combobox-viewport>
			</combobox-content>
		</combobox-root>
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';

input,
button {
	all: unset;
}

.ComboboxRoot {
	position: relative;
	display: inline-flex;
	flex-direction: column;
}

.ComboboxAnchor {
	display: inline-flex;
	padding: $space-3xs;
	border-radius: $radius-s;
	border: 1px solid $color-default-border;
}
.ComboboxAnchor:hover {
	background-color: $color-neutral-background-hovered;
}

.ComboboxContent {
	background-color: $color-default-background;
	border-radius: $radius-s;
	box-shadow: $shadow-m;
}

.ComboboxLabel {
	display: block;
}

.ComboboxViewport {
	padding: 5px;
}

.ComboboxItem {
	display: flex;
	gap: $space-4xs;
	padding: $space-4xs;
}

.ComboboxItem[data-highlighted] {
	background-color: $color-neutral-background-hovered;
}
</style>

<script setup lang="ts">
import {
	ComboboxRoot,
	ComboboxInput,
	ComboboxTrigger,
	ComboboxContent,
	ComboboxItemIndicator,
	ComboboxItem,
	ComboboxViewport,
	ComboboxAnchor,
	ComboboxEmpty,
	ComboboxCancel,
} from 'reka-ui';
import Icon from '../Icons/Icon';
import { ICONS } from '../Icons/Icon';

interface Item {
	name: string;
}

interface Props {
	options: Array<Item>;
}

defineProps<Props>();

const value = defineModel<Item>();
</script>
