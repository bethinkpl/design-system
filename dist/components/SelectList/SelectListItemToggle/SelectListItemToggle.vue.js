import o from "./SelectListItemToggle.vue2.js";
import { resolveComponent as s, createBlock as l, openBlock as i } from "vue";
import n from "../../../_virtual/_plugin-vue_export-helper.js";
function c(e, r, m, a, p, _) {
  const t = s("select-list-item");
  return i(), l(t, {
    class: "ds-selectListItemToggle",
    "icon-left": e.icon,
    state: e.state,
    label: e.label,
    "selection-mode": e.SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE,
    size: e.size
  }, null, 8, ["icon-left", "state", "label", "selection-mode", "size"]);
}
const T = /* @__PURE__ */ n(o, [["render", c]]);
export {
  T as default
};
//# sourceMappingURL=SelectListItemToggle.vue.js.map
