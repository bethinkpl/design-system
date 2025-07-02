function d(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const i = Object.getOwnPropertyDescriptor(e, t);
          i && Object.defineProperty(n, t, i.get ? i : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, s = o.exports, l;
function p() {
  return l || (l = 1, function(n, a) {
    (function(r, e) {
      e(a);
    })(s, function(r) {
      var e = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
      }, t = {
        weekdays: {
          shorthand: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
          longhand: [
            "Niedziela",
            "Poniedziałek",
            "Wtorek",
            "Środa",
            "Czwartek",
            "Piątek",
            "Sobota"
          ]
        },
        months: {
          shorthand: [
            "Sty",
            "Lut",
            "Mar",
            "Kwi",
            "Maj",
            "Cze",
            "Lip",
            "Sie",
            "Wrz",
            "Paź",
            "Lis",
            "Gru"
          ],
          longhand: [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień"
          ]
        },
        rangeSeparator: " do ",
        weekAbbreviation: "tydz.",
        scrollTitle: "Przewiń, aby zwiększyć",
        toggleTitle: "Kliknij, aby przełączyć",
        firstDayOfWeek: 1,
        time_24hr: !0,
        ordinal: function() {
          return ".";
        }
      };
      e.l10ns.pl = t;
      var i = e.l10ns;
      r.Polish = t, r.default = i, Object.defineProperty(r, "__esModule", { value: !0 });
    });
  }(o, o.exports)), o.exports;
}
var u = p();
const f = /* @__PURE__ */ d({
  __proto__: null
}, [u]);
export {
  f as p
};
//# sourceMappingURL=pl-C3BEVRTZ.js.map
