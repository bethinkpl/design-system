import{P as G}from"./ProgressBar-1vAkHGCZ.js";import{P as c,a as g,b as p,c as v,d as x,e as M,f,g as e}from"./ProgressBarLegendItem-Ciww4UEM.js";import{I as S}from"./Icon-SK4lyiHa.js";import{D as F,B as y}from"./Banner-Dupa054W.js";import"./vue.esm-bundler-KKLRPfRG.js";import"./ProgressBarLegend-B5QKapul.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-CCs6ZaPM.js";import"./Divider-Cv_Se4zt.js";import"./IconButton-B4mxds2z.js";import"./device-mzBmLsxe.js";import"./FeatureIcon-Bv8h2-yz.js";const $={title:"Components/ProgressBar/ProgressBar",component:G};function W(r){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${r}
<ds-banner v-if="invalidUsage" :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!"  />
</div>
`}const n=r=>({components:{ProgressBar:G,DsBanner:F},setup(){return{args:r,BANNER_COLORS:y}},computed:{invalidUsage(){return r.legendSize===c.MEDIUM&&r.layout===g.COMPACT&&r.hasLegend===!0}},template:W("<progress-bar v-bind=args></progress-bar>")}),a=n.bind({}),U={size:{control:"select",options:Object.values(M)},labelTextSize:{control:"select",options:Object.values(x)},ranges:{control:"object"},radius:{control:"select",options:Object.values(v)},layout:{control:"select",options:Object.values(g)},labelText:{control:"text"},labelTextEllipsis:{control:"boolean"},labelData:{control:"text"},labelDataSupporting:{control:"text"},labelDataSuffix:{control:"text"},badgePosition:{control:"text"},badgeColor:{control:"select",options:Object.values(f)},hasLegend:{control:"boolean"},legendSize:{control:"select",options:Object.values(c)},hasLegendPercentValue:{control:"boolean"},labelDataPosition:{control:"select",options:Object.values(p)}};a.argTypes=U;a.args={size:M.SMALL,labelTextSize:x.SMALL,ranges:[{color:e.INFO,start:0,length:30,label:"First Label",data:"First Data",icon:S.FA_ADDRESS_CARD},{color:e.INFO_WEAK,start:30,length:10,label:"Second Label",data:"Second Data",icon:S.FA_CARDS_BLANK},{color:e.INFO_GHOST,start:40,length:10,label:"Third Label",data:"Third Data",icon:S.FA_CIRCLE_ARROW_LEFT}],radius:v.DEFAULT,layout:g.DEFAULT,labelText:"Label text",labelTextEllipsis:!1,labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",badgePosition:"50",badgeColor:f.INFO,hasLegend:!1,legendSize:c.SMALL,hasLegendPercentValue:!0,labelDataPosition:p.TOP};a.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921"}};const s=n.bind({});s.args={ranges:[{color:e.INFO,start:0,length:30}]};const o=n.bind({});o.args={ranges:[{color:e.INFO,start:0,length:30},{color:e.WARNING,start:30,length:30}]};const l=n.bind({});l.args={ranges:[{color:e.INFO,start:0,length:10},{color:e.INFO_WEAK,start:20,length:10},{color:e.INFO,start:40,length:10},{color:e.INFO_WEAK,start:50,length:10},{color:e.INFO,start:70,length:30}]};const i=n.bind({});i.args={layout:g.COMPACT,ranges:[{color:e.INFO,start:0,length:30}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1,labelDataPosition:p.TOP};const t=n.bind({});t.argTypes=U;t.args={layout:g.DEFAULT,ranges:[{color:e.SUCCESS,start:0,length:30,label:"First Label",data:"First Data"},{color:e.WARNING,start:30,length:10,label:"Second Label",data:"Second Data"}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1,hasLegend:!0,hasLegendPercentValue:!0,legendSize:c.SMALL,labelDataPosition:p.TOP};var d,u,R;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(R=(u=a.parameters)==null?void 0:u.docs)==null?void 0:R.source}}};var b,O,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(E=(O=s.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var m,_,A;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(A=(_=o.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,D,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(P=(D=l.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var B,C,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var I,N,h;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(h=(N=t.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};const q=["Interactive","WithoutLabels","TwoColors","WithGaps","Compact","LegendWithoutIcons"];export{i as Compact,a as Interactive,t as LegendWithoutIcons,o as TwoColors,l as WithGaps,s as WithoutLabels,q as __namedExportsOrder,$ as default};
