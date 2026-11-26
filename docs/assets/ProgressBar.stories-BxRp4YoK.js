import{f as q,c as t,k as l,L as O,a as g,K as te,o as s,G as P,N as i,F as I,H as le,a2 as h,h as ne,J as y}from"./vue.esm-bundler-S9zc6Wpc.js";import{e as p,b as n,f as _,g as R,h as f,P as E,i as A,c as a}from"./ProgressBarLegendItem-guasE_EY.js";import{a as oe,b as ie,I as L}from"./Icon-BCNBiMEg.js";import{P as ue}from"./ProgressBarLegend-aJheydGR.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{D as pe,B as de}from"./Banner-DBrnx5vO.js";import"./fontawesome-CXWUXLFT.js";import"./Button-C24VVysr.js";import"./Divider-Cfx8bFqy.js";import"./IconButton-BP3MsFJS.js";import"./device-mzBmLsxe.js";import"./FeatureIcon-CCm0-VHM.js";const ge={class:"ds-progressBarLabelDataWrapper"},Se={key:0,class:"ds-progressBarLabelDataWrapper__labelData"},be={key:1,class:"ds-progressBarLabelDataWrapper__labelDataSupporting"},ce={key:2,class:"ds-progressBarLabelDataWrapper__labelDataSuffix"},H=q({__name:"ProgressBarLabelDataWrapper",props:{labelData:{},labelDataSupporting:{},labelDataSuffix:{}},setup(e){return(r,D)=>(s(),t("div",ge,[r.labelData?(s(),t("span",Se,O(r.labelData),1)):l("",!0),r.labelDataSupporting?(s(),t("span",be,[D[0]||(D[0]=g("span",{class:"ds-progressBarLabelDataWrapper__labelDataSeparator"},"/",-1)),te(" "+O(r.labelDataSupporting),1)])):l("",!0),r.labelDataSuffix?(s(),t("span",ce,O(r.labelDataSuffix),1)):l("",!0)]))}}),me=K(H,[["__scopeId","data-v-c662ce07"]]);H.__docgenInfo={exportName:"default",displayName:"ProgressBarLabelDataWrapper",description:"",tags:{},props:[{name:"labelData",required:!1,type:{name:"string"}},{name:"labelDataSupporting",required:!1,type:{name:"string"}},{name:"labelDataSuffix",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/ProgressBar/ProgressBarLabelDataWrapper.vue"]};const J=q({name:"ProgressBar",components:{ProgressBarLabelDataWrapper:me,ProgressBarLegend:ue,DsIcon:oe},props:{size:{type:String,default:f.SMALL,validator(e){return Object.values(f).includes(e)}},labelTextSize:{type:String,default:R.SMALL,validator(e){return Object.values(R).includes(e)}},ranges:{type:Array,required:!0,validator(e){return e.every(r=>r.start>=0&&r.length>=0&&r.start+r.length<=100)}},radius:{type:String,default:_.DEFAULT,validator(e){return Object.values(_).includes(e)}},layout:{type:String,default:n.DEFAULT,validator(e){return Object.values(n).includes(e)}},labelText:{type:String,default:null},labelData:{type:String,default:null},labelDataSupporting:{type:String,default:null},labelDataSuffix:{type:String,default:null},labelTextEllipsis:{type:Boolean,default:!1},badgePosition:{type:Number,default:null,validator(e){return e>=0&&e<=100}},badgeColor:{type:String,default:A.INFO,validator(e){return Object.values(A).includes(e)}},hasLegend:{type:Boolean,default:!1},legendSize:{type:String,default:E.SMALL},hasLegendPercentValue:{type:Boolean,default:!0},labelDataPosition:{type:String,default:p.TOP}},setup(){return{PROGRESS_BAR_SIZES:f,PROGRESS_BAR_RADII:_,PROGRESS_BAR_LAYOUTS:n,PROGRESS_BAR_LABEL_TEXT_SIZES:R,ICONS:L,ICON_SIZES:ie,PROGRESS_BAR_LABEL_DATA_POSITIONS:p}},computed:{labelDataExists(){return this.labelData||this.labelDataSupporting||this.labelDataSuffix}}}),_e={key:0,class:"ds-progressBar__label"},Re=["title"],fe={class:"ds-progressBar__bottomWrapper"},Ee={key:0};function Oe(e,r,D,Ae,De,Be){const T=y("progress-bar-label-data-wrapper"),ae=y("ds-icon"),se=y("progress-bar-legend");return s(),t("div",{class:i(["ds-progressBar",{"-ds-compact":e.layout===e.PROGRESS_BAR_LAYOUTS.COMPACT}])},[e.labelText||e.labelDataExists?(s(),t("div",_e,[g("div",{class:i(["ds-progressBar__labelText",{"-ds-medium":e.labelTextSize===e.PROGRESS_BAR_LABEL_TEXT_SIZES.MEDIUM,"-ds-ellipsis":e.labelTextEllipsis}]),title:e.labelTextEllipsis?e.labelText:void 0},O(e.labelText),11,Re),e.labelDataExists&&e.labelDataPosition===e.PROGRESS_BAR_LABEL_DATA_POSITIONS.TOP?(s(),P(T,{key:0,class:"ds-progressBar__labelDataWrapperTop","label-data":e.labelData,"label-data-supporting":e.labelDataSupporting,"label-data-suffix":e.labelDataSuffix},null,8,["label-data","label-data-supporting","label-data-suffix"])):l("",!0)])):l("",!0),g("div",{class:i(["ds-progressBar__barWrapper",{"-ds-small":e.size===e.PROGRESS_BAR_SIZES.SMALL,"-ds-xsmall":e.size===e.PROGRESS_BAR_SIZES.XSMALL}])},[g("div",{class:i(["ds-progressBar__bar",{"-ds-noRadius":e.radius===e.PROGRESS_BAR_RADII.NONE}])},[(s(!0),t(I,null,le(e.ranges,(B,re)=>(s(),t("div",{key:re,class:i(["ds-progressBar__range",`-ds-${B.color}`]),style:h({left:B.start+"%",width:B.length+"%"})},null,6))),128))],2),e.badgePosition!==null?(s(),P(ae,{key:0,class:i(["ds-progressBar__badge",{"-ds-small":e.size!==e.PROGRESS_BAR_SIZES.MEDIUM,[`-ds-${e.badgeColor}`]:!0}]),style:h(`left: ${e.badgePosition}%`),icon:e.ICONS.FA_LOCATION_DOT,size:e.size===e.PROGRESS_BAR_SIZES.MEDIUM?e.ICON_SIZES.XX_SMALL:e.ICON_SIZES.XXX_SMALL},null,8,["class","style","icon","size"])):l("",!0)],2),g("div",fe,[e.hasLegend?(s(),P(se,{key:0,class:"ds-progressBar__legend",ranges:e.ranges,layout:e.layout,size:e.legendSize,"has-percent-value":e.hasLegendPercentValue},null,8,["ranges","layout","size","has-percent-value"])):l("",!0),e.labelDataExists&&e.labelDataPosition===e.PROGRESS_BAR_LABEL_DATA_POSITIONS.BOTTOM?(s(),t(I,{key:1},[e.hasLegend?l("",!0):(s(),t("div",Ee)),ne(T,{class:"ds-progressBar__labelDataWrapperBottom","label-data":e.labelData,"label-data-supporting":e.labelDataSupporting,"label-data-suffix":e.labelDataSuffix},null,8,["label-data","label-data-supporting","label-data-suffix"])],64)):l("",!0)])],2)}const Q=K(J,[["render",Oe],["__scopeId","data-v-dffe7fe6"]]);J.__docgenInfo={displayName:"ProgressBar",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"PROGRESS_BAR_SIZES.SMALL"}},{name:"labelTextSize",type:{name:"string"},defaultValue:{func:!1,value:"PROGRESS_BAR_LABEL_TEXT_SIZES.SMALL"}},{name:"ranges",type:{name:"Array<ProgressBarRange>"},required:!0},{name:"radius",type:{name:"string"},defaultValue:{func:!1,value:"PROGRESS_BAR_RADII.DEFAULT"}},{name:"layout",type:{name:"ProgressBarLayout"},defaultValue:{func:!1,value:"PROGRESS_BAR_LAYOUTS.DEFAULT"}},{name:"labelText",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"labelData",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"labelDataSupporting",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"labelDataSuffix",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"labelTextEllipsis",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"badgePosition",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"badgeColor",type:{name:"string"},defaultValue:{func:!1,value:"PROGRESS_BAR_BADGE_COLORS.INFO"}},{name:"hasLegend",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"legendSize",type:{name:"ProgressBarLegendSize"},defaultValue:{func:!1,value:"PROGRESS_BAR_LEGEND_SIZES.SMALL"}},{name:"hasLegendPercentValue",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"labelDataPosition",type:{name:"ProgressBarLabelDataPositions"},defaultValue:{func:!1,value:"PROGRESS_BAR_LABEL_DATA_POSITIONS.TOP"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/ProgressBar/ProgressBar.vue"]};const Ue={title:"Components/ProgressBar/ProgressBar",component:Q};function Le(e){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${e}
<ds-banner v-if="invalidUsage" :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!"  />
</div>
`}const d=e=>({components:{ProgressBar:Q,DsBanner:pe},setup(){return{args:e,BANNER_COLORS:de}},computed:{invalidUsage(){return e.legendSize===E.MEDIUM&&e.layout===n.COMPACT&&e.hasLegend===!0}},template:Le("<progress-bar v-bind=args></progress-bar>")}),o=d.bind({}),ee={size:{control:"select",options:Object.values(f)},labelTextSize:{control:"select",options:Object.values(R)},ranges:{control:"object"},radius:{control:"select",options:Object.values(_)},layout:{control:"select",options:Object.values(n)},labelText:{control:"text"},labelTextEllipsis:{control:"boolean"},labelData:{control:"text"},labelDataSupporting:{control:"text"},labelDataSuffix:{control:"text"},badgePosition:{control:"text"},badgeColor:{control:"select",options:Object.values(A)},hasLegend:{control:"boolean"},legendSize:{control:"select",options:Object.values(E)},hasLegendPercentValue:{control:"boolean"},labelDataPosition:{control:"select",options:Object.values(p)}};o.argTypes=ee;o.args={size:f.SMALL,labelTextSize:R.SMALL,ranges:[{color:a.INFO,start:0,length:30,label:"First Label",data:"First Data",icon:L.FA_ADDRESS_CARD},{color:a.INFO_WEAK,start:30,length:10,label:"Second Label",data:"Second Data",icon:L.FA_CARDS_BLANK},{color:a.INFO_GHOST,start:40,length:10,label:"Third Label",data:"Third Data",icon:L.FA_CIRCLE_ARROW_LEFT}],radius:_.DEFAULT,layout:n.DEFAULT,labelText:"Label text",labelTextEllipsis:!1,labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",badgePosition:"50",badgeColor:A.INFO,hasLegend:!1,legendSize:E.SMALL,hasLegendPercentValue:!0,labelDataPosition:p.TOP};o.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921"}};const S=d.bind({});S.args={ranges:[{color:a.INFO,start:0,length:30}]};const b=d.bind({});b.args={ranges:[{color:a.INFO,start:0,length:30},{color:a.WARNING,start:30,length:30}]};const c=d.bind({});c.args={ranges:[{color:a.INFO,start:0,length:10},{color:a.INFO_WEAK,start:20,length:10},{color:a.INFO,start:40,length:10},{color:a.INFO_WEAK,start:50,length:10},{color:a.INFO,start:70,length:30}]};const m=d.bind({});m.args={layout:n.COMPACT,ranges:[{color:a.INFO,start:0,length:30}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1,labelDataPosition:p.TOP};const u=d.bind({});u.argTypes=ee;u.args={layout:n.DEFAULT,ranges:[{color:a.SUCCESS,start:0,length:30,label:"First Label",data:"First Data"},{color:a.WARNING,start:30,length:10,label:"Second Label",data:"Second Data"}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1,hasLegend:!0,hasLegendPercentValue:!0,legendSize:E.SMALL,labelDataPosition:p.TOP};var v,N,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar,
    DsBanner
  },
  setup() {
    return {
      args,
      BANNER_COLORS
    };
  },
  computed: {
    invalidUsage() {
      return args.legendSize === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LAYOUTS.COMPACT && args.hasLegend === true;
    }
  },
  template: wrapWithContainer(\`<progress-bar v-bind=args></progress-bar>\`)
})`,...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var G,M,z;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar,
    DsBanner
  },
  setup() {
    return {
      args,
      BANNER_COLORS
    };
  },
  computed: {
    invalidUsage() {
      return args.legendSize === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LAYOUTS.COMPACT && args.hasLegend === true;
    }
  },
  template: wrapWithContainer(\`<progress-bar v-bind=args></progress-bar>\`)
})`,...(z=(M=S.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var F,U,W;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar,
    DsBanner
  },
  setup() {
    return {
      args,
      BANNER_COLORS
    };
  },
  computed: {
    invalidUsage() {
      return args.legendSize === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LAYOUTS.COMPACT && args.hasLegend === true;
    }
  },
  template: wrapWithContainer(\`<progress-bar v-bind=args></progress-bar>\`)
})`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var V,Z,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar,
    DsBanner
  },
  setup() {
    return {
      args,
      BANNER_COLORS
    };
  },
  computed: {
    invalidUsage() {
      return args.legendSize === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LAYOUTS.COMPACT && args.hasLegend === true;
    }
  },
  template: wrapWithContainer(\`<progress-bar v-bind=args></progress-bar>\`)
})`,...(k=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var w,j,x;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar,
    DsBanner
  },
  setup() {
    return {
      args,
      BANNER_COLORS
    };
  },
  computed: {
    invalidUsage() {
      return args.legendSize === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LAYOUTS.COMPACT && args.hasLegend === true;
    }
  },
  template: wrapWithContainer(\`<progress-bar v-bind=args></progress-bar>\`)
})`,...(x=(j=m.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var $,Y,X;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar,
    DsBanner
  },
  setup() {
    return {
      args,
      BANNER_COLORS
    };
  },
  computed: {
    invalidUsage() {
      return args.legendSize === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LAYOUTS.COMPACT && args.hasLegend === true;
    }
  },
  template: wrapWithContainer(\`<progress-bar v-bind=args></progress-bar>\`)
})`,...(X=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const We=["Interactive","WithoutLabels","TwoColors","WithGaps","Compact","LegendWithoutIcons"];export{m as Compact,o as Interactive,u as LegendWithoutIcons,b as TwoColors,c as WithGaps,S as WithoutLabels,We as __namedExportsOrder,Ue as default};
