import{P as e,a as o,b as r}from"./ProgressDonutChart-HFDc8ISW.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"Components/ProgressDonutChart",component:e},n=s=>({components:{ProgressDonutChart:e},setup(){return{args:s}},template:`
            <ProgressDonutChart
                    v-bind=args
            />`}),t=n.bind({}),a={label:"70",state:o.DEFAULT,ranges:[{color:r.SUCCESS,start:0,length:30},{color:r.INFO,start:30,length:25},{color:r.FAIL_GHOST,start:55,length:25}]},c={label:{control:"text"},state:{control:"select",options:Object.values(o)},ranges:{control:"object"}};t.argTypes=c;t.args=a;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867-97923&t=wQeUoflFyMwdW7Ne-4"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};const u=["Interactive"];export{t as Interactive,u as __namedExportsOrder,i as default};
