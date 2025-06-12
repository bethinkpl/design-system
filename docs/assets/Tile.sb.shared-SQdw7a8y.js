import{I as t}from"./Icon-DDMXnkMa.js";import{T as e,a as r,b as o}from"./Tile-D-NalJSe.js";import{B as l,a as i}from"./Banner-Dh0sf-9z.js";const R=s=>`
<div style="display: flex; row-gap: 16px; flex-direction: column">
		<${s}
			:additional-text="additionalText"
			:color="color"
			:eyebrow-ellipsis="eyebrowEllipsis"
			:eyebrow-text="eyebrowText"
			:icon-left="ICONS[iconLeft]"
			:icon-right="ICONS[iconRight]"
			:is-icon-right-hidden-on-mobile="isIconRightHiddenOnMobile"
			:interactive="interactive"
			:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
			:state="state"
			:text-ellipsis="textEllipsis"
			:text="text"
			:border-color="borderColor"
		/>
		<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja koloru komponentu z kolorem bordera jest niezgodna z design systemem!" v-if="borderColor && !allowedColorsToBorderColorsMap[color].includes(borderColor)" />
</div>
`,A=()=>({ICONS:Object.freeze(t),BANNER_COLORS:Object.freeze(i),allowedColorsToBorderColorsMap:{[o.NEUTRAL]:[e.NEUTRAL,e.NEUTRAL_WEAK,e.PRIMARY,e.PRIMARY_WEAK],[o.NEUTRAL_WEAK]:[e.NEUTRAL,e.NEUTRAL_WEAK,e.PRIMARY,e.PRIMARY_WEAK],[o.PRIMARY]:[e.PRIMARY,e.PRIMARY_WEAK],[o.SUCCESS]:[e.SUCCESS,e.SUCCESS_WEAK],[o.FAIL]:[e.FAIL,e.FAIL_WEAK],[o.DANGER]:[e.DANGER,e.DANGER_WEAK],[o.WARNING]:[e.WARNING,e.WARNING_WEAK],[o.INFO]:[e.INFO,e.INFO_WEAK]}}),E={DsBanner:l},d={interactive:!0,color:o.NEUTRAL,borderColor:null,iconLeft:null,iconRight:null,isIconRightHiddenOnMobile:!1,eyebrowText:"this is an eyebrowText text",eyebrowEllipsis:!0,isEyebrowTextUppercase:!1,text:"this is a text text",textEllipsis:!0,additionalText:"",state:r.DEFAULT},b={iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},color:{control:"select",options:[...Object.values(o)]},borderColor:{control:"select",options:[null,...Object.values(e)]},state:{control:"select",options:[...Object.values(r)]}};export{b as a,d as b,E as c,A as d,R as t};
