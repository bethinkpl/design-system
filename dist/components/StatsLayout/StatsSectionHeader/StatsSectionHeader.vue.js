import { defineComponent as c, ref as p, createElementBlock as C, openBlock as i, Fragment as y, createVNode as n, createBlock as I, createCommentVNode as M, unref as l, createSlots as S, withCtx as r, renderSlot as s } from "vue";
import k from "../../Headers/SectionHeader/SectionHeader.vue.js";
import v from "../StatsFiltersDropdown/StatsFiltersDropdown.vue.js";
import { SECTION_HEADER_MOBILE_LAYOUTS as O } from "../../Headers/SectionHeader/SectionHeader.consts.js";
import { ICONS as $ } from "../../Icons/Icon/Icon.consts.js";
import H from "../../Modals/Modal/Modal.vue.js";
import { useLegacyI18n as L } from "../../../composables/useLegacyI18n.js";
const g = /* @__PURE__ */ c({
  __name: "StatsSectionHeader",
  props: {
    filterItems: { default: () => [] },
    selectedFilterKey: { default: null },
    infoModalTitle: {}
  },
  emits: ["select-filter"],
  setup(N, { emit: f }) {
    const a = f, o = p(!1), m = (e) => {
      a("select-filter", e);
    }, { t: d } = L();
    return (e, t) => (i(), C(y, null, [
      n(k, {
        title: l(d)("ds.statsLayout.sectionHeader.title"),
        "icon-left": l($).FA_CHART_COLUMN,
        "has-divider": !1,
        info: !!e.$slots.infoModalContent,
        "mobile-layout": l(O).HORIZONTAL,
        onInfoClick: t[0] || (t[0] = (u) => o.value = !0)
      }, S({ _: 2 }, [
        e.filterItems && e.filterItems.length > 0 ? {
          name: "default",
          fn: r(() => [
            s(e.$slots, "accessory", {}, () => [
              n(v, {
                "filter-items": e.filterItems,
                "selected-filter-key": e.selectedFilterKey,
                onSelect: m
              }, null, 8, ["filter-items", "selected-filter-key"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "icon-left", "info", "mobile-layout"]),
      o.value && e.$slots.infoModalContent ? (i(), I(H, {
        key: 0,
        "header-title": e.infoModalTitle,
        onCloseModal: t[1] || (t[1] = (u) => o.value = !1)
      }, {
        default: r(() => [
          s(e.$slots, "infoModalContent")
        ]),
        _: 3
      }, 8, ["header-title"])) : M("", !0)
    ], 64));
  }
});
export {
  g as default
};
//# sourceMappingURL=StatsSectionHeader.vue.js.map
