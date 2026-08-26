import{_ as t}from"./StatsSectionHeader-C9uR-peY.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./SectionHeader-bVndfzsQ.js";import"./Icon-CdUzGdbx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-QdkwLB9f.js";import"./Button-DXBV2lSl.js";import"./device-mzBmLsxe.js";import"./Divider-Bk_mEbdR.js";import"./StatsFiltersDropdown-BV_qv_sB.js";import"./Dropdown-BE2dQt1v.js";import"./vue-popper-C7oWdJ_V.js";import"./SelectList-s7WnQXXV.js";import"./SelectListItem-CTvg9LnI.js";import"./useLegacyI18n-Bv0SIZks.js";import"./Modal-SmLIq-Cc.js";import"./FeatureIcon-zAUFxSrq.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
