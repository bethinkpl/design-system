<template>
  <div class="a-checkbox" :class="{
    '-error': isErrorComputed,
    '-disabled': disabled,
    '-medium': size === CHECKBOX_SIZES.MEDIUM,
    '-small': size === CHECKBOX_SIZES.SMALL,
    '-xsmall': size === CHECKBOX_SIZES.X_SMALL,
  }">
    <v-layout>
      <v-checkbox
          v-model="key"
          :disabled="disabled"
          :error="error"
          :error-message="errorMessage"
          :label="label"
          :messages="errorMessage || helpMessage"
      >
        <template #label>
          <div>
						<span class="a-checkbox__label">
							{{ label }}
						</span>
            <span v-if="labelAddition" class="a-checkbox__labelAddition">
							{{ labelAddition }}
						</span>
          </div>
        </template>

        <template #message>
          <div class="a-checkbox__helpMessage">
            <icon
                v-if="isErrorComputed"
                class="a-checkbox__labelErrorIcon"
                :icon="ICONS.FA_EXCLAMATION_TRIANGLE"
                :size="ICON_SIZES.XX_SMALL"
            ></icon>
            <span>
							{{ helpMessage }}
						</span>
          </div>
        </template>
      </v-checkbox>
    </v-layout>
  </div>
</template>

<style lang="scss">
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

$checkbox-xs-size: 14px;
$checkbox-s-size: 18px;
$checkbox-m-size: 24px;

.a-checkbox {
  &__label {
    @include headlineS();

    color: $color-rhino-gray;
  }

  &__labelAddition {
    color: $color-primary;
  }

  &.-error {
    .a-checkbox__label, .a-checkbox__labelAddition, .a-checkbox__helpMessage {
      color: $color-danger;
    }
  }

  &.-disabled {
    .a-checkbox__label, .a-checkbox__labelAddition {
      color: rgba($color-total-black, 0.38);
    }
  }

  &.-medium {
    .v-icon {
      font-size: $checkbox-m-size;
    }
  }

  &.-small {
    .v-icon {
      font-size: $checkbox-s-size;
    }

    .a-checkbox__label, .a-checkbox__labelAddition {
      @include headlineXS();
    }
  }

  &.-xsmall {
    .v-icon {
      font-size: $checkbox-xs-size;
    }

    .a-checkbox__label, .a-checkbox__labelAddition {
      @include headlineXXS();
    }
  }

}
</style>

<script lang="ts">
import { VCheckbox, VLayout } from 'vuetify/lib';

import { CHECKBOX_SIZES } from './Checkbox.consts';
import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
  name: 'Checkbox',
  components: {
    VCheckbox,
    VLayout,
    Icon,
  },
  data() {
    return {
      key: true,
    };
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: undefined,
    },
    helpMessage: {
      type: String,
      default: '',
    },
    labelAddition: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: CHECKBOX_SIZES.MEDIUM,
      validate(size) {
        Object.values(CHECKBOX_SIZES).includes(size);
      },
    },
  },
  computed: {
    isErrorComputed(): boolean {
      return this.error || !!this.errorMessage;
    },
  },
  created() {
    this.CHECKBOX_SIZES = CHECKBOX_SIZES;
    this.ICONS = ICONS;
    this.ICON_SIZES = ICON_SIZES;
  },
};
</script>

