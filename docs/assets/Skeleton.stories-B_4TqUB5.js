import{D as n,S as r}from"./Skeleton-BbafKE6W.js";import"./vue.esm-bundler-BSCmGRHc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Prime Vue Components/Skeleton",component:n},a=o=>({components:{DsSkeleton:n},setup(){return o},template:`
        <div style="height: 200px; width: 300px;">
            <ds-skeleton :height="height" :radius="radius" :width="width" />
        </div>`}),e=a.bind({});e.args={height:"100%",radius:r.MEDIUM,width:"100%"};e.argTypes={radius:{control:"select",options:Object.values(r)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10069-3679&m=dev"}};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const c=["Interactive"];export{e as Interactive,c as __namedExportsOrder,h as default};
