import{_ as t}from"./StatsSectionHeader-CTb7C6mZ.js";import"./vue.esm-bundler-BTN_IDVo.js";import"./SectionHeader-XZRrJjG4.js";import"./Icon-BPbRwQJM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-Fo_Wzq9T.js";import"./Button-CyMWnu26.js";import"./device-mzBmLsxe.js";import"./Divider-B3Tv7vsP.js";import"./StatsFiltersDropdown-DZxzj6O0.js";import"./Dropdown-DlVtzzcV.js";import"./vue-popper-XT0qZTIy.js";import"./SelectList-B2kV4tb_.js";import"./SelectListItem-YboyOec3.js";import"./useLegacyI18n-sB4PGS2f.js";import"./Modal-B4zbQIfg.js";import"./FeatureIcon-BO16Bign.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
