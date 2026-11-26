import D from "./Pagination.vue2.js";
import { resolveComponent as l, createElementBlock as o, openBlock as n, normalizeClass as p, createElementVNode as a, createCommentVNode as t, Fragment as g, renderList as I, toDisplayString as _, createVNode as r, withCtx as m, createBlock as C, withKeys as P, renderSlot as v } from "vue";
/* empty css                */
import L from "../../_virtual/_plugin-vue_export-helper.js";
const f = { class: "ds-pagination__itemsWrapper" }, k = {
  key: 0,
  class: "ds-pagination__items -ds-default"
}, h = ["onClick"], R = { class: "ds-pagination__itemWrapper -ds-touchable" }, y = {
  key: 0,
  class: "ds-pagination__loading"
}, U = {
  key: 1,
  class: "ds-pagination__items -ds-compact"
}, B = { class: "ds-pagination__compactItem" }, F = ["value", "min", "max"], $ = { class: "ds-pagination__text" }, b = {
  key: 0,
  class: "ds-pagination__loading"
}, z = {
  key: 0,
  class: "ds-pagination__accessorySlot"
};
function G(e, i, M, V, W, w) {
  const T = l("select-list-item"), E = l("select-list"), O = l("dropdown"), N = l("ds-icon"), S = l("icon-button");
  return n(), o("div", {
    class: p(["ds-pagination", {
      "-ds-forceCompact": e.forceCompact,
      "-ds-centered": e.isCentered && !e.$slots.accessory
    }])
  }, [
    a("div", f, [
      e.navigationItems.length > 1 && !e.forceCompact ? (n(), o("div", k, [
        (n(!0), o(g, null, I(e.navigationItems, (s, u) => (n(), o(g, null, [
          e.isPage(s) ? (n(), o("div", {
            key: u,
            class: p(["ds-pagination__itemWrapper", { "-ds-touchable": e.currentPage !== s }]),
            role: "link",
            onClick: (d) => e.changePage(s)
          }, [
            a("span", {
              class: p(["ds-pagination__item", { "-ds-selected": e.currentPage === s }])
            }, _(s), 3)
          ], 10, h)) : (n(), o("div", {
            key: `ellipsis${u}`
          }, [
            r(O, {
              radius: e.DROPDOWN_RADIUSES.SINGLE_EDGE,
              "max-height": "250px",
              align: e.ellipsisAsSecond(u) ? e.DROPDOWN_ALIGNS.START : e.DROPDOWN_ALIGNS.END
            }, {
              reference: m(({ isOpen: d }) => [
                a("div", R, [
                  a("span", {
                    class: p(["ds-pagination__item", { "-ds-selected": d }])
                  }, "…", 2)
                ])
              ]),
              default: m(({ close: d }) => [
                e.navigationItemsForDropdown.length ? (n(), C(E, { key: 0 }, {
                  default: m(() => [
                    (n(!0), o(g, null, I(e.navigationItemsForDropdown, (c, A) => (n(), C(T, {
                      key: A,
                      label: c.label,
                      "is-selected": e.currentPage === c.value,
                      onClick: (Z) => e.onDropdownClick(c.value, d)
                    }, null, 8, ["label", "is-selected", "onClick"]))), 128))
                  ]),
                  _: 2
                }, 1024)) : t("", !0)
              ]),
              _: 2
            }, 1032, ["radius", "align"])
          ]))
        ], 64))), 256)),
        e.isLoading ? (n(), o("div", y, [
          r(N, {
            icon: e.ICONS.FAD_SPINNER_THIRD,
            size: e.ICON_SIZES.SMALL,
            spinning: ""
          }, null, 8, ["icon", "size"])
        ])) : t("", !0)
      ])) : t("", !0),
      e.navigationItems.length > 1 ? (n(), o("div", U, [
        r(S, {
          "touchable-deprecated": "",
          size: e.ICON_BUTTON_SIZES.MEDIUM,
          color: e.ICON_BUTTON_COLORS.NEUTRAL,
          icon: e.ICONS.FA_ANGLE_LEFT,
          state: e.currentPage <= e.FIRST_PAGE_NUMBER ? e.ICON_BUTTON_STATES.DISABLED : e.ICON_BUTTON_STATES.DEFAULT,
          onClick: i[0] || (i[0] = (s) => e.changePage(e.currentPage - 1))
        }, null, 8, ["size", "color", "icon", "state"]),
        a("div", B, [
          a("input", {
            class: "ds-pagination__input",
            type: "number",
            value: e.currentPage,
            min: e.FIRST_PAGE_NUMBER,
            step: 1,
            max: e.lastPage,
            onChange: i[1] || (i[1] = (...s) => e.onInputValueConfirmed && e.onInputValueConfirmed(...s)),
            onKeyup: i[2] || (i[2] = P((...s) => e.onInputValueConfirmed && e.onInputValueConfirmed(...s), ["enter"]))
          }, null, 40, F),
          a("span", $, _(e.t("ds.pagination.from")) + " " + _(e.lastPage), 1)
        ]),
        r(S, {
          "touchable-deprecated": "",
          size: e.ICON_BUTTON_SIZES.MEDIUM,
          color: e.ICON_BUTTON_COLORS.NEUTRAL,
          icon: e.ICONS.FA_ANGLE_RIGHT,
          state: e.currentPage >= e.lastPage ? e.ICON_BUTTON_STATES.DISABLED : e.ICON_BUTTON_STATES.DEFAULT,
          onClick: i[3] || (i[3] = (s) => e.changePage(e.currentPage + 1))
        }, null, 8, ["size", "color", "icon", "state"]),
        e.isLoading ? (n(), o("div", b, [
          r(N, {
            icon: e.ICONS.FAD_SPINNER_THIRD,
            size: e.ICON_SIZES.SMALL,
            spinning: ""
          }, null, 8, ["icon", "size"])
        ])) : t("", !0)
      ])) : t("", !0)
    ]),
    e.$slots.accessory ? (n(), o("div", z, [
      v(e.$slots, "accessory", {}, void 0, !0)
    ])) : t("", !0)
  ], 2);
}
const J = /* @__PURE__ */ L(D, [["render", G], ["__scopeId", "data-v-06722d51"]]);
export {
  J as default
};
//# sourceMappingURL=Pagination.vue.js.map
