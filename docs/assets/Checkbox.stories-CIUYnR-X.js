import{C as s,a as r,b as u,c as f,d as c}from"./Checkbox-BD8fLSpN.js";import{w as k}from"./decorator-dmUe8Ksx.js";import{c as o}from"./vue.esm-bundler-ByLATHYC.js";import{D as v}from"./Banner-CI0kW3HZ.js";import"./Icon-f7fVVYjX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";import"./Button-DnGEop_q.js";import"./Divider-DibbBBgz.js";import"./IconButton-BtPgywma.js";import"./device-9fgosCm4.js";import"./FeatureIcon-_Yj5AQyL.js";const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:"Components/Form/Checkbox",component:s,decorators:[k]},b=t=>{const[w,m]=S();return{components:{Checkbox:s,Banner:v},setup(){const p=o(()=>{const{default:C,modelValue:y,...g}=t;return g}),i=o(()=>t.default),d=o(()=>t.modelValue);return{defaultSlot:i,props:p,modelValue:d,updateArgs:m}},template:`
            <Checkbox 
                v-bind="props"
                :model-value="modelValue"
                @update:model-value="(value) => updateArgs({ modelValue: value })"
            >
                <span v-if="defaultSlot" v-html="defaultSlot" />
            </Checkbox>
            <Banner color="danger" title="Uwaga! Mogą wystąpić problemy z pisaniem testów jednostkowych korzystających z tego komponentu. Unikaj jego używania. A jeśli jest rok 2026 i wciąż widzisz ten komunikat — nakrzycz na Karola!" title-in-color />
        `}},e=b.bind({});e.argTypes={size:{control:"select",options:Object.values(c)},modelValue:{control:"select",options:Object.values(f)},state:{control:"select",options:Object.values(u)},elevation:{control:"select",options:Object.values(r)},default:{control:"text"}};e.args={default:"Example label",modelValue:!1,size:c.SMALL,state:u.DEFAULT,elevation:r.X_SMALL,value:"example"};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=7269-127863&m=dev"}};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      Checkbox,
      Banner
    },
    setup() {
      const props = computed(() => {
        const {
          default: defaultSlot,
          modelValue,
          ...rest
        } = args;
        return rest;
      });
      const defaultSlot = computed(() => args.default);
      const modelValue = computed(() => args.modelValue);
      return {
        defaultSlot,
        props,
        modelValue,
        updateArgs
      };
    },
    template: \`
            <Checkbox 
                v-bind="props"
                :model-value="modelValue"
                @update:model-value="(value) => updateArgs({ modelValue: value })"
            >
                <span v-if="defaultSlot" v-html="defaultSlot" />
            </Checkbox>
            <Banner color="danger" title="Uwaga! Mogą wystąpić problemy z pisaniem testów jednostkowych korzystających z tego komponentu. Unikaj jego używania. A jeśli jest rok 2026 i wciąż widzisz ten komunikat — nakrzycz na Karola!" title-in-color />
        \`
  };
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,K as default};
