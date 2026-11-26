import{F as o,a as r,b as n}from"./flags-D4eeNDn_.js";import{t as g}from"./vue.esm-bundler-S9zc6Wpc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Components/Flag",component:o},p=Object.keys(r),m=i=>({components:{Flag:o},setup(){const{size:l,flag:c}=g(i);return{size:l,flag:c,FLAGS:r}},template:'<flag :flag="FLAGS[flag]" :size="size" />'}),e=m.bind({});e.argTypes={size:{control:"select",options:Object.values(n)},flag:{control:"select",options:p}};e.args={size:n.M,flag:"FLAG_POLAND"};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=16265-4959"}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Interactive"];export{e as Interactive,u as __namedExportsOrder,S as default};
