import{a as S,b as o,I as l}from"./Icon-BCNBiMEg.js";import{f as m,I,c as f,G as E,k as O,a as L,L as _,N as b,J as A,o as r}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./fontawesome-CXWUXLFT.js";const n={NEUTRAL_WEAK:"neutralWeak",NEUTRAL:"neutral"},t={X_SMALL:"xSmall",SMALL:"small",MEDIUM:"medium"},s={DEFAULT:"default",DISABLED:"disabled"},d=m({name:"IconText",components:{Icon:S},props:{color:{type:String,default:n.NEUTRAL_WEAK,validator(e){return Object.values(n).includes(e)}},icon:{type:Object,required:!0,validate:e=>Object.values(l).includes(I(e))},isInteractive:{type:Boolean,default:!1},isLabelBold:{type:Boolean,default:!1},label:{type:String,required:!0},size:{type:String,default:t.X_SMALL,validator(e){return Object.values(t).includes(e)}},state:{type:String,default:s.DEFAULT,validator(e){return Object.values(s).includes(e)}}},data(){return{ICON_SIZES:Object.freeze(o),ICON_TEXT_COLORS:Object.freeze(n),ICON_TEXT_SIZES:Object.freeze(t),ICON_TEXT_STATES:Object.freeze(s)}},computed:{iconSize(){return[t.SMALL,t.X_SMALL].includes(this.size)?o.XX_SMALL:o.X_SMALL}}});function C(e,z,X,g,j,B){const p=A("icon");return r(),f("div",{class:b(["ds-iconText",{"-ds-neutralWeak":e.color===e.ICON_TEXT_COLORS.NEUTRAL_WEAK,"-ds-neutral":e.color===e.ICON_TEXT_COLORS.NEUTRAL,"-ds-xSmall":e.size===e.ICON_TEXT_SIZES.X_SMALL,"-ds-small":e.size===e.ICON_TEXT_SIZES.SMALL,"-ds-medium":e.size===e.ICON_TEXT_SIZES.MEDIUM,"-ds-bold":e.isLabelBold,"-ds-interactive":e.isInteractive&&e.state!==e.ICON_TEXT_STATES.DISABLED,"-ds-disabled":e.state===e.ICON_TEXT_STATES.DISABLED}])},[e.icon?(r(),E(p,{key:0,class:"ds-iconText__icon",icon:e.icon,size:e.iconSize},null,8,["icon","size"])):O("",!0),L("div",null,_(e.label),1)],2)}const T=N(d,[["render",C],["__scopeId","data-v-44f62e6b"]]);d.__docgenInfo={displayName:"IconText",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"ICON_TEXT_COLORS.NEUTRAL_WEAK"}},{name:"icon",type:{name:"object"},required:!0},{name:"isInteractive",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isLabelBold",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"ICON_TEXT_SIZES.X_SMALL"}},{name:"state",type:{name:"string"},defaultValue:{func:!1,value:"ICON_TEXT_STATES.DEFAULT"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/IconText/IconText.vue"]};const k={title:"Components/IconText",component:T},v=e=>({components:{IconText:T},setup(){return e},template:`
            <icon-text
                    :color="color"
                    :icon="ICONS[icon]"
                    :label="label"
                    :is-interactive="isInteractive"
                    :is-label-bold="isLabelBold"
                    :size="size"
                    :state="state"
            />`,data(){return{ICONS:Object.freeze(l)}}}),a=v.bind({});a.args={size:t.X_SMALL,color:n.NEUTRAL_WEAK,label:"Tagi lub filtry po przecinku",isLabelBold:!1,icon:"FA_TAGS",isInteractive:!1,state:s.DEFAULT};const y={color:{control:"select",options:Object.values(n)},icon:{control:"select",options:Object.keys(l)},size:{control:"select",options:Object.values(t)},state:{control:"select",options:Object.values(s)}};a.argTypes=y;a.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4832%3A81133"}};var i,c,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    IconText
  },
  setup() {
    return args;
  },
  template: \`
            <icon-text
                    :color="color"
                    :icon="ICONS[icon]"
                    :label="label"
                    :is-interactive="isInteractive"
                    :is-label-bold="isLabelBold"
                    :size="size"
                    :state="state"
            />\`,
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Z=["Interactive"];export{a as Interactive,Z as __namedExportsOrder,k as default};
