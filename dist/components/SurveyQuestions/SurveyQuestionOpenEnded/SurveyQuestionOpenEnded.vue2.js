import o from "../../Cards/Card/Card.vue.js";
import i from "../../Modals/Modal/Modal.vue.js";
import n from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as m } from "../../Buttons/IconButton/IconButton.consts.js";
import { SURVEY_QUESTION_STATES as t } from "../SurveyQuestion.consts.js";
import a from "../../Form/TextAreaField/TextAreaField.vue.js";
import { randomString as p } from "../../../utils/string.js";
import { useLegacyI18n as s } from "../../../composables/useLegacyI18n.js";
import { defineComponent as u } from "vue";
import { FORM_FIELD_STATES as r } from "../../Form/FormField/FormField.consts.js";
import { ICON_SIZES as S, ICONS as d } from "../../Icons/Icon/Icon.consts.js";
const N = u({
  name: "SurveyQuestionOpenEnded",
  components: {
    DsTextAreaField: a,
    DsCard: o,
    IconButton: n,
    DsModal: i
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["input"],
  setup() {
    const { t: e } = s();
    return { t: e };
  },
  data() {
    return {
      showModal: !1,
      inputId: "survey-question-" + p(8),
      ICONS: Object.freeze(d),
      ICON_BUTTON_COLORS: Object.freeze(m),
      ICON_SIZES: Object.freeze(S),
      SURVEY_QUESTION_STATES: Object.freeze(t)
    };
  },
  computed: {
    textAreaFieldState() {
      return this.state === t.DISABLED ? r.DISABLED : r.DEFAULT;
    },
    resolvedPlaceholder() {
      var e;
      return (e = this.placeholder) != null ? e : this.t("ds.survey.placeholder");
    }
  }
});
export {
  N as default
};
//# sourceMappingURL=SurveyQuestionOpenEnded.vue2.js.map
