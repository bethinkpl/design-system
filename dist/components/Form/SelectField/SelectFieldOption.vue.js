import { defineComponent as a, createBlock as s, openBlock as n, unref as t, withCtx as o, createVNode as l, createTextVNode as p, toDisplayString as r } from "vue";
import { SelectItem as d, SelectItemText as m } from "reka-ui";
import b from "../../SelectList/SelectListItem/SelectListItem.vue.js";
import { SELECT_LIST_ITEM_STATES as i } from "../../SelectList/SelectListItem/SelectListItem.consts.js";
import { getOptionAccessibleName as f } from "./SelectField.utils.js";
const E = /* @__PURE__ */ a({
  __name: "SelectFieldOption",
  props: {
    option: {},
    isSelected: { type: Boolean, default: !1 }
  },
  setup(c) {
    return (e, u) => (n(), s(t(d), {
      "as-child": "",
      value: e.option.value,
      disabled: e.option.isDisabled,
      "text-value": e.option.label,
      "aria-label": e.option.eyebrowText ? t(f)(e.option) : void 0,
      class: "ds-selectFieldOption"
    }, {
      default: o(() => [
        l(b, {
          label: e.option.label,
          "icon-left": e.option.iconLeft,
          "eyebrow-text": e.option.eyebrowText,
          "is-selected": e.isSelected,
          state: e.option.isDisabled ? t(i).DISABLED : t(i).DEFAULT
        }, {
          text: o(() => [
            l(t(m), null, {
              default: o(() => [
                p(r(e.option.label), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["label", "icon-left", "eyebrow-text", "is-selected", "state"])
      ]),
      _: 1
    }, 8, ["value", "disabled", "text-value", "aria-label"]));
  }
});
export {
  E as default
};
//# sourceMappingURL=SelectFieldOption.vue.js.map
