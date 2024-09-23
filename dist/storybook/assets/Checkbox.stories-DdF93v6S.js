import{D as t,C as s,a as o}from"./Checkbox-DKqKTnpD.js";import{a as p,b as c,t as m}from"./SelectionControl.sb.shared-BWifjoMU.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./SelectionControl-DB3v0tUg.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/Form/Checkbox",component:t},d=(n,{updateArgs:a})=>({components:{Checkbox:t},setup(){return{args:n}},methods:{onIsSelectedUpdated(r){a({isSelected:r})}},template:m("checkbox")}),e=d.bind({});e.argTypes=p(o,s);e.args=c(o,s);e.parameters={actions:{handles:["click","toggle"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    onIsSelectedUpdated(isSelected) {
      updateArgs({
        isSelected
      });
    }
  },
  template: template('checkbox')
})`,...e.parameters?.docs?.source}}};const k=["Interactive"];export{e as Interactive,k as __namedExportsOrder,b as default};
