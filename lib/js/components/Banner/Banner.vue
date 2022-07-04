<template>
  <div class="o-banner" :class=[backgroundColorClass]>
    <div class="o-banner__content">
      <div class="o-banner__header">
        <div v-if="icon" class="o-banner__iconContainer">
          <!-- TODO: https://bethink.atlassian.net/browse/IT-3589 change to a-illustration in the future -->
          <ds-icon class="o-banner__icon" :class=[iconColor] :icon="icon"/>
        </div>

        <div class="o-banner__text">
          <div class="o-banner__title" v-text="title"/>
          <div v-if="hasDefaultText" class="o-banner__defaultText">
            <slot name="defaultText"/>
          </div>
        </div>
        <div v-if="buttonText.length > 0" class="o-banner__buttonText">
          <ds-button
              :color="BUTTON_COLORS.NEUTRAL"
              :type="BUTTON_TYPES.OUTLINED"
              :size="BUTTON_SIZES.SMALL"
              @click.native="$emit('button-clicked')"
          >{{ buttonText }}
          </ds-button>
        </div>
      </div>
      <div v-if="hasExpandedText" class="o-banner__expander">
        <ds-icon-button
            touchable
            :size="ICON_BUTTON_SIZES.SMALL"
            :icon="expanded ? ICONS.FA_CHEVRON_UP : ICONS.FA_CHEVRON_DOWN"
            :color="ICON_BUTTON_COLORS.NEUTRAL"
            :radius="BUTTON_RADIUSES.ROUNDED"
            @click.native="toggleExpandedText"
        />
      </div>
      <div v-if="!hasExpandedText && closable">
        <ds-icon-button
            :size="ICON_BUTTON_SIZES.SMALL"
            :icon="ICONS.FA_XMARK"
            :color="ICON_BUTTON_COLORS.NEUTRAL"
            :radius="BUTTON_RADIUSES.ROUNDED"
            :touchable="false"
            @click.native="$emit('close')"
        />
      </div>
    </div>
    <div v-if="hasExpandedText && expanded" class="o-banner__expandedContainer">
      <ds-divider :prominence="DIVIDER_PROMINENCES.STRONG"/>
      <div class="o-banner__expandedText">
        <slot name="expandedText"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/media-queries';

.o-banner {
  border-radius: $radius-m;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  padding: $space-xs;

  &__content {
    display: flex;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0 $space-xxs;

    @media #{breakpoint-m()} {
      width: 100%;
    }
  }

  &__title {
    @include headlineXS;
    @include textBold;
  }

  &__defaultText {
    @include textM;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding: $space-xxxxs 0;
    margin: 0 $space-s;

    :nth-child(2) {
      margin-top: $space-xxxxs;
    }
  }

  &__iconContainer {
    padding: $space-xxs 0;
  }

  &__icon {
    padding: $space-xxs;
    border-radius: 100px;
  }

  .-iconNeutral {
    color: $color-neutral-icon;
    background-color: $color-neutral-background-medium;
  }

  .-iconDefault {
    color: $color-default-icon;
    background-color: $color-neutral-background-medium;
  }

  .-iconWarning {
    color: $color-warning-icon;
    background-color: $color-warning-background-medium;
  }

  .-iconSuccess {
    color: $color-success-icon;
    background-color: $color-success-background-medium;
  }

  .-iconInfo {
    color: $color-info-icon;
    background-color: $color-info-background-medium;
  }

  .-iconFail {
    color: $color-fail-icon;
    background-color: $color-fail-background-medium;
  }

  &__buttonText {
    padding: $space-xs 0;
  }

  &__expander {
    padding: $space-xs $space-xxxxs $space-xs 0;
  }

  &__expandedContainer {
    @include textM;

    margin-top: $space-xs;
    padding: 0 $space-xxxxs $space-xxxxs;
  }

  &__expandedText {
    margin-top: $space-xs;
  }
}

.-warning {
  background-color: $color-warning-background;
  border-color: $color-warning-border;
}

.-success {
  background-color: $color-success-background;
  border-color: $color-success-border;
}

.-info {
  background-color: $color-info-background;
  border-color: $color-info-border;
}

.-fail {
  background-color: $color-fail-background;
  border-color: $color-fail-border;
}

.-neutral {
  background-color: $color-neutral-background;
  border-color: $color-neutral-border-weak;
}

.-default {
  background-color: $color-default-background;
  border-color: $color-default-border;
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';

import { Prop } from 'vue/types/options';
import DsButton, { BUTTON_RADIUSES, BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from "../Buttons/Button";
import DsDivider, { DIVIDER_PROMINENCES } from '../Divider';
import DsIcon from "../Icon";
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from "../Buttons/IconButton";
import { ICONS } from "../Icon";
import { BANNER_COLORS, BANNER_LAYOUTS } from "./Banner.consts";

export default {
  name: 'Banner',
  components: {
    DsButton,
    DsDivider,
    DsIconButton,
    DsIcon,
  },
  props: {
    icon: {
      type: Object as Prop<VueConstructor>,
      default: null,
      validate: (icon: VueConstructor) => Object.values(ICONS).includes(icon),
    },
    buttonText: {
      type: String,
      default: null,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: BANNER_COLORS.DEFAULT,
      validate: color => Object.values(BANNER_COLORS).includes(color),
    },
    title: {
      type: String,
      required: true,
    },
    layout: {
      type: String,
      default: BANNER_LAYOUTS.HORIZONTAL,
      validate: layout => Object.values(BANNER_LAYOUTS).includes(layout),
    },
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    backgroundColorClass() {
      return {
        [BANNER_COLORS.NEUTRAL]: '-neutral',
        [BANNER_COLORS.DEFAULT]: '-default',
        [BANNER_COLORS.FAIL]: '-fail',
        [BANNER_COLORS.INFO]: '-info',
        [BANNER_COLORS.SUCCESS]: '-success',
        [BANNER_COLORS.WARNING]: '-warning',
      }[this.color];
    },
    iconColor() {
      return {
        [BANNER_COLORS.NEUTRAL]: '-iconNeutral',
        [BANNER_COLORS.DEFAULT]: '-iconDefault',
        [BANNER_COLORS.FAIL]: '-iconFail',
        [BANNER_COLORS.INFO]: '-iconInfo',
        [BANNER_COLORS.SUCCESS]: '-iconSuccess',
        [BANNER_COLORS.WARNING]: '-iconWarning',
      }[this.color];
    },
    hasExpandedText() {
      return !!this.$slots.expandedText && this.$slots.expandedText.length > 0;
    },
    hasDefaultText() {
      return !!this.$slots.defaultText && this.$slots.defaultText.length > 0;
    }
  },
  created() {
    this.BUTTON_COLORS = BUTTON_COLORS;
    this.BUTTON_RADIUSES = BUTTON_RADIUSES;
    this.BUTTON_SIZES = BUTTON_SIZES;
    this.BUTTON_TYPES = BUTTON_TYPES;
    this.DIVIDER_PROMINENCES = DIVIDER_PROMINENCES;
    this.ICON_BUTTON_COLORS = ICON_BUTTON_COLORS;
    this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
    this.ICONS = ICONS;
  },
  methods: {
    toggleExpandedText() {
      this.expanded = !this.expanded;
    }
  }
};
</script>
