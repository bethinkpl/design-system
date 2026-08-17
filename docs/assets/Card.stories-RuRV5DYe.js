import{D as i,C as p,a as d,b as m,c,d as g,e as v,f}from"./Card-CF6Wc4iz.js";import{L as b}from"./LoadingBar-CH8ncu-t.js";import"./vue.esm-bundler-Dauw-loN.js";import"./Divider-KZoliOA5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ContainerRibbon-5Vu5KqA0.js";const I={title:"Components/Cards/Card",component:i},C=O=>({components:{Card:i},setup(){return{args:O}},template:`
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
            <template v-if="args.experimentalContent" #experimentalContent>
                <div v-html="args.experimentalContent" />
            </template>
        </card>`}),e=C.bind({}),u={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",experimentalContent:"",contentHasPadding:!0,headerHasPadding:!1,footerHasPadding:!1,paddingSize:f.SMALL,dividerUnderHeader:!1,hasRibbon:!1,isFlat:!1,elevation:v.DEFAULT,radius:g.ALL,backgroundColor:c.DEFAULT,ribbonPosition:m.TOP,ribbonSize:d.MEDIUM,ribbonColor:p.NEUTRAL_HEAVY,hasRibbonRadius:!1,hasLoadingBar:!1,loadingBarColor:b.NEUTRAL_HEAVY,loadingBarTime:"0",isContentScrollable:!1},h={header:{control:"text"},content:{control:"text"},footer:{control:"text"},experimentalContent:{control:"text"},isFlat:{control:"boolean"},elevation:{control:"select",options:Object.values(v)},radius:{control:"select",options:Object.values(g)},backgroundColor:{control:"select",options:Object.values(c)},ribbonPosition:{control:"select",options:Object.values(m)},ribbonSize:{control:"select",options:Object.values(d)},ribbonColor:{control:"select",options:Object.values(p)},hasRibbonRadius:{control:"boolean"},loadingBarColor:{control:"select",options:Object.values(b)},paddingSize:{control:"select",options:Object.values(f)}};e.argTypes=h;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};const t=C.bind({});t.argTypes=h;t.args={...u,isFlat:!0};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
            <template v-if="args.experimentalContent" #experimentalContent>
                <div v-html="args.experimentalContent" />
            </template>
        </card>\`
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
            <template v-if="args.experimentalContent" #experimentalContent>
                <div v-html="args.experimentalContent" />
            </template>
        </card>\`
})`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const L=["Interactive","Flat"];export{t as Flat,e as Interactive,L as __namedExportsOrder,I as default};
