import{R as r,a as c,b as i}from"./RadioButton-VGVJOphY.js";import{w as l}from"./decorator-CcL-F-0p.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./Icon-CdUzGdbx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const m=e=>`
		<${e} v-bind="args" @update:is-selected="onIsSelectedUpdated"/>`,u=(e,o)=>({size:{control:"select",options:Object.values(e)},label:{control:"text"},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(o)}}),g=(e,o)=>({label:"Example label",isSelected:!1,size:e.SMALL,state:o.DEFAULT}),{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:"Components/Form/RadioButton",component:r,decorators:[l]},S=e=>{const[o,d]=_();return{components:{RadioButton:r},setup(){return{args:e}},methods:{onIsSelectedUpdated(p){d({isSelected:p})}},template:m("radio-button")}},t=S.bind({});t.argTypes=u(i,c);t.args=g(i,c);t.parameters={actions:{handles:["click","toggle"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=1552-34962&t=Ui6dF84wekRpqsXb-0"}};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["Interactive"];export{t as Interactive,E as __namedExportsOrder,B as default};
