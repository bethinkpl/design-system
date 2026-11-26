import i from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as r, ICONS as n } from "../Icons/Icon/Icon.consts.js";
import { ICON_TEXT_STATES as a, ICON_TEXT_SIZES as t, ICON_TEXT_COLORS as o } from "./IconText.consts.js";
import { defineComponent as l, toRaw as u } from "vue";
const d = l({
  name: "IconText",
  components: {
    Icon: i
  },
  props: {
    color: {
      type: String,
      default: o.NEUTRAL_WEAK,
      validator(e) {
        return Object.values(o).includes(e);
      }
    },
    icon: {
      type: Object,
      required: !0,
      validate: (e) => Object.values(n).includes(u(e))
    },
    isInteractive: {
      type: Boolean,
      default: !1
    },
    isLabelBold: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: t.X_SMALL,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    state: {
      type: String,
      default: a.DEFAULT,
      validator(e) {
        return Object.values(a).includes(e);
      }
    }
  },
  data() {
    return {
      ICON_SIZES: Object.freeze(r),
      ICON_TEXT_COLORS: Object.freeze(o),
      ICON_TEXT_SIZES: Object.freeze(t),
      ICON_TEXT_STATES: Object.freeze(a)
    };
  },
  computed: {
    iconSize() {
      return [t.SMALL, t.X_SMALL].includes(this.size) ? r.XX_SMALL : r.X_SMALL;
    }
  }
});
export {
  d as default
};
//# sourceMappingURL=IconText.vue2.js.map
