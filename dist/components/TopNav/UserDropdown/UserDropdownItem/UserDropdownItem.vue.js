import { defineComponent as s, createBlock as r, openBlock as a, mergeProps as n, unref as p, createSlots as l, withCtx as o, renderSlot as t } from "vue";
import m from "../../../SelectList/SelectListItem/SelectListItem.vue.js";
import { SELECT_LIST_ITEM_SIZES as i } from "../../../SelectList/SelectListItem/SelectListItem.consts.js";
const $ = /* @__PURE__ */ s({
  __name: "UserDropdownItem",
  props: {
    href: {},
    to: {},
    iconLeft: {},
    isSelected: { type: Boolean },
    label: {},
    eyebrowText: {},
    isEyebrowTextUppercase: { type: Boolean },
    selectionMode: {},
    state: {}
  },
  setup(c) {
    return (e, d) => (a(), r(m, n(e.$props, {
      class: "ds-userDropdownItem",
      size: p(i).X_SMALL
    }), l({ _: 2 }, [
      e.$slots.accessory ? {
        name: "accessory",
        fn: o(() => [
          t(e.$slots, "accessory")
        ]),
        key: "0"
      } : void 0,
      e.$slots.metadata ? {
        name: "metadata",
        fn: o(() => [
          t(e.$slots, "metadata")
        ]),
        key: "1"
      } : void 0,
      e.$slots.text ? {
        name: "text",
        fn: o(() => [
          t(e.$slots, "text")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["size"]));
  }
});
export {
  $ as default
};
//# sourceMappingURL=UserDropdownItem.vue.js.map
