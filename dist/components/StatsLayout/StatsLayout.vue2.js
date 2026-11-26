import { defineComponent as L, useSlots as f, computed as h, createElementBlock as s, openBlock as e, renderSlot as o, createVNode as d, withCtx as v, createElementVNode as a, createCommentVNode as l, toDisplayString as i, unref as _, Fragment as m, renderList as p } from "vue";
import g from "../Cards/Card/Card.vue.js";
import C from "../Divider/Divider.vue.js";
import k from "./StatsErrorBanner/StatsErrorBanner.vue.js";
import H from "../SpinnerLoading/SpinnerLoading.vue.js";
import { useLegacyI18n as b } from "../../composables/useLegacyI18n.js";
const B = { class: "ds-statsLayout" }, S = {
  key: 0,
  class: "ds-statsLayout__loading"
}, $ = {
  key: 1,
  class: "ds-statsLayout__error"
}, D = {
  key: 2,
  class: "ds-statsLayout__content"
}, I = { class: "ds-statsLayout__wrapper" }, E = { class: "ds-statsLayout__summary" }, G = {
  key: 0,
  class: "ds-statsLayout__gridHeader"
}, R = { class: "ds-statsLayout__gridHeaderLeftColumn" }, V = {
  key: 0,
  class: "ds-statsLayout__gridHeaderRightColumn"
}, w = { class: "ds-statsLayout__overallStats" }, N = { class: "ds-statsLayout__stats" }, j = {
  key: 0,
  class: "ds-statsLayout__gridHeader"
}, F = { class: "ds-statsLayout__gridHeaderLeftColumn" }, O = { class: "ds-statsLayout__statsList" }, P = /* @__PURE__ */ L({
  __name: "StatsLayout",
  props: {
    hasGridHeader: { type: Boolean, default: !0 },
    hasRightColumn: { type: Boolean, default: !0 },
    leftColumnLabel: { default: null },
    rightColumnLabel: { default: null },
    statsItemsHeaderLabel: { default: null },
    isLoading: { type: Boolean, default: !1 },
    hasError: { type: Boolean, default: !1 }
  },
  emits: ["retryClicked"],
  setup(W) {
    const { t: n } = b(), c = f(), y = h(() => Object.keys(c).filter((t) => t.startsWith("statsItem-")));
    return (t, u) => (e(), s("div", B, [
      o(t.$slots, "sectionHeader", {}, void 0, !0),
      d(g, null, {
        content: v(() => [
          t.isLoading ? (e(), s("div", S, [
            d(H)
          ])) : t.hasError ? (e(), s("div", $, [
            d(k, {
              onButtonClicked: u[0] || (u[0] = (r) => t.$emit("retryClicked"))
            })
          ])) : (e(), s("div", D, [
            a("div", I, [
              a("div", E, [
                t.hasGridHeader ? (e(), s("div", G, [
                  a("div", R, i(t.leftColumnLabel || _(n)("ds.statsLayout.default.leftColumnLabel")), 1),
                  t.hasRightColumn ? (e(), s("div", V, i(t.rightColumnLabel || _(n)("ds.statsLayout.default.rightColumnLabel")), 1)) : l("", !0)
                ])) : l("", !0),
                a("div", w, [
                  o(t.$slots, "overallStatsItem", {}, void 0, !0)
                ])
              ]),
              a("div", N, [
                t.hasGridHeader ? (e(), s("div", j, [
                  a("div", F, i(t.statsItemsHeaderLabel), 1)
                ])) : l("", !0),
                a("div", O, [
                  (e(!0), s(m, null, p(y.value, (r) => (e(), s(m, { key: r }, [
                    o(t.$slots, r, {}, void 0, !0),
                    d(C, { class: "ds-statsLayout__statsDivider" })
                  ], 64))), 128))
                ])
              ])
            ]),
            o(t.$slots, "resetBanner", {}, void 0, !0)
          ]))
        ]),
        _: 3
      })
    ]));
  }
});
export {
  P as default
};
//# sourceMappingURL=StatsLayout.vue2.js.map
