import{D as e,a as r}from"./Drawer-BDcdfrzC.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Components/Drawer",component:e},o=n=>({components:{Drawer:e},setup(){return n},template:`<div style="height: 300px; width: 200px;">
        <drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter">
        <template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
        <div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
        <template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
        </drawer>
        </div>`}),t=o.bind({}),a={position:r.RIGHT,stickyHeader:!0,stickyFooter:!0},s={position:{control:"select",options:Object.values(r)}};t.argTypes=s;t.args=a;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3343%3A61189"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Drawer
  },
  setup() {
    return args;
  },
  template: \`<div style="height: 300px; width: 200px;">
        <drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter">
        <template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
        <div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
        <template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
        </drawer>
        </div>\`
})`,...t.parameters?.docs?.source}}};const c=["Interactive"];export{t as Interactive,c as __namedExportsOrder,p as default};
