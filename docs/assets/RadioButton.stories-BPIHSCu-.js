import{R as r,a as c,b as d}from"./RadioButton-COHkBEEI.js";import{w as l}from"./decorator-dmUe8Ksx.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./Icon-CKWWk5j6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const m=e=>`
		<${e} v-bind="args" @update:is-selected="onIsSelectedUpdated"/>`,u=(e,s)=>({size:{control:"select",options:Object.values(e)},label:{control:"text"},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(s)}}),g=(e,s)=>({label:"Example label",isSelected:!1,size:e.SMALL,state:s.DEFAULT}),{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"Components/Form/RadioButton",component:r,decorators:[l]},S=e=>{const[s,i]=_();return{components:{RadioButton:r},setup(){return{args:e}},methods:{onIsSelectedUpdated(p){i({isSelected:p})}},template:m("radio-button")}},t=S.bind({});t.argTypes=u(d,c);t.args=g(d,c);t.parameters={actions:{handles:["click","toggle"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0"}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const B=["Interactive"];export{t as Interactive,B as __namedExportsOrder,f as default};
