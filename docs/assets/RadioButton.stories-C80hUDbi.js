import{R as n,a as r,b as a}from"./RadioButton-DO6I2WfN.js";import{t as m,a as c,b as u}from"./SelectionControl.sb.shared-BWifjoMU.js";import{w as g}from"./decorator-B_8W69Nd.js";import"./vue.esm-bundler-CC_vsnCp.js";import"./SelectionControl-D6-Q7FjJ.js";import"./Icon-BxW-ny3A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Form/RadioButton",component:n,decorators:[g]},_=p=>{const[I,i]=l();return{components:{RadioButton:n},setup(){return{args:p}},methods:{onIsSelectedUpdated(d){i({isSelected:d})}},template:m("radio-button")}},t=_.bind({});t.argTypes=c(a,r);t.args=u(a,r);t.parameters={actions:{handles:["click","toggle"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0"}};var e,o,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
  };
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const y=["Interactive"];export{t as Interactive,y as __namedExportsOrder,w as default};
