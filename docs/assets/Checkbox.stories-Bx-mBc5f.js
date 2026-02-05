import{C as s,a as r,b as u,c as v,d}from"./Checkbox-BNtUWY9a.js";import{w as S}from"./decorator-dmUe8Ksx.js";import{c as o}from"./vue.esm-bundler-BEu-HfQJ.js";import"./index-yKlVThWI.js";import"./Icon-C3NipVtS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Form/Checkbox",component:s,decorators:[S]},b=t=>{const[g,c]=C();return{components:{Checkbox:s},setup(){const p=o(()=>{const{default:V,modelValue:_,...f}=t;return f}),m=o(()=>t.default),i=o(()=>t.modelValue);return{defaultSlot:m,props:p,modelValue:i,updateArgs:c}},template:`
            <Checkbox 
                v-bind="props"
                :model-value="modelValue"
                @update:model-value="(value) => updateArgs({ modelValue: value })"
            >
                <span v-if="defaultSlot" v-html="defaultSlot" />
            </Checkbox>
        `}},e=b.bind({});e.argTypes={size:{control:"select",options:Object.values(d)},modelValue:{control:"select",options:Object.values(v)},state:{control:"select",options:Object.values(u)},elevation:{control:"select",options:Object.values(r)},default:{control:"text"}};e.args={default:"Example label",modelValue:!1,size:d.SMALL,state:u.DEFAULT,elevation:r.X_SMALL,value:"example"};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=7269-127863&m=dev"}};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      Checkbox
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
        \`
  };
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,L as default};
