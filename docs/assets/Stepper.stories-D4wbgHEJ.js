import{f as _,c as t,k as n,a as l,L as a,F as S,H as h,o as r,N as b}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={class:"ds-stepper"},f={key:0,class:"ds-stepper__header"},v={class:"ds-stepper__title"},C={key:0,class:"ds-stepper__counter"},L={key:0,class:"ds-stepper__counterLabel"},V={key:1,class:"ds-stepper__counterValue"},k={class:"ds-stepper__steps"},m=_({__name:"Stepper",props:{title:{},counterLabel:{},hasCounterValue:{type:Boolean,default:!0},totalSteps:{},currentStep:{}},setup(o){return(e,B)=>(r(),t("div",g,[e.title||e.counterLabel||e.hasCounterValue?(r(),t("div",f,[l("div",v,a(e.title),1),e.counterLabel||e.hasCounterValue?(r(),t("div",C,[e.counterLabel?(r(),t("span",L,a(e.counterLabel),1)):n("",!0),e.hasCounterValue?(r(),t("span",V,a(e.currentStep)+"/"+a(e.totalSteps),1)):n("",!0)])):n("",!0)])):n("",!0),l("div",k,[(r(!0),t(S,null,h(e.totalSteps,p=>(r(),t("div",{key:p,class:b(["ds-stepper__step",{"-ds-active":p<=e.currentStep}])},null,2))),128))])]))}}),d=y(m,[["__scopeId","data-v-9c15053c"]]);m.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"counterLabel",required:!1,type:{name:"string"}},{name:"hasCounterValue",required:!1,type:{name:"boolean"}},{name:"totalSteps",required:!0,type:{name:"number"}},{name:"currentStep",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Stepper/Stepper.vue"]};const D={title:"Components/Stepper",component:d},I=o=>({components:{Stepper:d},setup(){return o},template:`
        <stepper
            :title="title"
            :counter-label="counterLabel"
            :has-counter-value="hasCounterValue"
            :total-steps="totalSteps"
            :current-step="currentStep"
        />
        `}),s=I.bind({}),N={title:"Title here",counterLabel:"Counter Label",hasCounterValue:!0,totalSteps:5,currentStep:1},q={title:{control:"text"},counterLabel:{control:"text"},hasCounterValue:{control:"boolean"},totalSteps:{control:{type:"number",min:1}},currentStep:{control:{type:"number",min:0}}};s.argTypes=q;s.args=N;s.parameters={design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=240-17773&m=dev"}};var u,c,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const E=["Interactive"];export{s as Interactive,E as __namedExportsOrder,D as default};
