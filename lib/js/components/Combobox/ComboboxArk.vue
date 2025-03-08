<template>
	<combobox-root
		:model-value="valueForCombo"
		:collection="collection"
		:open-on-click="true"
		:positioning="{
			gutter: 0,
		}"
		class="ComboboxRoot"
		@update:model-value="($event) => (value = $event[0])"
		@input-value-change="handleInputChange"
		@open-change="handleFocus"
		@value-change="onValueChange"
	>
		<combobox-label class="ComboboxLabel">Fruit</combobox-label>
		<combobox-control class="ComboboxAnchor">
			<combobox-input placeholder="Test" />
			<combobox-clear-trigger v-if="value">
				<icon size="xx-small" :icon="ICONS.FA_XMARK" />
			</combobox-clear-trigger>
			<combobox-trigger>
				<icon size="xx-small" :icon="ICONS.FA_CHEVRON_DOWN" />
			</combobox-trigger>
		</combobox-control>
		<teleport to="body">
			<combobox-positioner>
				<combobox-content class="ComboboxContent">
					<combobox-item
						v-for="item in items"
						:key="item.name"
						:item="item"
						class="ComboboxItem"
					>
						<combobox-item-indicator>
							<icon size="xx-small" :icon="ICONS.FA_CHECK_SOLID" />
						</combobox-item-indicator>
						<combobox-item-text>{{ item.name }}</combobox-item-text>
					</combobox-item>
				</combobox-content>
			</combobox-positioner>
		</teleport>
	</combobox-root>
</template>

<style lang="scss" scoped>
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

.ComboboxItemGroupLabel {
	font-weight: bold;
}
</style>

<script setup lang="ts">
import {
	Combobox,
	ComboboxRoot,
	ComboboxInput,
	ComboboxLabel,
	ComboboxTrigger,
	ComboboxPositioner,
	ComboboxControl,
	ComboboxContent,
	ComboboxItemIndicator,
	ComboboxItem,
	ComboboxItemText,
	createListCollection,
	ComboboxRootProps,
	ComboboxClearTrigger,
} from '@ark-ui/vue';
import { computed, ref } from 'vue';
import Icon from '../Icons/Icon';
import { ICONS } from '../Icons/Icon';

interface Item {
	name: string;
}

interface Props {
	options: Array<Item>;
}

const props = defineProps<Props>();

const value = defineModel<string>();

const valueForCombo = computed(() => {
	return value.value ? [value.value] : [];
});

const items = ref(props.options);

const collection = computed(() =>
	createListCollection({
		items: items.value,
		itemToString: (item) => item.name,
		itemToValue: (item) => item.name,
	}),
);

const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
	items.value = props.options.filter((item) =>
		item.name.toLowerCase().includes(details.inputValue.toLowerCase()),
	);
};

const handleFocus = () => {
	items.value = props.options;
};

const onValueChange = (value) => {
	console.log('Value changed', value.items);
};
</script>
