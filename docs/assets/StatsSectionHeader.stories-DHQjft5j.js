import{_ as t}from"./StatsSectionHeader-Bc2G2TlH.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./SectionHeader-BXMcrwnI.js";import"./Icon-QFU__4e-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-DPCw5IX6.js";import"./Button-4WEdqI-U.js";import"./device-mzBmLsxe.js";import"./Divider-CbFkO93G.js";import"./StatsFiltersDropdown-DqDFkNFp.js";import"./Dropdown-DnnVZ6l4.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./SelectList-Df3d7moM.js";import"./SelectListItem-bHwieP_d.js";import"./useLegacyI18n-AnNgdHoQ.js";import"./Modal-B7FE1d7L.js";import"./FeatureIcon-CQN5_teu.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const E=["Interactive"];export{e as Interactive,E as __namedExportsOrder,D as default};
