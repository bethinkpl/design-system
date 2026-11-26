import{a as p,b as m,I as s}from"./Icon-BCNBiMEg.js";import{f as g,I as f,c as n,h as S,k as C,L as T,N as _,J as O,o as r}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{w as b}from"./decorator-CcL-F-0p.js";import"./fontawesome-CXWUXLFT.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const t={INVERTED:"inverted",NEUTRAL_STRONG:"neutralStrong",NEUTRAL:"neutral",PRIMARY:"primary"},i=g({name:"CounterToggle",components:{Icon:p},props:{counter:{type:[String,Number],default:null},color:{type:String,default:t.NEUTRAL_STRONG,validator(e){return Object.values(t).includes(e)}},icon:{type:Object,required:!0,validator(e){return Object.values(s).includes(f(e))}},isSelected:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1}},data(){return{ICON_SIZES:Object.freeze(m)}},computed:{colorClass(){return`-ds-color-${this.color}`},hasCounter(){return this.counter!==null&&this.counter!==""&&this.counter!==void 0}}}),v={key:0,class:"ds-counterToggle__counter"};function N(e,h,L,A,D,j){const d=O("icon");return r(),n("div",{class:_(["ds-counterToggle",[{"-ds-selected":e.isSelected,"-ds-disabled":e.isDisabled},e.colorClass]])},[S(d,{class:"ds-counterToggle__icon",icon:e.icon,size:e.ICON_SIZES.X_SMALL},null,8,["icon","size"]),e.hasCounter?(r(),n("span",v,T(e.counter),1)):C("",!0)],2)}const u=I(i,[["render",N],["__scopeId","data-v-3f681974"]]);i.__docgenInfo={displayName:"CounterToggle",exportName:"default",description:"",tags:{},props:[{name:"counter",type:{name:"string|number"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG"}},{name:"icon",type:{name:"object"},required:!0},{name:"isSelected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Toggles/CounterToggle/CounterToggle.vue"]};const $={title:"Components/Toggles/CounterToggle",component:u,decorators:[b]},y=e=>({components:{CounterToggle:u},setup(){return e},template:'<div :class="{ contrastBackground: isInverted }"><counter-toggle :color="color" :counter="counter" :icon="ICONS[icon]" :isSelected="isSelected" :isDisabled="isDisabled" /></div>',data(){return{ICONS:Object.freeze(s)}},computed:{isInverted(){return this.color==="inverted"}}}),o=y.bind({}),R={color:t.NEUTRAL_STRONG,counter:"99+",icon:"FA_SQUARE_CARET_RIGHT",isSelected:!1,isDisabled:!1},E={color:{control:"select",options:Object.values(t)},icon:{control:"select",options:Object.keys(s)},counter:{control:"text"},isSelected:{control:"boolean"},isDisabled:{control:"boolean"}};o.argTypes=E;o.args=R;o.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3693%3A70976"}};var a,l,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    CounterToggle
  },
  setup() {
    return args;
  },
  template: '<div :class="{ contrastBackground: isInverted }">' + '<counter-toggle :color="color" :counter="counter" :icon="ICONS[icon]" :isSelected="isSelected" :isDisabled="isDisabled" />' + '</div>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  computed: {
    isInverted() {
      return this.color === 'inverted';
    }
  }
})`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const F=["Interactive"];export{o as Interactive,F as __namedExportsOrder,$ as default};
