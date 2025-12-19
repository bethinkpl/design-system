import{S as s}from"./StatsLayout-DO-OS2X3.js";import{_ as h}from"./StatsSectionHeader-CRhUEdJz.js";import{_ as S}from"./StatsResetBanner-CqaWXCHk.js";import{d as _,a as v,y as C,o as M}from"./vue.esm-bundler-ByLATHYC.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Card-DyE0xWNU.js";import"./Divider-DibbBBgz.js";import"./LoadingBar-DlzzOPbB.js";import"./ContainerRibbon-BiooT6dl.js";import"./StatsErrorBanner-CGYD_N_X.js";import"./Icon-teNLjdI5.js";import"./Banner-CrI_nU7F.js";import"./Button-DMAqAuNX.js";import"./IconButton-Bc9h5hb4.js";import"./device-9fgosCm4.js";import"./FeatureIcon-8R73baOQ.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./SpinnerLoading-Cn7_zlyl.js";import"./SectionHeader-BDMANL-t.js";import"./StatsFiltersDropdown-qtYG8hHx.js";import"./Dropdown-J1w4syz7.js";import"./vue-popper-Ba4T36Lb.js";import"./SelectList-BMW_ehXo.js";import"./SelectListItem-CRZ-Nv7u.js";import"./Modal-JhlVb3Zn.js";import"./HelpButton-SQbKeCqJ.js";import"./Tooltip-B2ZtAco5.js";const w={class:"ds-slotPlaceholder"},g=_({__name:"SlotPlaceholder",props:{label:{}},setup(e){return(t,k)=>(M(),v("div",w,C(t.label||"Slot"),1))}}),r=z(g,[["__scopeId","data-v-ee1c31c1"]]);g.__docgenInfo={exportName:"default",displayName:"SlotPlaceholder",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/design-system/design-system/.storybook/SlotPlaceholder/SlotPlaceholder.vue"]};const n=(e=5,t="<slot-placeholder/>")=>Array.from({length:e},(k,I)=>`<template v-slot:["statsItem-${I}"]>${t}</template>`).join(""),te={title:"Components/StatsLayout/StatsLayout",component:s,render:e=>({components:{StatsLayout:s,SlotPlaceholder:r},setup(){return{args:e}},template:`
        <stats-layout v-bind="args">
            <template #sectionHeader>
               <slot-placeholder label="Slot nagłówka sekcji" />
            </template>
            <template #overallStatsItem><slot-placeholder /></template>
            <template #resetBanner>
               <slot-placeholder label="Slot banera resetu" />
            </template>
            ${n()}
        </stats-layout>
        `}),args:{hasGridHeader:!0,hasRightColumn:!0,leftColumnLabel:"Zakres",rightColumnLabel:"Wyniki",statsItemsHeaderLabel:"{Nazwa użytej taksonomii}",isLoading:!1,hasError:!1},argTypes:{hasGridHeader:{control:"boolean"},hasRightColumn:{control:"boolean"},leftColumnLabel:{control:"text"},rightColumnLabel:{control:"text"},statsItemsHeaderLabel:{control:"text"},isLoading:{control:"boolean"},hasError:{control:"boolean"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},a={},l={render:e=>({components:{StatsLayout:s,StatsSectionHeader:h,StatsResetBanner:S,SlotPlaceholder:r},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem><slot-placeholder /></template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${n()}
            </stats-layout>
`})},o={render:e=>{const t='<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>';return{components:{StatsLayout:s,StatsSectionHeader:h,StatsResetBanner:S,SlotPlaceholder:r},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem>
                ${t}
                </template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${n(5,t)}
            </stats-layout>`}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return {
      components: {
        StatsLayout,
        StatsSectionHeader,
        StatsResetBanner,
        SlotPlaceholder
      },
      setup() {
        return {
          args,
          filterItems: [{
            key: 'all',
            label: 'Wszystkie'
          }, {
            key: 'week',
            label: 'Tydzień'
          }, {
            key: 'month',
            label: 'Miesiąc'
          }]
        };
      },
      template: \`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem><slot-placeholder /></template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                \${prepareItemsTemplate()}
            </stats-layout>
\`
    };
  }
}`,...(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,y,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const itemTemplate = \`<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>\`;
    return {
      components: {
        StatsLayout,
        StatsSectionHeader,
        StatsResetBanner,
        SlotPlaceholder
      },
      setup() {
        return {
          args,
          filterItems: [{
            key: 'all',
            label: 'Wszystkie'
          }, {
            key: 'week',
            label: 'Tydzień'
          }, {
            key: 'month',
            label: 'Miesiąc'
          }]
        };
      },
      template: \`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem>
                \${itemTemplate}
                </template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                \${prepareItemsTemplate(5, itemTemplate)}
            </stats-layout>\`
    };
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const ae=["Raw","WithHeaders","MultipleColumns"];export{o as MultipleColumns,a as Raw,l as WithHeaders,ae as __namedExportsOrder,te as default};
