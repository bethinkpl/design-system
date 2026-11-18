import { defineComponent as i, computed as c, createElementBlock as u, openBlock as E, normalizeClass as L, unref as e, createVNode as A } from "vue";
import m from "../Icon/Icon.vue.js";
import { ICON_SIZES as n } from "../Icon/Icon.consts.js";
import { FEATURE_ICON_SIZES as s, FEATURE_ICON_COLOR as r } from "./FeatureIcon.consts.js";
const p = /* @__PURE__ */ i({
  __name: "FeatureIcon",
  props: {
    icon: {},
    size: { default: () => s.MEDIUM },
    color: {},
    doubleBackground: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = {
      [s.X_SMALL]: n.XX_SMALL,
      [s.SMALL]: n.X_SMALL,
      [s.MEDIUM]: n.MEDIUM,
      [s.LARGE]: n.LARGE,
      [s.X_LARGE]: n.X_LARGE
    }, d = c(() => a[l.size]);
    return (o, I) => (E(), u("div", {
      class: L(["ds-featureIcon", {
        "-ds-doubleBackground": o.doubleBackground,
        "-ds-danger": o.color === e(r).DANGER,
        "-ds-fail": o.color === e(r).FAIL,
        "-ds-info": o.color === e(r).INFO,
        "-ds-neutral": o.color === e(r).NEUTRAL,
        "-ds-neutralWeak": o.color === e(r).NEUTRAL_WEAK,
        "-ds-primary": o.color === e(r).PRIMARY,
        "-ds-success": o.color === e(r).SUCCESS,
        "-ds-warning": o.color === e(r).WARNING,
        "-ds-accent": o.color === e(r).ACCENT,
        "-ds-xSmall": o.size === e(s).X_SMALL,
        "-ds-small": o.size === e(s).SMALL,
        "-ds-medium": o.size === e(s).MEDIUM,
        "-ds-large": o.size === e(s).LARGE,
        "-ds-xLarge": o.size === e(s).X_LARGE
      }])
    }, [
      A(e(m), {
        class: "ds-featureIcon__icon",
        icon: o.icon,
        size: d.value
      }, null, 8, ["icon", "size"])
    ], 2));
  }
});
export {
  p as default
};
//# sourceMappingURL=FeatureIcon.vue.js.map
