import{P as T}from"./ProgressBar-3xTxoEbD.js";import{P as c,a as g,b as G,c as x,d as M,e as f,f as e}from"./ProgressBarLegendItem-CaQCjvfY.js";import{I as p}from"./Icon-ugyemqI_.js";import{B as U,a as F}from"./Banner-BEz1HFSC.js";import"./vue.esm-bundler-IFOcKaEy.js";import"./ProgressBarLegend-DCx4eNT-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-Mm1X1fnt.js";import"./Divider-MUdRWzME.js";import"./IconButton-ClEKnV5m.js";import"./device-9fgosCm4.js";import"./FeatureIcon-BjuBS4bR.js";const X={title:"Components/ProgressBar/ProgressBar",component:T};function y(r){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${r}
<ds-banner v-if="invalidUsage" :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!"  />
</div>
`}const t=r=>({components:{ProgressBar:T,DsBanner:U},setup(){return{args:r,BANNER_COLORS:F}},computed:{invalidUsage(){return r.legendSize===c.MEDIUM&&r.layout===g.COMPACT&&r.hasLegend===!0}},template:y("<progress-bar v-bind=args></progress-bar>")}),a=t.bind({}),v={size:{control:"select",options:Object.values(M)},labelTextSize:{control:"select",options:Object.values(x)},ranges:{control:"object"},radius:{control:"select",options:Object.values(G)},layout:{control:"select",options:Object.values(g)},labelText:{control:"text"},labelTextEllipsis:{control:"boolean"},labelData:{control:"text"},labelDataSupporting:{control:"text"},labelDataSuffix:{control:"text"},badgePosition:{control:"text"},badgeColor:{control:"select",options:Object.values(f)},hasLegend:{control:"boolean"},legendSize:{control:"select",options:Object.values(c)},hasLegendPercentValue:{control:"boolean"}};a.argTypes=v;a.args={size:M.SMALL,labelTextSize:x.SMALL,ranges:[{color:e.INFO,start:0,length:30,label:"First Label",data:"First Data",icon:p.FA_ADDRESS_CARD},{color:e.INFO_WEAK,start:30,length:10,label:"Second Label",data:"Second Data",icon:p.FA_CARDS_BLANK},{color:e.INFO_GHOST,start:40,length:10,label:"Third Label",data:"Third Data",icon:p.FA_CIRCLE_ARROW_LEFT}],radius:G.DEFAULT,layout:g.DEFAULT,labelText:"Label text",labelTextEllipsis:!1,labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",badgePosition:"50",badgeColor:f.INFO,hasLegend:!1,legendSize:c.SMALL,hasLegendPercentValue:!0};a.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921"}};const s=t.bind({});s.args={ranges:[{color:e.INFO,start:0,length:30}]};const o=t.bind({});o.args={ranges:[{color:e.INFO,start:0,length:30},{color:e.WARNING,start:30,length:30}]};const l=t.bind({});l.args={ranges:[{color:e.INFO,start:0,length:10},{color:e.INFO_WEAK,start:20,length:10},{color:e.INFO,start:40,length:10},{color:e.INFO_WEAK,start:50,length:10},{color:e.INFO,start:70,length:30}]};const i=t.bind({});i.args={layout:g.COMPACT,ranges:[{color:e.INFO,start:0,length:30}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1};const n=t.bind({});n.argTypes=v;n.args={layout:g.DEFAULT,ranges:[{color:e.SUCCESS,start:0,length:30,label:"First Label",data:"First Data"},{color:e.WARNING,start:30,length:10,label:"Second Label",data:"Second Data"}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1,hasLegend:!0,hasLegendPercentValue:!0,legendSize:c.SMALL};var S,d,u;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var R,b,O;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(O=(b=s.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var m,E,_;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var A,L,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(B=(L=l.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var C,D,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(h=(D=i.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var N,P,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(I=(P=n.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const $=["Interactive","WithoutLabels","TwoColors","WithGaps","Compact","LegendWithoutIcons"];export{i as Compact,a as Interactive,n as LegendWithoutIcons,o as TwoColors,l as WithGaps,s as WithoutLabels,$ as __namedExportsOrder,X as default};
