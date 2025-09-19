import{I as t}from"./Icon-CrGnHcSg.js";import{T as e,a as r,b as s,c as o}from"./Tile-vZUZKJ4R.js";import{B as a,a as i}from"./Banner-CiGwWJXp.js";const E=l=>`
<div style="display: flex; row-gap: 16px; flex-direction: column">
		<${l}
			:additional-text="additionalText"
			:color="color"
			:eyebrow-ellipsis="eyebrowEllipsis"
			:eyebrow-text="eyebrowText"
			:icon-left="ICONS[iconLeft]"
			:icon-right="ICONS[iconRight]"
			:interactive="interactive"
			:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
			:state="state"
			:text-ellipsis="textEllipsis"
			:text="text"
			:border-color="borderColor"
			:compact-layout="compactLayout"
		/>
		<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja koloru komponentu z kolorem bordera jest niezgodna z design systemem!" v-if="borderColor && !allowedColorsToBorderColorsMap[color].includes(borderColor)" />
</div>
`,R=()=>({ICONS:Object.freeze(t),BANNER_COLORS:Object.freeze(i),allowedColorsToBorderColorsMap:{[o.NEUTRAL]:[e.NEUTRAL,e.NEUTRAL_WEAK,e.PRIMARY,e.PRIMARY_WEAK],[o.NEUTRAL_WEAK]:[e.NEUTRAL,e.NEUTRAL_WEAK,e.PRIMARY,e.PRIMARY_WEAK],[o.PRIMARY]:[e.PRIMARY,e.PRIMARY_WEAK],[o.SUCCESS]:[e.SUCCESS,e.SUCCESS_WEAK],[o.FAIL]:[e.FAIL,e.FAIL_WEAK],[o.DANGER]:[e.DANGER,e.DANGER_WEAK],[o.WARNING]:[e.WARNING,e.WARNING_WEAK],[o.INFO]:[e.INFO,e.INFO_WEAK]}}),p={DsBanner:a},N={interactive:!0,color:o.NEUTRAL,borderColor:null,iconLeft:null,iconRight:null,eyebrowText:"this is an eyebrowText text",eyebrowEllipsis:!0,isEyebrowTextUppercase:!1,text:"this is a text text",textEllipsis:!0,additionalText:"",state:s.DEFAULT,compactLayout:r.DEFAULT},b={iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},color:{control:"select",options:[...Object.values(o)]},borderColor:{control:"select",options:[null,...Object.values(e)]},state:{control:"select",options:[...Object.values(s)]},compactLayout:{control:"select",options:[...Object.values(r)]}};export{b as a,N as b,p as c,R as d,E as t};
