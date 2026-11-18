import d from "./BasicRichListItem.vue2.js";
import { resolveComponent as r, createBlock as p, openBlock as m, normalizeClass as u, createSlots as a, withCtx as s, createElementVNode as b, createVNode as g, renderSlot as i } from "vue";
/* empty css                       */
import v from "../../../_virtual/_plugin-vue_export-helper.js";
const c = { class: "ds-basicRichListItem__content" };
function y(e, o, $, h, f, S) {
  const l = r("ds-text-group"), n = r("rich-list-item");
  return m(), p(n, {
    size: e.size,
    type: e.type,
    layout: e.layout,
    "is-interactive": e.isInteractive,
    "is-draggable": e.isDraggable,
    icon: e.icon,
    "icon-color": e.iconColor,
    "icon-color-hex": e.iconColorHex,
    "is-dimmed": e.isDimmed,
    "border-color": e.borderColor,
    "border-color-hex": e.borderColorHex,
    state: e.state,
    "background-color": e.backgroundColor,
    elevation: e.elevation,
    "has-draggable-handler": e.hasDraggableHandler,
    "has-actions-slot-divider": e.hasActionsSlotDivider,
    "is-selectable": e.isSelectable,
    "is-selected": e.isSelected,
    class: u(["ds-basicRichListItem", {
      "-ds-loading": e.state === e.RICH_LIST_ITEM_STATE.LOADING,
      "-ds-small": e.size === e.RICH_LIST_ITEM_SIZE.SMALL
    }]),
    onMouseover: o[0] || (o[0] = (t) => e.hovered = !0),
    onMouseleave: o[1] || (o[1] = (t) => e.hovered = !1),
    "onUpdate:isSelected": o[2] || (o[2] = (t) => e.$emit("update:is-selected", t))
  }, a({
    content: s(() => [
      b("div", c, [
        g(l, {
          "eyebrow-text": e.eyebrow,
          "eyebrow-text-ellipsis": e.eyebrowEllipsis,
          "is-eyebrow-text-uppercase": e.isEyebrowUppercase,
          "main-text-color": e.textGroupMainTextColor,
          "is-interactive": !1,
          "main-text": e.text,
          "main-text-ellipsis": e.textEllipsis,
          "supporting-text": e.supportingText,
          "supporting-text-ellipsis": e.supportingTextEllipsis,
          size: e.textGroupSize,
          state: e.textGroupState,
          "is-supporting-text-tooltip-enabled": e.isSupportingTextTooltipEnabled
        }, a({ _: 2 }, [
          e.$slots.text ? {
            name: "mainText",
            fn: s(() => [
              i(e.$slots, "text", {}, void 0, !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["eyebrow-text", "eyebrow-text-ellipsis", "is-eyebrow-text-uppercase", "main-text-color", "main-text", "main-text-ellipsis", "supporting-text", "supporting-text-ellipsis", "size", "state", "is-supporting-text-tooltip-enabled"])
      ])
    ]),
    _: 2
  }, [
    e.$slots.media ? {
      name: "media",
      fn: s(() => [
        i(e.$slots, "media", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0,
    e.$slots.leadingAccessory ? {
      name: "leadingAccessory",
      fn: s(() => [
        i(e.$slots, "leadingAccessory", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0,
    e.$slots.metadata ? {
      name: "metadata",
      fn: s(() => [
        i(e.$slots, "metadata", {}, void 0, !0)
      ]),
      key: "2"
    } : void 0,
    e.$slots.actions ? {
      name: "actions",
      fn: s(() => [
        i(e.$slots, "actions", {}, void 0, !0)
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["size", "type", "layout", "is-interactive", "is-draggable", "icon", "icon-color", "icon-color-hex", "is-dimmed", "border-color", "border-color-hex", "state", "background-color", "elevation", "has-draggable-handler", "has-actions-slot-divider", "is-selectable", "is-selected", "class"]);
}
const w = /* @__PURE__ */ v(d, [["render", y], ["__scopeId", "data-v-b885ca59"]]);
export {
  w as default
};
//# sourceMappingURL=BasicRichListItem.vue.js.map
