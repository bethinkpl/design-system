import{S as o}from"./Stepper-CDGyQ3nA.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"Components/Stepper",component:o},s=a=>({components:{Stepper:o},setup(){return a},template:`
        <stepper
            :title="title"
            :counter-label="counterLabel"
            :has-counter-value="hasCounterValue"
            :total-steps="totalSteps"
            :current-step="currentStep"
        />
        `}),e=s.bind({}),p={title:"Title here",counterLabel:"Counter Label",hasCounterValue:!0,totalSteps:5,currentStep:1},l={title:{control:"text"},counterLabel:{control:"text"},hasCounterValue:{control:"boolean"},totalSteps:{control:{type:"number",min:1}},currentStep:{control:{type:"number",min:0}}};e.argTypes=l;e.args=p;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=240-17773&m=dev"}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Stepper
  },
  setup() {
    return args;
  },
  template: \`
        <stepper
            :title="title"
            :counter-label="counterLabel"
            :has-counter-value="hasCounterValue"
            :total-steps="totalSteps"
            :current-step="currentStep"
        />
        \`
})`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const S=["Interactive"];export{e as Interactive,S as __namedExportsOrder,i as default};
