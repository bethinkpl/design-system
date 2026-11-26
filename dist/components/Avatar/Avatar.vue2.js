import { defineComponent as O, computed as c, createElementBlock as u, openBlock as n, normalizeClass as k, unref as e, createElementVNode as G, createCommentVNode as M, normalizeStyle as V, toDisplayString as h, createBlock as p, withCtx as v, createVNode as I, createSlots as w, renderSlot as K } from "vue";
import { AVATAR_SIZES as a, AVATAR_ACCESS_STATUSES as r, AVATAR_ACTIVITY_STATUSES as C } from "./Avatar.consts.js";
import T from "../Badge/Badge.vue.js";
import { BADGE_COLORS as l, BADGE_SIZES as s, BADGE_ELEVATIONS as f } from "../Badge/Badge.consts.js";
import $ from "../Tooltip/Tooltip.vue.js";
import { TOOLTIP_PLACEMENTS as F } from "../Tooltip/Tooltip.consts.js";
import { ICONS as m } from "../Icons/Icon/Icon.consts.js";
const H = ["src", "alt"], Y = {
  key: 1,
  class: "ds-avatar__initials"
}, P = {
  key: 0,
  class: "ds-avatar__activityStatus"
}, W = {
  key: 1,
  class: "ds-avatar__accessStatus"
}, et = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    username: {},
    avatarUrl: {},
    size: { default: () => a.X_SMALL },
    activityStatus: {},
    accessStatus: {},
    teamMemberImageUrl: {},
    activityStatusTooltip: {}
  },
  setup(i) {
    const { initials: y, initialBackgroundColor: U } = X(), { accessStatusColor: g, accessStatusIcon: _, accessStatusSize: z, accessStatusImage: R } = D(), { activityStatusColor: b, activityStatusSize: B } = N();
    function X() {
      const t = [
        "#1abc9c",
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#34495e",
        "#16a085",
        "#27ae60",
        "#2980b9",
        "#8e44ad",
        "#2c3e50",
        "#f1c40f",
        "#e67e22",
        "#e74c3c",
        "#f39c12",
        "#d35400",
        "#c0392b"
      ];
      function o(A) {
        const [d, E] = A.split(/\s+/);
        return d && E ? `${d[0]}${E[0]}`.toUpperCase() : d.substring(0, 2).toUpperCase();
      }
      const S = c(() => {
        if (i.avatarUrl)
          return;
        const A = (i.username.charCodeAt(0) - 65) % 16;
        return t[A];
      });
      return { initials: c(() => o(i.username)), initialBackgroundColor: S };
    }
    function D() {
      const t = c(() => {
        switch (i.accessStatus) {
          case r.ACTIVE:
            return l.SUCCESS;
          case r.INACTIVE:
          case r.AWAITING:
            return l.NEUTRAL;
          case r.BLOCKED:
            return l.DANGER;
          default:
            return;
        }
      }), o = c(() => {
        switch (i.accessStatus) {
          case r.ACTIVE:
            return m.FA_UNLOCK_KEYHOLE;
          case r.BLOCKED:
          case r.INACTIVE:
            return m.FA_LOCK_KEYHOLE;
          case r.AWAITING:
            return m.FA_HOURGLASS_START;
          default:
            return;
        }
      }), S = c(() => {
        switch (i.size) {
          case a.XX_SMALL:
            return s.SMALL;
          case a.X_SMALL:
            return s.SMALL;
          case a.SMALL:
            return s.SMALL;
          case a.MEDIUM:
            return s.MEDIUM;
          case a.LARGE:
            return s.MEDIUM;
          case a.X_LARGE:
          default:
            return s.X_LARGE;
        }
      }), L = c(() => {
        if (i.accessStatus === r.TEAM_MEMBER)
          return i.teamMemberImageUrl;
      });
      return { accessStatusColor: t, accessStatusIcon: o, accessStatusSize: S, accessStatusImage: L };
    }
    function N() {
      const t = c(() => {
        switch (i.activityStatus) {
          case C.ACTIVE:
            return l.SUCCESS;
          default:
          case C.INACTIVE:
            return l.NEUTRAL;
        }
      }), o = c(() => {
        switch (i.size) {
          case a.XX_SMALL:
            return s.X_SMALL;
          case a.X_SMALL:
            return s.SMALL;
          case a.SMALL:
            return s.SMALL;
          case a.MEDIUM:
            return s.MEDIUM;
          case a.LARGE:
            return s.MEDIUM;
          case a.X_LARGE:
          default:
            return s.MEDIUM;
        }
      });
      return { activityStatusColor: t, activityStatusSize: o };
    }
    return (t, o) => (n(), u("div", {
      class: k(["ds-avatar", {
        "-ds-xx-small": t.size === e(a).XX_SMALL,
        "-ds-x-small": t.size === e(a).X_SMALL,
        "-ds-small": t.size === e(a).SMALL,
        "-ds-medium": t.size === e(a).MEDIUM,
        "-ds-large": t.size === e(a).LARGE,
        "-ds-x-large": t.size === e(a).X_LARGE
      }])
    }, [
      G("div", {
        class: "ds-avatar__content",
        style: V({
          backgroundColor: e(U)
        })
      }, [
        t.avatarUrl ? (n(), u("img", {
          key: 0,
          src: t.avatarUrl,
          alt: t.username,
          class: "ds-avatar__image"
        }, null, 8, H)) : (n(), u("span", Y, h(e(y)), 1))
      ], 4),
      t.activityStatus ? (n(), u("div", P, [
        (n(), p(e($), {
          key: t.activityStatusTooltip,
          class: "ds-avatar__activityStatusTooltip",
          text: t.activityStatusTooltip,
          "is-disabled": !t.activityStatusTooltip,
          "is-pointer-visible": "",
          placement: e(F).BOTTOM,
          "is-hidden-on-mobile": !1
        }, {
          default: v(() => [
            I(e(T), {
              color: e(b),
              elevation: e(f).X_SMALL,
              size: e(B)
            }, null, 8, ["color", "elevation", "size"])
          ]),
          _: 1
        }, 8, ["text", "is-disabled", "placement"]))
      ])) : M("", !0),
      t.accessStatus ? (n(), u("div", W, [
        I(e(T), {
          color: e(g),
          elevation: e(f).SMALL,
          icon: e(_),
          size: e(z),
          "image-url": e(R)
        }, w({ _: 2 }, [
          t.$slots.teamMemberImage && t.accessStatus === e(r).TEAM_MEMBER ? {
            name: "image",
            fn: v(() => [
              K(t.$slots, "teamMemberImage", {}, void 0, !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["color", "elevation", "icon", "size", "image-url"])
      ])) : M("", !0)
    ], 2));
  }
});
export {
  et as default
};
//# sourceMappingURL=Avatar.vue2.js.map
