import { defineComponent as l, computed as r, createElementBlock as n, openBlock as o, createBlock as c, createCommentVNode as s, resolveDynamicComponent as u, mergeProps as f, withCtx as v, createElementVNode as m, renderSlot as a, toDisplayString as g } from "vue";
const h = { class: "ds-topNavBranding" }, B = {
  key: 0,
  class: "ds-topNavBranding__logo"
}, p = { class: "ds-topNavBranding__title" }, N = {
  key: 0,
  class: "ds-topNavBranding__accessory"
}, k = /* @__PURE__ */ l({
  __name: "TopNavBranding",
  props: {
    title: {},
    href: { default: "" },
    to: { default: "" }
  },
  setup(e) {
    const d = r(() => e.href ? "a" : e.to ? "router-link" : "div"), i = r(() => e.href ? { href: e.href } : e.to ? { to: e.to } : {});
    return (t, _) => (o(), n("div", h, [
      (o(), c(u(d.value), f(i.value, { class: "ds-topNavBranding__brand" }), {
        default: v(() => [
          t.$slots.logo ? (o(), n("span", B, [
            a(t.$slots, "logo", {}, void 0, !0)
          ])) : s("", !0),
          m("span", p, g(t.title), 1)
        ]),
        _: 3
      }, 16)),
      t.$slots.accessory ? (o(), n("div", N, [
        a(t.$slots, "accessory", {}, void 0, !0)
      ])) : s("", !0)
    ]));
  }
});
export {
  k as default
};
//# sourceMappingURL=TopNavBranding.vue2.js.map
