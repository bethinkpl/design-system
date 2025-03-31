import{D as s,a as n}from"./DrawerListItem-BCPF0NKt.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./Icon-BPz80dqH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Drawer/DrawerListItem",component:s},i=o=>({components:{DrawerListItem:s},setup(){return o},template:`<div style="height: 300px; width: 200px;">
        <drawer-list-item :label="label" :value-text="valueText" :state="state" />
        </div>`}),e=i.bind({}),l={label:"Label",valueText:"value",state:n.DEFAULT},p={state:{control:"select",options:Object.values(n)}};e.argTypes=p;e.args=l;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4"}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DrawerListItem
  },
  setup() {
    return args;
  },
  template: \`<div style="height: 300px; width: 200px;">
        <drawer-list-item :label="label" :value-text="valueText" :state="state" />
        </div>\`
})`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const v=["Interactive"];export{e as Interactive,v as __namedExportsOrder,g as default};
