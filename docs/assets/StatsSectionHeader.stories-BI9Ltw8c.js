import{_ as t}from"./StatsSectionHeader-CZQGzGUz.js";import"./vue.esm-bundler-CXPnezKh.js";import"./SectionHeader-DGxl9RDD.js";import"./Icon-oTYEsZAB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-xbDIoPT0.js";import"./Button-Kce8Ha0I.js";import"./device-9fgosCm4.js";import"./Divider-CytxH5-u.js";import"./StatsFiltersDropdown-B8ra_brW.js";import"./Dropdown-Ba0CBv43.js";import"./vue-popper-SU3W4AQG.js";import"./SelectList-CtQ4CZyy.js";import"./SelectListItem-CULgT5jr.js";import"./useLegacyI18n-DX2qy8WE.js";import"./Modal-2KSK5ixr.js";import"./FeatureIcon-DZpC6cnp.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
