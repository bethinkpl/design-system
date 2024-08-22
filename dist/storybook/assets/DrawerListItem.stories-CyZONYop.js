import{D as t,a}from"./DrawerListItem-0wCE3ZPx.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Components/Drawer/DrawerListItem",component:t},s=r=>({components:{DrawerListItem:t},setup(){return r},template:`<div style="height: 300px; width: 200px;">
        <drawer-list-item :label="label" :value-text="valueText" :state="state" />
        </div>`}),e=s.bind({}),n={label:"Label",valueText:"value",state:a.DEFAULT},o={state:{control:"select",options:Object.values(a)}};e.argTypes=o;e.args=n;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    DrawerListItem
  },
  setup() {
    return args;
  },
  template: \`<div style="height: 300px; width: 200px;">
        <drawer-list-item :label="label" :value-text="valueText" :state="state" />
        </div>\`
})`,...e.parameters?.docs?.source}}};const d=["Interactive"];export{e as Interactive,d as __namedExportsOrder,c as default};
