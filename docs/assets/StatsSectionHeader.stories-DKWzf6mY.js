import{_ as t}from"./StatsSectionHeader-D8xOdaml.js";import"./vue.esm-bundler-DJk5tYYm.js";import"./SectionHeader-BfHcvHTe.js";import"./Icon-Bo2gGD6U.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BwUIWo5r.js";import"./Button-6FZN3-82.js";import"./device-9fgosCm4.js";import"./Divider-B2bMofDY.js";import"./StatsFiltersDropdown-igUDx7tm.js";import"./Dropdown-CwzCXGHP.js";import"./vue-popper-BUhGuvKG.js";import"./SelectList-DvvxJLga.js";import"./SelectListItem-CCEzszIU.js";import"./useLegacyI18n-NHhnry62.js";import"./Modal-Q-Sm_tEj.js";import"./FeatureIcon-D4v2A5Cm.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    filterItems: [{
      key: 'all',
      label: 'Wszystkie'
    }, {
      key: 'today',
      label: 'Dzisiaj'
    }, {
      key: 'yesterday',
      label: 'Wczoraj'
    }],
    selectedFilterKey: 'all'
  } as Args
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const h=["Interactive"];export{e as Interactive,h as __namedExportsOrder,W as default};
