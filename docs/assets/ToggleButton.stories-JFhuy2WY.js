import{f as U,I as p,c as g,a as O,G as c,k as r,N as d,L as B,J as G,o as s}from"./vue.esm-bundler-S9zc6Wpc.js";import{a as N,b as f,I as n}from"./Icon-BCNBiMEg.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./fontawesome-CXWUXLFT.js";const t={SMALL:"small",MEDIUM:"medium",LARGE:"large"},o={NEUTRAL:"neutral",NEUTRAL_STRONG:"neutralStrong",NEUTRAL_HEAVY:"neutralHeavy",PRIMARY:"primary"},i={CAPSULE:"capsule",ROUNDED:"rounded"},T={SMALL:"small",MEDIUM:"medium"},l={DEFAULT:"default",DISABLED:"disabled",LOADING:"loading"},I=U({name:"ToggleButton",components:{DsIcon:N},props:{color:{type:String,default:o.NEUTRAL,validator(e){return Object.values(o).includes(e)}},hasSmallHorizontalPadding:{type:Boolean,default:!1},iconLeft:{type:Object,default:null,validator(e){return Object.values(n).includes(p(e))}},iconRight:{type:Object,default:null,validator(e){return Object.values(n).includes(p(e))}},isInteractive:{type:Boolean,default:!0},isLabelUppercase:{type:Boolean,default:!1},isSelected:{type:Boolean,default:!1},label:{type:String,default:""},labelSize:{type:String,default:t.MEDIUM},radius:{type:String,default:i.CAPSULE,validator(e){return Object.values(i).includes(e)}},size:{type:String,default:t.MEDIUM,validator(e){return Object.values(t).includes(e)}},state:{type:String,default:l.DEFAULT,validator(e){return Object.values(l).includes(e)}}},emits:["click"],data(){return{ICONS:Object.freeze(n),TOGGLE_BUTTON_COLORS:Object.freeze(o),TOGGLE_BUTTON_LABEL_SIZES:Object.freeze(T),TOGGLE_BUTTON_RADIUSES:Object.freeze(i),TOGGLE_BUTTON_SIZES:Object.freeze(t),TOGGLE_BUTTON_STATES:Object.freeze(l)}},computed:{colorClassName(){return`-ds-color-${this.color}`},iconSize(){return this.size===t.LARGE?f.X_SMALL:f.XX_SMALL},isInteractiveComputed(){return this.state!==l.DEFAULT?!1:this.isInteractive}}}),v={class:"ds-toggleButton__contentWrapper"};function z(e,S,R,C,h,M){const u=G("ds-icon");return s(),g("div",{class:d(["ds-toggleButtonWrapper",{"-rounded":e.radius===e.TOGGLE_BUTTON_RADIUSES.ROUNDED}])},[O("div",{class:d(["ds-toggleButton",{"-ds-small":e.size===e.TOGGLE_BUTTON_SIZES.SMALL,"-ds-medium":e.size===e.TOGGLE_BUTTON_SIZES.MEDIUM,"-ds-large":e.size===e.TOGGLE_BUTTON_SIZES.LARGE,"-ds-hasSmallHorizontalPadding":e.hasSmallHorizontalPadding,"-ds-rounded":e.radius===e.TOGGLE_BUTTON_RADIUSES.ROUNDED,[e.colorClassName]:!0,"-ds-disabled":e.state===e.TOGGLE_BUTTON_STATES.DISABLED,"-ds-loading":e.state===e.TOGGLE_BUTTON_STATES.LOADING,"-ds-interactive":e.isInteractiveComputed,"-ds-selected":e.isSelected}]),onClick:S[0]||(S[0]=j=>e.isInteractiveComputed&&e.$emit("click"))},[O("div",v,[e.iconLeft?(s(),c(u,{key:0,class:"ds-toggleButton__icon",icon:e.iconLeft,size:e.iconSize},null,8,["icon","size"])):r("",!0),e.label?(s(),g("span",{key:1,class:d(["ds-toggleButton__content",{"-ds-small":e.labelSize===e.TOGGLE_BUTTON_LABEL_SIZES.SMALL,"-ds-uppercase":e.isLabelUppercase}])},B(e.label),3)):r("",!0),e.iconRight?(s(),c(u,{key:2,class:"ds-toggleButton__icon",icon:e.iconRight,size:e.iconSize},null,8,["icon","size"])):r("",!0)]),e.state===e.TOGGLE_BUTTON_STATES.LOADING?(s(),c(u,{key:0,class:"ds-toggleButton__icon ds-toggleButton__loadingSpinner",icon:e.ICONS.FAD_SPINNER_THIRD,size:e.iconSize,spinning:""},null,8,["icon","size"])):r("",!0)],2)],2)}const b=_(I,[["render",z],["__scopeId","data-v-f8e388ab"]]);I.__docgenInfo={displayName:"ToggleButton",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ToggleButtonColor"},defaultValue:{func:!1,value:"TOGGLE_BUTTON_COLORS.NEUTRAL"}},{name:"hasSmallHorizontalPadding",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconLeft",type:{name:"IconItem"},defaultValue:{func:!1,value:"null"}},{name:"iconRight",type:{name:"IconItem"},defaultValue:{func:!1,value:"null"}},{name:"isInteractive",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isLabelUppercase",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isSelected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelSize",type:{name:"ToggleButtonLabelSize"},defaultValue:{func:!1,value:"TOGGLE_BUTTON_SIZES.MEDIUM"}},{name:"radius",type:{name:"ToggleButtonRadius"},defaultValue:{func:!1,value:"TOGGLE_BUTTON_RADIUSES.CAPSULE"}},{name:"size",type:{name:"ToggleButtonSize"},defaultValue:{func:!1,value:"TOGGLE_BUTTON_SIZES.MEDIUM"}},{name:"state",type:{name:"ToggleButtonState"},defaultValue:{func:!1,value:"TOGGLE_BUTTON_STATES.DEFAULT"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Toggles/ToggleButton/ToggleButton.vue"]};const H={title:"Components/Toggles/ToggleButton",component:b},A=e=>({components:{ToggleButton:b},setup(){return e},data(){return{ICONS:Object.freeze(n)}},template:`
        <toggle-button
            :color="color"
            :has-small-horizontal-padding="hasSmallHorizontalPadding"
            :icon-left="ICONS[iconLeft]"
            :icon-right="ICONS[iconRight]"
            :is-interactive="isInteractive"
            :is-label-uppercase="isLabelUppercase"
            :is-selected="isSelected"
            :label="label"
            :label-size="labelSize"
            :radius="radius"
            :size="size"
            :state="state"
        />`}),a=A.bind({}),y={size:t.MEDIUM,hasSmallHorizontalPadding:!1,color:o.NEUTRAL,isSelected:!1,radius:i.CAPSULE,label:"1",isLabelUppercase:!1,labelSize:T.MEDIUM,isInteractive:!0,iconLeft:null,iconRight:null,state:l.DEFAULT},D={size:{control:"select",options:Object.values(t)},color:{control:"select",options:Object.values(o)},radius:{control:"select",options:Object.values(i)},labelSize:{control:"select",options:Object.values(T)},state:{control:"select",options:Object.values(l)},iconLeft:{control:"select",options:[null,...Object.keys(n)]},iconRight:{control:"select",options:[null,...Object.keys(n)]}};a.argTypes=D;a.args=y;a.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4115%3A70578"}};var m,E,L;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    ToggleButton
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  template: \`
        <toggle-button
            :color="color"
            :has-small-horizontal-padding="hasSmallHorizontalPadding"
            :icon-left="ICONS[iconLeft]"
            :icon-right="ICONS[iconRight]"
            :is-interactive="isInteractive"
            :is-label-uppercase="isLabelUppercase"
            :is-selected="isSelected"
            :label="label"
            :label-size="labelSize"
            :radius="radius"
            :size="size"
            :state="state"
        />\`
})`,...(L=(E=a.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const F=["Interactive"];export{a as Interactive,F as __namedExportsOrder,H as default};
