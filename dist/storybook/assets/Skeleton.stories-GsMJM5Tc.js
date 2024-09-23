import{D as t,S as s}from"./Skeleton-BrRagspw.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Prime Vue Components/Skeleton",component:t},n=i=>({components:{DsSkeleton:t},setup(){return i},template:`
        <div style="height: 200px; width: 300px;">
            <ds-skeleton :height="height" :radius="radius" :width="width" />
        </div>`}),e=n.bind({});e.args={height:"100%",radius:s.MEDIUM,width:"100%"};e.argTypes={radius:{control:"select",options:Object.values(s)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10069-3679&m=dev"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    DsSkeleton
  },
  setup() {
    return args;
  },
  template: \`
        <div style="height: 200px; width: 300px;">
            <ds-skeleton :height="height" :radius="radius" :width="width" />
        </div>\`
})`,...e.parameters?.docs?.source}}};const p=["Interactive"];export{e as Interactive,p as __namedExportsOrder,d as default};
