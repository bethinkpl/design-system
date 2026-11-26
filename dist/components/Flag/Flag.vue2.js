import { defineComponent as o, createElementBlock as i, openBlock as l, normalizeClass as n, unref as a, createBlock as r, resolveDynamicComponent as d } from "vue";
import { FLAG_SIZES as s } from "./Flag.consts.js";
const z = /* @__PURE__ */ o({
  __name: "Flag",
  props: {
    flag: { type: [Object, Function] },
    size: { default: () => s.M }
  },
  setup(m) {
    return (e, p) => (l(), i("div", {
      class: n({
        "ds-flag": !0,
        "-ds-xxxs": e.size === a(s).XXXS,
        "-ds-xxs": e.size === a(s).XXS,
        "-ds-xs": e.size === a(s).XS,
        "-ds-s": e.size === a(s).S,
        "-ds-m": e.size === a(s).M,
        "-ds-l": e.size === a(s).L,
        "-ds-xl": e.size === a(s).XL,
        "-ds-xxl": e.size === a(s).XXL
      })
    }, [
      (l(), r(d(e.flag), { class: "ds-flag__image" }))
    ], 2));
  }
});
export {
  z as default
};
//# sourceMappingURL=Flag.vue2.js.map
