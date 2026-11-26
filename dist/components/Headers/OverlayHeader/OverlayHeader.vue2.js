import i from "../../Buttons/IconButton/IconButton.vue.js";
import n from "../../Divider/Divider.vue.js";
import { DIVIDER_PROMINENCES as O } from "../../Divider/Divider.consts.js";
import a from "../../Dropdown/Dropdown.vue.js";
/* empty css                           */
import { DROPDOWN_ALIGNS as s } from "../../Dropdown/Dropdown.consts.js";
import l from "../../Skeleton/Skeleton.vue.js";
import m from "../../Tooltip/Tooltip.vue.js";
import { TOOLTIP_PLACEMENTS as d } from "../../Tooltip/Tooltip.consts.js";
import { OVERLAY_HEADER_STATES as t, OVERLAY_HEADER_BORDER_COLORS as r } from "./OverlayHeader.consts.js";
import { isElementEditable as f } from "../../../utils/shortcut-keys.js";
import { useLegacyI18n as E } from "../../../composables/useLegacyI18n.js";
import { defineComponent as c, toRaw as T } from "vue";
import { ICONS as o } from "../../Icons/Icon/Icon.consts.js";
import { ICON_BUTTON_STATES as p, ICON_BUTTON_COLORS as u, ICON_BUTTON_SIZES as S } from "../../Buttons/IconButton/IconButton.consts.js";
const P = c({
  name: "OverlayHeader",
  components: { DsIconButton: i, DsDivider: n, DsDropdown: a, DsSkeleton: l, DsTooltip: m },
  props: {
    title: {
      type: String,
      required: !0
    },
    shortTitle: {
      type: String,
      default: null
    },
    eyebrowText: {
      type: String,
      default: null
    },
    borderColor: {
      type: String,
      default: r.NEUTRAL_GHOST,
      validator: (e) => Object.values(r).includes(e)
    },
    isTitleInteractive: {
      type: Boolean,
      default: !1
    },
    areKeyboardShortcutsDisabled: {
      type: Boolean,
      default: !1
    },
    state: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    dropdownIcon: {
      type: Object,
      default: () => o.FA_ELLIPSIS_VERTICAL,
      validator(e) {
        return Object.values(o).includes(T(e));
      }
    }
  },
  emits: {
    close: () => !0,
    titleClick: () => !0
  },
  setup() {
    const { t: e } = E();
    return { t: e };
  },
  data() {
    return {
      ICON_BUTTON_SIZES: Object.freeze(S),
      ICON_BUTTON_COLORS: Object.freeze(u),
      ICON_BUTTON_STATES: Object.freeze(p),
      ICONS: Object.freeze(o),
      DIVIDER_PROMINENCES: Object.freeze(O),
      OVERLAY_HEADER_BORDER_COLORS: Object.freeze(r),
      OVERLAY_HEADER_STATES: Object.freeze(t),
      DROPDOWN_ALIGNS: Object.freeze(s),
      TOOLTIP_PLACEMENTS: Object.freeze(d)
    };
  },
  computed: {
    isLoading() {
      return this.state === t.LOADING;
    }
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  methods: {
    onKeydown(e) {
      if (!this.areKeyboardShortcutsDisabled && !f(e.target))
        switch (e.key) {
          case "q":
          case "Q":
            e.stopPropagation(), this.$emit("close");
            break;
        }
    },
    onTitleClick() {
      this.isTitleInteractive && this.$emit("titleClick");
    }
  }
});
export {
  P as default
};
//# sourceMappingURL=OverlayHeader.vue2.js.map
