import{C as d}from"./CardExpandable-B7QF-Rmv.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Card-BYx4IaSW.js";import"./Divider-Ba-XwrF-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-IDhNuLj_.js";import"./Icon-CVHceNst.js";const m={title:"Components/Cards/CardExpandable",component:d},n=a=>({components:{CardExpandable:d},setup(){return a},template:`
            <card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed"
                                             :expander-text-expanded="expanderTextExpanded" :is-expanded="isExpanded"
                                             :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
            <template v-if="header" #header>
                <div v-html="header" />
            </template>
            <template #content="{ isExpanded: isExpandedInternal }">
                <div v-html="content" />
                <div v-if="isExpandedInternal">Dodatkowa treść w slocie <code>content</code> widoczna po rozwinięciu</div>
            </template>
            <template #expandedContent>
                <div v-html="expandedContent"></div>
            </template>
            </card-expandable>`}),e=n.bind({}),t={header:"header slot",content:"content slot that supports <b>HTML markup</b>",expandedContent:"Dodatkowa treść w slocie <code>expandedContent</code> widoczna po rozwinięciu",isExpanderVisible:!0,expanderTextCollapsed:"Rozwiń",expanderTextExpanded:"Zwiń",isExpanded:!1,headerHasPadding:!1,dividerUnderHeader:!1},r={header:{control:"text"},content:{control:"text"},expandedContent:{control:"text"}};e.argTypes=r;e.args=t;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    CardExpandable
  },
  setup() {
    return args;
  },
  template: \`
            <card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed"
                                             :expander-text-expanded="expanderTextExpanded" :is-expanded="isExpanded"
                                             :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
            <template v-if="header" #header>
                <div v-html="header" />
            </template>
            <template #content="{ isExpanded: isExpandedInternal }">
                <div v-html="content" />
                <div v-if="isExpandedInternal">Dodatkowa treść w slocie <code>content</code> widoczna po rozwinięciu</div>
            </template>
            <template #expandedContent>
                <div v-html="expandedContent"></div>
            </template>
            </card-expandable>\`
})`,...e.parameters?.docs?.source}}};const v=["Interactive"];export{e as Interactive,v as __namedExportsOrder,m as default};
