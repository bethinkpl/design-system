import{I as e}from"./Icon-ABi09a6P.js";import{T as t,a as o}from"./Tile-DTQwVtNE.js";const r=i=>`
		<${i}
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
			:has-border="hasBorder"
		/>`,a=()=>({ICONS:Object.freeze(e)}),n={interactive:!0,color:t.NEUTRAL,hasBorder:!1,iconLeft:null,iconRight:null,isIconRightHiddenOnMobile:!1,eyebrowText:"this is an eyebrowText text",eyebrowEllipsis:!0,isEyebrowTextUppercase:!1,text:"this is a text text",textEllipsis:!0,additionalText:"",state:o.DEFAULT},c={iconLeft:{control:"select",options:[null,...Object.keys(e)]},iconRight:{control:"select",options:[null,...Object.keys(e)]},color:{control:"select",options:[...Object.values(t)]},state:{control:"select",options:[...Object.values(o)]}};export{c as a,n as b,a as d,r as t};
