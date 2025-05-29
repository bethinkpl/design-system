import{N as n,a as s}from"./NumberInCircle-Bl3O1NY9.js";import"./vue.esm-bundler-C__e7YM5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/NumberInCircle",component:n},i=c=>({components:{NumberInCircle:n},setup(){return c},template:'<number-in-circle :index="index" :color="color" :medium="medium">{{slotText}}</number-in-circle>'}),e=i.bind({}),m={slotText:"1",index:1,color:s.DEFAULT,medium:!1},a={color:{control:"select",options:Object.values(s)},slotText:{control:"text"}};e.argTypes=a;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5151%3A82053&t=y03jPaHjasRQu2Pm-0"}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    NumberInCircle
  },
  setup() {
    return args;
  },
  template: '<number-in-circle :index="index" :color="color" :medium="medium">{{slotText}}</number-in-circle>'
})`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const x=["Interactive"];export{e as Interactive,x as __namedExportsOrder,d as default};
