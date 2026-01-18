import{_ as t}from"./StatsSectionHeader-YgmyxnMh.js";import"./vue.esm-bundler-ByLATHYC.js";import"./SectionHeader-BWTn20eL.js";import"./Icon-f7fVVYjX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BtPgywma.js";import"./Button-DnGEop_q.js";import"./device-9fgosCm4.js";import"./Divider-DibbBBgz.js";import"./StatsFiltersDropdown-D08_LanE.js";import"./Dropdown-J1w4syz7.js";import"./vue-popper-Ba4T36Lb.js";import"./SelectList-BMW_ehXo.js";import"./SelectListItem-dS42VfiT.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./Modal-CZ5wdDv9.js";import"./FeatureIcon-_Yj5AQyL.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
