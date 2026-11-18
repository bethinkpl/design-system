import { defineComponent as R, computed as a, createElementBlock as E, openBlock as c, createElementVNode as _, normalizeStyle as L, createVNode as m, unref as S } from "vue";
import O from "../ContainerRibbon/ContainerRibbon.vue.js";
import { LOADING_BAR_SIZES as r, LOADING_BAR_COLORS as o } from "./LoadingBar.consts.js";
import { CONTAINER_RIBBON_SIZES as n, CONTAINER_RIBBON_COLORS as e, CONTAINER_RIBBON_LAYOUTS as p } from "../ContainerRibbon/ContainerRibbon.consts.js";
const d = { class: "ds-loadingBar" }, G = /* @__PURE__ */ R({
  __name: "LoadingBar",
  props: {
    color: { default: o.NEUTRAL_HEAVY },
    size: { default: r.LARGE },
    time: {}
  },
  setup(s) {
    const t = s, l = a(() => ({
      [r.SMALL]: n.SMALL,
      [r.MEDIUM]: n.MEDIUM,
      [r.LARGE]: n.LARGE
    })[t.size] || n.LARGE), N = a(() => ({
      [o.NEUTRAL_HEAVY]: e.NEUTRAL_HEAVY,
      [o.NEUTRAL_STRONG]: e.NEUTRAL_STRONG,
      [o.SUCCESS]: e.SUCCESS,
      [o.WARNING]: e.WARNING,
      [o.DANGER]: e.DANGER,
      [o.INFO]: e.INFO
    })[t.color] || e.NEUTRAL_HEAVY), A = a(
      () => t.time === "0" ? { animation: "none", width: "100%" } : { animationDuration: `${t.time}s` }
    );
    return (i, u) => (c(), E("div", d, [
      _("div", {
        class: "ds-loadingBar__progress",
        style: L(A.value)
      }, [
        m(O, {
          size: l.value,
          color: N.value,
          layout: S(p).HORIZONTAL
        }, null, 8, ["size", "color", "layout"])
      ], 4)
    ]));
  }
});
export {
  G as default
};
//# sourceMappingURL=LoadingBar.vue2.js.map
