import { defineComponent as u, createBlock as c, openBlock as i, unref as e, withCtx as o, createVNode as m, createElementBlock as d, Fragment as y, renderList as N, createTextVNode as k, toDisplayString as D } from "vue";
import L from "../../Buttons/Button/Button.vue.js";
import { BUTTON_TYPES as g } from "../../Buttons/Button/Button.consts.js";
import { ICONS as n } from "../../Icons/Icon/Icon.consts.js";
import A from "../../Dropdown/Dropdown.vue.js";
/* empty css                           */
import { DROPDOWN_ALIGNS as C } from "../../Dropdown/Dropdown.consts.js";
import F from "../../SelectList/SelectList.vue.js";
import S from "../../SelectList/SelectListItem/SelectListItem.vue.js";
import { useLegacyI18n as T } from "../../../composables/useLegacyI18n.js";
const K = /* @__PURE__ */ u({
  __name: "StatsFiltersDropdown",
  props: {
    filterItems: { default: () => [] },
    selectedFilterKey: { default: null }
  },
  emits: ["select"],
  setup(E, { emit: a }) {
    const f = a, { t: p } = T(), _ = (t, s) => {
      f("select", t.key), s();
    };
    return (t, s) => (i(), c(e(A), {
      align: e(C).END
    }, {
      reference: o(({ isOpen: l }) => [
        m(e(L), {
          "icon-left": e(n).FA_CHART_COLUMN,
          "icon-right": l ? e(n).FA_ANGLE_UP : e(n).FA_ANGLE_DOWN,
          type: e(g).TEXT
        }, {
          default: o(() => [
            k(D(e(p)("ds.statsLayout.filtersDropdown.title")), 1)
          ]),
          _: 2
        }, 1032, ["icon-left", "icon-right", "type"])
      ]),
      default: o(({ close: l }) => [
        m(F, null, {
          default: o(() => [
            (i(!0), d(y, null, N(t.filterItems, (r) => (i(), c(S, {
              key: r.key,
              label: r.label,
              "is-selected": r.key === t.selectedFilterKey,
              onClick: (O) => _(r, l)
            }, null, 8, ["label", "is-selected", "onClick"]))), 128))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["align"]));
  }
});
export {
  K as default
};
//# sourceMappingURL=StatsFiltersDropdown.vue.js.map
