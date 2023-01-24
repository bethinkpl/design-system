<template>
  <div
      class="featureIcon"
      :class="{
			'-doubleBackground': doubleBackground,
			'-danger': color === FEATURE_ICON_COLOR.DANGER,
			'-info': color === FEATURE_ICON_COLOR.INFO,
			'-neutral': color === FEATURE_ICON_COLOR.NEUTRAL,
			'-neutral-weak': color === FEATURE_ICON_COLOR.NEUTRAL_WEAK,
			'-primary': color === FEATURE_ICON_COLOR.PRIMARY,
			'-success': color === FEATURE_ICON_COLOR.SUCCESS,
			'-warning': color === FEATURE_ICON_COLOR.WARNING,
			'-small': size === FEATURE_ICON_SIZES.SMALL,
			'-medium': size === FEATURE_ICON_SIZES.MEDIUM,
			'-large': size === FEATURE_ICON_SIZES.LARGE,
			'-x-large': size === FEATURE_ICON_SIZES.X_LARGE,
		}"
  >
    <wnl-icon class="featureIcon__icon" :icon="icon" :size="iconSize" />
  </div>
</template>

<style lang="scss">
@import '../../../../styles/components/icons';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';

$feature-icon-colors: (
    'neutral': (
        'background': $color-neutral-background-medium,
        'border': $color-neutral-background,
        'icon': $color-neutral-icon,
    ),
    'neutral-weak': (
        'background': $color-neutral-background-medium,
        'border': $color-neutral-background,
        'icon': $color-neutral-icon-weak,
    ),
    'primary': (
        'background': $color-primary-background-medium,
        'border': $color-primary-background,
        'icon': $color-primary-icon,
    ),
    'success': (
        'background': $color-success-background-medium,
        'border': $color-success-background,
        'icon': $color-success-icon,
    ),
    'danger': (
        'background': $color-danger-background-medium,
        'border': $color-danger-background,
        'icon': $color-danger-icon,
    ),
    'warning': (
        'background': $color-warning-background-medium,
        'border': $color-warning-background,
        'icon': $color-warning-icon,
    ),
    'info': (
        'background': $color-info-background-medium,
        'border': $color-info-background,
        'icon': $color-info-icon,
    ),
);

$feature-icon-padding-large: 10px;

@mixin setBorderColor($border) {
  border-color: $border;
}

@mixin setFeatureIconColor($self, $background, $icon) {
  background-color: $background;
  border-color: $background;

  #{$self}__icon {
    color: $icon;
  }
}

.featureIcon {
  $self: &;

  border-radius: 100%;
  border-style: solid;
  border-width: $space-xxxs;
  display: inline-block;
  padding: $space-xxxs;

  &.-small {
    border-width: $space-xxxxs;
    padding: $space-xxxxs;
  }

  &.-large {
    border-width: $space-xxxs;
    padding: $feature-icon-padding-large;
  }

  &.-x-large {
    border-width: $space-xxs;
    padding: $space-xs;
  }

  @each $color-name, $color-map in $feature-icon-colors {
    &.-#{$color-name} {
      @include setFeatureIconColor(
        $self,
        map-get($color-map, 'background'),
        map-get($color-map, 'icon'),
      );
    }
    &.-#{$color-name}.-doubleBackground {
      @include setBorderColor(
        map-get($color-map, 'border'),
      );
    }
  }
}

</style>

<script lang="ts">
import { VueConstructor } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import WnlIcon, { ICONS, ICON_SIZES } from '../Icon';
import { FEATURE_ICON_SIZES, FEATURE_ICON_COLOR } from './FeatureIcon.consts';

export default {
  name: 'FeatureIcon',
  components: {
    FontAwesomeIcon,
    WnlIcon,
  },
  props: {
    icon: {
      type: Object,
      default: null,
      validator(icon: VueConstructor) {
        return Object.values(ICONS).includes(icon);
      },
    },
    size: {
      type: String,
      default: FEATURE_ICON_SIZES.MEDIUM,
      validator: (value: string) => Object.values(FEATURE_ICON_SIZES).includes(value),
    },
    color: {
      type: String,
      required: true,
      validator(color) {
        return Object.values(FEATURE_ICON_COLOR).includes(color);
      },
    },
    doubleBackground: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      FEATURE_ICON_COLOR: Object.freeze(FEATURE_ICON_COLOR),
      FEATURE_ICON_SIZES: Object.freeze(FEATURE_ICON_SIZES),
    };
  },
  computed: {
    sizeClassName() {
      return `-${this.size}`;
    },
    iconSize(): string {
      if (this.size === FEATURE_ICON_SIZES.SMALL) {
        return ICON_SIZES.X_SMALL;
      }

      if (this.size === FEATURE_ICON_SIZES.LARGE) {
        return ICON_SIZES.LARGE;
      }

      if (this.size === FEATURE_ICON_SIZES.X_LARGE) {
        return ICON_SIZES.X_LARGE;
      }

      return ICON_SIZES.MEDIUM;
    },
  },
};
</script>
