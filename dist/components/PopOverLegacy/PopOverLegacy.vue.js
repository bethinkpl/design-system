import E from "vue-popperjs";
/* empty css                                                  */
import { POP_OVER_LEGACY_SIZES as s, POP_OVER_LEGACY_COLORS as l, POP_OVER_LEGACY_PLACEMENTS as c, POP_OVER_LEGACY_TRIGGER_ACTIONS as i } from "./PopOverLegacy.consts.js";
import S from "../Buttons/Button/Button.vue.js";
import { BUTTON_SIZES as g, BUTTON_TYPES as T } from "../Buttons/Button/Button.consts.js";
import { defineComponent as b, resolveComponent as O, createElementBlock as o, openBlock as t, renderSlot as n, createBlock as f, withCtx as a, createElementVNode as d, normalizeClass as m, createCommentVNode as r, toDisplayString as p, createTextVNode as L } from "vue";
/* empty css                   */
import P from "../../_virtual/_plugin-vue_export-helper.js";
const v = b({
  name: "PopOverLegacy",
  components: {
    VuePopper: E,
    DsButton: S
  },
  props: {
    boundariesSelector: {
      type: String,
      default: null
    },
    triggerAction: {
      type: String,
      default: i.CLICK,
      validator(e) {
        return Object.values(i).includes(e);
      }
    },
    placement: {
      type: String,
      default: c.BOTTOM,
      validator(e) {
        return Object.values(c).includes(e);
      }
    },
    forceShow: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: l.DEFAULT,
      validator(e) {
        return Object.values(l).includes(e);
      }
    },
    titleText: {
      type: String,
      default: null
    },
    subtitleText: {
      type: String,
      default: null
    },
    buttonText: {
      type: String,
      default: null
    },
    headerImageUrl: {
      type: String,
      default: null
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    modifiers: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: String,
      default: s.SMALL,
      validator(e) {
        return Object.values(s).includes(e);
      }
    },
    maxHeight: {
      type: Boolean,
      default: !1
    },
    isPointerVisible: {
      type: Boolean,
      default: !0
    },
    rootClass: {
      type: String,
      default: ""
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["button-click"],
  data() {
    return {
      POP_OVER_LEGACY_COLORS: Object.freeze(l),
      POP_OVER_LEGACY_SIZES: Object.freeze(s),
      POP_OVER_LEGACY_TRIGGER_ACTIONS: Object.freeze(i),
      BUTTON_TYPES: Object.freeze(T),
      BUTTON_SIZES: Object.freeze(g),
      key: 1
    };
  },
  watch: {
    triggerAction() {
      this.updateKey();
    },
    placement() {
      this.updateKey();
    },
    boundariesSelector() {
      this.updateKey();
    }
  },
  methods: {
    close() {
      this.$refs.popper.doClose();
    },
    updateKey() {
      this.key++;
    }
  }
}), C = ["src"], A = { class: "ds-popOverLegacy__content" }, R = {
  key: 0,
  class: "ds-popOverLegacy__title"
}, h = {
  key: 1,
  class: "ds-popOverLegacy__subtitle"
};
function I(e, u, G, V, B, N) {
  const y = O("ds-button"), _ = O("vue-popper");
  return t(), o("span", null, [
    e.triggerAction === e.POP_OVER_LEGACY_TRIGGER_ACTIONS.NONE ? n(e.$slots, "reference", { key: 0 }, void 0, !0) : (t(), f(_, {
      ref: "popper",
      key: e.key,
      "boundaries-selector": e.boundariesSelector,
      "force-show": e.forceShow,
      options: { placement: e.placement, modifiers: e.modifiers },
      trigger: e.triggerAction,
      "delay-on-mouse-over": 300,
      "delay-on-mouse-out": 300,
      "append-to-body": e.appendToBody,
      "visible-arrow": e.isPointerVisible,
      "root-class": e.rootClass
    }, {
      reference: a(() => [
        n(e.$slots, "reference", {}, void 0, !0)
      ]),
      default: a(() => [
        d("div", {
          class: m(["popper ds-popOverLegacy", {
            "-ds-color-neutral": e.color === e.POP_OVER_LEGACY_COLORS.NEUTRAL,
            "-ds-small": e.size === e.POP_OVER_LEGACY_SIZES.SMALL,
            "-ds-medium": e.size === e.POP_OVER_LEGACY_SIZES.MEDIUM,
            "-ds-visible-arrow": e.isPointerVisible
          }])
        }, [
          e.headerImageUrl ? (t(), o("img", {
            key: 0,
            class: "ds-popOverLegacy__image",
            src: e.headerImageUrl,
            alt: ""
          }, null, 8, C)) : r("", !0),
          d("div", A, [
            e.titleText ? (t(), o("div", R, p(e.titleText), 1)) : r("", !0),
            e.subtitleText ? (t(), o("div", h, p(e.subtitleText), 1)) : r("", !0),
            d("div", {
              class: m(["ds-popOverLegacy__contentSlot", { "-ds-maxHeight": e.maxHeight }])
            }, [
              n(e.$slots, "default", { close: e.close }, void 0, !0)
            ], 2)
          ]),
          e.buttonText ? (t(), f(y, {
            key: 1,
            class: "ds-popOverLegacy__button",
            type: e.BUTTON_TYPES.TEXT,
            size: e.BUTTON_SIZES.LARGE,
            onClick: u[0] || (u[0] = (k) => e.$emit("button-click"))
          }, {
            default: a(() => [
              L(p(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["type", "size"])) : r("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["boundaries-selector", "force-show", "options", "trigger", "append-to-body", "visible-arrow", "root-class"]))
  ]);
}
const K = /* @__PURE__ */ P(v, [["render", I], ["__scopeId", "data-v-b3dc8e81"]]);
export {
  K as default
};
//# sourceMappingURL=PopOverLegacy.vue.js.map
