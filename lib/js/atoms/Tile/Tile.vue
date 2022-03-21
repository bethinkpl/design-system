<template>
  <div class="a-tile" :class="{ '-clickable': clickable }">
    <div v-if="leftIcon" class="a-tile__leftIcon">
      <wnl-icon :icon="leftIcon" :size="ICON_SIZES.SMALL"/>
    </div>
    <div class="a-tile__centerText">
      <span class="a-tile__eyebrow">{{ eyebrow }}</span>
      <span class="a-tile__text">{{ text }}</span>
    </div>
    <div v-if="clickable" class="a-tile__rightIcon">
      <wnl-icon :icon="ICONS.FA_CHEVRON_RIGHT" :size="ICON_SIZES.SMALL"/>
    </div>
    <div v-else-if="rightText" class="a-tile__rightText">{{ rightText }}</div>
  </div>
</template>


<style lang="scss" scoped>
@import '../../../styles/settings/colors';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';

.a-tile {
	width: 100%;
	min-height: $space-xl;
  background-color: $color-alabaster-gray;
	display: flex;
	flex-direction: row;
	align-items: center;
  padding: $space-xxs $space-xs $space-xxs $space-xs;
  
	&.-clickable {
		cursor: pointer;

		&:hover {
			background-color: $color-ice-gray;
		}
	}

	&__leftIcon {
		margin-right: $space-xs;
	}

	&__centerText {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	&__rightIcon {
		margin-left: $space-xs;
		color: #0f9698; //TODO: ask for correct name
	}

	&__rightText {
    @include textXS;

		margin-left: $space-xs;
    flex-grow: 1;
    max-width: 30%;
    color: $color-storm-gray;
    text-align: right;
	}

	&__eyebrow {
		@include textS;

		color: $color-mischka-gray;
	}

	&__text {
		@include textM;

		color: #363636; //TODO: ask for correct name
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from "vue";


export default {
  name: "Tile",
  components: {
    WnlIcon,
  },
  props: {
    clickable: {
      type: Boolean,
      required: false,
      default: true,
    },
    eyebrow: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    leftIcon: {
      type: Object,
      required: false,
      default: null,
      validate(icon: VueConstructor) {
        return Object.values(ICONS).includes(icon);
      },
    },
    rightText: {
      type: String,
      required: false,
      default: null,
    },
  },
  created() {
    this.ICON_SIZES = ICON_SIZES;
    this.ICONS = ICONS;
  },
}
</script>