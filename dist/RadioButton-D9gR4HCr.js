import { defineComponent as i, resolveComponent as a, createBlock as r, openBlock as u } from "vue";
import { S as O, a as d, b as p, c, I as T, _ as S } from "./index-i9Ph1QiF.js";
const o = {
  ...d
}, s = {
  ...O
}, C = i({
  name: "RadioButton",
  components: { SelectionControl: p },
  props: {
    size: {
      type: String,
      default: o.SMALL,
      validator(e) {
        return Object.values(o).includes(e);
      }
    },
    label: {
      type: String,
      default: null
    },
    isSelected: {
      type: Boolean,
      default: !1
    },
    state: {
      type: String,
      default: s.DEFAULT,
      validator(e) {
        return Object.values(s).includes(e);
      }
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["update:is-selected", "input:focus", "input:blur"],
  data() {
    return {
      ICONS: Object.freeze(T),
      SELECTION_CONTROL_TYPE: Object.freeze(c)
    };
  }
});
function E(e, t, I, f, N, L) {
  const l = a("selection-control");
  return u(), r(l, {
    size: e.size,
    label: e.label,
    "is-selected": e.isSelected,
    "selected-icon": e.ICONS.FA_DOT_CIRCLE_SOLID,
    "not-selected-icon": e.ICONS.FA_CIRCLE,
    state: e.state,
    type: e.SELECTION_CONTROL_TYPE.RADIO_BUTTON,
    "onUpdate:isSelected": t[0] || (t[0] = (n) => e.$emit("update:is-selected", n)),
    "onInput:focus": t[1] || (t[1] = (n) => e.$emit("input:focus")),
    "onInput:blur": t[2] || (t[2] = (n) => e.$emit("input:blur"))
  }, null, 8, ["size", "label", "is-selected", "selected-icon", "not-selected-icon", "state", "type"]);
}
const b = /* @__PURE__ */ S(C, [["render", E]]);
export {
  b as default
};
//# sourceMappingURL=RadioButton-D9gR4HCr.js.map
