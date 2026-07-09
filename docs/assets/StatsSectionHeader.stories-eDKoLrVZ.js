import{_ as t}from"./StatsSectionHeader-BlTP-ddH.js";import"./vue.esm-bundler-CjwGEpld.js";import"./SectionHeader-BBfn46yf.js";import"./Icon-CyG6-QCe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-Z2JnqBV8.js";import"./Button-Dl-HN0v2.js";import"./device-mzBmLsxe.js";import"./Divider-BMHcMlOr.js";import"./StatsFiltersDropdown-CzmmTUef.js";import"./Dropdown-DBxFtsnZ.js";import"./vue-popper-BafAWwUy.js";import"./SelectList-BB0sCuBS.js";import"./SelectListItem-BPXsxM-t.js";import"./useLegacyI18n-BPFocabW.js";import"./Modal-BIuIn3bk.js";import"./FeatureIcon-CtCoA9t3.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
