<template>
  <div class="modal" @click.stop="$emit('close-modal')">

  </div>
</template>

<style lang="scss" scoped>
//@import '../../../styles/settings/media-queries';
//@import '../../../styles/settings/spacings';
//@import '../../../styles/settings/shadows';
//@import '../../../styles/settings/z-indexes';
//@import '../../../styles/settings/colors/tokens';
//@import '../../../styles/settings/typography/tokens';

.modal {

}
</style>

<script lang="ts">
import FeatureIcon from '../../Icons/FeatureIcon/FeatureIcon.vue';
import { MODAL_SIZES } from './Modal.consts';

export default {
  name: 'Modal',
  components: { FeatureIcon },
  props: {
    size: {
      type: String,
      default: MODAL_SIZES.MEDIUM,
      validator: (value: string) => Object.values(MODAL_SIZES).includes(value),
    },
    danger: {
      type: Boolean,
      default: false,
    },
    headerSize: {

    },
    headerTitle: {

    },
    headerSubtitle: {

    },
    headerFeatureIcon: {

    },
    headerFeatureIconColor: {

    },
    headerCentered: {

    },
    footerPrimaryButtonText: {

    },
    footerPrimaryButtonIcon: {

    },
    footerSecondaryButtonText: {

    },
    footerSecondaryButtonIcon: {

    }
  },
  data() {
    return {
      MODAL_SIZES: Object.freeze(MODAL_SIZES),
    };
  },
};
</script>
