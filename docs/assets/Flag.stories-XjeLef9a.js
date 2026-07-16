import{F as o,a as r}from"./Flag-bUgw_7n3.js";import{F as n}from"./flags-3Q26n80q.js";import{t as c}from"./vue.esm-bundler-yuXcNhMB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Components/Flag",component:o},g=Object.keys(n),m=i=>({components:{Flag:o},setup(){const{size:l,flag:p}=c(i);return{size:l,flag:p,FLAGS:n}},template:'<flag :flag="FLAGS[flag]" :size="size" />'}),e=m.bind({});e.argTypes={size:{control:"select",options:Object.values(r)},flag:{control:"select",options:g}};e.args={size:r.M,flag:"FLAG_POLAND"};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=16265-4959"}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Flag
  },
  setup() {
    const {
      size,
      flag
    } = toRefs(args);
    return {
      size,
      flag,
      FLAGS
    };
  },
  template: '<flag :flag="FLAGS[flag]" :size="size" />'
})`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const z=["Interactive"];export{e as Interactive,z as __namedExportsOrder,u as default};
