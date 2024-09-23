import{S as t}from"./SelectListSectionTitle-cOLUOztk.js";import{S as i}from"./SelectList-BiYiZ8_O.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Components/SelectList/SelectListSectionTitle",component:t},l=s=>({components:{SelectList:i,SelectListSectionTitle:t},setup(){return s},template:`
        <select-list>
            <select-list-section-title :label="label" :is-uppercase="isUppercase" />
        </select-list>`}),r={label:{control:"text"},isUppercase:{control:"boolean"}},e=l.bind({});e.args={label:"Select List Section Title",isUppercase:!0};e.argTypes=r;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5367-94240&t=rgPXAVgiWbp0FLGZ-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    SelectList,
    SelectListSectionTitle
  },
  setup() {
    return args;
  },
  template: \`
        <select-list>
            <select-list-section-title :label="label" :is-uppercase="isUppercase" />
        </select-list>\`
})`,...e.parameters?.docs?.source}}};const m=["Interactive"];export{e as Interactive,m as __namedExportsOrder,p as default};
