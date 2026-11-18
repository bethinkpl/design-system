import l from "./CardExpandable.vue2.js";
import { resolveComponent as o, createBlock as c, openBlock as r, createSlots as E, withCtx as d, renderSlot as n, createElementBlock as m, createCommentVNode as _, createElementVNode as s, createVNode as v, toDisplayString as C } from "vue";
/* empty css                    */
import h from "../../../_virtual/_plugin-vue_export-helper.js";
const u = {
  key: 0,
  class: "ds-cardExpandable__expandedContent"
}, x = { class: "ds-cardExpandable__expanderLabel" };
function f(e, a, b, k, I, N) {
  const t = o("ds-icon"), i = o("ds-card");
  return r(), c(i, {
    class: "ds-cardExpandable",
    "header-has-padding": e.headerHasPadding,
    "divider-under-header": e.dividerUnderHeader
  }, E({
    header: d(() => [
      n(e.$slots, "header", {}, void 0, !0)
    ]),
    content: d(() => [
      n(e.$slots, "content", { isExpanded: e.isExpandedInternal }, void 0, !0),
      e.isExpandedInternal ? (r(), m("div", u, [
        n(e.$slots, "expandedContent", {}, void 0, !0)
      ])) : _("", !0)
    ]),
    _: 2
  }, [
    e.isExpanderVisible ? {
      name: "footer",
      fn: d(() => [
        s("div", {
          class: "ds-cardExpandable__expander",
          onClick: a[0] || (a[0] = (...p) => e.onExpanderClick && e.onExpanderClick(...p))
        }, [
          s("span", x, C(e.isExpandedInternal ? e.resolvedExpanderTextExpanded : e.resolvedExpanderTextCollapsed), 1),
          v(t, {
            class: "ds-cardExpandable__expanderIcon",
            icon: e.ICONS.FA_CHEVRON_DOWN,
            rotation: e.chevronRotation,
            size: e.ICON_SIZES.X_SMALL
          }, null, 8, ["icon", "rotation", "size"])
        ])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["header-has-padding", "divider-under-header"]);
}
const O = /* @__PURE__ */ h(l, [["render", f], ["__scopeId", "data-v-9b14d378"]]);
export {
  O as default
};
//# sourceMappingURL=CardExpandable.vue.js.map
