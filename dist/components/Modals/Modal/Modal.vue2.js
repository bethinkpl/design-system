import c from "../../Icons/FeatureIcon/FeatureIcon.vue.js";
/* empty css                                       */
import { MODAL_FOOTER_LAYOUTS as n, MODAL_HEADER_TITLE_SIZES as u, MODAL_SIZES as l } from "./Modal.consts.js";
import d from "../../Buttons/Button/Button.vue.js";
import { BUTTON_STATES as e, BUTTON_COLORS as r, BUTTON_TYPES as f, BUTTON_RADIUSES as s, BUTTON_ELEVATIONS as T } from "../../Buttons/Button/Button.consts.js";
import y from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as S } from "../../Buttons/IconButton/IconButton.consts.js";
import { defineComponent as p, toRaw as a } from "vue";
import { FEATURE_ICON_COLOR as i, FEATURE_ICON_SIZES as O } from "../../Icons/FeatureIcon/FeatureIcon.consts.js";
import { ICON_SIZES as m, ICONS as o } from "../../Icons/Icon/Icon.consts.js";
const N = p({
  name: "Modal",
  components: { FeatureIcon: c, WnlButton: d, WnlIconButton: y },
  props: {
    size: {
      type: String,
      default: l.MEDIUM,
      validator: (t) => Object.values(l).includes(t)
    },
    danger: {
      type: Boolean,
      default: !1
    },
    headerTitleSize: {
      type: String,
      default: u.MEDIUM,
      validator: (t) => Object.values(u).includes(t)
    },
    headerTitle: {
      type: String,
      default: null
    },
    headerSubtitle: {
      type: String,
      default: null
    },
    headerFeatureIcon: {
      type: Object,
      default: null,
      validator(t) {
        return Object.values(o).includes(a(t));
      }
    },
    headerFeatureIconColor: {
      type: String,
      default: i.NEUTRAL,
      validator(t) {
        return Object.values(i).includes(t);
      }
    },
    contentCentered: {
      type: Boolean,
      default: !1
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
      validator(t) {
        return Object.values(o).includes(a(t));
      }
    },
    footerPrimaryButtonState: {
      type: String,
      default: e.DEFAULT,
      validator(t) {
        return Object.values(e).includes(t);
      }
    },
    footerSecondaryButtonText: {
      type: String,
      default: null
    },
    footerSecondaryButtonIcon: {
      type: Object,
      default: null,
      validator(t) {
        return Object.values(o).includes(a(t));
      }
    },
    footerSecondaryButtonState: {
      type: String,
      default: e.DEFAULT,
      validator(t) {
        return Object.values(e).includes(t);
      }
    },
    footerTertiaryButtonText: {
      type: String,
      default: null
    },
    footerTertiaryButtonIcon: {
      type: Object,
      default: null,
      validator(t) {
        return Object.values(o).includes(a(t));
      }
    },
    footerTertiaryButtonState: {
      type: String,
      default: e.DEFAULT,
      validator(t) {
        return Object.values(e).includes(t);
      }
    },
    footerCheckboxText: {
      type: String,
      default: null
    },
    isFooterSticky: {
      type: Boolean,
      default: !1
    },
    footerLayout: {
      type: String,
      default: n.HORIZONTAL,
      validator: (t) => Object.values(n).includes(t)
    },
    isFullHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "tertiary-button-click": () => !0,
    "checkbox-change": (t) => !0,
    "close-modal": () => !0,
    "secondary-button-click": () => !0,
    "primary-button-click": () => !0
  },
  setup() {
    return {
      BUTTON_COLORS: r,
      BUTTON_ELEVATIONS: T,
      BUTTON_RADIUSES: s,
      BUTTON_TYPES: f,
      ICONS: o,
      ICON_BUTTON_COLORS: S,
      ICON_SIZES: m,
      MODAL_SIZES: l,
      MODAL_HEADER_TITLE_SIZES: u,
      MODAL_FOOTER_LAYOUTS: n,
      FEATURE_ICON_SIZES: O
    };
  },
  computed: {
    calcHeaderFeatureIconColor() {
      return this.danger ? i.DANGER : this.headerFeatureIconColor;
    },
    calcFooterPrimaryButtonColor() {
      return this.danger ? r.NEUTRAL : r.PRIMARY;
    },
    calcFooterSecondaryButtonColor() {
      return this.danger ? r.DANGER : r.NEUTRAL;
    },
    calcSingleColumn() {
      return !((this.footerTertiaryButtonText || this.footerCheckboxText) && (this.footerSecondaryButtonText || this.footerPrimaryButtonText));
    },
    displayFooter() {
      return this.footerTertiaryButtonText || this.footerCheckboxText || this.footerSecondaryButtonText || this.footerPrimaryButtonText;
    }
  }
});
export {
  N as default
};
//# sourceMappingURL=Modal.vue2.js.map
