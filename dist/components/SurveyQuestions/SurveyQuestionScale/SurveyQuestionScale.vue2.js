import a from "../../Cards/Card/Card.vue.js";
import l from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as n } from "../../Buttons/IconButton/IconButton.consts.js";
import i from "../../Modals/Modal/Modal.vue.js";
import s from "../../SurveyToggle/SurveyToggle.vue.js";
import { SURVEY_TOGGLE_STATUSES as u, SURVEY_TOGGLE_STATES as O, SURVEY_TOGGLE_MEANINGS as E } from "../../SurveyToggle/SurveyToggle.consts.js";
import { SURVEY_QUESTION_SCALE_CONTAINERS as r, SURVEY_QUESTION_STATES as t } from "../SurveyQuestion.consts.js";
import c from "../../Form/TextAreaField/TextAreaField.vue.js";
import { randomString as T } from "../../../utils/string.js";
import { useLegacyI18n as d } from "../../../composables/useLegacyI18n.js";
import { defineComponent as p } from "vue";
import { FORM_FIELD_STATES as o } from "../../Form/FormField/FormField.consts.js";
import { ICON_SIZES as m, ICONS as f } from "../../Icons/Icon/Icon.consts.js";
const V = p({
  name: "SurveyQuestionScale",
  components: {
    DsTextAreaField: c,
    DsCard: a,
    IconButton: l,
    SurveyToggle: s,
    DsModal: i
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    state: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    scaleOptions: {
      type: Array,
      required: !0,
      validator(e) {
        return e.every((S) => typeof S == "object");
      }
    },
    elaborationLabel: {
      type: String,
      default: null
    },
    elaborationValue: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      default: null
    },
    selectedValue: {
      type: String,
      default: null
    },
    containers: {
      type: String,
      default: r.TWO,
      validator(e) {
        return Object.values(r).includes(e);
      }
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["elaboration-change", "select-change"],
  setup() {
    const { t: e } = d();
    return { t: e };
  },
  data() {
    return {
      showModal: !1,
      inputId: "survey-question-" + T(8),
      ICONS: Object.freeze(f),
      ICON_SIZES: Object.freeze(m),
      ICON_BUTTON_COLORS: Object.freeze(n),
      SURVEY_TOGGLE_COLORS: Object.freeze(E),
      SURVEY_TOGGLE_STATES: Object.freeze(O),
      SURVEY_TOGGLE_STATUSES: Object.freeze(u),
      SURVEY_QUESTION_STATES: Object.freeze(t),
      SURVEY_QUESTION_CONTAINERS: Object.freeze(r)
    };
  },
  computed: {
    textAreaFieldState() {
      return this.state === t.DISABLED ? o.DISABLED : o.DEFAULT;
    },
    resolvedPlaceholder() {
      var e;
      return (e = this.placeholder) != null ? e : this.t("ds.survey.placeholder");
    },
    standaloneOptions() {
      return this.scaleOptions.filter(
        (e) => e.standalone
      );
    }
  },
  methods: {
    onToggleClick(e) {
      this.$emit("select-change", this.selectedValue === e ? null : e);
    }
  }
});
export {
  V as default
};
//# sourceMappingURL=SurveyQuestionScale.vue2.js.map
