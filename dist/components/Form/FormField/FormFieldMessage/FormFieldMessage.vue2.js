import { defineComponent as i, computed as l, createElementBlock as r, openBlock as a, normalizeClass as c, unref as t, createCommentVNode as m, renderSlot as u, createVNode as C } from "vue";
import { FORM_FIELD_STATES as e } from "../FormField.consts.js";
import _ from "../../../Icons/Icon/Icon.vue.js";
import { ICONS as d, ICON_SIZES as E } from "../../../Icons/Icon/Icon.consts.js";
const S = ["id"], f = {
  key: 0,
  class: "ds-formFieldMessage__iconWrapper"
}, L = /* @__PURE__ */ i({
  __name: "FormFieldMessage",
  props: {
    state: { default: () => e.DEFAULT },
    messageId: {}
  },
  setup(n) {
    const o = l(() => {
      switch (n.state) {
        case e.ERROR:
          return d.FA_CIRCLE_EXCLAMATION;
        case e.SUCCESS:
          return d.FA_CIRCLE_CHECK;
        default:
          return null;
      }
    });
    return (s, p) => (a(), r("div", {
      id: s.messageId,
      class: c([
        "ds-formFieldMessage",
        {
          "-ds-error": s.state === t(e).ERROR,
          "-ds-success": s.state === t(e).SUCCESS,
          "-ds-disabled": s.state === t(e).DISABLED
        }
      ])
    }, [
      o.value ? (a(), r("div", f, [
        C(t(_), {
          icon: o.value,
          size: t(E).XX_SMALL
        }, null, 8, ["icon", "size"])
      ])) : m("", !0),
      u(s.$slots, "default", {}, void 0, !0)
    ], 10, S));
  }
});
export {
  L as default
};
//# sourceMappingURL=FormFieldMessage.vue2.js.map
