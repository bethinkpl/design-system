import { ref as A, onUnmounted as L, watch as x } from "vue";
import { SUPPORTED_LOCALE as l } from "../../../i18n/index.js";
import { FLATPICKR_POSITIONS as C } from "./DatePicker.consts.js";
let f = null;
const u = /* @__PURE__ */ new Map();
function R({
  props: e,
  onChange: E,
  onClose: F,
  defaultDates: s,
  mode: O = "single",
  locale: T = l.pl
}) {
  let t = null;
  const D = A(!1), i = (n) => {
    t == null || t.setDate(n, !1), t == null || t.updateValue(!1), t == null || t.jumpToDate(Array.isArray(n) ? n[0] : n, !1);
  }, w = async (n, r, h) => {
    var d, g, y, v;
    if (t)
      return;
    if (!f)
      try {
        f = (await import("flatpickr")).default;
      } catch (a) {
        console.error("Failed to load flatpickr", a);
        return;
      }
    let o;
    if (T === l.pl) {
      if (!u.has(l.pl))
        try {
          u.set(
            l.pl,
            (await import("flatpickr/dist/esm/l10n/pl.js")).Polish
          );
        } catch (a) {
          console.error("Failed to load flatpickr Polish locale", a);
        }
      o = u.get(l.pl);
    }
    if (t = f(n, {
      mode: O,
      locale: o != null ? o : l.en,
      //disableMobile fixes mobile pickers on platform
      disableMobile: !0,
      positionElement: r,
      ignoredFocusElements: [r],
      position: C[e.calendarPosition],
      defaultDate: s,
      disable: e.disableDates,
      minDate: e.minDate,
      maxDate: e.maxDate,
      onClose: [
        () => {
          D.value = !1, setTimeout(() => {
            F();
          });
        }
      ],
      onOpen: [
        () => {
          D.value = !0;
        }
      ],
      onChange: E
    }), h) {
      const a = document.querySelector(h), b = () => {
        t == null || t._positionCalendar();
      };
      a && ((g = (d = t == null ? void 0 : t.config) == null ? void 0 : d.onOpen) == null || g.push(() => {
        a.addEventListener("scroll", b, { passive: !0 });
      }), (v = (y = t == null ? void 0 : t.config) == null ? void 0 : y.onClose) == null || v.push(() => {
        a.removeEventListener("scroll", b);
      }));
    }
    return t;
  }, m = () => {
    t == null || t.destroy(), t = null;
  };
  L(() => {
    m();
  }), x(
    [
      () => e.calendarPosition,
      () => e.minDate,
      () => e.maxDate,
      () => e.disableDates,
      () => s
    ],
    () => {
      t == null || t.set({
        position: C[e.calendarPosition],
        defaultDate: s,
        disable: e.disableDates,
        minDate: e.minDate,
        maxDate: e.maxDate
      });
    },
    {
      flush: "post"
      // Ensure updates happen after DOM changes
    }
  ), x(
    [() => e.date, () => e.startDate, () => e.endDate],
    () => {
      c();
    },
    {
      flush: "post"
      // Ensure updates happen after DOM changes
    }
  );
  const c = () => {
    e.date ? i(e.date) : e.startDate && e.endDate ? i([e.startDate, e.endDate]) : e.startDate && !e.endDate ? i(e.startDate) : !e.startDate && e.endDate ? i(e.endDate) : t == null || t.clear(!1);
  };
  return {
    datePicker: t,
    createDatePicker: w,
    destroyDatePicker: m,
    updateDatePicker: c,
    isOpen: D,
    toggle: () => {
      t == null || t.toggle();
    }
  };
}
export {
  R as initFlatpickr
};
//# sourceMappingURL=DatePicker.composables.js.map
