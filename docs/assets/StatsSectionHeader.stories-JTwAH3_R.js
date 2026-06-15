import{_ as t}from"./StatsSectionHeader-DsgQyTvE.js";import"./vue.esm-bundler-KKLRPfRG.js";import"./SectionHeader-BFnZefsw.js";import"./Icon-SK4lyiHa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-B4mxds2z.js";import"./Button-CCs6ZaPM.js";import"./device-mzBmLsxe.js";import"./Divider-Cv_Se4zt.js";import"./StatsFiltersDropdown-BWw_eHJj.js";import"./Dropdown-CWQJXJg2.js";import"./vue-popper-raBrryaq.js";import"./SelectList-OmCskADB.js";import"./SelectListItem-BHWxxeyW.js";import"./useLegacyI18n-D1OoysyW.js";import"./Modal-CkTAJ_O3.js";import"./FeatureIcon-Bv8h2-yz.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
