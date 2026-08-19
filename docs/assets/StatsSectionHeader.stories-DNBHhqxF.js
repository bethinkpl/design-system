import{_ as t}from"./StatsSectionHeader-BuWVwNYT.js";import"./vue.esm-bundler-B82wjiSt.js";import"./SectionHeader-Cn2OMQqw.js";import"./Icon-B79JJqqy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-DKdAEAea.js";import"./Button-DK14lfTl.js";import"./device-mzBmLsxe.js";import"./Divider-Bxxz8Ron.js";import"./StatsFiltersDropdown-B0HpVbci.js";import"./Dropdown-C77ALwXr.js";import"./vue-popper-CeoH2ak3.js";import"./SelectList-DZZ2xEty.js";import"./SelectListItem-BJA7RJnu.js";import"./useLegacyI18n-CQM7nz1H.js";import"./Modal-Y6lEWRWI.js";import"./FeatureIcon-B6uzddnt.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
