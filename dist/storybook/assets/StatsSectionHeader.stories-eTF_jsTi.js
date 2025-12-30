import{_ as t}from"./StatsSectionHeader-Bhq6GV2L.js";import"./vue.esm-bundler-ByLATHYC.js";import"./SectionHeader-ks1RjojD.js";import"./Icon-CcU0ohUz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-T11_QcZ4.js";import"./Button-DZhdNmod.js";import"./device-9fgosCm4.js";import"./Divider-BuSkM_S-.js";import"./StatsFiltersDropdown-DT7xnZ7g.js";import"./Dropdown-CFZXuRhf.js";import"./vue-popper-Ba4T36Lb.js";import"./SelectList-D2-4t1B8.js";import"./SelectListItem-BBxghzdK.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./Modal-BfxjIRUM.js";import"./FeatureIcon-BR4a0irH.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
