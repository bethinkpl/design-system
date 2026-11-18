/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function xe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function Sa(e) {
  if (Array.isArray(e)) return e;
}
function ka(e) {
  if (Array.isArray(e)) return xe(e);
}
function Pa(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ea(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, St(n.key), n);
  }
}
function Ia(e, t, a) {
  return t && Ea(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ee(e, t) {
  var a = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Me(e)) || t) {
      a && (e = a);
      var n = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, i = !0, s = !1;
  return {
    s: function() {
      a = a.call(e);
    },
    n: function() {
      var l = a.next();
      return i = l.done, l;
    },
    e: function(l) {
      s = !0, o = l;
    },
    f: function() {
      try {
        i || a.return == null || a.return();
      } finally {
        if (s) throw o;
      }
    }
  };
}
function h(e, t, a) {
  return (t = St(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Fa(e) {
  if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Oa(e, t) {
  var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n, r, o, i, s = [], l = !0, u = !1;
    try {
      if (o = (a = a.call(e)).next, t === 0) {
        if (Object(a) !== a) return;
        l = !1;
      } else for (; !(l = (n = o.call(a)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (m) {
      u = !0, r = m;
    } finally {
      try {
        if (!l && a.return != null && (i = a.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function Ca() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Na() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Be(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Be(Object(a), !0).forEach(function(n) {
      h(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Be(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function oe(e, t) {
  return Sa(e) || Oa(e, t) || Me(e, t) || Ca();
}
function I(e) {
  return ka(e) || Fa(e) || Me(e) || Na();
}
function ja(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function St(e) {
  var t = ja(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ne(e) {
  "@babel/helpers - typeof";
  return ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ne(e);
}
function Me(e, t) {
  if (e) {
    if (typeof e == "string") return xe(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? xe(e, t) : void 0;
  }
}
var Ve = function() {
}, $e = {}, kt = {}, Pt = null, Et = {
  mark: Ve,
  measure: Ve
};
try {
  typeof window != "undefined" && ($e = window), typeof document != "undefined" && (kt = document), typeof MutationObserver != "undefined" && (Pt = MutationObserver), typeof performance != "undefined" && (Et = performance);
} catch {
}
var Ta = $e.navigator || {}, Je = Ta.userAgent, Ke = Je === void 0 ? "" : Je, T = $e, p = kt, qe = Pt, Q = Et;
T.document;
var j = !!p.documentElement && !!p.head && typeof p.addEventListener == "function" && typeof p.createElement == "function", It = ~Ke.indexOf("MSIE") || ~Ke.indexOf("Trident/"), me, _a = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ma = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i, Ft = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  }
}, $a = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ot = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press"], w = "classic", J = "duotone", Ct = "sharp", Nt = "sharp-duotone", jt = "chisel", Tt = "etch", _t = "jelly", Mt = "jelly-duo", $t = "jelly-fill", Dt = "notdog", Lt = "notdog-duo", Rt = "slab", zt = "slab-press", Wt = "thumbprint", Yt = "whiteboard", Da = "Classic", La = "Duotone", Ra = "Sharp", za = "Sharp Duotone", Wa = "Chisel", Ya = "Etch", Ua = "Jelly", Ha = "Jelly Duo", Ga = "Jelly Fill", Xa = "Notdog", Ba = "Notdog Duo", Va = "Slab", Ja = "Slab Press", Ka = "Thumbprint", qa = "Whiteboard", Ut = [w, J, Ct, Nt, jt, Tt, _t, Mt, $t, Dt, Lt, Rt, zt, Wt, Yt];
me = {}, h(h(h(h(h(h(h(h(h(h(me, w, Da), J, La), Ct, Ra), Nt, za), jt, Wa), Tt, Ya), _t, Ua), Mt, Ha), $t, Ga), Dt, Xa), h(h(h(h(h(me, Lt, Ba), Rt, Va), zt, Ja), Wt, Ka), Yt, qa);
var Qa = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  }
}, Za = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  }
}, en = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), tn = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, Ht = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Qe = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, an = ["kit"], nn = "kit", rn = "kit-duotone", on = "Kit", sn = "Kit Duotone";
h(h({}, nn, on), rn, sn);
var ln = {
  kit: {
    "fa-kit": "fak"
  }
}, fn = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, un = {
  kit: {
    fak: "fa-kit"
  }
}, Ze = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, ve, Z = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, cn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press"], dn = "classic", mn = "duotone", vn = "sharp", hn = "sharp-duotone", gn = "chisel", pn = "etch", bn = "jelly", yn = "jelly-duo", xn = "jelly-fill", wn = "notdog", An = "notdog-duo", Sn = "slab", kn = "slab-press", Pn = "thumbprint", En = "whiteboard", In = "Classic", Fn = "Duotone", On = "Sharp", Cn = "Sharp Duotone", Nn = "Chisel", jn = "Etch", Tn = "Jelly", _n = "Jelly Duo", Mn = "Jelly Fill", $n = "Notdog", Dn = "Notdog Duo", Ln = "Slab", Rn = "Slab Press", zn = "Thumbprint", Wn = "Whiteboard";
ve = {}, h(h(h(h(h(h(h(h(h(h(ve, dn, In), mn, Fn), vn, On), hn, Cn), gn, Nn), pn, jn), bn, Tn), yn, _n), xn, Mn), wn, $n), h(h(h(h(h(ve, An, Dn), Sn, Ln), kn, Rn), Pn, zn), En, Wn);
var Yn = "kit", Un = "kit-duotone", Hn = "Kit", Gn = "Kit Duotone";
h(h({}, Yn, Hn), Un, Gn);
var Xn = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  }
}, Bn = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"]
}, we = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  }
}, Vn = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], Gt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr"].concat(cn, Vn), Jn = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], Xt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Kn = Xt.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), qn = ["aw", "fw", "pull-left", "pull-right"], Qn = [].concat(I(Object.keys(Bn)), Jn, qn, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Z.GROUP, Z.SWAP_OPACITY, Z.PRIMARY, Z.SECONDARY]).concat(Xt.map(function(e) {
  return "".concat(e, "x");
})).concat(Kn.map(function(e) {
  return "w-".concat(e);
})), Zn = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, C = "___FONT_AWESOME___", Ae = 16, Bt = "fa", Vt = "svg-inline--fa", D = "data-fa-i2svg", Se = "data-fa-pseudo-element", er = "data-fa-pseudo-element-pending", De = "data-prefix", Le = "data-icon", et = "fontawesome-i2svg", tr = "async", ar = ["HTML", "HEAD", "STYLE", "SCRIPT"], Jt = ["::before", "::after", ":before", ":after"], Kt = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function K(e) {
  return new Proxy(e, {
    get: function(a, n) {
      return n in a ? a[n] : a[w];
    }
  });
}
var qt = f({}, Ft);
qt[w] = f(f(f(f({}, {
  "fa-duotone": "duotone"
}), Ft[w]), Qe.kit), Qe["kit-duotone"]);
var nr = K(qt), ke = f({}, tn);
ke[w] = f(f(f(f({}, {
  duotone: "fad"
}), ke[w]), Ze.kit), Ze["kit-duotone"]);
var tt = K(ke), Pe = f({}, we);
Pe[w] = f(f({}, Pe[w]), un.kit);
var Re = K(Pe), Ee = f({}, Xn);
Ee[w] = f(f({}, Ee[w]), ln.kit);
K(Ee);
var rr = _a, Qt = "fa-layers-text", ir = Ma, or = f({}, Qa);
K(or);
var sr = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], he = $a, lr = [].concat(I(an), I(Qn)), X = T.FontAwesomeConfig || {};
function fr(e) {
  var t = p.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ur(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (p && typeof p.querySelector == "function") {
  var cr = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  cr.forEach(function(e) {
    var t = oe(e, 2), a = t[0], n = t[1], r = ur(fr(a));
    r != null && (X[n] = r);
  });
}
var Zt = {
  styleDefault: "solid",
  familyDefault: w,
  cssPrefix: Bt,
  replacementClass: Vt,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
X.familyPrefix && (X.cssPrefix = X.familyPrefix);
var U = f(f({}, Zt), X);
U.autoReplaceSvg || (U.observeMutations = !1);
var d = {};
Object.keys(Zt).forEach(function(e) {
  Object.defineProperty(d, e, {
    enumerable: !0,
    set: function(a) {
      U[e] = a, B.forEach(function(n) {
        return n(d);
      });
    },
    get: function() {
      return U[e];
    }
  });
});
Object.defineProperty(d, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    U.cssPrefix = t, B.forEach(function(a) {
      return a(d);
    });
  },
  get: function() {
    return U.cssPrefix;
  }
});
T.FontAwesomeConfig = d;
var B = [];
function dr(e) {
  return B.push(e), function() {
    B.splice(B.indexOf(e), 1);
  };
}
var z = Ae, F = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function mr(e) {
  if (!(!e || !j)) {
    var t = p.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var a = p.head.childNodes, n = null, r = a.length - 1; r > -1; r--) {
      var o = a[r], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (n = o);
    }
    return p.head.insertBefore(t, n), e;
  }
}
var vr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function at() {
  for (var e = 12, t = ""; e-- > 0; )
    t += vr[Math.random() * 62 | 0];
  return t;
}
function H(e) {
  for (var t = [], a = (e || []).length >>> 0; a--; )
    t[a] = e[a];
  return t;
}
function ze(e) {
  return e.classList ? H(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function ea(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hr(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, '="').concat(ea(e[a]), '" ');
  }, "").trim();
}
function se(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, ": ").concat(e[a].trim(), ";");
  }, "");
}
function We(e) {
  return e.size !== F.size || e.x !== F.x || e.y !== F.y || e.rotate !== F.rotate || e.flipX || e.flipY;
}
function gr(e) {
  var t = e.transform, a = e.containerWidth, n = e.iconWidth, r = {
    transform: "translate(".concat(a / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: u
  };
}
function pr(e) {
  var t = e.transform, a = e.width, n = a === void 0 ? Ae : a, r = e.height, o = r === void 0 ? Ae : r, i = "";
  return It ? i += "translate(".concat(t.x / z - n / 2, "em, ").concat(t.y / z - o / 2, "em) ") : i += "translate(calc(-50% + ".concat(t.x / z, "em), calc(-50% + ").concat(t.y / z, "em)) "), i += "scale(".concat(t.size / z * (t.flipX ? -1 : 1), ", ").concat(t.size / z * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var br = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function ta() {
  var e = Bt, t = Vt, a = d.cssPrefix, n = d.replacementClass, r = br;
  if (a !== e || n !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(o, ".".concat(a, "-")).replace(i, "--".concat(a, "-")).replace(s, ".".concat(n));
  }
  return r;
}
var nt = !1;
function ge() {
  d.autoAddCss && !nt && (mr(ta()), nt = !0);
}
var yr = {
  mixout: function() {
    return {
      dom: {
        css: ta,
        insertCss: ge
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        ge();
      },
      beforeI2svg: function() {
        ge();
      }
    };
  }
}, N = T || {};
N[C] || (N[C] = {});
N[C].styles || (N[C].styles = {});
N[C].hooks || (N[C].hooks = {});
N[C].shims || (N[C].shims = []);
var E = N[C], aa = [], na = function() {
  p.removeEventListener("DOMContentLoaded", na), re = 1, aa.map(function(t) {
    return t();
  });
}, re = !1;
j && (re = (p.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(p.readyState), re || p.addEventListener("DOMContentLoaded", na));
function xr(e) {
  j && (re ? setTimeout(e, 0) : aa.push(e));
}
function q(e) {
  var t = e.tag, a = e.attributes, n = a === void 0 ? {} : a, r = e.children, o = r === void 0 ? [] : r;
  return typeof e == "string" ? ea(e) : "<".concat(t, " ").concat(hr(n), ">").concat(o.map(q).join(""), "</").concat(t, ">");
}
function rt(e, t, a) {
  if (e && e[t] && e[t][a])
    return {
      prefix: t,
      iconName: a,
      icon: e[t][a]
    };
}
var pe = function(t, a, n, r) {
  var o = Object.keys(t), i = o.length, s = a, l, u, m;
  for (n === void 0 ? (l = 1, m = t[o[0]]) : (l = 0, m = n); l < i; l++)
    u = o[l], m = s(m, t[u], u, t);
  return m;
};
function ra(e) {
  return I(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function it(e) {
  return Object.keys(e).reduce(function(t, a) {
    var n = e[a], r = !!n.icon;
    return r ? t[n.iconName] = n.icon : t[a] = n, t;
  }, {});
}
function Ie(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.skipHooks, r = n === void 0 ? !1 : n, o = it(t);
  typeof E.hooks.addPack == "function" && !r ? E.hooks.addPack(e, it(t)) : E.styles[e] = f(f({}, E.styles[e] || {}), o), e === "fas" && Ie("fa", t);
}
var V = E.styles, wr = E.shims, ia = Object.keys(Re), Ar = ia.reduce(function(e, t) {
  return e[t] = Object.keys(Re[t]), e;
}, {}), Ye = null, oa = {}, sa = {}, la = {}, fa = {}, ua = {};
function Sr(e) {
  return ~lr.indexOf(e);
}
function kr(e, t) {
  var a = t.split("-"), n = a[0], r = a.slice(1).join("-");
  return n === e && r !== "" && !Sr(r) ? r : null;
}
var ca = function() {
  var t = function(o) {
    return pe(V, function(i, s, l) {
      return i[l] = pe(s, o, {}), i;
    }, {});
  };
  oa = t(function(r, o, i) {
    if (o[3] && (r[o[3]] = i), o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = i;
      });
    }
    return r;
  }), sa = t(function(r, o, i) {
    if (r[i] = i, o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = i;
      });
    }
    return r;
  }), ua = t(function(r, o, i) {
    var s = o[2];
    return r[i] = i, s.forEach(function(l) {
      r[l] = i;
    }), r;
  });
  var a = "far" in V || d.autoFetchSvg, n = pe(wr, function(r, o) {
    var i = o[0], s = o[1], l = o[2];
    return s === "far" && !a && (s = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: s,
      iconName: l
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  la = n.names, fa = n.unicodes, Ye = le(d.styleDefault, {
    family: d.familyDefault
  });
};
dr(function(e) {
  Ye = le(e.styleDefault, {
    family: d.familyDefault
  });
});
ca();
function Ue(e, t) {
  return (oa[e] || {})[t];
}
function Pr(e, t) {
  return (sa[e] || {})[t];
}
function $(e, t) {
  return (ua[e] || {})[t];
}
function da(e) {
  return la[e] || {
    prefix: null,
    iconName: null
  };
}
function Er(e) {
  var t = fa[e], a = Ue("fas", e);
  return t || (a ? {
    prefix: "fas",
    iconName: a
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function _() {
  return Ye;
}
var ma = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ir(e) {
  var t = w, a = ia.reduce(function(n, r) {
    return n[r] = "".concat(d.cssPrefix, "-").concat(r), n;
  }, {});
  return Ut.forEach(function(n) {
    (e.includes(a[n]) || e.some(function(r) {
      return Ar[n].includes(r);
    })) && (t = n);
  }), t;
}
function le(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.family, n = a === void 0 ? w : a, r = nr[n][e];
  if (n === J && !e)
    return "fad";
  var o = tt[n][e] || tt[n][r], i = e in E.styles ? e : null, s = o || i || null;
  return s;
}
function Fr(e) {
  var t = [], a = null;
  return e.forEach(function(n) {
    var r = kr(d.cssPrefix, n);
    r ? a = r : n && t.push(n);
  }), {
    iconName: a,
    rest: t
  };
}
function ot(e) {
  return e.sort().filter(function(t, a, n) {
    return n.indexOf(t) === a;
  });
}
var st = Gt.concat(Ht);
function fe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.skipLookups, n = a === void 0 ? !1 : a, r = null, o = ot(e.filter(function(v) {
    return st.includes(v);
  })), i = ot(e.filter(function(v) {
    return !st.includes(v);
  })), s = o.filter(function(v) {
    return r = v, !Ot.includes(v);
  }), l = oe(s, 1), u = l[0], m = u === void 0 ? null : u, c = Ir(o), g = f(f({}, Fr(i)), {}, {
    prefix: le(m, {
      family: c
    })
  });
  return f(f(f({}, g), jr({
    values: e,
    family: c,
    styles: V,
    config: d,
    canonical: g,
    givenPrefix: r
  })), Or(n, r, g));
}
function Or(e, t, a) {
  var n = a.prefix, r = a.iconName;
  if (e || !n || !r)
    return {
      prefix: n,
      iconName: r
    };
  var o = t === "fa" ? da(r) : {}, i = $(n, r);
  return r = o.iconName || i || r, n = o.prefix || n, n === "far" && !V.far && V.fas && !d.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: r
  };
}
var Cr = Ut.filter(function(e) {
  return e !== w || e !== J;
}), Nr = Object.keys(we).filter(function(e) {
  return e !== w;
}).map(function(e) {
  return Object.keys(we[e]);
}).flat();
function jr(e) {
  var t = e.values, a = e.family, n = e.canonical, r = e.givenPrefix, o = r === void 0 ? "" : r, i = e.styles, s = i === void 0 ? {} : i, l = e.config, u = l === void 0 ? {} : l, m = a === J, c = t.includes("fa-duotone") || t.includes("fad"), g = u.familyDefault === "duotone", v = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!m && (c || g || v) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Cr.includes(a)) {
    var y = Object.keys(s).find(function(A) {
      return Nr.includes(A);
    });
    if (y || u.autoFetchSvg) {
      var b = en.get(a).defaultShortPrefixId;
      n.prefix = b, n.iconName = $(n.prefix, n.iconName) || n.iconName;
    }
  }
  return (n.prefix === "fa" || o === "fa") && (n.prefix = _() || "fas"), n;
}
var Tr = /* @__PURE__ */ (function() {
  function e() {
    Pa(this, e), this.definitions = {};
  }
  return Ia(e, [{
    key: "add",
    value: function() {
      for (var a = this, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      var i = r.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        a.definitions[s] = f(f({}, a.definitions[s] || {}), i[s]), Ie(s, i[s]);
        var l = Re[w][s];
        l && Ie(l, i[s]), ca();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(a, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(o) {
        var i = r[o], s = i.prefix, l = i.iconName, u = i.icon, m = u[2];
        a[s] || (a[s] = {}), m.length > 0 && m.forEach(function(c) {
          typeof c == "string" && (a[s][c] = u);
        }), a[s][l] = u;
      }), a;
    }
  }]);
})(), lt = [], W = {}, Y = {}, _r = Object.keys(Y);
function Mr(e, t) {
  var a = t.mixoutsTo;
  return lt = e, W = {}, Object.keys(Y).forEach(function(n) {
    _r.indexOf(n) === -1 && delete Y[n];
  }), lt.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(i) {
      typeof r[i] == "function" && (a[i] = r[i]), ne(r[i]) === "object" && Object.keys(r[i]).forEach(function(s) {
        a[i] || (a[i] = {}), a[i][s] = r[i][s];
      });
    }), n.hooks) {
      var o = n.hooks();
      Object.keys(o).forEach(function(i) {
        W[i] || (W[i] = []), W[i].push(o[i]);
      });
    }
    n.provides && n.provides(Y);
  }), a;
}
function Fe(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  var o = W[e] || [];
  return o.forEach(function(i) {
    t = i.apply(null, [t].concat(n));
  }), t;
}
function L(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var r = W[e] || [];
  r.forEach(function(o) {
    o.apply(null, a);
  });
}
function M() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Y[e] ? Y[e].apply(null, t) : void 0;
}
function Oe(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, a = e.prefix || _();
  if (t)
    return t = $(a, t) || t, rt(va.definitions, a, t) || rt(E.styles, a, t);
}
var va = new Tr(), $r = function() {
  d.autoReplaceSvg = !1, d.observeMutations = !1, L("noAuto");
}, Dr = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return j ? (L("beforeI2svg", t), M("pseudoElements2svg", t), M("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot;
    d.autoReplaceSvg === !1 && (d.autoReplaceSvg = !0), d.observeMutations = !0, xr(function() {
      Rr({
        autoReplaceSvgRoot: a
      }), L("watch", t);
    });
  }
}, Lr = {
  icon: function(t) {
    if (t === null)
      return null;
    if (ne(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: $(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var a = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = le(t[0]);
      return {
        prefix: n,
        iconName: $(n, a) || a
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(d.cssPrefix, "-")) > -1 || t.match(rr))) {
      var r = fe(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || _(),
        iconName: $(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var o = _();
      return {
        prefix: o,
        iconName: $(o, t) || t
      };
    }
  }
}, k = {
  noAuto: $r,
  config: d,
  dom: Dr,
  parse: Lr,
  library: va,
  findIconDefinition: Oe,
  toHtml: q
}, Rr = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot, n = a === void 0 ? p : a;
  (Object.keys(E.styles).length > 0 || d.autoFetchSvg) && j && d.autoReplaceSvg && k.dom.i2svg({
    node: n
  });
};
function ue(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return q(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (j) {
        var n = p.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function zr(e) {
  var t = e.children, a = e.main, n = e.mask, r = e.attributes, o = e.styles, i = e.transform;
  if (We(i) && a.found && !n.found) {
    var s = a.width, l = a.height, u = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = se(f(f({}, o), {}, {
      "transform-origin": "".concat(u.x + i.x / 16, "em ").concat(u.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function Wr(e) {
  var t = e.prefix, a = e.iconName, n = e.children, r = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(d.cssPrefix, "-").concat(a) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: f(f({}, r), {}, {
        id: i
      }),
      children: n
    }]
  }];
}
function Yr(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(a) {
    return a in e;
  });
}
function He(e) {
  var t = e.icons, a = t.main, n = t.mask, r = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, l = e.maskId, u = e.extra, m = e.watchable, c = m === void 0 ? !1 : m, g = n.found ? n : a, v = g.width, y = g.height, b = [d.replacementClass, o ? "".concat(d.cssPrefix, "-").concat(o) : ""].filter(function(O) {
    return u.classes.indexOf(O) === -1;
  }).filter(function(O) {
    return O !== "" || !!O;
  }).concat(u.classes).join(" "), A = {
    children: [],
    attributes: f(f({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: b,
      role: u.attributes.role || "img",
      viewBox: "0 0 ".concat(v, " ").concat(y)
    })
  };
  !Yr(u.attributes) && !u.attributes["aria-hidden"] && (A.attributes["aria-hidden"] = "true"), c && (A.attributes[D] = "");
  var x = f(f({}, A), {}, {
    prefix: r,
    iconName: o,
    main: a,
    mask: n,
    maskId: l,
    transform: i,
    symbol: s,
    styles: f({}, u.styles)
  }), S = n.found && a.found ? M("generateAbstractMask", x) || {
    children: [],
    attributes: {}
  } : M("generateAbstractIcon", x) || {
    children: [],
    attributes: {}
  }, P = S.children, R = S.attributes;
  return x.children = P, x.attributes = R, s ? Wr(x) : zr(x);
}
function ft(e) {
  var t = e.content, a = e.width, n = e.height, r = e.transform, o = e.extra, i = e.watchable, s = i === void 0 ? !1 : i, l = f(f({}, o.attributes), {}, {
    class: o.classes.join(" ")
  });
  s && (l[D] = "");
  var u = f({}, o.styles);
  We(r) && (u.transform = pr({
    transform: r,
    width: a,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var m = se(u);
  m.length > 0 && (l.style = m);
  var c = [];
  return c.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), c;
}
function Ur(e) {
  var t = e.content, a = e.extra, n = f(f({}, a.attributes), {}, {
    class: a.classes.join(" ")
  }), r = se(a.styles);
  r.length > 0 && (n.style = r);
  var o = [];
  return o.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), o;
}
var be = E.styles;
function Ce(e) {
  var t = e[0], a = e[1], n = e.slice(4), r = oe(n, 1), o = r[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(d.cssPrefix, "-").concat(he.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(he.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(he.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: a,
    icon: i
  };
}
var Hr = {
  found: !1,
  width: 512,
  height: 512
};
function Gr(e, t) {
  !Kt && !d.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ne(e, t) {
  var a = t;
  return t === "fa" && d.styleDefault !== null && (t = _()), new Promise(function(n, r) {
    if (a === "fa") {
      var o = da(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && be[t] && be[t][e]) {
      var i = be[t][e];
      return n(Ce(i));
    }
    Gr(e, t), n(f(f({}, Hr), {}, {
      icon: d.showMissingIcons && e ? M("missingIconAbstract") || {} : {}
    }));
  });
}
var ut = function() {
}, je = d.measurePerformance && Q && Q.mark && Q.measure ? Q : {
  mark: ut,
  measure: ut
}, G = 'FA "7.0.1"', Xr = function(t) {
  return je.mark("".concat(G, " ").concat(t, " begins")), function() {
    return ha(t);
  };
}, ha = function(t) {
  je.mark("".concat(G, " ").concat(t, " ends")), je.measure("".concat(G, " ").concat(t), "".concat(G, " ").concat(t, " begins"), "".concat(G, " ").concat(t, " ends"));
}, Ge = {
  begin: Xr,
  end: ha
}, te = function() {
};
function ct(e) {
  var t = e.getAttribute ? e.getAttribute(D) : null;
  return typeof t == "string";
}
function Br(e) {
  var t = e.getAttribute ? e.getAttribute(De) : null, a = e.getAttribute ? e.getAttribute(Le) : null;
  return t && a;
}
function Vr(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(d.replacementClass);
}
function Jr() {
  if (d.autoReplaceSvg === !0)
    return ae.replace;
  var e = ae[d.autoReplaceSvg];
  return e || ae.replace;
}
function Kr(e) {
  return p.createElementNS("http://www.w3.org/2000/svg", e);
}
function qr(e) {
  return p.createElement(e);
}
function ga(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.ceFn, n = a === void 0 ? e.tag === "svg" ? Kr : qr : a;
  if (typeof e == "string")
    return p.createTextNode(e);
  var r = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    r.appendChild(ga(i, {
      ceFn: n
    }));
  }), r;
}
function Qr(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var ae = {
  replace: function(t) {
    var a = t[0];
    if (a.parentNode)
      if (t[1].forEach(function(r) {
        a.parentNode.insertBefore(ga(r), a);
      }), a.getAttribute(D) === null && d.keepOriginalSource) {
        var n = p.createComment(Qr(a));
        a.parentNode.replaceChild(n, a);
      } else
        a.remove();
  },
  nest: function(t) {
    var a = t[0], n = t[1];
    if (~ze(a).indexOf(d.replacementClass))
      return ae.replace(t);
    var r = new RegExp("".concat(d.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var o = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === d.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", o.toNode.join(" "));
    }
    var i = n.map(function(s) {
      return q(s);
    }).join(`
`);
    a.setAttribute(D, ""), a.innerHTML = i;
  }
};
function dt(e) {
  e();
}
function pa(e, t) {
  var a = typeof t == "function" ? t : te;
  if (e.length === 0)
    a();
  else {
    var n = dt;
    d.mutateApproach === tr && (n = T.requestAnimationFrame || dt), n(function() {
      var r = Jr(), o = Ge.begin("mutate");
      e.map(r), o(), a();
    });
  }
}
var Xe = !1;
function ba() {
  Xe = !0;
}
function Te() {
  Xe = !1;
}
var ie = null;
function mt(e) {
  if (qe && d.observeMutations) {
    var t = e.treeCallback, a = t === void 0 ? te : t, n = e.nodeCallback, r = n === void 0 ? te : n, o = e.pseudoElementsCallback, i = o === void 0 ? te : o, s = e.observeMutationsRoot, l = s === void 0 ? p : s;
    ie = new qe(function(u) {
      if (!Xe) {
        var m = _();
        H(u).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !ct(c.addedNodes[0]) && (d.searchPseudoElements && i(c.target), a(c.target)), c.type === "attributes" && c.target.parentNode && d.searchPseudoElements && i([c.target], !0), c.type === "attributes" && ct(c.target) && ~sr.indexOf(c.attributeName))
            if (c.attributeName === "class" && Br(c.target)) {
              var g = fe(ze(c.target)), v = g.prefix, y = g.iconName;
              c.target.setAttribute(De, v || m), y && c.target.setAttribute(Le, y);
            } else Vr(c.target) && r(c.target);
        });
      }
    }), j && ie.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Zr() {
  ie && ie.disconnect();
}
function ei(e) {
  var t = e.getAttribute("style"), a = [];
  return t && (a = t.split(";").reduce(function(n, r) {
    var o = r.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (n[i] = s.join(":").trim()), n;
  }, {})), a;
}
function ti(e) {
  var t = e.getAttribute("data-prefix"), a = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", r = fe(ze(e));
  return r.prefix || (r.prefix = _()), t && a && (r.prefix = t, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = Pr(r.prefix, e.innerText) || Ue(r.prefix, ra(e.innerText))), !r.iconName && d.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function ai(e) {
  var t = H(e.attributes).reduce(function(a, n) {
    return a.name !== "class" && a.name !== "style" && (a[n.name] = n.value), a;
  }, {});
  return t;
}
function ni() {
  return {
    iconName: null,
    prefix: null,
    transform: F,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function vt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, a = ti(e), n = a.iconName, r = a.prefix, o = a.rest, i = ai(e), s = Fe("parseNodeAttributes", {}, e), l = t.styleParser ? ei(e) : [];
  return f({
    iconName: n,
    prefix: r,
    transform: F,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: l,
      attributes: i
    }
  }, s);
}
var ri = E.styles;
function ya(e) {
  var t = d.autoReplaceSvg === "nest" ? vt(e, {
    styleParser: !1
  }) : vt(e);
  return ~t.extra.classes.indexOf(Qt) ? M("generateLayersText", e, t) : M("generateSvgReplacementMutation", e, t);
}
function ii() {
  return [].concat(I(Ht), I(Gt));
}
function ht(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!j) return Promise.resolve();
  var a = p.documentElement.classList, n = function(c) {
    return a.add("".concat(et, "-").concat(c));
  }, r = function(c) {
    return a.remove("".concat(et, "-").concat(c));
  }, o = d.autoFetchSvg ? ii() : Ot.concat(Object.keys(ri));
  o.includes("fa") || o.push("fa");
  var i = [".".concat(Qt, ":not([").concat(D, "])")].concat(o.map(function(m) {
    return ".".concat(m, ":not([").concat(D, "])");
  })).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = H(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Ge.begin("onTree"), u = s.reduce(function(m, c) {
    try {
      var g = ya(c);
      g && m.push(g);
    } catch (v) {
      Kt || v.name === "MissingIcon" && console.error(v);
    }
    return m;
  }, []);
  return new Promise(function(m, c) {
    Promise.all(u).then(function(g) {
      pa(g, function() {
        n("active"), n("complete"), r("pending"), typeof t == "function" && t(), l(), m();
      });
    }).catch(function(g) {
      l(), c(g);
    });
  });
}
function oi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ya(e).then(function(a) {
    a && pa([a], t);
  });
}
function si(e) {
  return function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : Oe(t || {}), r = a.mask;
    return r && (r = (r || {}).icon ? r : Oe(r || {})), e(n, f(f({}, a), {}, {
      mask: r
    }));
  };
}
var li = function(t) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, r = n === void 0 ? F : n, o = a.symbol, i = o === void 0 ? !1 : o, s = a.mask, l = s === void 0 ? null : s, u = a.maskId, m = u === void 0 ? null : u, c = a.classes, g = c === void 0 ? [] : c, v = a.attributes, y = v === void 0 ? {} : v, b = a.styles, A = b === void 0 ? {} : b;
  if (t) {
    var x = t.prefix, S = t.iconName, P = t.icon;
    return ue(f({
      type: "icon"
    }, t), function() {
      return L("beforeDOMElementCreation", {
        iconDefinition: t,
        params: a
      }), He({
        icons: {
          main: Ce(P),
          mask: l ? Ce(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: x,
        iconName: S,
        transform: f(f({}, F), r),
        symbol: i,
        maskId: m,
        extra: {
          attributes: y,
          styles: A,
          classes: g
        }
      });
    });
  }
}, fi = {
  mixout: function() {
    return {
      icon: si(li)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.treeCallback = ht, a.nodeCallback = oi, a;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(a) {
      var n = a.node, r = n === void 0 ? p : n, o = a.callback, i = o === void 0 ? function() {
      } : o;
      return ht(r, i);
    }, t.generateSvgReplacementMutation = function(a, n) {
      var r = n.iconName, o = n.prefix, i = n.transform, s = n.symbol, l = n.mask, u = n.maskId, m = n.extra;
      return new Promise(function(c, g) {
        Promise.all([Ne(r, o), l.iconName ? Ne(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var y = oe(v, 2), b = y[0], A = y[1];
          c([a, He({
            icons: {
              main: b,
              mask: A
            },
            prefix: o,
            iconName: r,
            transform: i,
            symbol: s,
            maskId: u,
            extra: m,
            watchable: !0
          })]);
        }).catch(g);
      });
    }, t.generateAbstractIcon = function(a) {
      var n = a.children, r = a.attributes, o = a.main, i = a.transform, s = a.styles, l = se(s);
      l.length > 0 && (r.style = l);
      var u;
      return We(i) && (u = M("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(u || o.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, ui = {
  mixout: function() {
    return {
      layer: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, o = r === void 0 ? [] : r;
        return ue({
          type: "layer"
        }, function() {
          L("beforeDOMElementCreation", {
            assembler: a,
            params: n
          });
          var i = [];
          return a(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              i = i.concat(l.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(d.cssPrefix, "-layers")].concat(I(o)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, ci = {
  mixout: function() {
    return {
      counter: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n.title;
        var r = n.classes, o = r === void 0 ? [] : r, i = n.attributes, s = i === void 0 ? {} : i, l = n.styles, u = l === void 0 ? {} : l;
        return ue({
          type: "counter",
          content: a
        }, function() {
          return L("beforeDOMElementCreation", {
            content: a,
            params: n
          }), Ur({
            content: a.toString(),
            extra: {
              attributes: s,
              styles: u,
              classes: ["".concat(d.cssPrefix, "-layers-counter")].concat(I(o))
            }
          });
        });
      }
    };
  }
}, di = {
  mixout: function() {
    return {
      text: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, o = r === void 0 ? F : r, i = n.classes, s = i === void 0 ? [] : i, l = n.attributes, u = l === void 0 ? {} : l, m = n.styles, c = m === void 0 ? {} : m;
        return ue({
          type: "text",
          content: a
        }, function() {
          return L("beforeDOMElementCreation", {
            content: a,
            params: n
          }), ft({
            content: a,
            transform: f(f({}, F), o),
            extra: {
              attributes: u,
              styles: c,
              classes: ["".concat(d.cssPrefix, "-layers-text")].concat(I(s))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(a, n) {
      var r = n.transform, o = n.extra, i = null, s = null;
      if (It) {
        var l = parseInt(getComputedStyle(a).fontSize, 10), u = a.getBoundingClientRect();
        i = u.width / l, s = u.height / l;
      }
      return Promise.resolve([a, ft({
        content: a.innerHTML,
        width: i,
        height: s,
        transform: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, xa = new RegExp('"', "ug"), gt = [1105920, 1112319], pt = f(f(f(f({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Za), Zn), fn), _e = Object.keys(pt).reduce(function(e, t) {
  return e[t.toLowerCase()] = pt[t], e;
}, {}), mi = Object.keys(_e).reduce(function(e, t) {
  var a = _e[t];
  return e[t] = a[900] || I(Object.entries(a))[0][1], e;
}, {});
function vi(e) {
  var t = e.replace(xa, "");
  return ra(I(t)[0] || "");
}
function hi(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), a = e.getPropertyValue("content"), n = a.replace(xa, ""), r = n.codePointAt(0), o = r >= gt[0] && r <= gt[1], i = n.length === 2 ? n[0] === n[1] : !1;
  return o || i || t;
}
function gi(e, t) {
  var a = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), r = isNaN(n) ? "normal" : n;
  return (_e[a] || {})[r] || mi[a];
}
function bt(e, t) {
  var a = "".concat(er).concat(t.replace(":", "-"));
  return new Promise(function(n, r) {
    if (e.getAttribute(a) !== null)
      return n();
    var o = H(e.children), i = o.filter(function(ce) {
      return ce.getAttribute(Se) === t;
    })[0], s = T.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), u = l.match(ir), m = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (i && !u)
      return e.removeChild(i), n();
    if (u && c !== "none" && c !== "") {
      var g = s.getPropertyValue("content"), v = gi(l, m), y = vi(g), b = u[0].startsWith("FontAwesome"), A = hi(s), x = Ue(v, y), S = x;
      if (b) {
        var P = Er(y);
        P.iconName && P.prefix && (x = P.iconName, v = P.prefix);
      }
      if (x && !A && (!i || i.getAttribute(De) !== v || i.getAttribute(Le) !== S)) {
        e.setAttribute(a, S), i && e.removeChild(i);
        var R = ni(), O = R.extra;
        O.attributes[Se] = t, Ne(x, v).then(function(ce) {
          var wa = He(f(f({}, R), {}, {
            icons: {
              main: ce,
              mask: ma()
            },
            prefix: v,
            iconName: S,
            extra: O,
            watchable: !0
          })), de = p.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(de, e.firstChild) : e.appendChild(de), de.outerHTML = wa.map(function(Aa) {
            return q(Aa);
          }).join(`
`), e.removeAttribute(a), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function pi(e) {
  return Promise.all([bt(e, "::before"), bt(e, "::after")]);
}
function bi(e) {
  return e.parentNode !== document.head && !~ar.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Se) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var yi = function(t) {
  return !!t && Jt.some(function(a) {
    return t.includes(a);
  });
}, xi = function(t) {
  if (!t) return [];
  var a = /* @__PURE__ */ new Set(), n = t.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  n = n.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(u) {
      return u.trim();
    });
  });
  var r = ee(n), o;
  try {
    for (r.s(); !(o = r.n()).done; ) {
      var i = o.value;
      if (yi(i)) {
        var s = Jt.reduce(function(l, u) {
          return l.replace(u, "");
        }, i);
        s !== "" && s !== "*" && a.add(s);
      }
    }
  } catch (l) {
    r.e(l);
  } finally {
    r.f();
  }
  return a;
};
function yt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (j) {
    var a;
    if (t)
      a = e;
    else if (d.searchPseudoElementsFullScan)
      a = e.querySelectorAll("*");
    else {
      var n = /* @__PURE__ */ new Set(), r = ee(document.styleSheets), o;
      try {
        for (r.s(); !(o = r.n()).done; ) {
          var i = o.value;
          try {
            var s = ee(i.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var u = l.value, m = xi(u.selectorText), c = ee(m), g;
                try {
                  for (c.s(); !(g = c.n()).done; ) {
                    var v = g.value;
                    n.add(v);
                  }
                } catch (b) {
                  c.e(b);
                } finally {
                  c.f();
                }
              }
            } catch (b) {
              s.e(b);
            } finally {
              s.f();
            }
          } catch (b) {
            d.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href, " (").concat(b.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (b) {
        r.e(b);
      } finally {
        r.f();
      }
      if (!n.size) return;
      var y = Array.from(n).join(", ");
      try {
        a = e.querySelectorAll(y);
      } catch {
      }
    }
    return new Promise(function(b, A) {
      var x = H(a).filter(bi).map(pi), S = Ge.begin("searchPseudoElements");
      ba(), Promise.all(x).then(function() {
        S(), Te(), b();
      }).catch(function() {
        S(), Te(), A();
      });
    });
  }
}
var wi = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.pseudoElementsCallback = yt, a;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(a) {
      var n = a.node, r = n === void 0 ? p : n;
      d.searchPseudoElements && yt(r);
    };
  }
}, xt = !1, Ai = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ba(), xt = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        mt(Fe("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Zr();
      },
      watch: function(a) {
        var n = a.observeMutationsRoot;
        xt ? Te() : mt(Fe("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, wt = function(t) {
  var a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, r) {
    var o = r.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return n.flipX = !0, n;
    if (i && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, a);
}, Si = {
  mixout: function() {
    return {
      parse: {
        transform: function(a) {
          return wt(a);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (a.transform = wt(r)), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(a) {
      var n = a.main, r = a.transform, o = a.containerWidth, i = a.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), m = "rotate(".concat(r.rotate, " 0 0)"), c = {
        transform: "".concat(l, " ").concat(u, " ").concat(m)
      }, g = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, v = {
        outer: s,
        inner: c,
        path: g
      };
      return {
        tag: "g",
        attributes: f({}, v.outer),
        children: [{
          tag: "g",
          attributes: f({}, v.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: f(f({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
}, ye = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function At(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ki(e) {
  return e.tag === "g" ? e.children : [e];
}
var Pi = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-mask"), o = r ? fe(r.split(" ").map(function(i) {
          return i.trim();
        })) : ma();
        return o.prefix || (o.prefix = _()), a.mask = o, a.maskId = n.getAttribute("data-fa-mask-id"), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(a) {
      var n = a.children, r = a.attributes, o = a.main, i = a.mask, s = a.maskId, l = a.transform, u = o.width, m = o.icon, c = i.width, g = i.icon, v = gr({
        transform: l,
        containerWidth: c,
        iconWidth: u
      }), y = {
        tag: "rect",
        attributes: f(f({}, ye), {}, {
          fill: "white"
        })
      }, b = m.children ? {
        children: m.children.map(At)
      } : {}, A = {
        tag: "g",
        attributes: f({}, v.inner),
        children: [At(f({
          tag: m.tag,
          attributes: f(f({}, m.attributes), v.path)
        }, b))]
      }, x = {
        tag: "g",
        attributes: f({}, v.outer),
        children: [A]
      }, S = "mask-".concat(s || at()), P = "clip-".concat(s || at()), R = {
        tag: "mask",
        attributes: f(f({}, ye), {}, {
          id: S,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, x]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: P
          },
          children: ki(g)
        }, R]
      };
      return n.push(O, {
        tag: "rect",
        attributes: f({
          fill: "currentColor",
          "clip-path": "url(#".concat(P, ")"),
          mask: "url(#".concat(S, ")")
        }, ye)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ei = {
  provides: function(t) {
    var a = !1;
    T.matchMedia && (a = T.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = f(f({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: f(f({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return a || s.children.push({
        tag: "animate",
        attributes: f(f({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: f(f({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: f(f({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: f(f({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Ii = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-symbol"), o = r === null ? !1 : r === "" ? !0 : r;
        return a.symbol = o, a;
      }
    };
  }
}, Fi = [yr, fi, ui, ci, di, wi, Ai, Si, Pi, Ei, Ii];
Mr(Fi, {
  mixoutsTo: k
});
k.noAuto;
var Oi = k.config, Ci = k.library, Ni = k.dom, ji = k.parse;
k.findIconDefinition;
k.toHtml;
var Ti = k.icon;
k.layer;
var _i = k.text;
k.counter;
export {
  k as api,
  Oi as config,
  Ni as dom,
  Ti as icon,
  Ci as library,
  ji as parse,
  _i as text
};
//# sourceMappingURL=index.js.map
