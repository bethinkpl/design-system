import{_ as t}from"./StatsSectionHeader-D5hDNbPo.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./SectionHeader-BCRcQ__g.js";import"./Icon-BCNBiMEg.js";import"./fontawesome-CXWUXLFT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BP3MsFJS.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./Divider-Cfx8bFqy.js";import"./StatsFiltersDropdown-BjrCeFwt.js";import"./Dropdown-B14FGbTx.js";import"./PopoverTriggerReference-B8D-PfSb.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./PopperContent-Q46ZxJO6.js";import"./Presence-BVs8m1Yx.js";import"./SelectList-DDs0Y1IW.js";import"./SelectListItem-BSUo8-oj.js";import"./useLegacyI18n-V_RMslSR.js";import"./Modal-3-iKun9o.js";import"./FeatureIcon-CCm0-VHM.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/StatsLayout/StatsSectionHeader",component:t,render:a=>{const[m,i]=l();return{components:{StatsSectionHeader:t},setup(){return{args:a}},methods:{selectFilter(n){i({selectedFilterKey:n})}},template:'<stats-section-header v-bind="args" @select-filter="selectFilter"><template #infoModalContent><p>Info content</p></template></stats-section-header>'}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},e={args:{filterItems:[{key:"all",label:"Wszystkie"},{key:"today",label:"Dzisiaj"},{key:"yesterday",label:"Wczoraj"}],selectedFilterKey:"all"}};e.argTypes={filterItems:{control:"object"},selectedFilterKey:{control:"text"}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const w=["Interactive"];export{e as Interactive,w as __namedExportsOrder,E as default};
