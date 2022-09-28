<template>
  <div
       :class="{
      'progressBar': true,
			'-primary': color === PROGRESS_BAR_COLORS.PRIMARY,
			'-warning': color === PROGRESS_BAR_COLORS.WARNING,
			'-fail': color === PROGRESS_BAR_COLORS.FAIL,
			'-success': color === PROGRESS_BAR_COLORS.SUCCESS,
			'-neutral': color === PROGRESS_BAR_COLORS.NEUTRAL,
			'-info': color === PROGRESS_BAR_COLORS.INFO,
			'-schemeMedium': colorScheme === PROGRESS_BAR_COLOR_SCHEMES.MEDIUM,
			'-schemeMediumNeutral': colorScheme === PROGRESS_BAR_COLOR_SCHEMES.MEDIUM_NEUTRAL,
			'-compact': layout === PROGRESS_BAR_LAYOUTS.COMPACT,
		  }">
    <div class="progressBar__label">
      <div class="progressBar__labelText">{{ labelText }}</div>
      <div v-if="labelDataExist" class="progressBar__labelDataWrapper">
        <div v-if="labelData" class="progressBar__labelData">{{ labelData }}</div>
        <div v-if="labelDataSupporting" class="progressBar__labelDataSupporting">{{ labelDataSupporting }}</div>
        <div v-if="labelDataSuffix" class="progressBar__labelDataSuffix">{{ labelDataSuffix }}</div>
      </div>
    </div>
    <div
      :class="{
        'progressBar__bar': true,
        '-small': size === PROGRESS_BAR_SIZES.SMALL,
			  '-xsmall': size === PROGRESS_BAR_SIZES.XSMALL,
			  '-noRadius': radius === PROGRESS_BAR_RADII.NONE,
      }">
<!--      <div class="progressBar__results" :style="{ background: backgroundGradient }">-->
      <div class="progressBar__results">
        <div v-for="(range) in ranges" :class="{progressBar__result: true, '-secondary': range.layer === 2 && numberOfLayers === 2 }" :style="{ left: range.percentValueFrom+'%', width: range.length+'%'}">
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/colors/tokens';

$progress-bar-height: 16px;
$progress-bar-s-height: 8px;
$progress-bar-xs-height: 4px;

$progress-bar-border-radius: 8px;

$progress-bar-layers: (
  'primary': (
    'background': $color-primary-text,
    'background-secondary': $color-primary-text-disabled,
  ),
  'info': (
      'background': $color-info-text,
      'background-secondary': $color-info-text-disabled,
  ),
  'neutral': (
      'background': $color-neutral-text,
      'background-secondary': $color-neutral-text-disabled,
  ),
  'success': (
      'background': $color-success-text,
      'background-secondary': $color-success-text-disabled,
  ),
  'warning': (
      'background': $color-warning-text,
      'background-secondary': $color-warning-text-disabled,
  ),
  'fail': (
      'background': $color-fail-text,
      'background-secondary': $color-fail-text-disabled,
  ),
);

.progressBar {
  $self: &;

  &__bar {
    background-color: $color-default-background;
    box-shadow: inset 0 1px 4px rgba(12, 23, 38, 0.2);
    height: $progress-bar-height;
    border-radius: $progress-bar-border-radius;
    overflow: hidden;
    &.-small {
      height: $progress-bar-s-height;
    }

    &.-xsmall {
      height: $progress-bar-xs-height;
      box-shadow: inset 0 1px 3px rgba(12, 23, 38, 0.2);
      border-radius: 0;
    }
    &.-noRadius {
      border-radius: 0;
    }
  }

  &__label {
    display: flex;
    justify-content: space-between;
    margin-bottom: $space-xxs;
  }

  &__labelText {
    @include headlineS();
    @include textBold;

    color: $color-neutral-text-heavy;
  }

  &__labelDataWrapper {
    @include textS();
    @include textBold;

    align-items: baseline;
    color: $color-neutral-text-heavy;
    display: flex;
    margin-left: $space-xxs;
  }

  &__labelDataSupporting {
    color: $color-neutral-text;
    margin-left: $space-xxxxxs;
  }

  &__labelDataSuffix {
    @include textXS;

    color: $color-neutral-text-weak;
    margin-left: $space-xxxxs;
  }

  &-noRadius {
    border-radius: 0;
  }

  &__results {
    height: 100%;
    position: relative;
    width: 100%;
  }

  &__result {
    height: 100%;
    position: absolute;
    top:0;
  }

  @each $color-name, $color-map in $progress-bar-layers {
    &.-#{$color-name} {
      #{$self}__result {
        background: map-get($color-map, 'background');
        &.-secondary {
          background: map-get($color-map, 'background-secondary');
        }
      }
    }
  }
}
</style>

<script lang="ts">
import {
  PROGRESS_BAR_COLORS,
  PROGRESS_BAR_SIZES,
  PROGRESS_BAR_RADII,
  PROGRESS_BAR_LAYOUTS,
  PROGRESS_BAR_COLOR_SCHEMES
} from './ProgressBar.consts';

export default {
  name: 'ProgressBar',
  props: {
    numberOfLayers: {
      type: Number,
      default: 1,
    },
    colorScheme: {
      type: String,
      default: PROGRESS_BAR_COLOR_SCHEMES.DEFAULT,
      validate(size) {
        return Object.values(PROGRESS_BAR_COLOR_SCHEMES).includes(size);
      },
    },
    color: {
      type: String,
      required: true,
      validate(color) {
        return Object.values(PROGRESS_BAR_COLORS).includes(color);
      },
    },
    size: {
      type: String,
      default: PROGRESS_BAR_SIZES.MEDIUM,
      validate(size) {
        return Object.values(PROGRESS_BAR_SIZES).includes(size);
      },
    },
    ranges: {
      type: Array,
      required: true,
    },
    radius: {
      type: String,
      default: PROGRESS_BAR_RADII.DEFAULT,
      validate(size) {
        return Object.values(PROGRESS_BAR_RADII).includes(size);
      },
    },
    layout: {
      type: String,
      default: PROGRESS_BAR_LAYOUTS.DEFAULT,
      validate(size) {
        return Object.values(PROGRESS_BAR_LAYOUTS).includes(size);
      },
    },
    labelText: {
      type: String,
      default: null,
    },
    labelData: {
      type: String,
      default: null,
    },
    labelDataSupporting: {
      type: String,
      default: null,
    },
    labelDataSuffix: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      PROGRESS_BAR_COLORS: Object.freeze(PROGRESS_BAR_COLORS),
      PROGRESS_BAR_SIZES: Object.freeze(PROGRESS_BAR_SIZES),
      PROGRESS_BAR_RADII: Object.freeze(PROGRESS_BAR_RADII),
      PROGRESS_BAR_LAYOUTS: Object.freeze(PROGRESS_BAR_LAYOUTS),
      PROGRESS_BAR_COLOR_SCHEMES: Object.freeze(PROGRESS_BAR_COLOR_SCHEMES),
    };
  },
  computed: {
    backgroundGradient() {

      const gradients = this.ranges.map(
          (range) =>
              `linear-gradient(${range.color},${range.color}) ${range.percentValueFrom}%  / ${range.percentValueTo/2}% no-repeat`,
      );

      gradients.push('linear-gradient(#E6E8EE, #E6E8EE) 0% 0% / 100% 100% no-repeat');
      let result = gradients.join(', ');
      console.log(result);
      return result;
    },
    labelDataExist() {
      return this.labelData || this.labelDataSupporting || this.labelDataSuffix;
    }
  },
};
</script>
