import i from "./ModalDialog.vue2.js";
import { resolveComponent as d, createBlock as s, openBlock as u, withCtx as r, renderSlot as n } from "vue";
import l from "../../../_virtual/_plugin-vue_export-helper.js";
function f(e, o, m, y, c, p) {
  const a = d("ds-modal");
  return u(), s(a, {
    class: "ds-modalDialog",
    size: e.MODAL_SIZES.SMALL,
    danger: e.danger,
    "content-centered": !0,
    "header-image": e.headerImage,
    "header-title-size": e.MODAL_HEADER_TITLE_SIZES.SMALL,
    "header-feature-icon": e.headerFeatureIcon,
    "header-feature-icon-color": e.headerFeatureIconColor,
    "header-title": e.headerTitle,
    "header-subtitle": e.headerSubtitle,
    "footer-primary-button-text": e.footerPrimaryButtonText,
    "footer-primary-button-icon": e.footerPrimaryButtonIcon,
    "footer-primary-button-state": e.footerPrimaryButtonState,
    "footer-secondary-button-text": e.footerSecondaryButtonText,
    "footer-secondary-button-icon": e.footerSecondaryButtonIcon,
    "footer-secondary-button-state": e.footerSecondaryButtonState,
    onCloseModal: o[0] || (o[0] = (t) => e.$emit("close-modal")),
    onPrimaryButtonClick: o[1] || (o[1] = (t) => e.$emit("primary-button-click")),
    onSecondaryButtonClick: o[2] || (o[2] = (t) => e.$emit("secondary-button-click"))
  }, {
    rightActions: r(() => [
      n(e.$slots, "rightActions")
    ]),
    default: r(() => [
      n(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["size", "danger", "header-image", "header-title-size", "header-feature-icon", "header-feature-icon-color", "header-title", "header-subtitle", "footer-primary-button-text", "footer-primary-button-icon", "footer-primary-button-state", "footer-secondary-button-text", "footer-secondary-button-icon", "footer-secondary-button-state"]);
}
const $ = /* @__PURE__ */ l(i, [["render", f]]);
export {
  $ as default
};
//# sourceMappingURL=ModalDialog.vue.js.map
