import{a as B,b as n,I as l}from"./Icon-BCNBiMEg.js";import{f as I,I as b,c as D,G,k as N,a as c,L as u,N as h,J as W,o as d}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./fontawesome-CXWUXLFT.js";const a={SUCCESS:"success",WARNING:"warning",FAIL:"fail",INVERTED:"inverted",NEUTRAL:"neutral",NEUTRAL_WEAK:"neutral-weak"},t={MEDIUM:"medium",SMALL:"small",XSMALL:"extra small"},R=I({name:"BadgeScore",components:{WnlIcon:B},props:{text:{type:String,required:!0},suffix:{type:String,required:!1,default:null},color:{type:String,required:!0,validator(e){return Object.values(a).includes(e)}},icon:{type:Object,default:null,validator(e){return Object.values(l).includes(b(e))}},size:{type:String,default:t.MEDIUM,validator(e){return Object.values(t).includes(e)}},fullWidth:{type:Boolean,default:!1}},data(){return{ICON_SIZES:Object.freeze(n),BADGE_SCORE_COLORS:Object.freeze(a),BADGE_SCORE_SIZES:Object.freeze(t)}},computed:{iconSize(){return this.size===t.SMALL?n.X_SMALL:this.size===t.XSMALL?n.XXX_SMALL:n.SMALL}}}),y={class:"ds-badgeScore__text"},v={class:"ds-badgeScore__suffix"};function M(e,w,x,U,k,T){const L=W("wnl-icon");return d(),D("div",{class:h(["ds-badgeScore",{"-ds-success":e.color===e.BADGE_SCORE_COLORS.SUCCESS,"-ds-warning":e.color===e.BADGE_SCORE_COLORS.WARNING,"-ds-fail":e.color===e.BADGE_SCORE_COLORS.FAIL,"-ds-inverted":e.color===e.BADGE_SCORE_COLORS.INVERTED,"-ds-neutralWeak":e.color===e.BADGE_SCORE_COLORS.NEUTRAL_WEAK,"-ds-neutral":e.color===e.BADGE_SCORE_COLORS.NEUTRAL,"-ds-small":e.size===e.BADGE_SCORE_SIZES.SMALL,"-ds-xsmall":e.size===e.BADGE_SCORE_SIZES.XSMALL,"-ds-fullWidth":e.fullWidth}])},[e.icon?(d(),G(L,{key:0,class:"ds-badgeScore__icon",icon:e.icon,size:e.iconSize},null,8,["icon","size"])):N("",!0),c("div",y,u(e.text),1),c("span",v,u(e.suffix),1)],2)}const i=z(R,[["render",M],["__scopeId","data-v-52a165b4"]]);R.__docgenInfo={displayName:"BadgeScore",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0},{name:"suffix",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},required:!0},{name:"icon",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"BADGE_SCORE_SIZES.MEDIUM"}},{name:"fullWidth",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/BadgeScore/BadgeScore.vue"]};const q={title:"Components/Badges/BadgeScore",component:i},j=e=>({components:{BadgeScore:i},setup(){return e},template:'<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" :fullWidth="fullWidth" />',data(){return{ICONS:Object.freeze(l)}}}),s=j.bind({});s.args={text:"42",suffix:"%",fullWidth:!1,color:a.SUCCESS,icon:"FA_LIGHTBULB",size:t.MEDIUM};s.argTypes={text:{control:"text"},suffix:{control:"text"},color:{control:"select",options:Object.values(a)},icon:{control:"select",options:[null,...Object.keys(l)]},size:{control:"select",options:Object.values(t)}};s.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4348%3A77330"}};const A=e=>({components:{BadgeScore:i},setup(){return e},template:'<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',data(){return{BADGE_SCORE_COLORS:Object.freeze(a)}}}),r=A.bind({});r.args={fullWidth:!1};const o=A.bind({});o.args={fullWidth:!0};var S,f,p;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    BadgeScore
  },
  setup() {
    return args;
  },
  template: '<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" :fullWidth="fullWidth" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(p=(f=s.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var O,m,E;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    BadgeScore
  },
  setup() {
    return args;
  },
  template: '<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',
  data() {
    return {
      BADGE_SCORE_COLORS: Object.freeze(BADGE_SCORE_COLORS)
    };
  }
})`,...(E=(m=r.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};var C,_,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    BadgeScore
  },
  setup() {
    return args;
  },
  template: '<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',
  data() {
    return {
      BADGE_SCORE_COLORS: Object.freeze(BADGE_SCORE_COLORS)
    };
  }
})`,...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const $=["Interactive","MinWidth","FullWidth"];export{o as FullWidth,s as Interactive,r as MinWidth,$ as __namedExportsOrder,q as default};
