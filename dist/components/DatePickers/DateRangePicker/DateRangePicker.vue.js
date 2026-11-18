import r from "./DateRangePicker.vue2.js";
import { resolveComponent as a, createElementBlock as o, openBlock as t, createVNode as s, createCommentVNode as i, createElementVNode as d, withModifiers as c, toDisplayString as l } from "vue";
/* empty css                     */
/* empty css                     */
import p from "../../../_virtual/_plugin-vue_export-helper.js";
const m = {
  ref: "dateRangePickerRef",
  class: "ds-dateRangePicker"
}, f = {
  key: 0,
  class: "ds-dateRangePicker__errorMessage"
}, g = {
  ref: "flatpickrInputRef",
  class: "ds-dateRangePicker__hiddenInput"
};
function h(e, k, u, _, v, I) {
  const n = a("date-box");
  return t(), o("div", m, [
    s(n, {
      "is-interactive": e.isInteractive,
      placeholder: e.resolvedPlaceholder,
      "start-date": e.startDate,
      "end-date": e.endDate,
      "start-icon": e.startIcon,
      "end-icon": e.endIcon,
      "are-icons-hidden-on-mobile": e.areIconsHiddenOnMobile,
      state: e.state,
      color: e.color,
      "is-open": e.isOpen,
      onClick: c(e.toggle, ["stop", "prevent"])
    }, null, 8, ["is-interactive", "placeholder", "start-date", "end-date", "start-icon", "end-icon", "are-icons-hidden-on-mobile", "state", "color", "is-open", "onClick"]),
    e.errorMessage ? (t(), o("span", f, l(e.errorMessage), 1)) : i("", !0),
    d("input", g, null, 512)
  ], 512);
}
const D = /* @__PURE__ */ p(r, [["render", h], ["__scopeId", "data-v-177322a7"]]);
export {
  D as default
};
//# sourceMappingURL=DateRangePicker.vue.js.map
