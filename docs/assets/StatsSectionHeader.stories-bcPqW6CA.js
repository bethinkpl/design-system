import{_ as t}from"./StatsSectionHeader-B36AUzwh.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./SectionHeader-CuC2EHHX.js";import"./Icon-sA9NtGkq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-Crd4JefZ.js";import"./Button-Chm9wFwa.js";import"./device-mzBmLsxe.js";import"./Divider-BPKGZVAH.js";import"./StatsFiltersDropdown-4eX_6f18.js";import"./Dropdown-wFC1DUBi.js";import"./vue-popper-CjuaM6Jg.js";import"./SelectList--Khxt9pR.js";import"./SelectListItem-Duhk-hu5.js";import"./useLegacyI18n-DK3QJ9_8.js";import"./Modal-Mve9xzFy.js";import"./FeatureIcon-DyrPtZ0T.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
