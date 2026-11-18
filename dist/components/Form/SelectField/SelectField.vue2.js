import { defineComponent as H, mergeModels as F, createPropsRestProxy as U, useSlots as q, useModel as G, computed as c, createBlock as r, openBlock as o, unref as e, normalizeProps as w, guardReactiveProps as W, createSlots as X, withCtx as t, createVNode as s, isRef as Z, normalizeClass as j, createCommentVNode as y, normalizeStyle as J, createElementBlock as f, Fragment as S, renderList as h, renderSlot as b } from "vue";
import { SelectRoot as K, SelectTrigger as Q, SelectValue as Y, SelectIcon as x, SelectPortal as ee, SelectContent as le, SelectViewport as te, SelectSeparator as se, SelectGroup as oe, SelectLabel as ae } from "reka-ui";
import ie from "../FormField/FormField.vue.js";
import { FORM_FIELD_STATES as L } from "../FormField/FormField.consts.js";
import { extractFormFieldProps as re } from "../FormField/FormField.utils.js";
import I from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as k, ICONS as ne } from "../../Icons/Icon/Icon.consts.js";
import de from "../../SelectList/SelectList.vue.js";
import ue from "../../SelectList/SelectListItemDivider/SelectListItemDivider.vue.js";
import ce from "../../SelectList/SelectListSectionTitle/SelectListSectionTitle.vue.js";
import V from "./SelectFieldOption.vue.js";
/* empty css                       */
import { toCssLength as me, normalizeOptions as pe, assertOptionValues as fe } from "./SelectField.utils.js";
import { useSelectFieldWithinForm as Se } from "./useSelectFieldWithinForm.js";
const Ce = /* @__PURE__ */ H({
  __name: "SelectField",
  props: /* @__PURE__ */ F({
    options: {},
    placeholder: {},
    leftIcon: {},
    ariaLabel: {},
    maxHeight: {},
    name: {},
    autocomplete: {},
    isGroupLabelUppercase: { type: Boolean, default: !0 },
    label: {},
    state: {},
    hasRequiredIndicator: { type: Boolean },
    labelInfo: {},
    subLabel: {},
    fieldId: {},
    messageText: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ F(["open-change"], ["update:modelValue"]),
  setup(n, { emit: D }) {
    const O = U(n, ["options", "placeholder", "leftIcon", "ariaLabel", "maxHeight", "name", "autocomplete", "isGroupLabelUppercase"]), _ = q(), z = D, C = G(n, "modelValue"), { value: d, errors: R, onClose: M } = Se(() => n.name, C), { formFieldProps: m, isDisabled: v, hasMessage: P } = B(), { normalizedOptions: $ } = N(), A = c(() => {
      const l = me(n.maxHeight);
      return l ? { "--select-field-max-height": l } : void 0;
    });
    function E(l) {
      l || M(new Event("blur")), z("open-change", l);
    }
    function B() {
      const l = c(
        () => (
          // this is needed to avoid passing modelValue to FormField as prop
          re(O, R.value)
        )
      ), p = c(() => l.value.state === L.DISABLED), u = c(() => !!(l.value.messageText || _.message));
      return { formFieldProps: l, isDisabled: p, hasMessage: u };
    }
    function N() {
      const l = c(() => pe(n.options));
      return fe(l.value), { normalizedOptions: l };
    }
    return (l, p) => (o(), r(e(ie), w(W(e(m))), X({
      field: t(({ fieldId: u, messageId: T }) => [
        s(e(K), {
          modelValue: e(d),
          "onUpdate:modelValue": p[0] || (p[0] = (i) => Z(d) ? d.value = i : null),
          autocomplete: l.autocomplete,
          disabled: e(v),
          required: e(m).hasRequiredIndicator,
          "onUpdate:open": E
        }, {
          default: t(() => [
            s(e(Q), {
              id: u,
              "aria-describedby": e(P) ? T : void 0,
              "aria-label": e(m).label ? void 0 : l.ariaLabel,
              class: j([
                "ds-selectField__trigger",
                {
                  "-ds-error": e(m).state === e(L).ERROR,
                  "-ds-disabled": e(v)
                }
              ])
            }, {
              default: t(() => [
                l.leftIcon ? (o(), r(e(I), {
                  key: 0,
                  class: "ds-selectField__leftIcon",
                  icon: l.leftIcon,
                  size: e(k).X_SMALL
                }, null, 8, ["icon", "size"])) : y("", !0),
                s(e(Y), {
                  class: "ds-selectField__value",
                  placeholder: l.placeholder
                }, null, 8, ["placeholder"]),
                s(e(x), { "as-child": "" }, {
                  default: t(() => [
                    s(e(I), {
                      class: "ds-selectField__icon",
                      icon: e(ne).FA_CHEVRON_DOWN,
                      size: e(k).X_SMALL
                    }, null, 8, ["icon", "size"])
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["id", "aria-describedby", "aria-label", "class"]),
            s(e(ee), null, {
              default: t(() => [
                s(e(le), {
                  class: "ds-selectField__content",
                  position: "popper",
                  align: "start",
                  "side-offset": 4,
                  style: J(A.value)
                }, {
                  default: t(() => [
                    s(e(te), { "as-child": "" }, {
                      default: t(() => [
                        s(de, null, {
                          default: t(() => [
                            (o(!0), f(S, null, h(e($), (i, g) => (o(), f(S, { key: g }, [
                              g > 0 ? (o(), r(e(se), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: t(() => [
                                  s(ue)
                                ]),
                                _: 1
                              })) : y("", !0),
                              i.label ? (o(), r(e(oe), { key: 1 }, {
                                default: t(() => [
                                  s(e(ae), { "as-child": "" }, {
                                    default: t(() => [
                                      s(ce, {
                                        label: i.label,
                                        "is-uppercase": l.isGroupLabelUppercase
                                      }, null, 8, ["label", "is-uppercase"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  (o(!0), f(S, null, h(i.options, (a) => (o(), r(V, {
                                    key: a.value,
                                    option: a,
                                    "is-selected": a.value === e(d)
                                  }, null, 8, ["option", "is-selected"]))), 128))
                                ]),
                                _: 2
                              }, 1024)) : (o(!0), f(S, { key: 2 }, h(i.options, (a) => (o(), r(V, {
                                key: a.value,
                                option: a,
                                "is-selected": a.value === e(d)
                              }, null, 8, ["option", "is-selected"]))), 128))
                            ], 64))), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["style"])
              ]),
              _: 1
            })
          ]),
          _: 2
        }, 1032, ["modelValue", "autocomplete", "disabled", "required"])
      ]),
      _: 2
    }, [
      l.$slots.help ? {
        name: "help",
        fn: t(() => [
          b(l.$slots, "help", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      l.$slots.labelAside ? {
        name: "labelAside",
        fn: t(() => [
          b(l.$slots, "labelAside", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      l.$slots.message ? {
        name: "message",
        fn: t(({ messageId: u }) => [
          b(l.$slots, "message", { messageId: u }, void 0, !0)
        ]),
        key: "2"
      } : void 0,
      l.$slots.fieldStatus ? {
        name: "fieldStatus",
        fn: t(() => [
          b(l.$slots, "fieldStatus", {}, void 0, !0)
        ]),
        key: "3"
      } : void 0
    ]), 1040));
  }
});
export {
  Ce as default
};
//# sourceMappingURL=SelectField.vue2.js.map
