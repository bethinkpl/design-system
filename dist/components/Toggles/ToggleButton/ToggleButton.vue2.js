import { defineComponent as u, toRaw as o } from "vue";
import { TOGGLE_BUTTON_STATES as a, TOGGLE_BUTTON_SIZES as t, TOGGLE_BUTTON_RADIUSES as r, TOGGLE_BUTTON_COLORS as l, TOGGLE_BUTTON_LABEL_SIZES as s } from "./ToggleButton.consts.js";
import O from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as n, ICONS as i } from "../../Icons/Icon/Icon.consts.js";
const f = u({
  name: "ToggleButton",
  components: {
    DsIcon: O
  },
  props: {
    color: {
      type: String,
      default: l.NEUTRAL,
      validator(e) {
        return Object.values(l).includes(e);
      }
    },
    hasSmallHorizontalPadding: {
      type: Boolean,
      default: !1
    },
    iconLeft: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(i).includes(o(e));
      }
    },
    iconRight: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(i).includes(o(e));
      }
    },
    isInteractive: {
      type: Boolean,
      default: !0
    },
    isLabelUppercase: {
      type: Boolean,
      default: !1
    },
    isSelected: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    labelSize: {
      type: String,
      default: t.MEDIUM
    },
    radius: {
      type: String,
      default: r.CAPSULE,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    size: {
      type: String,
      default: t.MEDIUM,
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
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["click"],
  data() {
    return {
      ICONS: Object.freeze(i),
      TOGGLE_BUTTON_COLORS: Object.freeze(l),
      TOGGLE_BUTTON_LABEL_SIZES: Object.freeze(s),
      TOGGLE_BUTTON_RADIUSES: Object.freeze(r),
      TOGGLE_BUTTON_SIZES: Object.freeze(t),
      TOGGLE_BUTTON_STATES: Object.freeze(a)
    };
  },
  computed: {
    colorClassName() {
      return `-ds-color-${this.color}`;
    },
    iconSize() {
      return this.size === t.LARGE ? n.X_SMALL : n.XX_SMALL;
    },
    isInteractiveComputed() {
      return this.state !== a.DEFAULT ? !1 : this.isInteractive;
    }
  }
});
export {
  f as default
};
//# sourceMappingURL=ToggleButton.vue2.js.map
