import C from "./RichListItem.vue2.js";
import { resolveComponent as n, createElementBlock as t, openBlock as e, normalizeClass as r, createCommentVNode as o, createElementVNode as m, renderSlot as d, createVNode as c, withModifiers as a, normalizeStyle as L, createBlock as u } from "vue";
/* empty css                  */
import p from "../../../_virtual/_plugin-vue_export-helper.js";
const h = {
  key: 0,
  class: "ds-richListItem__mediaVertical -ds-dimmable"
}, k = { class: "ds-richListItem__container -ds-dimmable" }, _ = {
  key: 0,
  class: "ds-richListItem__mediaHorizontal"
}, y = {
  key: 2,
  class: "ds-richListItem__iconWrapper"
}, $ = {
  key: 3,
  class: "ds-richListItem__leadingAccessory"
}, b = { class: "ds-richListItem__content" }, A = { class: "ds-richListItem__rightContainer" }, g = {
  key: 0,
  class: "ds-richListItem__metadata"
}, E = {
  key: 2,
  class: "ds-richListItem__checkbox"
}, z = {
  key: 1,
  class: "ds-richListItem__metadata -ds-dimmable"
};
function N(s, i, M, f, H, O) {
  const I = n("ds-icon"), v = n("ds-divider"), S = n("ds-checkbox");
  return e(), t("div", {
    class: r(["ds-richListItem", s.classList]),
    onClick: i[5] || (i[5] = (l) => s.$emit("click", l))
  }, [
    s.hasMedia && s.isVertical ? (e(), t("div", h, [
      d(s.$slots, "media", {}, void 0, !0)
    ])) : o("", !0),
    m("div", k, [
      s.hasMedia && s.isHorizontal ? (e(), t("div", _, [
        d(s.$slots, "media", {}, void 0, !0)
      ])) : o("", !0),
      s.isDraggable && s.hasDraggableHandler ? (e(), t("div", {
        key: 1,
        class: r(["ds-richListItem__dragAndDrop", { [s.draggableIconClassName]: !!s.draggableIconClassName }])
      }, [
        c(I, {
          icon: s.ICONS.FA_BARS,
          class: "ds-richListItem__dragAndDropIcon",
          size: s.size === s.RICH_LIST_ITEM_SIZE.SMALL ? s.ICON_SIZES.XX_SMALL : s.ICON_SIZES.X_SMALL,
          onClick: i[0] || (i[0] = a(() => {
          }, ["stop"]))
        }, null, 8, ["icon", "size"])
      ], 2)) : o("", !0),
      s.icon ? (e(), t("div", y, [
        c(I, {
          icon: s.icon,
          class: r(["ds-richListItem__icon", s.iconColorClass]),
          size: s.size === s.RICH_LIST_ITEM_SIZE.SMALL ? s.ICON_SIZES.XX_SMALL : s.ICON_SIZES.X_SMALL,
          style: L(s.iconColorStyle),
          onClick: i[1] || (i[1] = a((l) => s.$emit("icon-click"), ["prevent"]))
        }, null, 8, ["icon", "size", "class", "style"])
      ])) : o("", !0),
      s.$slots.leadingAccessory ? (e(), t("div", $, [
        d(s.$slots, "leadingAccessory", {}, void 0, !0)
      ])) : o("", !0),
      m("div", b, [
        d(s.$slots, "content", {}, void 0, !0)
      ]),
      m("div", A, [
        s.$slots.metadata && s.isHorizontal ? (e(), t("div", g, [
          d(s.$slots, "metadata", {}, void 0, !0)
        ])) : o("", !0),
        s.$slots.actions ? (e(), t("div", {
          key: 1,
          class: "ds-richListItem__actionSlot",
          onClick: i[2] || (i[2] = a(() => {
          }, ["stop"]))
        }, [
          s.$slots.actions && s.hasActionsSlotDivider && s.isHorizontal ? (e(), u(v, {
            key: 0,
            "is-vertical": ""
          })) : o("", !0),
          d(s.$slots, "actions", {}, void 0, !0)
        ])) : o("", !0),
        s.isSelectable ? (e(), t("div", E, [
          s.isHorizontal ? (e(), u(v, {
            key: 0,
            "is-vertical": ""
          })) : o("", !0),
          c(S, {
            elevation: s.CHECKBOX_ELEVATIONS.NONE,
            "model-value": s.isSelected,
            "onUpdate:modelValue": i[3] || (i[3] = (l) => s.$emit("update:is-selected", !!l)),
            onClick: i[4] || (i[4] = a(() => {
            }, ["stop"]))
          }, null, 8, ["elevation", "model-value"])
        ])) : o("", !0)
      ])
    ]),
    s.$slots.metadata && s.isVertical ? (e(), t("div", z, [
      d(s.$slots, "metadata", {}, void 0, !0)
    ])) : o("", !0),
    s.borderColorClass || s.borderColorStyle ? (e(), t("div", {
      key: 2,
      class: r(["ds-richListItem__border", s.borderColorClass]),
      style: L(s.borderColorStyle)
    }, null, 6)) : o("", !0)
  ], 2);
}
const D = /* @__PURE__ */ p(C, [["render", N], ["__scopeId", "data-v-9854350a"]]);
export {
  D as default
};
//# sourceMappingURL=RichListItem.vue.js.map
