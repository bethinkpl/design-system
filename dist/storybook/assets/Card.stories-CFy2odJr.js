import{C as r,a as o,b as t,c as a}from"./Card-BYx4IaSW.js";import{L as n}from"./LoadingBar-IDhNuLj_.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Divider-Ba-XwrF-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Cards/Card",component:r},i=d=>({components:{Card:r},setup(){return d},template:`
        <card :header-has-padding="headerHasPadding"
              :divider-under-header="dividerUnderHeader"
              :has-border="hasBorder"
              :border-position="borderPosition"
              :border-size="borderSize"
              :border-color="borderColor"
              :has-loading-bar="hasLoadingBar"
              :loading-bar-color="loadingBarColor"
              :loading-bar-time="loadingBarTime"
        >
            <template v-if="header" #header>
                <div v-html="header" />
            </template>
            <template v-if="content" #content>
                <div v-html="content" />
            </template>
            <template v-if="footer" #footer>
                <div v-html="footer" />
            </template>
        </card>`}),e=i.bind({}),s={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",headerHasPadding:!1,dividerUnderHeader:!1,hasBorder:!1,borderPosition:o.TOP,borderSize:t.LARGE,borderColor:a.NEUTRAL_HEAVY,hasLoadingBar:!1,loadingBarColor:n.NEUTRAL_HEAVY,loadingBarTime:"0"},l={header:{control:"text"},content:{control:"text"},footer:{control:"text"},borderPosition:{control:"select",options:Object.values(o)},borderSize:{control:"select",options:Object.values(t)},borderColor:{control:"select",options:Object.values(a)},loadingBarColor:{control:"select",options:Object.values(n)}};e.argTypes=l;e.args=s;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return args;
  },
  template: \`
        <card :header-has-padding="headerHasPadding"
              :divider-under-header="dividerUnderHeader"
              :has-border="hasBorder"
              :border-position="borderPosition"
              :border-size="borderSize"
              :border-color="borderColor"
              :has-loading-bar="hasLoadingBar"
              :loading-bar-color="loadingBarColor"
              :loading-bar-time="loadingBarTime"
        >
            <template v-if="header" #header>
                <div v-html="header" />
            </template>
            <template v-if="content" #content>
                <div v-html="content" />
            </template>
            <template v-if="footer" #footer>
                <div v-html="footer" />
            </template>
        </card>\`
})`,...e.parameters?.docs?.source}}};const v=["Interactive"];export{e as Interactive,v as __namedExportsOrder,g as default};
