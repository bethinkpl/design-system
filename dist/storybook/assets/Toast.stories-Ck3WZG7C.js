import{D as z,b as n,c as D,a as U}from"./Button-BboP5Ffr.js";import{C as _}from"./Card-BImKj0EQ.js";import{d as k,t as S,c as P,g as A,j as w,e as l,l as j,n as L,r as b,o as p,a as y,b as T,m as h,k as g,h as O,f as V}from"./vue.esm-bundler-DjLn_Drf.js";import{I as s}from"./Icon-DI8g7n3G.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{w as $}from"./decorator-CSnIf-k5.js";import"./Divider-DSLZy8UN.js";import"./LoadingBar-crofxztr.js";import"./v4-BZawosSj.js";const c={SMALL:"small",MEDIUM:"medium"},r={NEUTRAL_HEAVY:"neutralHeavy",NEUTRAL_STRONG:"neutralStrong",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info"},u={LEFT:"left",CENTER:"center",RIGHT:"right"};function M(e){const t=window.getComputedStyle(e).borderLeftWidth,m=window.getComputedStyle(e).borderRightWidth,i=e.getBoundingClientRect(),d=i.left+parseInt(t,10),f=i.right-parseInt(m,10)-parseInt(t,10),a=i.width;return{left:{left:`${d}px`},right:{left:`${f}px`,transform:"translateX(-100%)"},center:{left:`${d+a/2}px`,transform:"translateX(-50%)"}}}const N=k({name:"Toast",components:{DsButton:z,DsCard:_},props:{size:{type:String,default:c.MEDIUM},position:{type:String,default:u.CENTER},boundariesSelector:{type:[String,HTMLElement],default:null},color:{type:String,default:r.INFO},footerPrimaryButtonText:{type:String,default:""},footerPrimaryButtonIcon:{type:Object,default:null,validator(e){return e==null||Object.values(s).includes(S(e))}},footerSecondaryButtonText:{type:String,default:""},footerSecondaryButtonIcon:{type:Object,default:null,validator(e){return e==null||Object.values(s).includes(S(e))}},isDisappearing:{type:Boolean,default:!0},disappearingTimeout:{type:String,default:"0",validator(e){return(e==="0"||!isNaN(parseInt(e,10)))&&parseInt(e,10)>=0}}},emits:{close:()=>!0,"primary-button-click":()=>!0,"secondary-button-click":()=>!0},data(){return{boundariesSelectorElement:null,boundariesSelectorElementResizeObserver:null,styles:{},BUTTON_COLORS:Object.freeze(n),BUTTON_RADIUSES:Object.freeze(D),BUTTON_TYPES:Object.freeze(U),TOAST_SIZES:Object.freeze(c),TOAST_POSITIONS:Object.freeze(u)}},computed:{buttonPrimaryColor(){return this.color===r.DANGER?n.NEUTRAL:n.PRIMARY},buttonSecondaryColor(){return this.color===r.DANGER?n.DANGER:n.NEUTRAL},toastPosition(){return`-ds-position-${this.position.toLowerCase()}`},toastSize(){return`-ds-size-${this.size.toLowerCase()}`}},mounted(){var e;this.setBoundariesSelectorElement(),this.calculateStyles(),(e=this.boundariesSelectorElementResizeObserver)==null||e.disconnect(),this.boundariesSelectorElementResizeObserver=new ResizeObserver(()=>{this.calculateStyles()}),this.boundariesSelectorElement?this.boundariesSelectorElementResizeObserver.observe(this.boundariesSelectorElement):this.boundariesSelectorElementResizeObserver.observe(document.querySelector("body")),this.isDisappearing&&this.disappearingTimeout!=="0"&&setTimeout(()=>this.$emit("close"),parseInt(this.disappearingTimeout,10)*1e3+100)},beforeUnmount(){this.boundariesSelectorElementResizeObserver.disconnect(),this.boundariesSelectorElementResizeObserver=null},updated(){const{right:e,left:t}=this.$el.getClientRects()[0];(parseInt(t,10)<0||e>document.documentElement.clientWidth)&&(this.styles={left:"50%",transform:"translateX(-50%)"})},methods:{calculateStyles(){this.boundariesSelectorElement?this.styles=M(this.boundariesSelectorElement)[this.position]:this.styles={}},setBoundariesSelectorElement(){typeof this.boundariesSelector=="string"?this.boundariesSelectorElement=document.querySelector(this.boundariesSelector)||null:this.boundariesSelector instanceof HTMLElement&&(this.boundariesSelectorElement=this.boundariesSelector)}}}),G={class:"ds-toast__content"},W={class:"ds-toast__footerButtons"};function F(e,t,m,i,d,f){const a=b("ds-button"),R=b("ds-card");return p(),P("div",{style:j(e.styles),class:L(["ds-toast",e.toastSize,e.toastPosition])},[A(R,{"loading-bar-color":e.color,"has-loading-bar":"","loading-bar-time":e.disappearingTimeout},w({content:l(()=>[y("div",G,[V(e.$slots,"content",{},void 0,!0)])]),_:2},[e.footerPrimaryButtonText.length>0||e.footerSecondaryButtonText.length>0?{name:"footer",fn:l(()=>[y("div",W,[e.footerSecondaryButtonText.length?(p(),T(a,{key:0,color:e.buttonSecondaryColor,"icon-right":e.footerSecondaryButtonIcon,type:e.BUTTON_TYPES.OUTLINED,radius:e.BUTTON_RADIUSES.ROUNDED,onClick:t[0]||(t[0]=C=>e.$emit("secondary-button-click"))},{default:l(()=>[h(g(e.footerSecondaryButtonText),1)]),_:1},8,["color","icon-right","type","radius"])):O("",!0),e.footerPrimaryButtonText.length?(p(),T(a,{key:1,color:e.buttonPrimaryColor,"icon-right":e.footerPrimaryButtonIcon,radius:e.BUTTON_RADIUSES.ROUNDED,onClick:t[1]||(t[1]=C=>e.$emit("primary-button-click"))},{default:l(()=>[h(g(e.footerPrimaryButtonText),1)]),_:1},8,["color","icon-right","radius"])):O("",!0)])]),key:"0"}:void 0]),1032,["loading-bar-color","loading-bar-time"])],6)}const B=x(N,[["render",F],["__scopeId","data-v-1898598e"]]);N.__docgenInfo={displayName:"Toast",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"ToastSizes"},defaultValue:{func:!1,value:"TOAST_SIZES.MEDIUM"}},{name:"position",type:{name:"ToastPositions"},defaultValue:{func:!1,value:"TOAST_POSITIONS.CENTER"}},{name:"boundariesSelector",type:{name:"string|HTMLElement"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ToastColors"},defaultValue:{func:!1,value:"TOAST_COLORS.INFO"}},{name:"footerPrimaryButtonText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"footerPrimaryButtonIcon",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"footerSecondaryButtonText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"footerSecondaryButtonIcon",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"isDisappearing",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disappearingTimeout",type:{name:"string"},defaultValue:{func:!1,value:"'0'"}}],events:[{name:"secondary-button-click"},{name:"primary-button-click"},{name:"close"}],slots:[{name:"content"}],sourceFiles:["/Users/sdawidziak/dev/bethink/design-system/lib/js/components/Toast/Toast.vue"]};const re={title:"Components/Toast",component:B,decorators:[$]},H=e=>({components:{DsToast:B},setup(){return e},data(){return{ICONS:Object.freeze(s),isVisible:!0,boundariesSelectorId:this.boundariesSelector!=null?`#${this.boundariesSelector}`:null}},template:`<div style="display: flex; justify-content: space-around; height: 1200px; width: 100%;">
        <ds-toast
            v-if="isVisible"
            :size="size"
            :position="position"
            :boundaries-selector="boundariesSelectorId"
            :color="color"
            :footer-primary-button-text="footerPrimaryButtonText"
            :footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
            :footer-secondary-button-text="footerSecondaryButtonText"
            :footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
            :is-disappearing="isDisappearing"
            :disappearing-timeout="disappearingTimeout"
            @close="isVisible = false"
        >
            <template #content>
                <span v-html="content" />
            </template>
        </ds-toast>
        <div id="left" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
        <div id="right" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
    </div>`}),o=H.bind({}),Y={size:c.MEDIUM,position:u.CENTER,boundariesSelector:null,color:r.INFO,footerPrimaryButtonText:"primary",footerPrimaryButtonIcon:null,footerSecondaryButtonText:"secondary",footerSecondaryButtonIcon:null,isDisappearing:!1,disappearingTimeout:"0",content:"Wpłynąłem na suchego przestwór oceanu"},X={size:{control:"select",options:Object.values(c)},position:{control:"select",options:Object.values(u)},boundariesSelector:{control:"select",options:[null,"left","right"]},color:{control:"select",options:Object.values(r)},footerPrimaryButtonIcon:{control:"select",options:[null,...Object.keys(s)]},footerSecondaryButtonIcon:{control:"select",options:[null,...Object.keys(s)]},content:{control:"text"}};o.argTypes=X;o.args=Y;o.parameters={actions:{handles:["close","primary-button-click","secondary-button-click"]},design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8091-108960"}};var I,v,E;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    DsToast
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      isVisible: true,
      boundariesSelectorId: this.boundariesSelector != null ? \`#\${this.boundariesSelector}\` : null
    };
  },
  template: \`<div style="display: flex; justify-content: space-around; height: 1200px; width: 100%;">
        <ds-toast
            v-if="isVisible"
            :size="size"
            :position="position"
            :boundaries-selector="boundariesSelectorId"
            :color="color"
            :footer-primary-button-text="footerPrimaryButtonText"
            :footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
            :footer-secondary-button-text="footerSecondaryButtonText"
            :footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
            :is-disappearing="isDisappearing"
            :disappearing-timeout="disappearingTimeout"
            @close="isVisible = false"
        >
            <template #content>
                <span v-html="content" />
            </template>
        </ds-toast>
        <div id="left" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
        <div id="right" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
    </div>\`
})`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const se=["Interactive"];export{o as Interactive,se as __namedExportsOrder,re as default};
