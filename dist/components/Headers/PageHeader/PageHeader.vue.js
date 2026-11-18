import n from "./PageHeader.vue2.js";
import { resolveComponent as p, createElementBlock as o, openBlock as s, normalizeClass as _, createElementVNode as r, createBlock as c, createCommentVNode as d, renderSlot as a, toDisplayString as t } from "vue";
/* empty css                */
import l from "../../../_virtual/_plugin-vue_export-helper.js";
const m = { class: "ds-pageHeader__wrapper" }, u = {
  key: 0,
  class: "ds-pageHeader__breadcrumbs"
}, v = { class: "ds-pageHeader__contentWrapper" }, g = { class: "ds-pageHeader__textWrapper" }, H = { class: "ds-pageHeader__titleWrapper" }, b = {
  key: 0,
  class: "ds-pageHeader__eyebrow"
}, h = { class: "ds-pageHeader__title" }, f = {
  key: 0,
  class: "ds-pageHeader__supportingText"
}, y = {
  key: 0,
  class: "ds-pageHeader__actions"
};
function k(e, $, E, I, w, A) {
  const i = p("ds-divider");
  return s(), o("div", {
    class: _(["ds-pageHeader", { "-ds-horizontal": e.mobileLayout === e.PAGE_HEADER_MOBILE_LAYOUTS.HORIZONTAL }])
  }, [
    r("div", m, [
      e.$slots.breadcrumbs ? (s(), o("div", u, [
        a(e.$slots, "breadcrumbs", {}, void 0, !0)
      ])) : d("", !0),
      r("div", v, [
        r("div", g, [
          r("div", H, [
            e.eyebrow ? (s(), o("div", b, t(e.eyebrow), 1)) : d("", !0),
            r("div", h, t(e.pageTitle), 1)
          ]),
          e.supportingInfo ? (s(), o("div", f, t(e.supportingInfo), 1)) : d("", !0)
        ]),
        e.$slots.actions ? (s(), o("div", y, [
          a(e.$slots, "actions", {}, void 0, !0)
        ])) : d("", !0)
      ])
    ]),
    e.divider ? (s(), c(i, { key: 0 })) : d("", !0)
  ], 2);
}
const C = /* @__PURE__ */ l(n, [["render", k], ["__scopeId", "data-v-eeeba87c"]]);
export {
  C as default
};
//# sourceMappingURL=PageHeader.vue.js.map
