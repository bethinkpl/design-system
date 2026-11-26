import l from "./DrawerSection.vue2.js";
import { resolveComponent as r, createElementBlock as i, openBlock as o, createBlock as a, createCommentVNode as n, createSlots as d, withCtx as p, renderSlot as t } from "vue";
import c from "../../../_virtual/_plugin-vue_export-helper.js";
const f = { class: "ds-drawerSection" }, u = { key: 1 }, h = { key: 2 };
function m(e, E, b, k, C, g) {
  const s = r("ds-section-header");
  return o(), i("div", f, [
    e.title ? (o(), a(s, {
      key: 0,
      "icon-left": e.iconLeft,
      "icon-left-color": e.iconLeftColor,
      "icon-right": e.iconRight,
      "icon-right-color": e.iconRightColor,
      "is-expandable": e.isExpandable,
      "is-expanded": e.isExpandedInternal,
      info: e.info,
      size: e.size,
      title: e.title,
      "title-ellipsis": e.titleEllipsis,
      eyebrow: e.eyebrow,
      "supporting-text": e.supportingText,
      "has-divider": e.hasDivider,
      "mobile-layout": e.SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL,
      onInfoClick: e.onInfoClick,
      "onUpdate:isExpanded": e.onExpandableHeaderClick
    }, d({ _: 2 }, [
      e.$slots.sectionHeaderDefault ? {
        name: "default",
        fn: p(() => [
          t(e.$slots, "sectionHeaderDefault")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["icon-left", "icon-left-color", "icon-right", "icon-right-color", "is-expandable", "is-expanded", "info", "size", "title", "title-ellipsis", "eyebrow", "supporting-text", "has-divider", "mobile-layout", "onInfoClick", "onUpdate:isExpanded"])) : n("", !0),
    e.isExpandedInternal || !e.isExpandable ? (o(), i("div", u, [
      t(e.$slots, "default")
    ])) : n("", !0),
    e.$slots.uncollapsible ? (o(), i("div", h, [
      t(e.$slots, "uncollapsible")
    ])) : n("", !0)
  ]);
}
const I = /* @__PURE__ */ c(l, [["render", m]]);
export {
  I as default
};
//# sourceMappingURL=DrawerSection.vue.js.map
