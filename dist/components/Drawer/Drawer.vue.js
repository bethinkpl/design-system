import a from "./Drawer.vue2.js";
import { createElementBlock as o, openBlock as s, normalizeClass as d, createCommentVNode as t, createElementVNode as i, renderSlot as r } from "vue";
/* empty css            */
import l from "../../_virtual/_plugin-vue_export-helper.js";
const n = {
  key: 0,
  class: "ds-drawer__header -ds-sticky"
}, c = {
  key: 0,
  class: "ds-drawer__header"
}, k = {
  key: 1,
  class: "ds-drawer__footer"
}, f = {
  key: 1,
  class: "ds-drawer__footer -ds-sticky"
};
function u(e, m, y, p, $, h) {
  return s(), o("div", {
    class: d(["ds-drawer scrollable-container", [e.positionClassName, e.backgroundColorClassName]])
  }, [
    e.$slots.header && e.stickyHeader ? (s(), o("div", n, [
      r(e.$slots, "header", {}, void 0, !0)
    ])) : t("", !0),
    i("div", {
      class: d(["ds-drawer__content", {
        "scrollable-container": e.stickyHeader || e.stickyFooter,
        "-ds-scrollable": e.stickyHeader || e.stickyFooter,
        "-ds-fullHeight": e.stickyFooter
      }])
    }, [
      e.$slots.header && !e.stickyHeader ? (s(), o("div", c, [
        r(e.$slots, "header", {}, void 0, !0)
      ])) : t("", !0),
      r(e.$slots, "default", {}, void 0, !0),
      e.$slots.footer && !e.stickyFooter ? (s(), o("div", k, [
        r(e.$slots, "footer", {}, void 0, !0)
      ])) : t("", !0)
    ], 2),
    e.$slots.footer && e.stickyFooter ? (s(), o("div", f, [
      r(e.$slots, "footer", {}, void 0, !0)
    ])) : t("", !0)
  ], 2);
}
const C = /* @__PURE__ */ l(a, [["render", u], ["__scopeId", "data-v-eeb628a6"]]);
export {
  C as default
};
//# sourceMappingURL=Drawer.vue.js.map
