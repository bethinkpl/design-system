import s from "./RadioButton.vue2.js";
import { resolveComponent as l, createBlock as i, openBlock as r } from "vue";
import p from "../../../_virtual/_plugin-vue_export-helper.js";
function d(e, t, u, m, a, c) {
  const n = l("selection-control");
  return r(), i(n, {
    size: e.size,
    label: e.label,
    "is-selected": e.isSelected,
    "selected-icon": e.ICONS.FA_DOT_CIRCLE_SOLID,
    "not-selected-icon": e.ICONS.FA_CIRCLE,
    state: e.state,
    type: e.SELECTION_CONTROL_TYPE.RADIO_BUTTON,
    "onUpdate:isSelected": t[0] || (t[0] = (o) => e.$emit("update:is-selected", o)),
    "onInput:focus": t[1] || (t[1] = (o) => e.$emit("input:focus")),
    "onInput:blur": t[2] || (t[2] = (o) => e.$emit("input:blur"))
  }, null, 8, ["size", "label", "is-selected", "selected-icon", "not-selected-icon", "state", "type"]);
}
const O = /* @__PURE__ */ p(s, [["render", d]]);
export {
  O as default
};
//# sourceMappingURL=RadioButton.vue.js.map
