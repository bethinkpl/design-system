import f from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as D, ICONS as e } from "../../Icons/Icon/Icon.consts.js";
import { DATE_PICKER_COLORS as a, DATE_PICKER_STATES as r } from "../DatePicker/DatePicker.consts.js";
import { defineComponent as u, toRaw as n } from "vue";
import { localWeekdayName as l, localMonthDayWithShortMonthDay as o } from "../../../tools/importers/helpers/dates.js";
import { capitalizeFirstLetter as i } from "../../../tools/importers/helpers/modifiers.js";
import { useLegacyI18n as d } from "../../../composables/useLegacyI18n.js";
const T = u({
  name: "DateBox",
  components: {
    DsIcon: f
  },
  props: {
    isInteractive: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: null
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    startIcon: {
      type: Object,
      default: null,
      validate: (t) => t === null || Object.values(e).includes(n(t))
    },
    endIcon: {
      type: Object,
      default: null,
      validate: (t) => t === null || Object.values(e).includes(n(t))
    },
    areIconsHiddenOnMobile: {
      type: Boolean,
      default: !1
    },
    state: {
      type: String || null,
      default: r.DEFAULT
    },
    color: {
      type: String,
      default: a.NEUTRAL_WEAK
    },
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const { locale: t, t: s } = d();
    return { locale: t, t: s };
  },
  data() {
    return {
      ICONS: Object.freeze(e),
      ICON_SIZES: Object.freeze(D),
      DATE_PICKER_STATES: Object.freeze(r),
      DATE_PICKER_COLORS: Object.freeze(a)
    };
  },
  computed: {
    startDateText() {
      var t;
      return this.startDate ? o(this.startDate, this.locale) : (t = this.placeholder) != null ? t : this.t("ds.datePicker.set");
    },
    endDateIfDifferentThanStartDate() {
      return this.startDate && this.endDate && this.startDate.toDateString() !== this.endDate.toDateString() ? this.endDate : null;
    },
    endDateText() {
      return o(
        this.endDateIfDifferentThanStartDate,
        this.locale
      );
    },
    startDateEyebrowText() {
      return this.startDate ? i(l(this.startDate, this.locale)) : "";
    },
    endDateEyebrowText() {
      return this.endDateIfDifferentThanStartDate ? i(
        l(this.endDateIfDifferentThanStartDate, this.locale)
      ) : "";
    }
  }
});
export {
  T as default
};
//# sourceMappingURL=DateBox.vue2.js.map
