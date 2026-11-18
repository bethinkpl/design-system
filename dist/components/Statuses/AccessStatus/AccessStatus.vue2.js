import { defineComponent as r } from "vue";
import u from "../../Icons/Icon/Icon.vue.js";
import { ICONS as s, ICON_SIZES as a } from "../../Icons/Icon/Icon.consts.js";
import { COURSE_ACCESS_STATUS as t } from "../../../consts/user.js";
import { useLegacyI18n as i } from "../../../composables/useLegacyI18n.js";
const f = r({
  name: "AccessStatus",
  components: {
    Icon: u
  },
  props: {
    status: {
      type: String,
      required: !0
    }
  },
  setup() {
    const { t: e } = i();
    return {
      t: e
    };
  },
  data() {
    return {
      ICONS: Object.freeze(s),
      ICON_SIZES: Object.freeze(a)
    };
  },
  computed: {
    icon() {
      return this.status === t.ACTIVE ? s.FA_UNLOCK_KEYHOLE : this.status === t.AWAITING ? s.FA_HOURGLASS_START : s.FA_LOCK_KEYHOLE;
    },
    statusClass() {
      return this.status === t.ACTIVE ? "-ds-active" : this.status === t.SUSPENDED ? "-ds-suspended" : "";
    },
    text() {
      return this.status === t.ACTIVE ? this.t("ds.accessStatus.status.active") : this.status === t.AWAITING ? this.t("ds.accessStatus.status.awaiting") : this.status === t.SUSPENDED ? this.t("ds.accessStatus.status.suspended") : this.status === t.DEACTIVATED ? this.t("ds.accessStatus.status.deactivated") : this.t("ds.accessStatus.status.ended");
    }
  }
});
export {
  f as default
};
//# sourceMappingURL=AccessStatus.vue2.js.map
