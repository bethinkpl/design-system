import { watch as r, toValue as i } from "vue";
const o = "ds-gradient-magic-icon", a = "ds-gradient-magic-icon-disabled";
function s() {
  typeof document != "undefined" && (document.getElementById(o) || document.body.insertAdjacentHTML(
    "beforeend",
    `<svg aria-hidden="true" width="0" height="0" style="position:absolute">
			<defs>
				<linearGradient id="${o}" x1="0" y1="0" x2="1" y2="0.17">
					<stop offset="7%" style="stop-color:var(--color-magic-gradient-1)"/>
					<stop offset="36%" style="stop-color:var(--color-magic-gradient-2)"/>
					<stop offset="65%" style="stop-color:var(--color-magic-gradient-3)"/>
					<stop offset="95%" style="stop-color:var(--color-magic-gradient-4)"/>
				</linearGradient>
				<linearGradient id="${a}" x1="0" y1="0" x2="1" y2="0.17">
					<stop offset="7.16%" style="stop-color:rgba(var(--color-magic-gradient-1-rgb), 0.3)"/>
					<stop offset="36.18%" style="stop-color:rgba(var(--color-magic-gradient-2-rgb), 0.3)"/>
					<stop offset="65.19%" style="stop-color:rgba(var(--color-magic-gradient-3-rgb), 0.3)"/>
					<stop offset="95.08%" style="stop-color:rgba(var(--color-magic-gradient-4-rgb), 0.3)"/>
				</linearGradient>
			</defs>
		</svg>`
  ));
}
function c(t) {
  r(
    () => i(t),
    (e) => {
      e && s();
    },
    { immediate: !0 }
  );
}
export {
  a as GRADIENT_MAGIC_ICON_DISABLED_ID,
  o as GRADIENT_MAGIC_ICON_ID,
  c as useMagicGradient
};
//# sourceMappingURL=useMagicGradient.js.map
