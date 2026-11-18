import s from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as r, ICONS as S } from "../../Icons/Icon/Icon.consts.js";
import c from "../Button/Button.vue.js";
import { BUTTON_ELEVATIONS as _, BUTTON_RADIUSES as l, BUTTON_TYPES as a, BUTTON_COLORS as N, BUTTON_STATES as i } from "../Button/Button.consts.js";
import { ICON_BUTTON_STATES as O, ICON_BUTTON_COLOR_SCHEMES as u, ICON_BUTTON_COLORS as n, ICON_BUTTON_TYPES as o, ICON_BUTTON_SIZES as t } from "./IconButton.consts.js";
import { defineComponent as T, toRaw as L } from "vue";
import { useHoverState as I } from "../../../composables/hover-state.js";
const C = {
  [t.XX_SMALL]: r.XXX_SMALL,
  [t.X_SMALL]: r.XX_SMALL,
  [t.SMALL]: r.X_SMALL,
  [t.MEDIUM]: r.SMALL,
  [t.LARGE]: r.MEDIUM
}, E = {
  [O.DEFAULT]: i.DEFAULT,
  [O.HOVERED]: i.HOVERED,
  [O.FOCUSED]: i.FOCUSED,
  [O.LOADING]: i.LOADING,
  [O.DISABLED]: i.DISABLED
}, M = T({
  name: "IconButton",
  components: {
    WnlIcon: s,
    WnlButton: c
  },
  props: {
    size: {
      type: String,
      default: t.LARGE,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    radius: {
      type: String,
      default: l.CAPSULE,
      validator(e) {
        return Object.values(l).includes(e);
      }
    },
    type: {
      type: String,
      default: o.ICON_ONLY,
      validator(e) {
        return Object.values(o).includes(e);
      }
    },
    icon: {
      type: Object,
      required: !0,
      validator(e) {
        return Object.values(S).includes(L(e));
      }
    },
    color: {
      type: String,
      default: n.PRIMARY,
      validator(e) {
        return Object.values(n).includes(e);
      }
    },
    colorScheme: {
      type: String,
      default: u.ALL_IN_COLOR,
      validator(e) {
        return Object.values(u).includes(e);
      }
    },
    elevation: {
      type: String,
      default: _.NONE,
      validator(e) {
        return Object.values(_).includes(e);
      }
    },
    /**
     * @deprecated Adds the `-ds-touchable` class, which inflates the layout footprint via
     * the deprecated `$DEPRECATED-min-touchable-size`. The non-inflating touch target is now
     * applied automatically on touch devices via `touchableHitArea` (`@media (pointer: coarse)`),
     * so this prop is redundant — renamed to flag it for removal once call sites migrate.
     */
    touchableDeprecated: {
      type: Boolean,
      default: !1
    },
    state: {
      type: String,
      default: O.DEFAULT,
      validator(e) {
        return Object.values(O).includes(e);
      }
    }
  },
  setup() {
    return {
      ...I(),
      ICON_BUTTON_STATE_MAP: E
    };
  },
  data() {
    return {
      ICONS: Object.freeze(S),
      ICON_SIZES: Object.freeze(r),
      ICON_BUTTON_SIZES: Object.freeze(t),
      ICON_BUTTON_COLOR_SCHEMES: Object.freeze(u),
      ICON_BUTTON_TYPES: Object.freeze(o),
      ICON_BUTTON_STATES: Object.freeze(O),
      ICON_BUTTON_COLORS: Object.freeze(n),
      BUTTON_COLORS: Object.freeze(N)
    };
  },
  computed: {
    iconSize() {
      return this.type === o.ICON_ONLY ? C[this.size] : this.size === t.XX_SMALL ? r.XXX_SMALL : this.size === t.X_SMALL ? r.XX_SMALL : r.X_SMALL;
    },
    buttonType() {
      return this.type === o.ICON_ONLY ? a.OUTLINED : this.type;
    },
    computedColor() {
      if (!this.isButtonColor) {
        if (this.type === o.ICON_ONLY)
          return this.color;
        throw new Error(`Color: ${this.color} is supported only in type: "icon-only"`);
      }
    },
    isButtonColor() {
      return Object.values(n).includes(this.color);
    },
    colorClassName() {
      return `-ds-color-${this.color}`;
    }
  }
});
export {
  M as default
};
//# sourceMappingURL=IconButton.vue2.js.map
