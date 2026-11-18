import n from "./Tooltip.vue2.js";
import { resolveDirective as p, withDirectives as e, createElementBlock as i, openBlock as r, renderSlot as s } from "vue";
/* empty css             */
import a from "../../_virtual/_plugin-vue_export-helper.js";
const l = {
  key: 0,
  tabindex: "-1"
}, d = {
  key: 1,
  tabindex: "-1"
};
function m(o, c, f, _, v, u) {
  const t = p("pv-tooltip");
  return o.inline ? e((r(), i("span", l, [
    s(o.$slots, "default")
  ])), [
    [t, o.options, o.tooltipParams]
  ]) : e((r(), i("div", d, [
    s(o.$slots, "default")
  ])), [
    [t, o.options, o.tooltipParams]
  ]);
}
const y = /* @__PURE__ */ a(n, [["render", m]]);
export {
  y as default
};
//# sourceMappingURL=Tooltip.vue.js.map
