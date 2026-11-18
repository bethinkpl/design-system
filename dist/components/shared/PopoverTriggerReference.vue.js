import { defineComponent as o, createBlock as s, openBlock as n, unref as r, mergeProps as p, withCtx as a, renderSlot as f } from "vue";
import { useForwardExpose as i, Primitive as c } from "reka-ui";
const _ = /* @__PURE__ */ o({
  inheritAttrs: !1,
  __name: "PopoverTriggerReference",
  props: {
    type: {}
  },
  setup(l) {
    const { forwardRef: t } = i();
    return (e, m) => (n(), s(r(c), p({
      ref: r(t),
      "as-child": ""
    }, e.$attrs), {
      default: a(() => [
        f(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=PopoverTriggerReference.vue.js.map
