<template>
  <div class="stepper">
    <div v-for="(step, index) in steps" :key="index" class="stepper__item">
      <div
          v-if="index !== 0"
          class="stepper__separator"
          :class="{ '-filled': step.isFilled }"
      ></div>
      <ripple-wrapper class="stepper__ripple" :disable="!step.isFilled && disableNotFilledSteps">
        <icon
            class="stepper__icon"
            :class="{ '-filled': step.isFilled, '-disabled': !step.isFilled && disableNotFilledSteps }"
            :icon="step.isFilled && activeStepIndex !== index ? ICONS.FA_CHECK_SOLID : ICONS[step.iconKey]"
            :size="ICON_SIZES.X_SMALL"
            @click="$emit('click', step.name)"
        ></icon>
      </ripple-wrapper>
      <div class="stepper__label" :class="{ '-filled': step.isFilled }">
        {{ step.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../styles/atoms/buttons';
@import '../../styles/settings/colors';
@import '../../styles/settings/media-queries';
@import '../../styles/settings/spacings';
@import '../../styles/settings/typography';

.stepper {
  display: flex;

  &__item {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  &__label {
    @include textInfoM();
    @include textBold();

    color: $color-minor;
    margin-left: $space-xxs;

    &.-filled {
      color: $color-primary;
    }
  }

  &__icon {
    align-self: center;
    background-color: $color-minor-background;
    border-radius: 100%;
    color: $color-minor;
    display: flex;
    height: 32px;
    justify-content: center;
    margin-right: $space-xxs;
    width: 32px;
    transition: background-color 0.33s;

    &.-filled {
      background-color: $color-primary-background;
      color: $color-primary;

      &:hover {
        background-color: $color-primary-background-hovered;
      }
    }

    &:not(.-disabled) {
      cursor: pointer;

    }

    &:hover {
      background-color: mix($color-minor-background, rgba($color-firefly-black, 0.12));
    }
  }

  &__separator {
    background-color: $color-primary-background;
    border-radius: 2.5px;
    height: 2px;
    margin: 0 $space-xs;
    transition: background-color 0.33s;
    width: 32px;

    @media #{breakpoint-s()} {
      width: 151px;
    }

    &.-filled {
      background-color: $color-primary;
    }
  }

  &__ripple {
    height: 32px;
    width: 32px;

    ::v-deep & > div { // prevent squerify ripple
      border-radius: 100%;
    }
  }
}
</style>

<script lang="ts">
import { Prop } from 'vue/types/options';
import Ripple from 'vue-ripple-directive';

import Icon, { ICON_SIZES, ICONS } from './Icon.vue';
import { Step } from './Stepper.types';
import RippleWrapper from '../utils/RippleWrapper.vue';

export default {
  name: 'Stepper',
  components: { RippleWrapper, Icon },
  directives: {
    Ripple,
  },
  props: {
    disableNotFilledSteps: {
      type: Boolean,
      required: true
    },
    steps: {
      type: Array as Prop<Array<Step>>,
      required: true,
      validate: (steps: Array<Step>) => {
        return steps.every((step) => {
          if (typeof step.label !== 'string') {
            return false;
          }
          if (typeof step.iconKey !== 'string') {
            return false;
          }
          if (typeof step.isFilled !== 'boolean') {
            return false;
          }

          return true;
        });
      },
    },
  },
  created() {
    this.ICONS = ICONS;
    this.ICON_SIZES = ICON_SIZES;
  },
  computed: {
    activeStepIndex(): number {
      return this.steps.findIndex((_, index, arr) => !arr[index + 1]?.isFilled);
    },
  },
};
</script>
