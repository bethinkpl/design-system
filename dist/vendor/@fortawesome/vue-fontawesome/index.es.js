import { defineComponent as _, computed as d, watch as $, h as k } from "vue";
import { parse as O, icon as E, config as T, text as R } from "../fontawesome-svg-core/index.js";
function A(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U(e) {
  if (Array.isArray(e)) return A(e);
}
function i(e, t, r) {
  return (t = Z(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function q(e) {
  if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function G() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? I(Object(r), !0).forEach(function(n) {
      i(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H(e, t) {
  if (e == null) return {};
  var r, n, o = M(e, t);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (n = 0; n < u.length; n++) r = u[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function M(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function P(e) {
  return U(e) || q(e) || J(e) || G();
}
function V(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z(e) {
  var t = V(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x(e) {
  "@babel/helpers - typeof";
  return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, x(e);
}
function J(e, t) {
  if (e) {
    if (typeof e == "string") return A(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? A(e, t) : void 0;
  }
}
function h(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? i({}, e, t) : {};
}
function Q(e) {
  var t, r = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    // the fixedWidth property has been deprecated as of version 7.0.0
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, i(i(i(i(i(i(i(i(i(i(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-rotate-by", e.rotateBy), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), i(i(i(i(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
var X = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, C = { exports: {} };
(function(e) {
  (function(t) {
    var r = function(a, l, y) {
      if (!p(l) || W(l) || D(l) || F(l) || s(l))
        return l;
      var b, g = 0, z = 0;
      if (f(l))
        for (b = [], z = l.length; g < z; g++)
          b.push(r(a, l[g], y));
      else {
        b = {};
        for (var S in l)
          Object.prototype.hasOwnProperty.call(l, S) && (b[a(S, y)] = r(a, l[S], y));
      }
      return b;
    }, n = function(a, l) {
      l = l || {};
      var y = l.separator || "_", b = l.split || /(?=[A-Z])/;
      return a.split(b).join(y);
    }, o = function(a) {
      return L(a) ? a : (a = a.replace(/[\-_\s]+(.)?/g, function(l, y) {
        return y ? y.toUpperCase() : "";
      }), a.substr(0, 1).toLowerCase() + a.substr(1));
    }, u = function(a) {
      var l = o(a);
      return l.substr(0, 1).toUpperCase() + l.substr(1);
    }, v = function(a, l) {
      return n(a, l).toLowerCase();
    }, c = Object.prototype.toString, s = function(a) {
      return typeof a == "function";
    }, p = function(a) {
      return a === Object(a);
    }, f = function(a) {
      return c.call(a) == "[object Array]";
    }, W = function(a) {
      return c.call(a) == "[object Date]";
    }, D = function(a) {
      return c.call(a) == "[object RegExp]";
    }, F = function(a) {
      return c.call(a) == "[object Boolean]";
    }, L = function(a) {
      return a = a - 0, a === a;
    }, w = function(a, l) {
      var y = l && "process" in l ? l.process : l;
      return typeof y != "function" ? a : function(b, g) {
        return y(b, a, g);
      };
    }, B = {
      camelize: o,
      decamelize: v,
      pascalize: u,
      depascalize: v,
      camelizeKeys: function(a, l) {
        return r(w(o, l), a);
      },
      decamelizeKeys: function(a, l) {
        return r(w(v, l), a, l);
      },
      pascalizeKeys: function(a, l) {
        return r(w(u, l), a);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = B : t.humps = B;
  })(X);
})(C);
var Y = C.exports, ee = ["class", "style"];
function te(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), o = Y.camelize(r.slice(0, n)), u = r.slice(n + 1).trim();
    return t[o] = u, t;
  }, {});
}
function re(e) {
  return e.split(/\s+/).reduce(function(t, r) {
    return t[r] = !0, t;
  }, {});
}
function j(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(s) {
    return j(s);
  }), o = Object.keys(e.attributes || {}).reduce(function(s, p) {
    var f = e.attributes[p];
    switch (p) {
      case "class":
        s.class = re(f);
        break;
      case "style":
        s.style = te(f);
        break;
      default:
        s.attrs[p] = f;
    }
    return s;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var u = r.style, v = u === void 0 ? {} : u, c = H(r, ee);
  return k(e.tag, m(m(m({}, t), {}, {
    class: o.class,
    style: m(m({}, o.style), v)
  }, o.attrs), c), n);
}
var K = !1;
try {
  K = process.env.NODE_ENV === "production";
} catch {
}
function ne() {
  if (!K && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function N(e) {
  if (e && x(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (O.icon)
    return O.icon(e);
  if (e === null)
    return null;
  if (x(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var oe = _({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    // the rotateBy property is only supported in version 7.0.0 and later
    rotateBy: {
      type: Boolean,
      default: !1
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    },
    // the widthAuto property is only supported in version 7.0.0 and later
    widthAuto: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, r) {
    var n = r.attrs, o = d(function() {
      return N(t.icon);
    }), u = d(function() {
      return h("classes", Q(t));
    }), v = d(function() {
      return h("transform", typeof t.transform == "string" ? O.transform(t.transform) : t.transform);
    }), c = d(function() {
      return h("mask", N(t.mask));
    }), s = d(function() {
      var f = m(m(m(m({}, u.value), v.value), c.value), {}, {
        symbol: t.symbol,
        maskId: t.maskId
      });
      return f.title = t.title, f.titleId = t.titleId, E(o.value, f);
    });
    $(s, function(f) {
      if (!f)
        return ne("Could not find one or more icon(s)", o.value, c.value);
    }, {
      immediate: !0
    });
    var p = d(function() {
      return s.value ? j(s.value.abstract[0], {}, n) : null;
    });
    return function() {
      return p.value;
    };
  }
});
_({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, r) {
    var n = r.slots, o = T.familyPrefix, u = d(function() {
      return ["".concat(o, "-layers")].concat(P(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return k("div", {
        class: u.value
      }, n.default ? n.default() : []);
    };
  }
});
_({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, r) {
    var n = r.attrs, o = T.familyPrefix, u = d(function() {
      return h("classes", [].concat(P(t.counter ? ["".concat(o, "-layers-counter")] : []), P(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), v = d(function() {
      return h("transform", typeof t.transform == "string" ? O.transform(t.transform) : t.transform);
    }), c = d(function() {
      var p = R(t.value.toString(), m(m({}, v.value), u.value)), f = p.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), s = d(function() {
      return j(c.value, {}, n);
    });
    return function() {
      return s.value;
    };
  }
});
export {
  oe as FontAwesomeIcon
};
//# sourceMappingURL=index.es.js.map
