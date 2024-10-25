import{S as l}from"./SelectListSectionTitle-CF7GIQ3x.js";import{S as n}from"./SelectList-CQ9CvqLg.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/SelectList/SelectListSectionTitle",component:l},o=r=>({components:{SelectList:n,SelectListSectionTitle:l},setup(){return r},template:`
        <select-list>
            <select-list-section-title :label="label" :is-uppercase="isUppercase" />
        </select-list>`}),c={label:{control:"text"},isUppercase:{control:"boolean"}},e=o.bind({});e.args={label:"Select List Section Title",isUppercase:!0};e.argTypes=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5367-94240&t=rgPXAVgiWbp0FLGZ-4"}};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const d=["Interactive"];export{e as Interactive,d as __namedExportsOrder,g as default};
