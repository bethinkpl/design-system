const n = {
  pl: "pl-PL",
  en: "en-US"
};
function o(t) {
  var e;
  return (e = n[t]) != null ? e : t;
}
function l(t, e = "pl-PL") {
  return t.toLocaleDateString(o(e), {
    dateStyle: void 0,
    timeStyle: void 0,
    weekday: "long"
  });
}
function a(t, e = "pl-PL") {
  return t.toLocaleDateString(o(e), {
    dateStyle: "medium",
    timeStyle: void 0
  });
}
function i(t, e = "pl-PL") {
  return t.toLocaleDateString(o(e), {
    month: "short",
    day: "2-digit"
  });
}
export {
  a as localFullDateWithShortMonthName,
  i as localMonthDayWithShortMonthDay,
  l as localWeekdayName
};
//# sourceMappingURL=dates.js.map
