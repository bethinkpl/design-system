import { defineComponent as p, ref as u, createElementBlock as d, openBlock as f, Fragment as T, createVNode as l, renderSlot as n, createCommentVNode as C, unref as o, withCtx as s, mergeProps as S } from "vue";
import N from "../IconButton/IconButton.vue.js";
import { ICON_BUTTON_SIZES as O, ICON_BUTTON_STATES as a, ICON_BUTTON_COLORS as c } from "../IconButton/IconButton.consts.js";
import B from "../../Tooltip/Tooltip.vue.js";
import I from "../../Modals/Modal/Modal.vue.js";
import { useLegacyI18n as _ } from "../../../composables/useLegacyI18n.js";
import { ICONS as E } from "../../Icons/Icon/Icon.consts.js";
const v = /* @__PURE__ */ p({
  inheritAttrs: !1,
  __name: "HelpButton",
  props: {
    tooltipText: {},
    isDisabled: { type: Boolean },
    modalTitle: {},
    modalSize: {},
    size: { default: () => O.X_SMALL }
  },
  setup(z) {
    const { t: m } = _(), t = u(!1), r = () => {
      t.value = !1;
    };
    return (e, i) => (f(), d(T, null, [
      l(o(B), {
        text: e.tooltipText,
        inline: !0
      }, {
        default: s(() => [
          l(o(N), S({
            icon: o(E).FA_CIRCLE_QUESTION,
            color: o(c).NEUTRAL_WEAK,
            size: e.size,
            state: e.isDisabled ? o(a).DISABLED : o(a).DEFAULT
          }, e.$attrs, {
            onClick: i[0] || (i[0] = (A) => t.value = !0)
          }), null, 16, ["icon", "color", "size", "state"])
        ]),
        _: 1
      }, 8, ["text"]),
      t.value ? n(e.$slots, "modal", {
        key: 0,
        onClose: r
      }, () => [
        l(o(I), {
          "header-title": e.modalTitle,
          size: e.modalSize,
          "footer-primary-button-text": o(m)("ds.globals.confirmation"),
          onCloseModal: r,
          onPrimaryButtonClick: r
        }, {
          default: s(() => [
            n(e.$slots, "modalContent")
          ]),
          _: 3
        }, 8, ["header-title", "size", "footer-primary-button-text"])
      ]) : C("", !0)
    ], 64));
  }
});
export {
  v as default
};
//# sourceMappingURL=HelpButton.vue.js.map
