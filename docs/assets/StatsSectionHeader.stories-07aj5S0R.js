import{_ as t}from"./StatsSectionHeader-CRgIvpFa.js";import"./vue.esm-bundler-vCYTN4Ic.js";import"./SectionHeader-BFmBJtcQ.js";import"./Icon-DTVXTHLv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-DwJOxZO_.js";import"./Button-Ci0iFb84.js";import"./device-mzBmLsxe.js";import"./Divider-CNFUE6e5.js";import"./StatsFiltersDropdown-BfTKDZSy.js";import"./Dropdown-yp3IpS5w.js";import"./vue-popper-ncxU2XfB.js";import"./SelectList-DWdxPloD.js";import"./SelectListItem-Cs4bBCTW.js";import"./useLegacyI18n-Do6UFLBh.js";import"./Modal-DYHKUM3F.js";import"./FeatureIcon-BSViPktd.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
