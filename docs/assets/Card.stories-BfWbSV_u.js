import{C as a,a as n,b as s,c as d,d as l}from"./Card-BhK1CiCP.js";import{L as i}from"./LoadingBar-DGNrwKu4.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./Divider-NOTDPuJ1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/Cards/Card",component:a},p=c=>({components:{Card:a},setup(){return{args:c}},template:`
        <card v-bind="args">
            <template v-if="args.header" #header>
                <div v-html="args.header" />
            </template>
            <template v-if="args.content" #content>
                <div v-html="args.content" />
            </template>
            <template v-if="args.footer" #footer>
                <div v-html="args.footer" />
            </template>
        </card>`}),e=p.bind({}),m={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",headerHasPadding:!1,footerHasPadding:!1,paddingSize:n.SMALL,dividerUnderHeader:!1,hasBorder:!1,borderPosition:l.TOP,borderSize:d.LARGE,borderColor:s.NEUTRAL_HEAVY,hasLoadingBar:!1,loadingBarColor:i.NEUTRAL_HEAVY,loadingBarTime:"0",isFlat:!1},g={header:{control:"text"},content:{control:"text"},footer:{control:"text"},borderPosition:{control:"select",options:Object.values(l)},borderSize:{control:"select",options:Object.values(d)},borderColor:{control:"select",options:Object.values(s)},loadingBarColor:{control:"select",options:Object.values(i)},paddingSize:{control:"select",options:Object.values(n)}};e.argTypes=g;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <card v-bind="args">
            <template v-if="args.header" #header>
                <div v-html="args.header" />
            </template>
            <template v-if="args.content" #content>
                <div v-html="args.content" />
            </template>
            <template v-if="args.footer" #footer>
                <div v-html="args.footer" />
            </template>
        </card>\`
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const R=["Interactive"];export{e as Interactive,R as __namedExportsOrder,b as default};
