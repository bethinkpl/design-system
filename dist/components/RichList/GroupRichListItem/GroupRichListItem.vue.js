import l from "./GroupRichListItem.vue2.js";
import { createElementBlock as o, openBlock as r, normalizeClass as s, createElementVNode as t, createCommentVNode as i, renderSlot as d, normalizeStyle as a } from "vue";
/* empty css                       */
import n from "../../../_virtual/_plugin-vue_export-helper.js";
const c = { class: "ds-groupRichListItem__wrapper" }, p = { class: "ds-groupRichListItem__parent" }, m = {
  key: 0,
  class: "ds-groupRichListItem__children"
};
function _(e, u, h, f, v, C) {
  return r(), o("div", {
    class: s(["ds-groupRichListItem", e.classList])
  }, [
    t("div", c, [
      t("div", p, [
        d(e.$slots, "parent", {}, void 0, !0)
      ]),
      e.isExpanded ? (r(), o("div", m, [
        d(e.$slots, "children", {}, void 0, !0)
      ])) : i("", !0)
    ]),
    e.borderColorClass || e.borderColorStyle ? (r(), o("div", {
      key: 0,
      class: s(["ds-groupRichListItem__border", e.borderColorClass]),
      style: a(e.borderColorStyle)
    }, null, 6)) : i("", !0)
  ], 2);
}
const R = /* @__PURE__ */ n(l, [["render", _], ["__scopeId", "data-v-d9b5014f"]]);
export {
  R as default
};
//# sourceMappingURL=GroupRichListItem.vue.js.map
