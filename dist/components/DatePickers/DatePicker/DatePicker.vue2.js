import { defineComponent as g, ref as i, toRaw as S } from "vue";
import y from "../../Tile/Tile.vue.js";
import { TILE_BORDER_COLORS as t, TILE_COMPACT_LAYOUTS as P, TILE_ADDITIONAL_TEXT_MAX_WIDTHS as N } from "../../Tile/Tile.consts.js";
import L from "../DateBox/DateBox.vue.js";
import { localFullDateWithShortMonthName as O, localWeekdayName as k } from "../../../tools/importers/helpers/dates.js";
import { capitalizeFirstLetter as C } from "../../../tools/importers/helpers/modifiers.js";
import { initFlatpickr as M } from "./DatePicker.composables.js";
import { DATE_PICKER_CALENDAR_POSITIONS as c, DATE_PICKER_COLORS as a, DATE_PICKER_STATES as r, DATE_PICKER_TRIGGER_TYPES as u } from "./DatePicker.consts.js";
import { useLegacyI18n as b } from "../../../composables/useLegacyI18n.js";
import { ICONS as l } from "../../Icons/Icon/Icon.consts.js";
const H = g({
  name: "DatePicker",
  components: {
    DsTile: y,
    DateBox: L
  },
  props: {
    triggerType: {
      type: String,
      default: u.TILE
    },
    isInteractive: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: null
    },
    date: {
      type: Date,
      default: null
    },
    additionalText: {
      type: String,
      default: ""
    },
    helpMessage: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    isLabelUppercase: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: [Object, null],
      default: l.FA_CALENDAR_DAYS,
      validator(e) {
        return e === null || Object.values(l).includes(S(e));
      }
    },
    isIconHiddenOnMobile: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: r.DEFAULT
    },
    color: {
      type: String,
      default: a.NEUTRAL_WEAK
    },
    calendarPosition: {
      type: String,
      default: c.BOTTOM_LEFT
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
  emits: {
    "update:date": (e) => !0
  },
  setup(e, { emit: d }) {
    var o;
    const n = i(null), p = i(), f = i(), { locale: s, t: h } = b(), A = (_) => {
      d("update:date", _[0]);
    }, E = () => {
      R(), n.value = null;
    }, {
      isOpen: D,
      toggle: I,
      createDatePicker: T,
      destroyDatePicker: R,
      updateDatePicker: m
    } = M({
      props: e,
      onChange: A,
      onClose: E,
      defaultDates: (o = e.date) != null ? o : /* @__PURE__ */ new Date(),
      mode: "single",
      locale: s.value
    });
    return {
      flatpickrInstance: n,
      flatpickrInputRef: p,
      datePickerRef: f,
      isOpen: D,
      toggleDatePicker: I,
      updateDatePicker: m,
      createDatePicker: T,
      locale: s,
      t: h,
      DATE_PICKER_CALENDAR_POSITIONS: c,
      DATE_PICKER_COLORS: a,
      DATE_PICKER_STATES: r,
      DATE_PICKER_TRIGGER_TYPES: u,
      TILE_ADDITIONAL_TEXT_MAX_WIDTHS: N,
      TILE_COMPACT_LAYOUTS: P
    };
  },
  computed: {
    borderColor() {
      return {
        [a.NEUTRAL]: this.isInteractive ? t.PRIMARY : t.NEUTRAL_WEAK,
        [a.NEUTRAL_WEAK]: this.isInteractive ? t.PRIMARY : t.NEUTRAL_WEAK,
        [a.DANGER]: this.isInteractive ? t.DANGER : t.DANGER_WEAK,
        [a.WARNING]: this.isInteractive ? t.WARNING : t.WARNING_WEAK
      }[this.color];
    },
    resolvedPlaceholder() {
      var e;
      return (e = this.placeholder) != null ? e : this.t("ds.datePicker.selectDate");
    },
    eyebrowText() {
      return this.date ? C(k(this.date, this.locale)) : "";
    },
    text() {
      return this.date ? O(this.date, this.locale) : this.resolvedPlaceholder;
    },
    tileIcon() {
      return this.additionalText || !this.icon ? null : this.isOpen ? l.FA_CHEVRON_UP : this.icon;
    },
    showErrorMessage() {
      return this.errorMessage !== null;
    },
    showHelpMessage() {
      return this.helpMessage !== null;
    },
    tileState() {
      return this.state;
    },
    tileColor() {
      return this.color;
    }
  },
  methods: {
    async bindFlatpickrInstance() {
      this.flatpickrInstance = await this.createDatePicker(
        this.flatpickrInputRef,
        this.datePickerRef,
        this.updatePositionBasedOnScrollableSelector
      ), this.updateDatePicker();
    },
    async toggle() {
      this.isInteractive && this.state === r.DEFAULT && (this.flatpickrInstance || await this.bindFlatpickrInstance(), this.toggleDatePicker());
    }
  }
});
export {
  H as default
};
//# sourceMappingURL=DatePicker.vue2.js.map
