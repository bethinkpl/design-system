import i from "./SurveyToggle.vue2.js";
import { resolveComponent as a, createElementBlock as o, openBlock as r, normalizeClass as u, createElementVNode as l, createCommentVNode as v, createVNode as m, toDisplayString as t } from "vue";
/* empty css                  */
import c from "../../_virtual/_plugin-vue_export-helper.js";
const p = { class: "ds-surveyToggle__ring" }, g = {
  key: 0,
  class: "ds-surveyToggle__icon"
}, y = {
  key: 1,
  class: "ds-surveyToggle__content"
}, _ = {
  key: 0,
  class: "ds-surveyToggle__label"
};
function S(e, s, T, f, E, N) {
  const d = a("ds-icon");
  return r(), o("div", {
    class: u(["ds-surveyToggle", {
      "-ds-primary-selected": e.isPrimarySelected,
      "-ds-primary": e.isPrimary,
      "-ds-neutral": e.isNeutral,
      "-ds-neutral-selected": e.isNeutralSelected,
      "-ds-disabled": e.state === e.SURVEY_TOGGLE_STATES.DISABLED,
      "-ds-hovered": e.isHoveredState
    }])
  }, [
    l("div", {
      class: "ds-surveyToggle__toggle",
      onMouseover: s[0] || (s[0] = (n) => e.hovered = !0),
      onMouseleave: s[1] || (s[1] = (n) => e.hovered = !1)
    }, [
      l("div", p, [
        e.isPrimarySelected || e.isNeutralSelected ? (r(), o("span", g, [
          m(d, {
            icon: e.selectedIcon,
            size: e.ICON_SIZES.X_SMALL
          }, null, 8, ["icon", "size"])
        ])) : (r(), o("span", y, t(e.contentText), 1))
      ])
    ], 32),
    e.label ? (r(), o("div", _, t(e.label), 1)) : v("", !0)
  ], 2);
}
const h = /* @__PURE__ */ c(i, [["render", S], ["__scopeId", "data-v-b66ec806"]]);
export {
  h as default
};
//# sourceMappingURL=SurveyToggle.vue.js.map
