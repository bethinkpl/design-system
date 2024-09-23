import{R as e,a as o,b as n}from"./RadioButton-BdpNIFj9.js";import{a as p,b as d,t as i}from"./SelectionControl.sb.shared-BWifjoMU.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./SelectionControl-DB3v0tUg.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R={title:"Components/Form/RadioButton",component:e},m=(a,{updateArgs:s})=>({components:{RadioButton:e},setup(){return{args:a}},methods:{onIsSelectedUpdated(r){s({isSelected:r})}},template:i("radio-button")}),t=m.bind({});t.argTypes=p(n,o);t.args=d(n,o);t.parameters={actions:{handles:["click","toggle"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    RadioButton
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
  template: template('radio-button')
})`,...t.parameters?.docs?.source}}};const T=["Interactive"];export{t as Interactive,T as __namedExportsOrder,R as default};
