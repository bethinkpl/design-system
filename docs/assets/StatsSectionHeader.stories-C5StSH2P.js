import{_ as t}from"./StatsSectionHeader-CmzfGHpa.js";import"./vue.esm-bundler-Dauw-loN.js";import"./SectionHeader-B51fQ9Ze.js";import"./Icon-CgiTwonM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BCEo1-Pu.js";import"./Button-CaO3uHjI.js";import"./device-mzBmLsxe.js";import"./Divider-KZoliOA5.js";import"./StatsFiltersDropdown-BpFe5_Gb.js";import"./Dropdown-BEBVGfJu.js";import"./vue-popper-BDWAx5V6.js";import"./SelectList-CD47EAB3.js";import"./SelectListItem-CXw8M-BI.js";import"./useLegacyI18n-BIaJbRkl.js";import"./Modal-CHkItIDS.js";import"./FeatureIcon-DKTQ5UNF.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
