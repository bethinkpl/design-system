import{P as c,a as p,b as g,c as i,d as l,e as b,f as r}from"./ProgressBar-BQ3Hhu_U.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={title:"Components/ProgressBar",component:c},n=m=>({components:{ProgressBar:c},setup(){return{args:m}},template:`
        <progress-bar v-bind=args></progress-bar>`}),e=n.bind({}),u={size:{control:"select",options:Object.values(p)},labelTextSize:{control:"select",options:Object.values(g)},ranges:{control:"object"},radius:{control:"select",options:Object.values(i)},layout:{control:"select",options:Object.values(l)},labelText:{control:"text"},labelData:{control:"text"},labelDataSupporting:{control:"text"},labelDataSuffix:{control:"text"},badgePosition:{control:"text"},badgeColor:{control:"select",options:Object.values(b)},labelTextEllipsis:{control:"boolean"}};e.argTypes=u;e.args={size:p.SMALL,labelTextSize:g.SMALL,ranges:[{color:r.INFO,start:0,length:30},{color:r.INFO_WEAK,start:30,length:10},{color:r.INFO_GHOST,start:40,length:10}],radius:i.DEFAULT,layout:l.DEFAULT,labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",badgePosition:"50",badgeColor:b.INFO,labelTextEllipsis:!1};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921"}};const s=n.bind({});s.args={ranges:[{color:r.INFO,start:0,length:30}]};const t=n.bind({});t.args={ranges:[{color:r.INFO,start:0,length:30},{color:r.WARNING,start:30,length:30}]};const a=n.bind({});a.args={ranges:[{color:r.INFO,start:0,length:10},{color:r.INFO_WEAK,start:20,length:10},{color:r.INFO,start:40,length:10},{color:r.INFO_WEAK,start:50,length:10},{color:r.INFO,start:70,length:30}]};const o=n.bind({});o.args={layout:l.COMPACT,ranges:[{color:r.INFO,start:0,length:30}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <progress-bar v-bind=args></progress-bar>\`
})`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <progress-bar v-bind=args></progress-bar>\`
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <progress-bar v-bind=args></progress-bar>\`
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <progress-bar v-bind=args></progress-bar>\`
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <progress-bar v-bind=args></progress-bar>\`
})`,...o.parameters?.docs?.source}}};const I=["Interactive","WithoutLabels","TwoColors","WithGaps","Compact"];export{o as Compact,e as Interactive,t as TwoColors,a as WithGaps,s as WithoutLabels,I as __namedExportsOrder,_ as default};
