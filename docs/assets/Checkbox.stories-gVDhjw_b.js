import{C as s,a as r,b as u,c as v,d}from"./Checkbox-DLSyHYgd.js";import{w as S}from"./decorator-CcL-F-0p.js";import{b as o}from"./vue.esm-bundler-BjwGMXGm.js";import"./VisuallyHidden-dgGAb0ge.js";import"./index-3uRCwzDq.js";import"./Collection-CLGbUG7t.js";import"./VisuallyHiddenInput-CHcbOPWj.js";import"./Icon-CdUzGdbx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:"Components/Form/Checkbox",component:s,decorators:[S]},b=t=>{const[g,p]=C();return{components:{Checkbox:s},setup(){const m=o(()=>{const{default:V,modelValue:_,...f}=t;return f}),c=o(()=>t.default),i=o(()=>t.modelValue);return{defaultSlot:c,props:m,modelValue:i,updateArgs:p}},template:`
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
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const X=["Interactive"];export{e as Interactive,X as __namedExportsOrder,K as default};
