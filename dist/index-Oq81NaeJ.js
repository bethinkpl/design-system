var xe = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
], $ = {
  _disable: [],
  allowInput: !1,
  allowInvalidPreload: !1,
  altFormat: "F j, Y",
  altInput: !1,
  altInputClass: "form-control input",
  animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: !0,
  clickOpens: !0,
  closeOnSelect: !0,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: !1,
  enableSeconds: !1,
  enableTime: !1,
  errorHandler: function(a) {
    return typeof console != "undefined" && console.warn(a);
  },
  getWeek: function(a) {
    var r = new Date(a.getTime());
    r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + 3 - (r.getDay() + 6) % 7);
    var e = new Date(r.getFullYear(), 0, 4);
    return 1 + Math.round(((r.getTime() - e.getTime()) / 864e5 - 3 + (e.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: !1,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: !1,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: !1,
  showMonths: 1,
  static: !1,
  time_24hr: !1,
  weekNumbers: !1,
  wrap: !1
}, te = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(a) {
    var r = a % 100;
    if (r > 3 && r < 21)
      return "th";
    switch (r % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: !1
}, I = function(a, r) {
  return r === void 0 && (r = 2), ("000" + a).slice(r * -1);
}, F = function(a) {
  return a === !0 ? 1 : 0;
};
function Be(a, r) {
  var e;
  return function() {
    var m = this, h = arguments;
    clearTimeout(e), e = setTimeout(function() {
      return a.apply(m, h);
    }, r);
  };
}
var Ee = function(a) {
  return a instanceof Array ? a : [a];
};
function T(a, r, e) {
  if (e === !0)
    return a.classList.add(r);
  a.classList.remove(r);
}
function v(a, r, e) {
  var m = window.document.createElement(a);
  return r = r || "", e = e || "", m.className = r, e !== void 0 && (m.textContent = e), m;
}
function se(a) {
  for (; a.firstChild; )
    a.removeChild(a.firstChild);
}
function Je(a, r) {
  if (r(a))
    return a;
  if (a.parentNode)
    return Je(a.parentNode, r);
}
function de(a, r) {
  var e = v("div", "numInputWrapper"), m = v("input", "numInput " + a), h = v("span", "arrowUp"), g = v("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? m.type = "number" : (m.type = "text", m.pattern = "\\d*"), r !== void 0)
    for (var w in r)
      m.setAttribute(w, r[w]);
  return e.appendChild(m), e.appendChild(h), e.appendChild(g), e;
}
function _(a) {
  try {
    if (typeof a.composedPath == "function") {
      var r = a.composedPath();
      return r[0];
    }
    return a.target;
  } catch {
    return a.target;
  }
}
var ke = function() {
}, ge = function(a, r, e) {
  return e.months[r ? "shorthand" : "longhand"][a];
}, En = {
  D: ke,
  F: function(a, r, e) {
    a.setMonth(e.months.longhand.indexOf(r));
  },
  G: function(a, r) {
    a.setHours((a.getHours() >= 12 ? 12 : 0) + parseFloat(r));
  },
  H: function(a, r) {
    a.setHours(parseFloat(r));
  },
  J: function(a, r) {
    a.setDate(parseFloat(r));
  },
  K: function(a, r, e) {
    a.setHours(a.getHours() % 12 + 12 * F(new RegExp(e.amPM[1], "i").test(r)));
  },
  M: function(a, r, e) {
    a.setMonth(e.months.shorthand.indexOf(r));
  },
  S: function(a, r) {
    a.setSeconds(parseFloat(r));
  },
  U: function(a, r) {
    return new Date(parseFloat(r) * 1e3);
  },
  W: function(a, r, e) {
    var m = parseInt(r), h = new Date(a.getFullYear(), 0, 2 + (m - 1) * 7, 0, 0, 0, 0);
    return h.setDate(h.getDate() - h.getDay() + e.firstDayOfWeek), h;
  },
  Y: function(a, r) {
    a.setFullYear(parseFloat(r));
  },
  Z: function(a, r) {
    return new Date(r);
  },
  d: function(a, r) {
    a.setDate(parseFloat(r));
  },
  h: function(a, r) {
    a.setHours((a.getHours() >= 12 ? 12 : 0) + parseFloat(r));
  },
  i: function(a, r) {
    a.setMinutes(parseFloat(r));
  },
  j: function(a, r) {
    a.setDate(parseFloat(r));
  },
  l: ke,
  m: function(a, r) {
    a.setMonth(parseFloat(r) - 1);
  },
  n: function(a, r) {
    a.setMonth(parseFloat(r) - 1);
  },
  s: function(a, r) {
    a.setSeconds(parseFloat(r));
  },
  u: function(a, r) {
    return new Date(parseFloat(r));
  },
  w: ke,
  y: function(a, r) {
    a.setFullYear(2e3 + parseFloat(r));
  }
}, K = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
}, ne = {
  Z: function(a) {
    return a.toISOString();
  },
  D: function(a, r, e) {
    return r.weekdays.shorthand[ne.w(a, r, e)];
  },
  F: function(a, r, e) {
    return ge(ne.n(a, r, e) - 1, !1, r);
  },
  G: function(a, r, e) {
    return I(ne.h(a, r, e));
  },
  H: function(a) {
    return I(a.getHours());
  },
  J: function(a, r) {
    return r.ordinal !== void 0 ? a.getDate() + r.ordinal(a.getDate()) : a.getDate();
  },
  K: function(a, r) {
    return r.amPM[F(a.getHours() > 11)];
  },
  M: function(a, r) {
    return ge(a.getMonth(), !0, r);
  },
  S: function(a) {
    return I(a.getSeconds());
  },
  U: function(a) {
    return a.getTime() / 1e3;
  },
  W: function(a, r, e) {
    return e.getWeek(a);
  },
  Y: function(a) {
    return I(a.getFullYear(), 4);
  },
  d: function(a) {
    return I(a.getDate());
  },
  h: function(a) {
    return a.getHours() % 12 ? a.getHours() % 12 : 12;
  },
  i: function(a) {
    return I(a.getMinutes());
  },
  j: function(a) {
    return a.getDate();
  },
  l: function(a, r) {
    return r.weekdays.longhand[a.getDay()];
  },
  m: function(a) {
    return I(a.getMonth() + 1);
  },
  n: function(a) {
    return a.getMonth() + 1;
  },
  s: function(a) {
    return a.getSeconds();
  },
  u: function(a) {
    return a.getTime();
  },
  w: function(a) {
    return a.getDay();
  },
  y: function(a) {
    return String(a.getFullYear()).substring(2);
  }
}, Ue = function(a) {
  var r = a.config, e = r === void 0 ? $ : r, m = a.l10n, h = m === void 0 ? te : m, g = a.isMobile, w = g === void 0 ? !1 : g;
  return function(x, E, Z) {
    var C = Z || h;
    return e.formatDate !== void 0 && !w ? e.formatDate(x, E, C) : E.split("").map(function(A, N, Y) {
      return ne[A] && Y[N - 1] !== "\\" ? ne[A](x, C, e) : A !== "\\" ? A : "";
    }).join("");
  };
}, Se = function(a) {
  var r = a.config, e = r === void 0 ? $ : r, m = a.l10n, h = m === void 0 ? te : m;
  return function(g, w, x, E) {
    if (!(g !== 0 && !g)) {
      var Z = E || h, C, A = g;
      if (g instanceof Date)
        C = new Date(g.getTime());
      else if (typeof g != "string" && g.toFixed !== void 0)
        C = new Date(g);
      else if (typeof g == "string") {
        var N = w || (e || $).dateFormat, Y = String(g).trim();
        if (Y === "today")
          C = /* @__PURE__ */ new Date(), x = !0;
        else if (e && e.parseDate)
          C = e.parseDate(g, N);
        else if (/Z$/.test(Y) || /GMT$/.test(Y))
          C = new Date(g);
        else {
          for (var ae = void 0, D = [], j = 0, me = 0, L = ""; j < N.length; j++) {
            var R = N[j], J = R === "\\", pe = N[j - 1] === "\\" || J;
            if (K[R] && !pe) {
              L += K[R];
              var W = new RegExp(L).exec(g);
              W && (ae = !0) && D[R !== "Y" ? "push" : "unshift"]({
                fn: En[R],
                val: W[++me]
              });
            } else J || (L += ".");
          }
          C = !e || !e.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), D.forEach(function(U) {
            var V = U.fn, he = U.val;
            return C = V(C, he, Z) || C;
          }), C = ae ? C : void 0;
        }
      }
      if (!(C instanceof Date && !isNaN(C.getTime()))) {
        e.errorHandler(new Error("Invalid date provided: " + A));
        return;
      }
      return x === !0 && C.setHours(0, 0, 0, 0), C;
    }
  };
};
function O(a, r, e) {
  return e === void 0 && (e = !0), e !== !1 ? new Date(a.getTime()).setHours(0, 0, 0, 0) - new Date(r.getTime()).setHours(0, 0, 0, 0) : a.getTime() - r.getTime();
}
var kn = function(a, r, e) {
  return a > Math.min(r, e) && a < Math.max(r, e);
}, Te = function(a, r, e) {
  return a * 3600 + r * 60 + e;
}, Tn = function(a) {
  var r = Math.floor(a / 3600), e = (a - r * 3600) / 60;
  return [r, e, a - r * 3600 - e * 60];
}, In = {
  DAY: 864e5
};
function Ie(a) {
  var r = a.defaultHour, e = a.defaultMinute, m = a.defaultSeconds;
  if (a.minDate !== void 0) {
    var h = a.minDate.getHours(), g = a.minDate.getMinutes(), w = a.minDate.getSeconds();
    r < h && (r = h), r === h && e < g && (e = g), r === h && e === g && m < w && (m = a.minDate.getSeconds());
  }
  if (a.maxDate !== void 0) {
    var x = a.maxDate.getHours(), E = a.maxDate.getMinutes();
    r = Math.min(r, x), r === x && (e = Math.min(E, e)), r === x && e === E && (m = a.maxDate.getSeconds());
  }
  return { hours: r, minutes: e, seconds: m };
}
typeof Object.assign != "function" && (Object.assign = function(a) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  if (!a)
    throw TypeError("Cannot convert undefined or null to object");
  for (var m = function(x) {
    x && Object.keys(x).forEach(function(E) {
      return a[E] = x[E];
    });
  }, h = 0, g = r; h < g.length; h++) {
    var w = g[h];
    m(w);
  }
  return a;
});
var k = function() {
  return k = Object.assign || function(a) {
    for (var r, e = 1, m = arguments.length; e < m; e++) {
      r = arguments[e];
      for (var h in r) Object.prototype.hasOwnProperty.call(r, h) && (a[h] = r[h]);
    }
    return a;
  }, k.apply(this, arguments);
}, Ke = function() {
  for (var a = 0, r = 0, e = arguments.length; r < e; r++) a += arguments[r].length;
  for (var m = Array(a), h = 0, r = 0; r < e; r++)
    for (var g = arguments[r], w = 0, x = g.length; w < x; w++, h++)
      m[h] = g[w];
  return m;
}, Sn = 300;
function _n(a, r) {
  var e = {
    config: k(k({}, $), y.defaultConfig),
    l10n: te
  };
  e.parseDate = Se({ config: e.config, l10n: e.l10n }), e._handlers = [], e.pluginElements = [], e.loadedPlugins = [], e._bind = D, e._setHoursFromDate = N, e._positionCalendar = fe, e.changeMonth = ve, e.changeYear = re, e.clear = Ze, e.close = Qe, e.onMouseOver = le, e._createElement = v, e.createDay = W, e.destroy = Xe, e.isEnabled = B, e.jumpToDate = L, e.updateValue = H, e.open = tn, e.redraw = He, e.set = ln, e.setDate = fn, e.toggle = dn;
  function m() {
    e.utils = {
      getDaysInMonth: function(n, t) {
        return n === void 0 && (n = e.currentMonth), t === void 0 && (t = e.currentYear), n === 1 && (t % 4 === 0 && t % 100 !== 0 || t % 400 === 0) ? 29 : e.l10n.daysInMonth[n];
      }
    };
  }
  function h() {
    e.element = e.input = a, e.isOpen = !1, an(), Ye(), cn(), un(), m(), e.isMobile || pe(), me(), (e.selectedDates.length || e.config.noCalendar) && (e.config.enableTime && N(e.config.noCalendar ? e.latestSelectedDateObj : void 0), H(!1)), x();
    var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && n && fe(), b("onReady");
  }
  function g() {
    var n;
    return ((n = e.calendarContainer) === null || n === void 0 ? void 0 : n.getRootNode()).activeElement || document.activeElement;
  }
  function w(n) {
    return n.bind(e);
  }
  function x() {
    var n = e.config;
    n.weekNumbers === !1 && n.showMonths === 1 || n.noCalendar !== !0 && window.requestAnimationFrame(function() {
      if (e.calendarContainer !== void 0 && (e.calendarContainer.style.visibility = "hidden", e.calendarContainer.style.display = "block"), e.daysContainer !== void 0) {
        var t = (e.days.offsetWidth + 1) * n.showMonths;
        e.daysContainer.style.width = t + "px", e.calendarContainer.style.width = t + (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) + "px", e.calendarContainer.style.removeProperty("visibility"), e.calendarContainer.style.removeProperty("display");
      }
    });
  }
  function E(n) {
    if (e.selectedDates.length === 0) {
      var t = e.config.minDate === void 0 || O(/* @__PURE__ */ new Date(), e.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(e.config.minDate.getTime()), i = Ie(e.config);
      t.setHours(i.hours, i.minutes, i.seconds, t.getMilliseconds()), e.selectedDates = [t], e.latestSelectedDateObj = t;
    }
    n !== void 0 && n.type !== "blur" && pn(n);
    var o = e._input.value;
    A(), H(), e._input.value !== o && e._debouncedChange();
  }
  function Z(n, t) {
    return n % 12 + 12 * F(t === e.l10n.amPM[1]);
  }
  function C(n) {
    switch (n % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return n % 12;
    }
  }
  function A() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
      var n = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24, t = (parseInt(e.minuteElement.value, 10) || 0) % 60, i = e.secondElement !== void 0 ? (parseInt(e.secondElement.value, 10) || 0) % 60 : 0;
      e.amPM !== void 0 && (n = Z(n, e.amPM.textContent));
      var o = e.config.minTime !== void 0 || e.config.minDate && e.minDateHasTime && e.latestSelectedDateObj && O(e.latestSelectedDateObj, e.config.minDate, !0) === 0, l = e.config.maxTime !== void 0 || e.config.maxDate && e.maxDateHasTime && e.latestSelectedDateObj && O(e.latestSelectedDateObj, e.config.maxDate, !0) === 0;
      if (e.config.maxTime !== void 0 && e.config.minTime !== void 0 && e.config.minTime > e.config.maxTime) {
        var f = Te(e.config.minTime.getHours(), e.config.minTime.getMinutes(), e.config.minTime.getSeconds()), d = Te(e.config.maxTime.getHours(), e.config.maxTime.getMinutes(), e.config.maxTime.getSeconds()), c = Te(n, t, i);
        if (c > d && c < f) {
          var p = Tn(f);
          n = p[0], t = p[1], i = p[2];
        }
      } else {
        if (l) {
          var u = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
          n = Math.min(n, u.getHours()), n === u.getHours() && (t = Math.min(t, u.getMinutes())), t === u.getMinutes() && (i = Math.min(i, u.getSeconds()));
        }
        if (o) {
          var s = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
          n = Math.max(n, s.getHours()), n === s.getHours() && t < s.getMinutes() && (t = s.getMinutes()), t === s.getMinutes() && (i = Math.max(i, s.getSeconds()));
        }
      }
      Y(n, t, i);
    }
  }
  function N(n) {
    var t = n || e.latestSelectedDateObj;
    t && t instanceof Date && Y(t.getHours(), t.getMinutes(), t.getSeconds());
  }
  function Y(n, t, i) {
    e.latestSelectedDateObj !== void 0 && e.latestSelectedDateObj.setHours(n % 24, t, i || 0, 0), !(!e.hourElement || !e.minuteElement || e.isMobile) && (e.hourElement.value = I(e.config.time_24hr ? n : (12 + n) % 12 + 12 * F(n % 12 === 0)), e.minuteElement.value = I(t), e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[F(n >= 12)]), e.secondElement !== void 0 && (e.secondElement.value = I(i)));
  }
  function ae(n) {
    var t = _(n), i = parseInt(t.value) + (n.delta || 0);
    (i / 1e3 > 1 || n.key === "Enter" && !/[^\d]/.test(i.toString())) && re(i);
  }
  function D(n, t, i, o) {
    if (t instanceof Array)
      return t.forEach(function(l) {
        return D(n, l, i, o);
      });
    if (n instanceof Array)
      return n.forEach(function(l) {
        return D(l, t, i, o);
      });
    n.addEventListener(t, i, o), e._handlers.push({
      remove: function() {
        return n.removeEventListener(t, i, o);
      }
    });
  }
  function j() {
    b("onChange");
  }
  function me() {
    if (e.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(i) {
      Array.prototype.forEach.call(e.element.querySelectorAll("[data-" + i + "]"), function(o) {
        return D(o, "click", e[i]);
      });
    }), e.isMobile) {
      sn();
      return;
    }
    var n = Be(nn, 50);
    if (e._debouncedChange = Be(j, Sn), e.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && D(e.daysContainer, "mouseover", function(i) {
      e.config.mode === "range" && le(_(i));
    }), D(e._input, "keydown", Ae), e.calendarContainer !== void 0 && D(e.calendarContainer, "keydown", Ae), !e.config.inline && !e.config.static && D(window, "resize", n), window.ontouchstart !== void 0 ? D(window.document, "touchstart", De) : D(window.document, "mousedown", De), D(window.document, "focus", De, { capture: !0 }), e.config.clickOpens === !0 && (D(e._input, "focus", e.open), D(e._input, "click", e.open)), e.daysContainer !== void 0 && (D(e.monthNav, "click", mn), D(e.monthNav, ["keyup", "increment"], ae), D(e.daysContainer, "click", Le)), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0) {
      var t = function(i) {
        return _(i).select();
      };
      D(e.timeContainer, ["increment"], E), D(e.timeContainer, "blur", E, { capture: !0 }), D(e.timeContainer, "click", R), D([e.hourElement, e.minuteElement], ["focus", "click"], t), e.secondElement !== void 0 && D(e.secondElement, "focus", function() {
        return e.secondElement && e.secondElement.select();
      }), e.amPM !== void 0 && D(e.amPM, "click", function(i) {
        E(i);
      });
    }
    e.config.allowInput && D(e._input, "blur", en);
  }
  function L(n, t) {
    var i = n !== void 0 ? e.parseDate(n) : e.latestSelectedDateObj || (e.config.minDate && e.config.minDate > e.now ? e.config.minDate : e.config.maxDate && e.config.maxDate < e.now ? e.config.maxDate : e.now), o = e.currentYear, l = e.currentMonth;
    try {
      i !== void 0 && (e.currentYear = i.getFullYear(), e.currentMonth = i.getMonth());
    } catch (f) {
      f.message = "Invalid date supplied: " + i, e.config.errorHandler(f);
    }
    t && e.currentYear !== o && (b("onYearChange"), q()), t && (e.currentYear !== o || e.currentMonth !== l) && b("onMonthChange"), e.redraw();
  }
  function R(n) {
    var t = _(n);
    ~t.className.indexOf("arrow") && J(n, t.classList.contains("arrowUp") ? 1 : -1);
  }
  function J(n, t, i) {
    var o = n && _(n), l = i || o && o.parentNode && o.parentNode.firstChild, f = be("increment");
    f.delta = t, l && l.dispatchEvent(f);
  }
  function pe() {
    var n = window.document.createDocumentFragment();
    if (e.calendarContainer = v("div", "flatpickr-calendar"), e.calendarContainer.tabIndex = -1, !e.config.noCalendar) {
      if (n.appendChild(ze()), e.innerContainer = v("div", "flatpickr-innerContainer"), e.config.weekNumbers) {
        var t = Ge(), i = t.weekWrapper, o = t.weekNumbers;
        e.innerContainer.appendChild(i), e.weekNumbers = o, e.weekWrapper = i;
      }
      e.rContainer = v("div", "flatpickr-rContainer"), e.rContainer.appendChild(Oe()), e.daysContainer || (e.daysContainer = v("div", "flatpickr-days"), e.daysContainer.tabIndex = -1), ie(), e.rContainer.appendChild(e.daysContainer), e.innerContainer.appendChild(e.rContainer), n.appendChild(e.innerContainer);
    }
    e.config.enableTime && n.appendChild($e()), T(e.calendarContainer, "rangeMode", e.config.mode === "range"), T(e.calendarContainer, "animate", e.config.animate === !0), T(e.calendarContainer, "multiMonth", e.config.showMonths > 1), e.calendarContainer.appendChild(n);
    var l = e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if ((e.config.inline || e.config.static) && (e.calendarContainer.classList.add(e.config.inline ? "inline" : "static"), e.config.inline && (!l && e.element.parentNode ? e.element.parentNode.insertBefore(e.calendarContainer, e._input.nextSibling) : e.config.appendTo !== void 0 && e.config.appendTo.appendChild(e.calendarContainer)), e.config.static)) {
      var f = v("div", "flatpickr-wrapper");
      e.element.parentNode && e.element.parentNode.insertBefore(f, e.element), f.appendChild(e.element), e.altInput && f.appendChild(e.altInput), f.appendChild(e.calendarContainer);
    }
    !e.config.static && !e.config.inline && (e.config.appendTo !== void 0 ? e.config.appendTo : window.document.body).appendChild(e.calendarContainer);
  }
  function W(n, t, i, o) {
    var l = B(t, !0), f = v("span", n, t.getDate().toString());
    return f.dateObj = t, f.$i = o, f.setAttribute("aria-label", e.formatDate(t, e.config.ariaDateFormat)), n.indexOf("hidden") === -1 && O(t, e.now) === 0 && (e.todayDateElem = f, f.classList.add("today"), f.setAttribute("aria-current", "date")), l ? (f.tabIndex = -1, we(t) && (f.classList.add("selected"), e.selectedDateElem = f, e.config.mode === "range" && (T(f, "startRange", e.selectedDates[0] && O(t, e.selectedDates[0], !0) === 0), T(f, "endRange", e.selectedDates[1] && O(t, e.selectedDates[1], !0) === 0), n === "nextMonthDay" && f.classList.add("inRange")))) : f.classList.add("flatpickr-disabled"), e.config.mode === "range" && gn(t) && !we(t) && f.classList.add("inRange"), e.weekNumbers && e.config.showMonths === 1 && n !== "prevMonthDay" && o % 7 === 6 && e.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + e.config.getWeek(t) + "</span>"), b("onDayCreate", f), f;
  }
  function U(n) {
    n.focus(), e.config.mode === "range" && le(n);
  }
  function V(n) {
    for (var t = n > 0 ? 0 : e.config.showMonths - 1, i = n > 0 ? e.config.showMonths : -1, o = t; o != i; o += n)
      for (var l = e.daysContainer.children[o], f = n > 0 ? 0 : l.children.length - 1, d = n > 0 ? l.children.length : -1, c = f; c != d; c += n) {
        var p = l.children[c];
        if (p.className.indexOf("hidden") === -1 && B(p.dateObj))
          return p;
      }
  }
  function he(n, t) {
    for (var i = n.className.indexOf("Month") === -1 ? n.dateObj.getMonth() : e.currentMonth, o = t > 0 ? e.config.showMonths : -1, l = t > 0 ? 1 : -1, f = i - e.currentMonth; f != o; f += l)
      for (var d = e.daysContainer.children[f], c = i - e.currentMonth === f ? n.$i + t : t < 0 ? d.children.length - 1 : 0, p = d.children.length, u = c; u >= 0 && u < p && u != (t > 0 ? p : -1); u += l) {
        var s = d.children[u];
        if (s.className.indexOf("hidden") === -1 && B(s.dateObj) && Math.abs(n.$i - u) >= Math.abs(t))
          return U(s);
      }
    e.changeMonth(l), Q(V(l), 0);
  }
  function Q(n, t) {
    var i = g(), o = oe(i || document.body), l = n !== void 0 ? n : o ? i : e.selectedDateElem !== void 0 && oe(e.selectedDateElem) ? e.selectedDateElem : e.todayDateElem !== void 0 && oe(e.todayDateElem) ? e.todayDateElem : V(t > 0 ? 1 : -1);
    l === void 0 ? e._input.focus() : o ? he(l, t) : U(l);
  }
  function Ve(n, t) {
    for (var i = (new Date(n, t, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7, o = e.utils.getDaysInMonth((t - 1 + 12) % 12, n), l = e.utils.getDaysInMonth(t, n), f = window.document.createDocumentFragment(), d = e.config.showMonths > 1, c = d ? "prevMonthDay hidden" : "prevMonthDay", p = d ? "nextMonthDay hidden" : "nextMonthDay", u = o + 1 - i, s = 0; u <= o; u++, s++)
      f.appendChild(W("flatpickr-day " + c, new Date(n, t - 1, u), u, s));
    for (u = 1; u <= l; u++, s++)
      f.appendChild(W("flatpickr-day", new Date(n, t, u), u, s));
    for (var M = l + 1; M <= 42 - i && (e.config.showMonths === 1 || s % 7 !== 0); M++, s++)
      f.appendChild(W("flatpickr-day " + p, new Date(n, t + 1, M % l), M, s));
    var P = v("div", "dayContainer");
    return P.appendChild(f), P;
  }
  function ie() {
    if (e.daysContainer !== void 0) {
      se(e.daysContainer), e.weekNumbers && se(e.weekNumbers);
      for (var n = document.createDocumentFragment(), t = 0; t < e.config.showMonths; t++) {
        var i = new Date(e.currentYear, e.currentMonth, 1);
        i.setMonth(e.currentMonth + t), n.appendChild(Ve(i.getFullYear(), i.getMonth()));
      }
      e.daysContainer.appendChild(n), e.days = e.daysContainer.firstChild, e.config.mode === "range" && e.selectedDates.length === 1 && le();
    }
  }
  function q() {
    if (!(e.config.showMonths > 1 || e.config.monthSelectorType !== "dropdown")) {
      var n = function(o) {
        return e.config.minDate !== void 0 && e.currentYear === e.config.minDate.getFullYear() && o < e.config.minDate.getMonth() ? !1 : !(e.config.maxDate !== void 0 && e.currentYear === e.config.maxDate.getFullYear() && o > e.config.maxDate.getMonth());
      };
      e.monthsDropdownContainer.tabIndex = -1, e.monthsDropdownContainer.innerHTML = "";
      for (var t = 0; t < 12; t++)
        if (n(t)) {
          var i = v("option", "flatpickr-monthDropdown-month");
          i.value = new Date(e.currentYear, t).getMonth().toString(), i.textContent = ge(t, e.config.shorthandCurrentMonth, e.l10n), i.tabIndex = -1, e.currentMonth === t && (i.selected = !0), e.monthsDropdownContainer.appendChild(i);
        }
    }
  }
  function qe() {
    var n = v("div", "flatpickr-month"), t = window.document.createDocumentFragment(), i;
    e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? i = v("span", "cur-month") : (e.monthsDropdownContainer = v("select", "flatpickr-monthDropdown-months"), e.monthsDropdownContainer.setAttribute("aria-label", e.l10n.monthAriaLabel), D(e.monthsDropdownContainer, "change", function(d) {
      var c = _(d), p = parseInt(c.value, 10);
      e.changeMonth(p - e.currentMonth), b("onMonthChange");
    }), q(), i = e.monthsDropdownContainer);
    var o = de("cur-year", { tabindex: "-1" }), l = o.getElementsByTagName("input")[0];
    l.setAttribute("aria-label", e.l10n.yearAriaLabel), e.config.minDate && l.setAttribute("min", e.config.minDate.getFullYear().toString()), e.config.maxDate && (l.setAttribute("max", e.config.maxDate.getFullYear().toString()), l.disabled = !!e.config.minDate && e.config.minDate.getFullYear() === e.config.maxDate.getFullYear());
    var f = v("div", "flatpickr-current-month");
    return f.appendChild(i), f.appendChild(o), t.appendChild(f), n.appendChild(t), {
      container: n,
      yearElement: l,
      monthElement: i
    };
  }
  function _e() {
    se(e.monthNav), e.monthNav.appendChild(e.prevMonthNav), e.config.showMonths && (e.yearElements = [], e.monthElements = []);
    for (var n = e.config.showMonths; n--; ) {
      var t = qe();
      e.yearElements.push(t.yearElement), e.monthElements.push(t.monthElement), e.monthNav.appendChild(t.container);
    }
    e.monthNav.appendChild(e.nextMonthNav);
  }
  function ze() {
    return e.monthNav = v("div", "flatpickr-months"), e.yearElements = [], e.monthElements = [], e.prevMonthNav = v("span", "flatpickr-prev-month"), e.prevMonthNav.innerHTML = e.config.prevArrow, e.nextMonthNav = v("span", "flatpickr-next-month"), e.nextMonthNav.innerHTML = e.config.nextArrow, _e(), Object.defineProperty(e, "_hidePrevMonthArrow", {
      get: function() {
        return e.__hidePrevMonthArrow;
      },
      set: function(n) {
        e.__hidePrevMonthArrow !== n && (T(e.prevMonthNav, "flatpickr-disabled", n), e.__hidePrevMonthArrow = n);
      }
    }), Object.defineProperty(e, "_hideNextMonthArrow", {
      get: function() {
        return e.__hideNextMonthArrow;
      },
      set: function(n) {
        e.__hideNextMonthArrow !== n && (T(e.nextMonthNav, "flatpickr-disabled", n), e.__hideNextMonthArrow = n);
      }
    }), e.currentYearElement = e.yearElements[0], ce(), e.monthNav;
  }
  function $e() {
    e.calendarContainer.classList.add("hasTime"), e.config.noCalendar && e.calendarContainer.classList.add("noCalendar");
    var n = Ie(e.config);
    e.timeContainer = v("div", "flatpickr-time"), e.timeContainer.tabIndex = -1;
    var t = v("span", "flatpickr-time-separator", ":"), i = de("flatpickr-hour", {
      "aria-label": e.l10n.hourAriaLabel
    });
    e.hourElement = i.getElementsByTagName("input")[0];
    var o = de("flatpickr-minute", {
      "aria-label": e.l10n.minuteAriaLabel
    });
    if (e.minuteElement = o.getElementsByTagName("input")[0], e.hourElement.tabIndex = e.minuteElement.tabIndex = -1, e.hourElement.value = I(e.latestSelectedDateObj ? e.latestSelectedDateObj.getHours() : e.config.time_24hr ? n.hours : C(n.hours)), e.minuteElement.value = I(e.latestSelectedDateObj ? e.latestSelectedDateObj.getMinutes() : n.minutes), e.hourElement.setAttribute("step", e.config.hourIncrement.toString()), e.minuteElement.setAttribute("step", e.config.minuteIncrement.toString()), e.hourElement.setAttribute("min", e.config.time_24hr ? "0" : "1"), e.hourElement.setAttribute("max", e.config.time_24hr ? "23" : "12"), e.hourElement.setAttribute("maxlength", "2"), e.minuteElement.setAttribute("min", "0"), e.minuteElement.setAttribute("max", "59"), e.minuteElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(i), e.timeContainer.appendChild(t), e.timeContainer.appendChild(o), e.config.time_24hr && e.timeContainer.classList.add("time24hr"), e.config.enableSeconds) {
      e.timeContainer.classList.add("hasSeconds");
      var l = de("flatpickr-second");
      e.secondElement = l.getElementsByTagName("input")[0], e.secondElement.value = I(e.latestSelectedDateObj ? e.latestSelectedDateObj.getSeconds() : n.seconds), e.secondElement.setAttribute("step", e.minuteElement.getAttribute("step")), e.secondElement.setAttribute("min", "0"), e.secondElement.setAttribute("max", "59"), e.secondElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(v("span", "flatpickr-time-separator", ":")), e.timeContainer.appendChild(l);
    }
    return e.config.time_24hr || (e.amPM = v("span", "flatpickr-am-pm", e.l10n.amPM[F((e.latestSelectedDateObj ? e.hourElement.value : e.config.defaultHour) > 11)]), e.amPM.title = e.l10n.toggleTitle, e.amPM.tabIndex = -1, e.timeContainer.appendChild(e.amPM)), e.timeContainer;
  }
  function Oe() {
    e.weekdayContainer ? se(e.weekdayContainer) : e.weekdayContainer = v("div", "flatpickr-weekdays");
    for (var n = e.config.showMonths; n--; ) {
      var t = v("div", "flatpickr-weekdaycontainer");
      e.weekdayContainer.appendChild(t);
    }
    return Fe(), e.weekdayContainer;
  }
  function Fe() {
    if (e.weekdayContainer) {
      var n = e.l10n.firstDayOfWeek, t = Ke(e.l10n.weekdays.shorthand);
      n > 0 && n < t.length && (t = Ke(t.splice(n, t.length), t.splice(0, n)));
      for (var i = e.config.showMonths; i--; )
        e.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + t.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `;
    }
  }
  function Ge() {
    e.calendarContainer.classList.add("hasWeeks");
    var n = v("div", "flatpickr-weekwrapper");
    n.appendChild(v("span", "flatpickr-weekday", e.l10n.weekAbbreviation));
    var t = v("div", "flatpickr-weeks");
    return n.appendChild(t), {
      weekWrapper: n,
      weekNumbers: t
    };
  }
  function ve(n, t) {
    t === void 0 && (t = !0);
    var i = t ? n : n - e.currentMonth;
    i < 0 && e._hidePrevMonthArrow === !0 || i > 0 && e._hideNextMonthArrow === !0 || (e.currentMonth += i, (e.currentMonth < 0 || e.currentMonth > 11) && (e.currentYear += e.currentMonth > 11 ? 1 : -1, e.currentMonth = (e.currentMonth + 12) % 12, b("onYearChange"), q()), ie(), b("onMonthChange"), ce());
  }
  function Ze(n, t) {
    if (n === void 0 && (n = !0), t === void 0 && (t = !0), e.input.value = "", e.altInput !== void 0 && (e.altInput.value = ""), e.mobileInput !== void 0 && (e.mobileInput.value = ""), e.selectedDates = [], e.latestSelectedDateObj = void 0, t === !0 && (e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth()), e.config.enableTime === !0) {
      var i = Ie(e.config), o = i.hours, l = i.minutes, f = i.seconds;
      Y(o, l, f);
    }
    e.redraw(), n && b("onChange");
  }
  function Qe() {
    e.isOpen = !1, e.isMobile || (e.calendarContainer !== void 0 && e.calendarContainer.classList.remove("open"), e._input !== void 0 && e._input.classList.remove("active")), b("onClose");
  }
  function Xe() {
    e.config !== void 0 && b("onDestroy");
    for (var n = e._handlers.length; n--; )
      e._handlers[n].remove();
    if (e._handlers = [], e.mobileInput)
      e.mobileInput.parentNode && e.mobileInput.parentNode.removeChild(e.mobileInput), e.mobileInput = void 0;
    else if (e.calendarContainer && e.calendarContainer.parentNode)
      if (e.config.static && e.calendarContainer.parentNode) {
        var t = e.calendarContainer.parentNode;
        if (t.lastChild && t.removeChild(t.lastChild), t.parentNode) {
          for (; t.firstChild; )
            t.parentNode.insertBefore(t.firstChild, t);
          t.parentNode.removeChild(t);
        }
      } else
        e.calendarContainer.parentNode.removeChild(e.calendarContainer);
    e.altInput && (e.input.type = "text", e.altInput.parentNode && e.altInput.parentNode.removeChild(e.altInput), delete e.altInput), e.input && (e.input.type = e.input._type, e.input.classList.remove("flatpickr-input"), e.input.removeAttribute("readonly")), [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(i) {
      try {
        delete e[i];
      } catch {
      }
    });
  }
  function X(n) {
    return e.calendarContainer.contains(n);
  }
  function De(n) {
    if (e.isOpen && !e.config.inline) {
      var t = _(n), i = X(t), o = t === e.input || t === e.altInput || e.element.contains(t) || n.path && n.path.indexOf && (~n.path.indexOf(e.input) || ~n.path.indexOf(e.altInput)), l = !o && !i && !X(n.relatedTarget), f = !e.config.ignoredFocusElements.some(function(d) {
        return d.contains(t);
      });
      l && f && (e.config.allowInput && e.setDate(e._input.value, !1, e.config.altInput ? e.config.altFormat : e.config.dateFormat), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0 && e.input.value !== "" && e.input.value !== void 0 && E(), e.close(), e.config && e.config.mode === "range" && e.selectedDates.length === 1 && e.clear(!1));
    }
  }
  function re(n) {
    if (!(!n || e.config.minDate && n < e.config.minDate.getFullYear() || e.config.maxDate && n > e.config.maxDate.getFullYear())) {
      var t = n, i = e.currentYear !== t;
      e.currentYear = t || e.currentYear, e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth = Math.min(e.config.maxDate.getMonth(), e.currentMonth) : e.config.minDate && e.currentYear === e.config.minDate.getFullYear() && (e.currentMonth = Math.max(e.config.minDate.getMonth(), e.currentMonth)), i && (e.redraw(), b("onYearChange"), q());
    }
  }
  function B(n, t) {
    var i;
    t === void 0 && (t = !0);
    var o = e.parseDate(n, void 0, t);
    if (e.config.minDate && o && O(o, e.config.minDate, t !== void 0 ? t : !e.minDateHasTime) < 0 || e.config.maxDate && o && O(o, e.config.maxDate, t !== void 0 ? t : !e.maxDateHasTime) > 0)
      return !1;
    if (!e.config.enable && e.config.disable.length === 0)
      return !0;
    if (o === void 0)
      return !1;
    for (var l = !!e.config.enable, f = (i = e.config.enable) !== null && i !== void 0 ? i : e.config.disable, d = 0, c = void 0; d < f.length; d++) {
      if (c = f[d], typeof c == "function" && c(o))
        return l;
      if (c instanceof Date && o !== void 0 && c.getTime() === o.getTime())
        return l;
      if (typeof c == "string") {
        var p = e.parseDate(c, void 0, !0);
        return p && p.getTime() === o.getTime() ? l : !l;
      } else if (typeof c == "object" && o !== void 0 && c.from && c.to && o.getTime() >= c.from.getTime() && o.getTime() <= c.to.getTime())
        return l;
    }
    return !l;
  }
  function oe(n) {
    return e.daysContainer !== void 0 ? n.className.indexOf("hidden") === -1 && n.className.indexOf("flatpickr-disabled") === -1 && e.daysContainer.contains(n) : !1;
  }
  function en(n) {
    var t = n.target === e._input, i = e._input.value.trimEnd() !== Ce();
    t && i && !(n.relatedTarget && X(n.relatedTarget)) && e.setDate(e._input.value, !0, n.target === e.altInput ? e.config.altFormat : e.config.dateFormat);
  }
  function Ae(n) {
    var t = _(n), i = e.config.wrap ? a.contains(t) : t === e._input, o = e.config.allowInput, l = e.isOpen && (!o || !i), f = e.config.inline && i && !o;
    if (n.keyCode === 13 && i) {
      if (o)
        return e.setDate(e._input.value, !0, t === e.altInput ? e.config.altFormat : e.config.dateFormat), e.close(), t.blur();
      e.open();
    } else if (X(t) || l || f) {
      var d = !!e.timeContainer && e.timeContainer.contains(t);
      switch (n.keyCode) {
        case 13:
          d ? (n.preventDefault(), E(), Me()) : Le(n);
          break;
        case 27:
          n.preventDefault(), Me();
          break;
        case 8:
        case 46:
          i && !e.config.allowInput && (n.preventDefault(), e.clear());
          break;
        case 37:
        case 39:
          if (!d && !i) {
            n.preventDefault();
            var c = g();
            if (e.daysContainer !== void 0 && (o === !1 || c && oe(c))) {
              var p = n.keyCode === 39 ? 1 : -1;
              n.ctrlKey ? (n.stopPropagation(), ve(p), Q(V(1), 0)) : Q(void 0, p);
            }
          } else e.hourElement && e.hourElement.focus();
          break;
        case 38:
        case 40:
          n.preventDefault();
          var u = n.keyCode === 40 ? 1 : -1;
          e.daysContainer && t.$i !== void 0 || t === e.input || t === e.altInput ? n.ctrlKey ? (n.stopPropagation(), re(e.currentYear - u), Q(V(1), 0)) : d || Q(void 0, u * 7) : t === e.currentYearElement ? re(e.currentYear - u) : e.config.enableTime && (!d && e.hourElement && e.hourElement.focus(), E(n), e._debouncedChange());
          break;
        case 9:
          if (d) {
            var s = [
              e.hourElement,
              e.minuteElement,
              e.secondElement,
              e.amPM
            ].concat(e.pluginElements).filter(function(S) {
              return S;
            }), M = s.indexOf(t);
            if (M !== -1) {
              var P = s[M + (n.shiftKey ? -1 : 1)];
              n.preventDefault(), (P || e._input).focus();
            }
          } else !e.config.noCalendar && e.daysContainer && e.daysContainer.contains(t) && n.shiftKey && (n.preventDefault(), e._input.focus());
          break;
      }
    }
    if (e.amPM !== void 0 && t === e.amPM)
      switch (n.key) {
        case e.l10n.amPM[0].charAt(0):
        case e.l10n.amPM[0].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[0], A(), H();
          break;
        case e.l10n.amPM[1].charAt(0):
        case e.l10n.amPM[1].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[1], A(), H();
          break;
      }
    (i || X(t)) && b("onKeyDown", n);
  }
  function le(n, t) {
    if (t === void 0 && (t = "flatpickr-day"), !(e.selectedDates.length !== 1 || n && (!n.classList.contains(t) || n.classList.contains("flatpickr-disabled")))) {
      for (var i = n ? n.dateObj.getTime() : e.days.firstElementChild.dateObj.getTime(), o = e.parseDate(e.selectedDates[0], void 0, !0).getTime(), l = Math.min(i, e.selectedDates[0].getTime()), f = Math.max(i, e.selectedDates[0].getTime()), d = !1, c = 0, p = 0, u = l; u < f; u += In.DAY)
        B(new Date(u), !0) || (d = d || u > l && u < f, u < o && (!c || u > c) ? c = u : u > o && (!p || u < p) && (p = u));
      var s = Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+" + e.config.showMonths + ") > ." + t));
      s.forEach(function(M) {
        var P = M.dateObj, S = P.getTime(), ee = c > 0 && S < c || p > 0 && S > p;
        if (ee) {
          M.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(z) {
            M.classList.remove(z);
          });
          return;
        } else if (d && !ee)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(z) {
          M.classList.remove(z);
        }), n !== void 0 && (n.classList.add(i <= e.selectedDates[0].getTime() ? "startRange" : "endRange"), o < i && S === o ? M.classList.add("startRange") : o > i && S === o && M.classList.add("endRange"), S >= c && (p === 0 || S <= p) && kn(S, o, i) && M.classList.add("inRange"));
      });
    }
  }
  function nn() {
    e.isOpen && !e.config.static && !e.config.inline && fe();
  }
  function tn(n, t) {
    if (t === void 0 && (t = e._positionElement), e.isMobile === !0) {
      if (n) {
        n.preventDefault();
        var i = _(n);
        i && i.blur();
      }
      e.mobileInput !== void 0 && (e.mobileInput.focus(), e.mobileInput.click()), b("onOpen");
      return;
    } else if (e._input.disabled || e.config.inline)
      return;
    var o = e.isOpen;
    e.isOpen = !0, o || (e.calendarContainer.classList.add("open"), e._input.classList.add("active"), b("onOpen"), fe(t)), e.config.enableTime === !0 && e.config.noCalendar === !0 && e.config.allowInput === !1 && (n === void 0 || !e.timeContainer.contains(n.relatedTarget)) && setTimeout(function() {
      return e.hourElement.select();
    }, 50);
  }
  function Ne(n) {
    return function(t) {
      var i = e.config["_" + n + "Date"] = e.parseDate(t, e.config.dateFormat), o = e.config["_" + (n === "min" ? "max" : "min") + "Date"];
      i !== void 0 && (e[n === "min" ? "minDateHasTime" : "maxDateHasTime"] = i.getHours() > 0 || i.getMinutes() > 0 || i.getSeconds() > 0), e.selectedDates && (e.selectedDates = e.selectedDates.filter(function(l) {
        return B(l);
      }), !e.selectedDates.length && n === "min" && N(i), H()), e.daysContainer && (He(), i !== void 0 ? e.currentYearElement[n] = i.getFullYear().toString() : e.currentYearElement.removeAttribute(n), e.currentYearElement.disabled = !!o && i !== void 0 && o.getFullYear() === i.getFullYear());
    };
  }
  function an() {
    var n = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ], t = k(k({}, JSON.parse(JSON.stringify(a.dataset || {}))), r), i = {};
    e.config.parseDate = t.parseDate, e.config.formatDate = t.formatDate, Object.defineProperty(e.config, "enable", {
      get: function() {
        return e.config._enable;
      },
      set: function(s) {
        e.config._enable = Re(s);
      }
    }), Object.defineProperty(e.config, "disable", {
      get: function() {
        return e.config._disable;
      },
      set: function(s) {
        e.config._disable = Re(s);
      }
    });
    var o = t.mode === "time";
    if (!t.dateFormat && (t.enableTime || o)) {
      var l = y.defaultConfig.dateFormat || $.dateFormat;
      i.dateFormat = t.noCalendar || o ? "H:i" + (t.enableSeconds ? ":S" : "") : l + " H:i" + (t.enableSeconds ? ":S" : "");
    }
    if (t.altInput && (t.enableTime || o) && !t.altFormat) {
      var f = y.defaultConfig.altFormat || $.altFormat;
      i.altFormat = t.noCalendar || o ? "h:i" + (t.enableSeconds ? ":S K" : " K") : f + (" h:i" + (t.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(e.config, "minDate", {
      get: function() {
        return e.config._minDate;
      },
      set: Ne("min")
    }), Object.defineProperty(e.config, "maxDate", {
      get: function() {
        return e.config._maxDate;
      },
      set: Ne("max")
    });
    var d = function(s) {
      return function(M) {
        e.config[s === "min" ? "_minTime" : "_maxTime"] = e.parseDate(M, "H:i:S");
      };
    };
    Object.defineProperty(e.config, "minTime", {
      get: function() {
        return e.config._minTime;
      },
      set: d("min")
    }), Object.defineProperty(e.config, "maxTime", {
      get: function() {
        return e.config._maxTime;
      },
      set: d("max")
    }), t.mode === "time" && (e.config.noCalendar = !0, e.config.enableTime = !0), Object.assign(e.config, i, t);
    for (var c = 0; c < n.length; c++)
      e.config[n[c]] = e.config[n[c]] === !0 || e.config[n[c]] === "true";
    xe.filter(function(s) {
      return e.config[s] !== void 0;
    }).forEach(function(s) {
      e.config[s] = Ee(e.config[s] || []).map(w);
    }), e.isMobile = !e.config.disableMobile && !e.config.inline && e.config.mode === "single" && !e.config.disable.length && !e.config.enable && !e.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var c = 0; c < e.config.plugins.length; c++) {
      var p = e.config.plugins[c](e) || {};
      for (var u in p)
        xe.indexOf(u) > -1 ? e.config[u] = Ee(p[u]).map(w).concat(e.config[u]) : typeof t[u] == "undefined" && (e.config[u] = p[u]);
    }
    t.altInputClass || (e.config.altInputClass = Pe().className + " " + e.config.altInputClass), b("onParseConfig");
  }
  function Pe() {
    return e.config.wrap ? a.querySelector("[data-input]") : a;
  }
  function Ye() {
    typeof e.config.locale != "object" && typeof y.l10ns[e.config.locale] == "undefined" && e.config.errorHandler(new Error("flatpickr: invalid locale " + e.config.locale)), e.l10n = k(k({}, y.l10ns.default), typeof e.config.locale == "object" ? e.config.locale : e.config.locale !== "default" ? y.l10ns[e.config.locale] : void 0), K.D = "(" + e.l10n.weekdays.shorthand.join("|") + ")", K.l = "(" + e.l10n.weekdays.longhand.join("|") + ")", K.M = "(" + e.l10n.months.shorthand.join("|") + ")", K.F = "(" + e.l10n.months.longhand.join("|") + ")", K.K = "(" + e.l10n.amPM[0] + "|" + e.l10n.amPM[1] + "|" + e.l10n.amPM[0].toLowerCase() + "|" + e.l10n.amPM[1].toLowerCase() + ")";
    var n = k(k({}, r), JSON.parse(JSON.stringify(a.dataset || {})));
    n.time_24hr === void 0 && y.defaultConfig.time_24hr === void 0 && (e.config.time_24hr = e.l10n.time_24hr), e.formatDate = Ue(e), e.parseDate = Se({ config: e.config, l10n: e.l10n });
  }
  function fe(n) {
    if (typeof e.config.position == "function")
      return void e.config.position(e, n);
    if (e.calendarContainer !== void 0) {
      b("onPreCalendarPosition");
      var t = n || e._positionElement, i = Array.prototype.reduce.call(e.calendarContainer.children, function(yn, xn) {
        return yn + xn.offsetHeight;
      }, 0), o = e.calendarContainer.offsetWidth, l = e.config.position.split(" "), f = l[0], d = l.length > 1 ? l[1] : null, c = t.getBoundingClientRect(), p = window.innerHeight - c.bottom, u = f === "above" || f !== "below" && p < i && c.top > i, s = window.pageYOffset + c.top + (u ? -i - 2 : t.offsetHeight + 2);
      if (T(e.calendarContainer, "arrowTop", !u), T(e.calendarContainer, "arrowBottom", u), !e.config.inline) {
        var M = window.pageXOffset + c.left, P = !1, S = !1;
        d === "center" ? (M -= (o - c.width) / 2, P = !0) : d === "right" && (M -= o - c.width, S = !0), T(e.calendarContainer, "arrowLeft", !P && !S), T(e.calendarContainer, "arrowCenter", P), T(e.calendarContainer, "arrowRight", S);
        var ee = window.document.body.offsetWidth - (window.pageXOffset + c.right), z = M + o > window.document.body.offsetWidth, hn = ee + o > window.document.body.offsetWidth;
        if (T(e.calendarContainer, "rightMost", z), !e.config.static)
          if (e.calendarContainer.style.top = s + "px", !z)
            e.calendarContainer.style.left = M + "px", e.calendarContainer.style.right = "auto";
          else if (!hn)
            e.calendarContainer.style.left = "auto", e.calendarContainer.style.right = ee + "px";
          else {
            var ye = rn();
            if (ye === void 0)
              return;
            var vn = window.document.body.offsetWidth, Dn = Math.max(0, vn / 2 - o / 2), Mn = ".flatpickr-calendar.centerMost:before", bn = ".flatpickr-calendar.centerMost:after", wn = ye.cssRules.length, Cn = "{left:" + c.left + "px;right:auto;}";
            T(e.calendarContainer, "rightMost", !1), T(e.calendarContainer, "centerMost", !0), ye.insertRule(Mn + "," + bn + Cn, wn), e.calendarContainer.style.left = Dn + "px", e.calendarContainer.style.right = "auto";
          }
      }
    }
  }
  function rn() {
    for (var n = null, t = 0; t < document.styleSheets.length; t++) {
      var i = document.styleSheets[t];
      if (i.cssRules) {
        try {
          i.cssRules;
        } catch {
          continue;
        }
        n = i;
        break;
      }
    }
    return n != null ? n : on();
  }
  function on() {
    var n = document.createElement("style");
    return document.head.appendChild(n), n.sheet;
  }
  function He() {
    e.config.noCalendar || e.isMobile || (q(), ce(), ie());
  }
  function Me() {
    e._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(e.close, 0) : e.close();
  }
  function Le(n) {
    n.preventDefault(), n.stopPropagation();
    var t = function(s) {
      return s.classList && s.classList.contains("flatpickr-day") && !s.classList.contains("flatpickr-disabled") && !s.classList.contains("notAllowed");
    }, i = Je(_(n), t);
    if (i !== void 0) {
      var o = i, l = e.latestSelectedDateObj = new Date(o.dateObj.getTime()), f = (l.getMonth() < e.currentMonth || l.getMonth() > e.currentMonth + e.config.showMonths - 1) && e.config.mode !== "range";
      if (e.selectedDateElem = o, e.config.mode === "single")
        e.selectedDates = [l];
      else if (e.config.mode === "multiple") {
        var d = we(l);
        d ? e.selectedDates.splice(parseInt(d), 1) : e.selectedDates.push(l);
      } else e.config.mode === "range" && (e.selectedDates.length === 2 && e.clear(!1, !1), e.latestSelectedDateObj = l, e.selectedDates.push(l), O(l, e.selectedDates[0], !0) !== 0 && e.selectedDates.sort(function(s, M) {
        return s.getTime() - M.getTime();
      }));
      if (A(), f) {
        var c = e.currentYear !== l.getFullYear();
        e.currentYear = l.getFullYear(), e.currentMonth = l.getMonth(), c && (b("onYearChange"), q()), b("onMonthChange");
      }
      if (ce(), ie(), H(), !f && e.config.mode !== "range" && e.config.showMonths === 1 ? U(o) : e.selectedDateElem !== void 0 && e.hourElement === void 0 && e.selectedDateElem && e.selectedDateElem.focus(), e.hourElement !== void 0 && e.hourElement !== void 0 && e.hourElement.focus(), e.config.closeOnSelect) {
        var p = e.config.mode === "single" && !e.config.enableTime, u = e.config.mode === "range" && e.selectedDates.length === 2 && !e.config.enableTime;
        (p || u) && Me();
      }
      j();
    }
  }
  var ue = {
    locale: [Ye, Fe],
    showMonths: [_e, x, Oe],
    minDate: [L],
    maxDate: [L],
    positionElement: [We],
    clickOpens: [
      function() {
        e.config.clickOpens === !0 ? (D(e._input, "focus", e.open), D(e._input, "click", e.open)) : (e._input.removeEventListener("focus", e.open), e._input.removeEventListener("click", e.open));
      }
    ]
  };
  function ln(n, t) {
    if (n !== null && typeof n == "object") {
      Object.assign(e.config, n);
      for (var i in n)
        ue[i] !== void 0 && ue[i].forEach(function(o) {
          return o();
        });
    } else
      e.config[n] = t, ue[n] !== void 0 ? ue[n].forEach(function(o) {
        return o();
      }) : xe.indexOf(n) > -1 && (e.config[n] = Ee(t));
    e.redraw(), H(!0);
  }
  function je(n, t) {
    var i = [];
    if (n instanceof Array)
      i = n.map(function(o) {
        return e.parseDate(o, t);
      });
    else if (n instanceof Date || typeof n == "number")
      i = [e.parseDate(n, t)];
    else if (typeof n == "string")
      switch (e.config.mode) {
        case "single":
        case "time":
          i = [e.parseDate(n, t)];
          break;
        case "multiple":
          i = n.split(e.config.conjunction).map(function(o) {
            return e.parseDate(o, t);
          });
          break;
        case "range":
          i = n.split(e.l10n.rangeSeparator).map(function(o) {
            return e.parseDate(o, t);
          });
          break;
      }
    else
      e.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(n)));
    e.selectedDates = e.config.allowInvalidPreload ? i : i.filter(function(o) {
      return o instanceof Date && B(o, !1);
    }), e.config.mode === "range" && e.selectedDates.sort(function(o, l) {
      return o.getTime() - l.getTime();
    });
  }
  function fn(n, t, i) {
    if (t === void 0 && (t = !1), i === void 0 && (i = e.config.dateFormat), n !== 0 && !n || n instanceof Array && n.length === 0)
      return e.clear(t);
    je(n, i), e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1], e.redraw(), L(void 0, t), N(), e.selectedDates.length === 0 && e.clear(!1), H(t), t && b("onChange");
  }
  function Re(n) {
    return n.slice().map(function(t) {
      return typeof t == "string" || typeof t == "number" || t instanceof Date ? e.parseDate(t, void 0, !0) : t && typeof t == "object" && t.from && t.to ? {
        from: e.parseDate(t.from, void 0),
        to: e.parseDate(t.to, void 0)
      } : t;
    }).filter(function(t) {
      return t;
    });
  }
  function un() {
    e.selectedDates = [], e.now = e.parseDate(e.config.now) || /* @__PURE__ */ new Date();
    var n = e.config.defaultDate || ((e.input.nodeName === "INPUT" || e.input.nodeName === "TEXTAREA") && e.input.placeholder && e.input.value === e.input.placeholder ? null : e.input.value);
    n && je(n, e.config.dateFormat), e._initialDate = e.selectedDates.length > 0 ? e.selectedDates[0] : e.config.minDate && e.config.minDate.getTime() > e.now.getTime() ? e.config.minDate : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime() ? e.config.maxDate : e.now, e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth(), e.selectedDates.length > 0 && (e.latestSelectedDateObj = e.selectedDates[0]), e.config.minTime !== void 0 && (e.config.minTime = e.parseDate(e.config.minTime, "H:i")), e.config.maxTime !== void 0 && (e.config.maxTime = e.parseDate(e.config.maxTime, "H:i")), e.minDateHasTime = !!e.config.minDate && (e.config.minDate.getHours() > 0 || e.config.minDate.getMinutes() > 0 || e.config.minDate.getSeconds() > 0), e.maxDateHasTime = !!e.config.maxDate && (e.config.maxDate.getHours() > 0 || e.config.maxDate.getMinutes() > 0 || e.config.maxDate.getSeconds() > 0);
  }
  function cn() {
    if (e.input = Pe(), !e.input) {
      e.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    e.input._type = e.input.type, e.input.type = "text", e.input.classList.add("flatpickr-input"), e._input = e.input, e.config.altInput && (e.altInput = v(e.input.nodeName, e.config.altInputClass), e._input = e.altInput, e.altInput.placeholder = e.input.placeholder, e.altInput.disabled = e.input.disabled, e.altInput.required = e.input.required, e.altInput.tabIndex = e.input.tabIndex, e.altInput.type = "text", e.input.setAttribute("type", "hidden"), !e.config.static && e.input.parentNode && e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)), e.config.allowInput || e._input.setAttribute("readonly", "readonly"), We();
  }
  function We() {
    e._positionElement = e.config.positionElement || e._input;
  }
  function sn() {
    var n = e.config.enableTime ? e.config.noCalendar ? "time" : "datetime-local" : "date";
    e.mobileInput = v("input", e.input.className + " flatpickr-mobile"), e.mobileInput.tabIndex = 1, e.mobileInput.type = n, e.mobileInput.disabled = e.input.disabled, e.mobileInput.required = e.input.required, e.mobileInput.placeholder = e.input.placeholder, e.mobileFormatStr = n === "datetime-local" ? "Y-m-d\\TH:i:S" : n === "date" ? "Y-m-d" : "H:i:S", e.selectedDates.length > 0 && (e.mobileInput.defaultValue = e.mobileInput.value = e.formatDate(e.selectedDates[0], e.mobileFormatStr)), e.config.minDate && (e.mobileInput.min = e.formatDate(e.config.minDate, "Y-m-d")), e.config.maxDate && (e.mobileInput.max = e.formatDate(e.config.maxDate, "Y-m-d")), e.input.getAttribute("step") && (e.mobileInput.step = String(e.input.getAttribute("step"))), e.input.type = "hidden", e.altInput !== void 0 && (e.altInput.type = "hidden");
    try {
      e.input.parentNode && e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling);
    } catch {
    }
    D(e.mobileInput, "change", function(t) {
      e.setDate(_(t).value, !1, e.mobileFormatStr), b("onChange"), b("onClose");
    });
  }
  function dn(n) {
    if (e.isOpen === !0)
      return e.close();
    e.open(n);
  }
  function b(n, t) {
    if (e.config !== void 0) {
      var i = e.config[n];
      if (i !== void 0 && i.length > 0)
        for (var o = 0; i[o] && o < i.length; o++)
          i[o](e.selectedDates, e.input.value, e, t);
      n === "onChange" && (e.input.dispatchEvent(be("change")), e.input.dispatchEvent(be("input")));
    }
  }
  function be(n) {
    var t = document.createEvent("Event");
    return t.initEvent(n, !0, !0), t;
  }
  function we(n) {
    for (var t = 0; t < e.selectedDates.length; t++) {
      var i = e.selectedDates[t];
      if (i instanceof Date && O(i, n) === 0)
        return "" + t;
    }
    return !1;
  }
  function gn(n) {
    return e.config.mode !== "range" || e.selectedDates.length < 2 ? !1 : O(n, e.selectedDates[0]) >= 0 && O(n, e.selectedDates[1]) <= 0;
  }
  function ce() {
    e.config.noCalendar || e.isMobile || !e.monthNav || (e.yearElements.forEach(function(n, t) {
      var i = new Date(e.currentYear, e.currentMonth, 1);
      i.setMonth(e.currentMonth + t), e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? e.monthElements[t].textContent = ge(i.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + " " : e.monthsDropdownContainer.value = i.getMonth().toString(), n.value = i.getFullYear().toString();
    }), e._hidePrevMonthArrow = e.config.minDate !== void 0 && (e.currentYear === e.config.minDate.getFullYear() ? e.currentMonth <= e.config.minDate.getMonth() : e.currentYear < e.config.minDate.getFullYear()), e._hideNextMonthArrow = e.config.maxDate !== void 0 && (e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth + 1 > e.config.maxDate.getMonth() : e.currentYear > e.config.maxDate.getFullYear()));
  }
  function Ce(n) {
    var t = n || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
    return e.selectedDates.map(function(i) {
      return e.formatDate(i, t);
    }).filter(function(i, o, l) {
      return e.config.mode !== "range" || e.config.enableTime || l.indexOf(i) === o;
    }).join(e.config.mode !== "range" ? e.config.conjunction : e.l10n.rangeSeparator);
  }
  function H(n) {
    n === void 0 && (n = !0), e.mobileInput !== void 0 && e.mobileFormatStr && (e.mobileInput.value = e.latestSelectedDateObj !== void 0 ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr) : ""), e.input.value = Ce(e.config.dateFormat), e.altInput !== void 0 && (e.altInput.value = Ce(e.config.altFormat)), n !== !1 && b("onValueUpdate");
  }
  function mn(n) {
    var t = _(n), i = e.prevMonthNav.contains(t), o = e.nextMonthNav.contains(t);
    i || o ? ve(i ? -1 : 1) : e.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? e.changeYear(e.currentYear + 1) : t.classList.contains("arrowDown") && e.changeYear(e.currentYear - 1);
  }
  function pn(n) {
    n.preventDefault();
    var t = n.type === "keydown", i = _(n), o = i;
    e.amPM !== void 0 && i === e.amPM && (e.amPM.textContent = e.l10n.amPM[F(e.amPM.textContent === e.l10n.amPM[0])]);
    var l = parseFloat(o.getAttribute("min")), f = parseFloat(o.getAttribute("max")), d = parseFloat(o.getAttribute("step")), c = parseInt(o.value, 10), p = n.delta || (t ? n.which === 38 ? 1 : -1 : 0), u = c + d * p;
    if (typeof o.value != "undefined" && o.value.length === 2) {
      var s = o === e.hourElement, M = o === e.minuteElement;
      u < l ? (u = f + u + F(!s) + (F(s) && F(!e.amPM)), M && J(void 0, -1, e.hourElement)) : u > f && (u = o === e.hourElement ? u - f - F(!e.amPM) : l, M && J(void 0, 1, e.hourElement)), e.amPM && s && (d === 1 ? u + c === 23 : Math.abs(u - c) > d) && (e.amPM.textContent = e.l10n.amPM[F(e.amPM.textContent === e.l10n.amPM[0])]), o.value = I(u);
    }
  }
  return h(), e;
}
function G(a, r) {
  for (var e = Array.prototype.slice.call(a).filter(function(w) {
    return w instanceof HTMLElement;
  }), m = [], h = 0; h < e.length; h++) {
    var g = e[h];
    try {
      if (g.getAttribute("data-fp-omit") !== null)
        continue;
      g._flatpickr !== void 0 && (g._flatpickr.destroy(), g._flatpickr = void 0), g._flatpickr = _n(g, r || {}), m.push(g._flatpickr);
    } catch (w) {
      console.error(w);
    }
  }
  return m.length === 1 ? m[0] : m;
}
typeof HTMLElement != "undefined" && typeof HTMLCollection != "undefined" && typeof NodeList != "undefined" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(a) {
  return G(this, a);
}, HTMLElement.prototype.flatpickr = function(a) {
  return G([this], a);
});
var y = function(a, r) {
  return typeof a == "string" ? G(window.document.querySelectorAll(a), r) : a instanceof Node ? G([a], r) : G(a, r);
};
y.defaultConfig = {};
y.l10ns = {
  en: k({}, te),
  default: k({}, te)
};
y.localize = function(a) {
  y.l10ns.default = k(k({}, y.l10ns.default), a);
};
y.setDefaults = function(a) {
  y.defaultConfig = k(k({}, y.defaultConfig), a);
};
y.parseDate = Se({});
y.formatDate = Ue({});
y.compareDates = O;
typeof jQuery != "undefined" && typeof jQuery.fn != "undefined" && (jQuery.fn.flatpickr = function(a) {
  return G(this, a);
});
Date.prototype.fp_incr = function(a) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof a == "string" ? parseInt(a, 10) : a));
};
typeof window != "undefined" && (window.flatpickr = y);
export {
  y as default
};
//# sourceMappingURL=index-Oq81NaeJ.js.map
