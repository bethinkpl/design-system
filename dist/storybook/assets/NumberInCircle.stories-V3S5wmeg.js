import{N as r,a as t}from"./NumberInCircle-DSjzanAp.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/NumberInCircle",component:r},n=o=>({components:{NumberInCircle:r},setup(){return o},template:'<number-in-circle :index="index" :color="color" :medium="medium">{{slotText}}</number-in-circle>'}),e=n.bind({}),s={slotText:"1",index:1,color:t.DEFAULT,medium:!1},c={color:{control:"select",options:Object.values(t)},slotText:{control:"text"}};e.argTypes=c;e.args=s;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5151%3A82053&t=y03jPaHjasRQu2Pm-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    NumberInCircle
  },
  setup() {
    return args;
  },
  template: '<number-in-circle :index="index" :color="color" :medium="medium">{{slotText}}</number-in-circle>'
})`,...e.parameters?.docs?.source}}};const p=["Interactive"];export{e as Interactive,p as __namedExportsOrder,l as default};
