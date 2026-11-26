import { defineComponent as i, createElementBlock as t, openBlock as s, createElementVNode as a, createCommentVNode as d, renderSlot as o } from "vue";
const l = { class: "ds-topNav" }, n = { class: "ds-topNav__leftWrapper" }, r = {
  key: 0,
  class: "ds-topNav__leading"
}, _ = { class: "ds-topNav__default" }, c = {
  key: 0,
  class: "ds-topNav__trailing"
}, m = /* @__PURE__ */ i({
  __name: "TopNav",
  setup(p) {
    return (e, v) => (s(), t("div", l, [
      a("div", n, [
        e.$slots.leading ? (s(), t("div", r, [
          o(e.$slots, "leading", {}, void 0, !0)
        ])) : d("", !0),
        a("div", _, [
          o(e.$slots, "default", {}, void 0, !0)
        ])
      ]),
      e.$slots.trailing ? (s(), t("div", c, [
        o(e.$slots, "trailing", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
});
export {
  m as default
};
//# sourceMappingURL=TopNav.vue2.js.map
