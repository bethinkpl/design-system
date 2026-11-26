import { defineComponent as d, createElementBlock as i, openBlock as n, normalizeClass as R, unref as r } from "vue";
import { CONTAINER_RIBBON_RADIUSES as e, CONTAINER_RIBBON_LAYOUTS as a, CONTAINER_RIBBON_COLORS as l, CONTAINER_RIBBON_SIZES as s } from "./ContainerRibbon.consts.js";
const c = /* @__PURE__ */ d({
  __name: "ContainerRibbon",
  props: {
    size: { default: () => s.LARGE },
    color: { default: () => l.NEUTRAL },
    layout: { default: () => a.VERTICAL },
    radius: { default: () => e.NONE }
  },
  setup(N) {
    return (o, u) => (n(), i("div", {
      class: R(["ds-container-ribbon", {
        "-ds-size-x-small": o.size === r(s).X_SMALL,
        "-ds-size-small": o.size === r(s).SMALL,
        "-ds-size-medium": o.size === r(s).MEDIUM,
        "-ds-size-large": o.size === r(s).LARGE,
        "-ds-color-neutral": o.color === r(l).NEUTRAL,
        "-ds-color-neutral-heavy": o.color === r(l).NEUTRAL_HEAVY,
        "-ds-color-neutral-strong": o.color === r(l).NEUTRAL_STRONG,
        "-ds-color-primary": o.color === r(l).PRIMARY,
        "-ds-color-success": o.color === r(l).SUCCESS,
        "-ds-color-warning": o.color === r(l).WARNING,
        "-ds-color-danger": o.color === r(l).DANGER,
        "-ds-color-fail": o.color === r(l).FAIL,
        "-ds-color-info": o.color === r(l).INFO,
        "-ds-color-accent": o.color === r(l).ACCENT,
        "-ds-color-transparent": o.color === r(l).TRANSPARENT,
        "-ds-layout-vertical": o.layout === r(a).VERTICAL,
        "-ds-layout-horizontal": o.layout === r(a).HORIZONTAL,
        "-ds-radius-right": o.radius === r(e).RIGHT,
        "-ds-radius-bottom": o.radius === r(e).BOTTOM
      }])
    }, null, 2));
  }
});
export {
  c as default
};
//# sourceMappingURL=ContainerRibbon.vue2.js.map
