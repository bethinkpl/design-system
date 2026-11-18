import C from "./SurveyQuestionScale.vue2.js";
import { resolveComponent as a, createElementBlock as l, openBlock as o, createBlock as T, createCommentVNode as r, createVNode as i, withCtx as _, renderSlot as A, createElementVNode as t, toDisplayString as v, normalizeClass as u, Fragment as S, renderList as c } from "vue";
/* empty css                         */
import I from "../../../_virtual/_plugin-vue_export-helper.js";
const L = { class: "ds-surveyQuestionScale" }, N = { class: "ds-surveyQuestionScale__header" }, g = { class: "ds-surveyQuestionScale__title" }, b = {
  key: 0,
  class: "ds-surveyQuestionScale__container -ds-justifyEnd -ds-hideOnMobile"
}, Q = { class: "ds-surveyQuestionScale__elaboration" }, f = ["for"];
function V(e, n, R, k, D, G) {
  const O = a("ds-modal"), m = a("icon-button"), E = a("survey-toggle"), U = a("ds-text-area-field"), p = a("ds-card");
  return o(), l("div", L, [
    e.showModal ? (o(), T(O, {
      key: 0,
      "footer-secondary-button-text": e.t("ds.globals.confirmation"),
      onCloseModal: n[0] || (n[0] = (s) => e.showModal = !1),
      onSecondaryButtonClick: n[1] || (n[1] = (s) => e.showModal = !1)
    }, {
      default: _(() => [
        A(e.$slots, "explanation", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["footer-secondary-button-text"])) : r("", !0),
    i(p, null, {
      content: _(() => [
        t("div", N, [
          t("span", g, v(e.title), 1),
          e.$slots.explanation ? (o(), T(m, {
            key: 0,
            class: "ds-surveyQuestionScale__explanation",
            color: e.ICON_BUTTON_COLORS.NEUTRAL_WEAK,
            icon: e.ICONS.FA_CIRCLE_QUESTION,
            size: e.ICON_SIZES.MEDIUM,
            onClick: n[2] || (n[2] = (s) => e.showModal = !0)
          }, null, 8, ["color", "icon", "size"])) : r("", !0)
        ]),
        t("div", {
          class: u(["ds-surveyQuestionScale__content", { "-oneContainer": e.containers === e.SURVEY_QUESTION_CONTAINERS.ONE }])
        }, [
          t("div", {
            class: u(["ds-surveyQuestionScale__container", {
              "-ds-oneContainer": e.containers === e.SURVEY_QUESTION_CONTAINERS.ONE
            }])
          }, [
            (o(!0), l(S, null, c(e.scaleOptions, (s, d) => (o(), l("div", {
              key: `ds-surveyQuestionScale-${d}`,
              class: u(["ds-surveyQuestionScale__toggle", {
                "-ds-hideOnDesktop": s.standalone && e.containers === e.SURVEY_QUESTION_CONTAINERS.TWO
              }])
            }, [
              i(E, {
                meaning: s.meaning,
                "content-text": s.content,
                label: s.label,
                status: e.selectedValue === s.value ? e.SURVEY_TOGGLE_STATUSES.SELECTED : e.SURVEY_TOGGLE_STATUSES.DEFAULT,
                state: e.state === e.SURVEY_QUESTION_STATES.DISABLED ? e.SURVEY_TOGGLE_STATES.DISABLED : e.SURVEY_TOGGLE_STATES.DEFAULT,
                onClick: (y) => e.onToggleClick(s.value)
              }, null, 8, ["meaning", "content-text", "label", "status", "state", "onClick"])
            ], 2))), 128))
          ], 2),
          e.standaloneOptions.length > 0 && e.containers === e.SURVEY_QUESTION_CONTAINERS.TWO ? (o(), l("div", b, [
            (o(!0), l(S, null, c(e.standaloneOptions, (s, d) => (o(), l("div", {
              key: `ds-surveyQuestionScale-standalone-${d}`,
              class: "ds-surveyQuestionScale__toggle"
            }, [
              i(E, {
                meaning: s.meaning,
                "content-text": s.content,
                label: s.label,
                status: e.selectedValue === s.value ? e.SURVEY_TOGGLE_STATUSES.SELECTED : e.SURVEY_TOGGLE_STATUSES.DEFAULT,
                state: e.state === e.SURVEY_QUESTION_STATES.DISABLED ? e.SURVEY_TOGGLE_STATES.DISABLED : e.SURVEY_TOGGLE_STATES.DEFAULT,
                onClick: (y) => e.onToggleClick(s.value)
              }, null, 8, ["meaning", "content-text", "label", "status", "state", "onClick"])
            ]))), 128))
          ])) : r("", !0)
        ], 2),
        e.selectedValue !== null && e.elaborationLabel !== null ? (o(), l(S, { key: 0 }, [
          n[4] || (n[4] = t("hr", { class: "ds-surveyQuestionScale__separator" }, null, -1)),
          t("div", Q, [
            t("label", {
              class: "ds-surveyQuestionScale__elaborationLabel",
              for: e.inputId
            }, v(e.elaborationLabel), 9, f),
            i(U, {
              class: "ds-surveyQuestionScale__elaborationInput",
              "field-id": e.inputId,
              state: e.textAreaFieldState,
              "model-value": e.elaborationValue,
              "input-props": { placeholder: e.resolvedPlaceholder },
              "is-autoresizing": "",
              "onUpdate:modelValue": n[3] || (n[3] = (s) => e.$emit("elaboration-change", s))
            }, null, 8, ["field-id", "state", "model-value", "input-props"])
          ])
        ], 64)) : r("", !0)
      ]),
      _: 1
    })
  ]);
}
const M = /* @__PURE__ */ I(C, [["render", V], ["__scopeId", "data-v-f840704a"]]);
export {
  M as default
};
//# sourceMappingURL=SurveyQuestionScale.vue.js.map
