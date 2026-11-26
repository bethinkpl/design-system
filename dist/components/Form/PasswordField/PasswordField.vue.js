import { defineComponent as f, mergeModels as v, useModel as S, ref as A, computed as u, createBlock as I, openBlock as $, unref as o, mergeProps as c, createSlots as E, withCtx as s, createVNode as O, renderSlot as n } from "vue";
import b from "../InputField/InputField.vue.js";
import g from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_SIZES as C, ICON_BUTTON_COLORS as L } from "../../Buttons/IconButton/IconButton.consts.js";
import { ICONS as i } from "../../Icons/Icon/Icon.consts.js";
const B = /* @__PURE__ */ f({
  __name: "PasswordField",
  props: /* @__PURE__ */ v({
    inputProps: {},
    suffixText: {},
    name: {},
    label: {},
    state: {},
    hasRequiredIndicator: { type: Boolean },
    labelInfo: {},
    subLabel: {},
    fieldId: {},
    messageText: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const d = S(r, "modelValue"), l = A(!1), p = u(() => ({
      ...r.inputProps,
      type: l.value ? "text" : "password"
    })), m = u(() => l.value ? i.FA_EYE_SLASH : i.FA_EYE);
    return (e, t) => ($(), I(o(b), c(e.$props, {
      modelValue: d.value,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => d.value = a),
      "input-props": p.value,
      "left-icon": o(i).FA_LOCK_KEYHOLE
    }), E({
      action: s(() => [
        O(o(g), {
          icon: m.value,
          color: o(L).NEUTRAL_WEAK,
          size: o(C).X_SMALL,
          "data-test-id": "password-toggle",
          onClick: t[0] || (t[0] = (a) => l.value = !l.value)
        }, null, 8, ["icon", "color", "size"])
      ]),
      _: 2
    }, [
      e.$slots.help ? {
        name: "help",
        fn: s(() => [
          n(e.$slots, "help")
        ]),
        key: "0"
      } : void 0,
      e.$slots.labelAside ? {
        name: "labelAside",
        fn: s(() => [
          n(e.$slots, "labelAside")
        ]),
        key: "1"
      } : void 0,
      e.$slots.message ? {
        name: "message",
        fn: s(({ messageId: a }) => [
          n(e.$slots, "message", { messageId: a })
        ]),
        key: "2"
      } : void 0,
      e.$slots.fieldStatus ? {
        name: "fieldStatus",
        fn: s(() => [
          n(e.$slots, "fieldStatus")
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["modelValue", "input-props", "left-icon"]));
  }
});
export {
  B as default
};
//# sourceMappingURL=PasswordField.vue.js.map
