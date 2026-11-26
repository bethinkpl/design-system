import a from "./TabItem.vue2.js";
import { resolveComponent as r, createElementBlock as l, openBlock as s, normalizeClass as i, createBlock as d, createCommentVNode as n, toDisplayString as m } from "vue";
/* empty css             */
import c from "../../_virtual/_plugin-vue_export-helper.js";
const p = ["title"];
function I(e, o, S, b, f, _) {
  const t = r("ds-icon");
  return s(), l("div", {
    class: i(["ds-tabItem", {
      "-ds-sizeMedium": e.size === e.TAB_ITEM_SIZES.MEDIUM,
      "-ds-sizeSmall": e.size === e.TAB_ITEM_SIZES.SMALL,
      "-ds-isSelected": e.isSelected
    }]),
    title: e.label,
    onClick: o[0] || (o[0] = (u) => e.$emit("click"))
  }, [
    e.icon !== null ? (s(), d(t, {
      key: 0,
      class: "ds-tabItem__icon",
      icon: e.icon,
      size: e.ICON_SIZES.X_SMALL
    }, null, 8, ["icon", "size"])) : n("", !0),
    e.label ? (s(), l("span", {
      key: 1,
      class: i(["ds-tabItem__label", { "-ds-ellipsis": e.labelEllipsis }])
    }, m(e.label), 3)) : n("", !0)
  ], 10, p);
}
const $ = /* @__PURE__ */ c(a, [["render", I], ["__scopeId", "data-v-ff198cbc"]]);
export {
  $ as default
};
//# sourceMappingURL=TabItem.vue.js.map
