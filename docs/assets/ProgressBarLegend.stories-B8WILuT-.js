import{P as l}from"./ProgressBarLegend-B5QKapul.js";import{P as n,h as p,a as c,g as a}from"./ProgressBarLegendItem-Ciww4UEM.js";import{I as t}from"./Icon-SK4lyiHa.js";import{D as d,B as g}from"./Banner-zyCsi1XV.js";import"./vue.esm-bundler-KKLRPfRG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-CCs6ZaPM.js";import"./Divider-Cv_Se4zt.js";import"./IconButton-B4mxds2z.js";import"./device-mzBmLsxe.js";import"./FeatureIcon-Bv8h2-yz.js";const P={title:"Components/ProgressBar/ProgressBarLegend",component:l};function m(r){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${r}
<ds-banner v-if="invalidUsage" :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!"  />
</div>
`}const S=r=>({components:{ProgressBarLegend:l,DsBanner:d},setup(){return{args:r,BANNER_COLORS:g}},computed:{invalidUsage(){return r.size===n.MEDIUM&&r.layout===p.COMPACT}},template:m("<progress-bar-legend v-bind=args></progress-bar-legend>")}),e=S.bind({}),R={size:{control:"select",options:Object.values(n)},ranges:{control:"object"},layout:{control:"select",options:Object.values(p)},hasPercentValue:{control:"boolean"}};e.argTypes=R;e.args={size:n.SMALL,ranges:[{color:a.INFO,start:0,length:30,label:"First Label",data:"First Data",icon:t.FA_ADDRESS_CARD},{color:a.INFO_WEAK,start:30,length:10,label:"Second Label",data:"Second Data",icon:t.FA_CARDS_BLANK},{color:a.INFO_GHOST,start:40,length:10,label:"Third Label",data:"Third Data",icon:t.FA_CIRCLE_ARROW_LEFT}],layout:c.DEFAULT,hasPercentValue:!0};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14650-3488&m=dev"}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    ProgressBarLegend,
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
      return args.size === PROGRESS_BAR_LEGEND_SIZES.MEDIUM && args.layout === PROGRESS_BAR_LEGEND_LAYOUTS.COMPACT;
    }
  },
  template: wrapWithContainer(\`<progress-bar-legend v-bind=args></progress-bar-legend>\`)
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,P as default};
