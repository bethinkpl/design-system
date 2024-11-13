import{P as n,a,b as r}from"./ProgressDonutChart-CZhcGOel.js";import"./vue.esm-bundler-CzUSCRPq.js";import"./Icon-CQ850_cO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/ProgressDonutChart",component:n},p=c=>({components:{ProgressDonutChart:n},setup(){return{args:c}},template:`
            <ProgressDonutChart
                    v-bind=args
            />`}),t=p.bind({}),g={label:"70",state:a.DEFAULT,ranges:[{color:r.SUCCESS,start:0,length:30},{color:r.INFO,start:30,length:25},{color:r.FAIL_GHOST,start:55,length:25}]},l={label:{control:"text"},state:{control:"select",options:Object.values(a)},ranges:{control:"object"}};t.argTypes=l;t.args=g;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867-97923&t=wQeUoflFyMwdW7Ne-4"}};var e,o,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    ProgressDonutChart
  },
  setup() {
    return {
      args
    };
  },
  template: \`
            <ProgressDonutChart
                    v-bind=args
            />\`
})`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const C=["Interactive"];export{t as Interactive,C as __namedExportsOrder,d as default};
