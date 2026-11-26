import c from "./DatePicker.vue2.js";
import { resolveComponent as a, createElementBlock as t, openBlock as o, normalizeClass as i, createBlock as T, createCommentVNode as r, createElementVNode as l, Fragment as I, createVNode as m, renderSlot as k, toDisplayString as s, withModifiers as d } from "vue";
/* empty css                */
/* empty css                */
import E from "../../../_virtual/_plugin-vue_export-helper.js";
const h = { class: "ds-datePicker__labelWrapper" }, b = {
  key: 2,
  class: "ds-datePicker__errorMessage"
}, g = {
  key: 3,
  class: "ds-datePicker__helpMessage"
}, u = {
  ref: "flatpickrInputRef",
  class: "ds-datePicker__hiddenInput"
};
function f(e, C, P, _, v, y) {
  const n = a("ds-tile"), p = a("date-box");
  return o(), t("div", {
    ref: "datePickerRef",
    class: i(["ds-datePicker", { "-ds-box": e.triggerType === e.DATE_PICKER_TRIGGER_TYPES.BOX }])
  }, [
    e.triggerType === e.DATE_PICKER_TRIGGER_TYPES.TILE ? (o(), t(I, { key: 0 }, [
      l("div", h, [
        e.label ? (o(), t("span", {
          key: 0,
          class: i(["ds-datePicker__label", {
            "-ds-isUppercase": e.isLabelUppercase,
            "-ds-disabled": e.state === e.DATE_PICKER_STATES.DISABLED
          }])
        }, s(e.label), 3)) : r("", !0),
        e.$slots.default ? k(e.$slots, "default", { key: 1 }, void 0, !0) : r("", !0)
      ]),
      m(n, {
        class: "ds-datePicker__tile",
        text: e.text,
        interactive: e.isInteractive,
        "additional-text": e.additionalText,
        color: e.tileColor,
        "border-color": e.borderColor,
        state: e.tileState,
        "icon-right": e.tileIcon,
        "eyebrow-text": e.eyebrowText,
        "additional-text-max-width": e.TILE_ADDITIONAL_TEXT_MAX_WIDTHS.MEDIUM,
        "has-border": "",
        "compact-layout": e.isIconHiddenOnMobile ? e.TILE_COMPACT_LAYOUTS.ICON_RIGHT_HIDDEN : e.TILE_COMPACT_LAYOUTS.DEFAULT,
        onClick: d(e.toggle, ["stop", "prevent"])
      }, null, 8, ["text", "interactive", "additional-text", "color", "border-color", "state", "icon-right", "eyebrow-text", "additional-text-max-width", "compact-layout", "onClick"])
    ], 64)) : (o(), T(p, {
      key: 1,
      "is-interactive": e.isInteractive,
      placeholder: e.resolvedPlaceholder,
      "start-date": e.date,
      "start-icon": e.icon,
      "are-icons-hidden-on-mobile": e.isIconHiddenOnMobile,
      state: e.state,
      color: e.color,
      "is-open": e.isOpen,
      onClick: d(e.toggle, ["stop", "prevent"])
    }, null, 8, ["is-interactive", "placeholder", "start-date", "start-icon", "are-icons-hidden-on-mobile", "state", "color", "is-open", "onClick"])),
    e.showErrorMessage ? (o(), t("span", b, s(e.errorMessage), 1)) : e.showHelpMessage ? (o(), t("span", g, s(e.helpMessage), 1)) : r("", !0),
    l("input", u, null, 512)
  ], 2);
}
const O = /* @__PURE__ */ E(c, [["render", f], ["__scopeId", "data-v-c3d7ca4f"]]);
export {
  O as default
};
//# sourceMappingURL=DatePicker.vue.js.map
