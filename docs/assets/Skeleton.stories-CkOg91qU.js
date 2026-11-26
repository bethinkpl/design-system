import{D as r,S as n}from"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Prime Vue Components/Skeleton",component:r},a=o=>({components:{DsSkeleton:r},setup(){return o},template:`
        <div style="height: 200px; width: 300px;">
            <ds-skeleton :height="height" :radius="radius" :width="width" />
        </div>`}),e=a.bind({});e.args={height:"100%",radius:n.MEDIUM,width:"100%"};e.argTypes={radius:{control:"select",options:Object.values(n)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10069-3679&m=dev"}};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const l=["Interactive"];export{e as Interactive,l as __namedExportsOrder,c as default};
