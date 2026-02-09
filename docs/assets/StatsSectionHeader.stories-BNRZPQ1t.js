import{_ as t}from"./StatsSectionHeader-BOVpFQ9A.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./SectionHeader-CCrcK0ss.js";import"./Icon-C3NipVtS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BaNdHxRJ.js";import"./Button-CSQ0sWbb.js";import"./device-9fgosCm4.js";import"./Divider-CsYapLKZ.js";import"./StatsFiltersDropdown-C0I9-Z_Z.js";import"./Dropdown-DROiglkN.js";import"./vue-popper-B9Lw6d0S.js";import"./SelectList-D6U7eKfK.js";import"./SelectListItem-BwTU_etQ.js";import"./useLegacyI18n-BcTBReTN.js";import"./Modal-CG5far8n.js";import"./FeatureIcon-CGs-kK6H.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
