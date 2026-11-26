import l from "../Modal/Modal.vue.js";
import { defineComponent as n, toRaw as r } from "vue";
import { MODAL_HEADER_TITLE_SIZES as u, MODAL_SIZES as d } from "../Modal/Modal.consts.js";
import { BUTTON_STATES as t } from "../../Buttons/Button/Button.consts.js";
import { FEATURE_ICON_COLOR as a } from "../../Icons/FeatureIcon/FeatureIcon.consts.js";
import { ICONS as o } from "../../Icons/Icon/Icon.consts.js";
const s = n({
  name: "ModalDialog",
  components: { DsModal: l },
  props: {
    danger: {
      type: Boolean,
      default: !1
    },
    headerTitle: {
      type: String,
      required: !0
    },
    headerSubtitle: {
      type: String,
      default: null
    },
    headerFeatureIcon: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(o).includes(r(e));
      }
    },
    headerFeatureIconColor: {
      type: String,
      default: a.NEUTRAL,
      validator(e) {
        return Object.values(a).includes(e);
      }
    },
    headerImage: {
      type: String,
      default: null
    },
    footerPrimaryButtonText: {
      type: String,
      default: null
    },
    footerPrimaryButtonIcon: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(o).includes(r(e));
      }
    },
    footerPrimaryButtonState: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    footerSecondaryButtonText: {
      type: String,
      default: null
    },
    footerSecondaryButtonIcon: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(o).includes(r(e));
      }
    },
    footerSecondaryButtonState: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["close-modal", "primary-button-click", "secondary-button-click"],
  data() {
    return {
      MODAL_SIZES: Object.freeze(d),
      MODAL_HEADER_TITLE_SIZES: Object.freeze(u)
    };
  }
});
export {
  s as default
};
//# sourceMappingURL=ModalDialog.vue2.js.map
