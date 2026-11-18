import { defineComponent as T, ref as l, toRaw as s } from "vue";
import O from "../DateBox/DateBox.vue.js";
import { initFlatpickr as S } from "../DatePicker/DatePicker.composables.js";
import { useLegacyI18n as g } from "../../../composables/useLegacyI18n.js";
import { DATE_PICKER_COLORS as o, DATE_PICKER_STATES as n, DATE_PICKER_CALENDAR_POSITIONS as d, DATE_PICKER_TRIGGER_TYPES as m } from "../DatePicker/DatePicker.consts.js";
import { ICONS as t } from "../../Icons/Icon/Icon.consts.js";
const K = T({
  name: "DateRangePicker",
  components: {
    DateBox: O
  },
  props: {
    isInteractive: {
      type: Boolean,
      default: !1
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
      type: [Object, null],
      default: t.FA_CALENDAR_DAY,
      validator(e) {
        return e === null || (Object == null ? void 0 : Object.values(t).includes(s(e)));
      }
    },
    endIcon: {
      type: [Object, null],
      default: t.FA_CALENDAR_DAY,
      validator(e) {
        return e === null || (Object == null ? void 0 : Object.values(t).includes(s(e)));
      }
    },
    areIconsHiddenOnMobile: {
      type: Boolean,
      default: !1
    },
    calendarPosition: {
      type: String,
      default: d.BOTTOM_LEFT
    },
    errorMessage: {
      type: String,
      default: ""
    },
    state: {
      type: String || null,
      default: n.DEFAULT
    },
    color: {
      type: String,
      default: o.NEUTRAL_WEAK
    },
    disableDates: {
      type: Array,
      default: () => []
    },
    minDate: {
      type: Date,
      default: null
    },
    maxDate: {
      type: Date,
      default: null
    },
    updatePositionBasedOnScrollableSelector: {
      type: String,
      default: ""
    }
  },
  emits: { "update:date": (e) => !0 },
  setup(e, { emit: u }) {
    const { locale: r, t: f } = g(), i = l(null), p = l(), D = l(), E = (a) => {
      a.length === 2 && u("update:date", { startDate: a[0], endDate: a[1] });
    }, I = () => {
      c(), i.value = null;
    }, {
      isOpen: _,
      toggle: A,
      createDatePicker: P,
      destroyDatePicker: c,
      updateDatePicker: R
    } = S({
      props: e,
      onChange: E,
      onClose: I,
      defaultDates: [e.startDate, e.endDate],
      mode: "range",
      locale: r.value
    });
    return {
      flatpickrInstance: i,
      dateRangePickerRef: p,
      flatpickrInputRef: D,
      isOpen: _,
      toggleDatePicker: A,
      createDatePicker: P,
      destroyDatePicker: c,
      updateDatePicker: R,
      locale: r,
      t: f,
      DATE_PICKER_CALENDAR_POSITIONS: Object.freeze(d),
      DATE_PICKER_COLORS: Object.freeze(o),
      DATE_PICKER_STATES: Object.freeze(n),
      DATE_PICKER_TRIGGER_TYPES: Object.freeze(m)
    };
  },
  computed: {
    resolvedPlaceholder() {
      var e;
      return (e = this.placeholder) != null ? e : this.t("ds.datePicker.selectDate");
    }
  },
  methods: {
    async bindFlatpickrInstance() {
      this.flatpickrInstance = await this.createDatePicker(
        this.flatpickrInputRef,
        this.dateRangePickerRef,
        this.updatePositionBasedOnScrollableSelector
      ), this.updateDatePicker();
    },
    async toggle() {
      this.isInteractive && this.state === n.DEFAULT && (this.flatpickrInstance || await this.bindFlatpickrInstance(), this.toggleDatePicker());
    }
  }
});
export {
  K as default
};
//# sourceMappingURL=DateRangePicker.vue2.js.map
