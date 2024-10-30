import{C as a,a as n,b as d,c as i}from"./Card-BNrHU9qb.js";import{L as s}from"./LoadingBar-COnzT5gw.js";import"./vue.esm-bundler-DiF7B9b7.js";import"./Divider-BPqXVinF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={title:"Components/Cards/Card",component:a},c=l=>({components:{Card:a},setup(){return l},template:`
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
        </card>`}),e=c.bind({}),p={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",headerHasPadding:!1,dividerUnderHeader:!1,hasBorder:!1,borderPosition:n.TOP,borderSize:d.LARGE,borderColor:i.NEUTRAL_HEAVY,hasLoadingBar:!1,loadingBarColor:s.NEUTRAL_HEAVY,loadingBarTime:"0"},m={header:{control:"text"},content:{control:"text"},footer:{control:"text"},borderPosition:{control:"select",options:Object.values(n)},borderSize:{control:"select",options:Object.values(d)},borderColor:{control:"select",options:Object.values(i)},loadingBarColor:{control:"select",options:Object.values(s)}};e.argTypes=m;e.args=p;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const B=["Interactive"];export{e as Interactive,B as __namedExportsOrder,C as default};
