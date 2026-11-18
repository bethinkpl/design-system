import { defineComponent as D, createPropsRestProxy as g, createBlock as l, openBlock as u, unref as t, withCtx as r, createElementVNode as a, createVNode as s, createCommentVNode as I, renderSlot as i, mergeProps as p, createSlots as d } from "vue";
import f from "../../Avatar/Avatar.vue.js";
import { AVATAR_SIZES as _ } from "../../Avatar/Avatar.consts.js";
import c from "../../Dropdown/Dropdown.vue.js";
/* empty css                           */
import { DROPDOWN_RADIUSES as v, DROPDOWN_ALIGNS as L } from "../../Dropdown/Dropdown.consts.js";
import M from "../../SelectList/SelectList.vue.js";
import A from "../../SelectList/SelectListItemContainer/SelectListItemContainer.vue.js";
import E from "../../SelectList/SelectListItemDivider/SelectListItemDivider.vue.js";
import $ from "../../TextGroup/TextGroup.vue.js";
import { TEXT_GROUP_SIZES as b } from "../../TextGroup/TextGroup.consts.js";
const w = { class: "ds-userDropdown__panel" }, N = { class: "ds-userDropdown__userInfo" }, h = { class: "ds-userDropdown__userInfoText" }, V = /* @__PURE__ */ D({
  __name: "UserDropdown",
  props: {
    avatarUrl: {},
    activityStatus: {},
    accessStatus: {},
    teamMemberImageUrl: {},
    activityStatusTooltip: {},
    username: {},
    email: { default: null }
  },
  emits: ["show", "hide"],
  setup(S) {
    const m = g(S, ["username", "email"]);
    return (e, n) => (u(), l(t(c), {
      align: t(L).END,
      radius: t(v).SINGLE_EDGE,
      "onUpdate:open": n[0] || (n[0] = (o) => o ? e.$emit("show") : e.$emit("hide"))
    }, {
      reference: r(() => [
        s(t(f), p(m, {
          class: "ds-userDropdown__trigger",
          username: e.username,
          size: t(_).X_SMALL
        }), d({ _: 2 }, [
          e.$slots.teamMemberImage ? {
            name: "teamMemberImage",
            fn: r(() => [
              i(e.$slots, "teamMemberImage", {}, void 0, !0)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["username", "size"])
      ]),
      default: r(({ close: o }) => [
        a("div", w, [
          s(M, null, {
            default: r(() => [
              s(A, null, {
                default: r(() => [
                  a("div", N, [
                    s(t(f), p(m, {
                      username: e.username,
                      size: t(_).XX_SMALL
                    }), d({ _: 2 }, [
                      e.$slots.teamMemberImage ? {
                        name: "teamMemberImage",
                        fn: r(() => [
                          i(e.$slots, "teamMemberImage", {}, void 0, !0)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["username", "size"]),
                    a("div", h, [
                      s(t($), {
                        size: t(b).X_SMALL,
                        "main-text": e.username,
                        "main-text-ellipsis": "",
                        "supporting-text": e.email,
                        "supporting-text-ellipsis": "",
                        "is-supporting-text-tooltip-enabled": "",
                        "is-interactive": !1
                      }, null, 8, ["size", "main-text", "supporting-text"])
                    ])
                  ])
                ]),
                _: 3
              }),
              e.$slots.default ? (u(), l(E, { key: 0 })) : I("", !0),
              i(e.$slots, "default", { close: o }, void 0, !0)
            ]),
            _: 2
          }, 1024)
        ])
      ]),
      _: 3
    }, 8, ["align", "radius"]));
  }
});
export {
  V as default
};
//# sourceMappingURL=UserDropdown.vue2.js.map
