import{D as r,C as n,a}from"./Checkbox-B9iZ2V6w.js";import{a as i,b as d,t as g}from"./SelectionControl.sb.shared-BWifjoMU.js";import{w as l}from"./decorator-CSnIf-k5.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./SelectionControl-DBJI2z3t.js";import"./Icon-Mp5xMpaO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-BZawosSj.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Form/Checkbox",component:r,decorators:[l]},_=p=>{const[h,c]=u();return{components:{Checkbox:r},setup(){return{args:p}},methods:{onIsSelectedUpdated(m){c({isSelected:m})}},template:g("checkbox")}},e=_.bind({});e.argTypes=i(a,n);e.args=d(a,n);e.parameters={actions:{handles:["click","toggle"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0"}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
  };
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,E as default};
