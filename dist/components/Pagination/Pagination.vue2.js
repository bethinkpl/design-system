import { PAGINATION_DEFAULT_ITEMS_PER_PAGE as m } from "./Pagination.consts.js";
import l from "../Buttons/IconButton/IconButton.vue.js";
import c from "../Icons/Icon/Icon.vue.js";
import g from "../Dropdown/Dropdown.vue.js";
/* empty css                        */
import { DROPDOWN_RADIUSES as h, DROPDOWN_ALIGNS as u } from "../Dropdown/Dropdown.consts.js";
import { useLegacyI18n as P } from "../../composables/useLegacyI18n.js";
import I from "../SelectList/SelectList.vue.js";
import f from "../SelectList/SelectListItem/SelectListItem.vue.js";
import { defineComponent as O } from "vue";
import { ICON_SIZES as p, ICONS as S } from "../Icons/Icon/Icon.consts.js";
import { ICON_BUTTON_STATES as _, ICON_BUTTON_COLORS as d, ICON_BUTTON_SIZES as N } from "../Buttons/IconButton/IconButton.consts.js";
const T = 7, n = "ellipsis", s = 1, j = O({
  name: "Pagination",
  components: { IconButton: l, Dropdown: g, SelectListItem: f, SelectList: I, DsIcon: c },
  props: {
    currentPage: {
      type: Number,
      default: s,
      validator(t) {
        return t > 0;
      }
    },
    forceCompact: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isCentered: {
      type: Boolean,
      default: !1
    },
    itemsPerPage: {
      type: Number,
      default: m,
      validator(t) {
        return t > 0;
      }
    },
    itemsTotalAmount: {
      type: Number,
      required: !0
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["change-page"],
  setup() {
    const { t } = P();
    return { t };
  },
  data() {
    return {
      DROPDOWN_ALIGNS: Object.freeze(u),
      DROPDOWN_RADIUSES: Object.freeze(h),
      ICON_BUTTON_SIZES: Object.freeze(N),
      ICON_BUTTON_COLORS: Object.freeze(d),
      ICON_BUTTON_STATES: Object.freeze(_),
      ICONS: Object.freeze(S),
      ICON_SIZES: Object.freeze(p),
      FIRST_PAGE_NUMBER: s
    };
  },
  computed: {
    lastPage() {
      return Math.ceil(this.itemsTotalAmount / this.itemsPerPage) || s;
    },
    navigationItems() {
      let t;
      this.lastPage <= T ? t = 7 : t = this.currentPage > 4 && this.currentPage < this.lastPage - 3 ? 2 : 4;
      const e = {
        start: Math.round(this.currentPage - t / 2),
        end: Math.round(this.currentPage + t / 2)
      };
      (e.start - 1 === 1 || e.end + 1 === this.lastPage) && (e.start += 1, e.end += 1);
      let a = this.currentPage > t ? this.getRange(
        Math.min(e.start, this.lastPage - t),
        Math.min(e.end, this.lastPage)
      ) : this.getRange(1, Math.min(this.lastPage, t + 1));
      const r = (i, o) => a.length + 1 !== this.lastPage ? o : [i];
      return a[0] !== 1 && (a = r(1, [1, n]).concat(a)), a[a.length - 1] < this.lastPage && (a = a.concat(
        r(this.lastPage, [n, this.lastPage])
      )), a;
    },
    navigationItemsForDropdown() {
      return this.getRange(s, this.lastPage).map((t) => {
        const e = (t - 1) * this.itemsPerPage, a = t < this.lastPage ? e + this.itemsPerPage : this.itemsTotalAmount;
        return {
          label: `${t} (${e + 1} - ${a})`,
          value: t
        };
      });
    }
  },
  methods: {
    ellipsisAsSecond(t) {
      return t === 1;
    },
    getRange(t, e) {
      return Array(e - t + 1).fill(null).map((a, r) => r + t);
    },
    changePage(t) {
      this.currentPage !== t && this.$emit("change-page", t);
    },
    isPage(t) {
      return typeof t == "number";
    },
    onInputValueConfirmed(t) {
      const e = +t.target.value;
      this.changePage(e);
    },
    onDropdownClick(t, e) {
      this.changePage(t), e();
    }
  }
});
export {
  j as default
};
//# sourceMappingURL=Pagination.vue2.js.map
