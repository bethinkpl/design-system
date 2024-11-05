import{I as e}from"./Icon-CQ850_cO.js";import{T as t,a as i}from"./Tile-ByPW4b0z.js";const n=o=>`
		<${o}
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
		/>`,c=()=>({ICONS:Object.freeze(e)}),r={interactive:!0,iconLeft:null,iconRight:null,isIconRightHiddenOnMobile:!1,text:"this is a text text",eyebrowText:"this is an eyebrowText text",additionalText:"",isEyebrowTextUppercase:!1,state:t.DEFAULT,eyebrowEllipsis:!0,textEllipsis:!0,color:i.NEUTRAL},a={iconLeft:{control:"select",options:[null,...Object.keys(e)]},iconRight:{control:"select",options:[null,...Object.keys(e)]},color:{control:"select",options:[...Object.values(i)]},state:{control:"select",options:[...Object.values(t)]}};export{a,r as b,c as d,n as t};
