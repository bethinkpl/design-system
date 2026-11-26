import { defineComponent as s } from "vue";
import o from "../../Icons/Icon/Icon.vue.js";
import { ICONS as t, ICON_SIZES as n } from "../../Icons/Icon/Icon.consts.js";
import { COURSE_BLOCKADE_ACCESS_STATUS as e } from "../../../consts/user.js";
import { useLegacyI18n as u } from "../../../composables/useLegacyI18n.js";
const S = s({
  name: "BlockadeStatus",
  components: {
    Icon: o
  },
  props: {
    status: {
      type: String,
      required: !0
    }
  },
  setup() {
    const { t: r } = u();
    return { t: r };
  },
  data() {
    return {
      ICONS: Object.freeze(t),
      ICON_SIZES: Object.freeze(n)
    };
  },
  computed: {
    icon() {
      return this.status === e.ACTIVE ? t.FA_LOCK_KEYHOLE : t.FA_UNLOCK_KEYHOLE;
    },
    statusClass() {
      return this.status === e.ACTIVE ? "-ds-active" : "";
    },
    text() {
      return this.status === e.ACTIVE ? this.t("ds.blockadeStatus.active") : this.t("ds.blockadeStatus.ended");
    }
  }
});
export {
  S as default
};
//# sourceMappingURL=BlockadeStatus.vue2.js.map
