import{I as t,s as i,T as r}from"./ItemsList-BLp-1mNZ.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"foundations/Typography/Variables",component:t},a=e=>({components:{ItemsList:t},setup(){return e},template:`
        <items-list :items-lists="itemsLists" :type="type"></items-list>`}),s=a.bind({}),o={itemsLists:[{title:"Variables",list:i,class:"-ds-theme-wnl"}],type:r.TYPOGRAPHY};s.args=o;s.parameters={design:{type:"figma",url:"https://www.figma.com/file/ABEasgiwLLs91MISXwV7Vs/LMS-TypographyTokens---experiments-v2?node-id=0%3A1"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ItemsList
  },
  setup() {
    return args;
  },
  template: \`
        <items-list :items-lists="itemsLists" :type="type"></items-list>\`
})`,...s.parameters?.docs?.source}}};const c=["Variables"];export{s as Variables,c as __namedExportsOrder,l as default};
