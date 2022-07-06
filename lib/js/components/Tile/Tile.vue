<template>
  <ds-ripple :disable="!interactive">
    <div :class="[tileColor, { '-interactive': interactive }]" class="a-tile">
      <ds-icon
          v-if="iconLeft"
          :icon="iconLeft"
          :size="ICON_SIZES.SMALL"
          class="a-tile__iconLeft"
      />
      <div class="a-tile__center">
        <span class="a-tile__eyebrowText" v-text="eyebrowText"/>
        <span class="a-tile__text" v-text="text"/>
      </div>
      <ds-icon
          v-if="iconRight"
          :icon="iconRight"
          :size="ICON_SIZES.SMALL"
          :class="{ '-interactive': interactive }"
          class="a-tile__iconRight"
      />
      <div v-else-if="additionalText" class="a-tile__additionalText">{{
          additionalText
        }}
      </div>
    </div>
  </ds-ripple>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

.a-tile {
  $self: &;

  align-items: center;
  display: flex;
  flex-direction: row;
  padding: $space-xxs $space-xs;
  border-radius: $radius-s;

  &__additionalText {
    @include textXS;

    color: $color-neutral-text;
    flex-grow: 1;
    margin-left: $space-xs;
    max-width: 30%;
    text-align: right;
  }

  &__center {
    @include textBold;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__eyebrowText {
    @include textS;
  }

  &__iconLeft {
    color: $color-neutral-icon;
    margin-right: $space-xs;
  }

  &__iconRight {
    color: $color-neutral-icon;
    margin-left: $space-xs;

    &.-interactive {
      color: $color-primary-icon;
    }
  }

  &.-interactive {
    cursor: pointer;

    &:hover {
      background-color: $color-neutral-background-hovered;
    }
  }

  &.-neutral {
    background-color: $color-neutral-background;

    #{$self}__eyebrowText {
      color: $color-neutral-text-weak;
    }
  }

  &.-success {
    background-color: $color-success-background;

    #{$self}__eyebrowText {
      color: $color-success-text;
    }
  }

  &.-fail {
    background-color: $color-fail-background;

    #{$self}__eyebrowText {
      color: $color-fail-text;
    }
  }

  &.-primary {
    background-color: $color-primary-background;

    #{$self}__eyebrowText {
      color: $color-primary-text;
    }
  }

  &__text {
    @include textM;

    color: $color-neutral-text-heavy;
    margin-top: $space-xxxxxs;
  }
}
</style>

<script lang="ts">
import DsRipple from '../Ripple';
import DsIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';
import { TILE_COLORS } from './Tile.consts';

export default {
  name: 'Tile',
  components: {
    DsIcon,
    DsRipple,
  },
  props: {
    interactive: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: Object,
      default: null,
      validate(iconLeft: VueConstructor) {
        return Object.values(ICONS).includes(iconLeft);
      },
    },
    iconRight: {
      type: Object,
      default: null,
      validate(iconRight: VueConstructor) {
        return Object.values(ICONS).includes(iconRight);
      },
    },
    text: {
      type: String,
      required: true,
    },
    eyebrowText: {
      type: String,
      required: true,
    },
    additionalText: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: TILE_COLORS.NEUTRAL,
      validate(color) {
        return Object.values(TILE_COLORS).includes(color);
      }
    }
  },
  computed: {
    tileColor() {
      return {
        [TILE_COLORS.NEUTRAL]: '-neutral',
        [TILE_COLORS.PRIMARY]: '-primary',
        [TILE_COLORS.SUCCESS]: '-success',
        [TILE_COLORS.FAIL]: '-fail',
      }[this.color];
    }
  },
  created() {
    this.ICON_SIZES = ICON_SIZES;
  },
};
</script>
