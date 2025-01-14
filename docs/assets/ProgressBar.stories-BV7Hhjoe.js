import{P as x,a as T,b as P,c as h,d as l,e as B,f as r}from"./ProgressBar-3iykKXJT.js";import"./vue.esm-bundler-CWlcb7ht.js";import"./Icon-ChGia3n4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const G={title:"Components/ProgressBar",component:x},n=L=>({components:{ProgressBar:x},setup(){return{args:L}},template:`
        <progress-bar v-bind=args></progress-bar>`}),e=n.bind({}),f={size:{control:"select",options:Object.values(T)},labelTextSize:{control:"select",options:Object.values(P)},ranges:{control:"object"},radius:{control:"select",options:Object.values(h)},layout:{control:"select",options:Object.values(l)},labelText:{control:"text"},labelData:{control:"text"},labelDataSupporting:{control:"text"},labelDataSuffix:{control:"text"},badgePosition:{control:"text"},badgeColor:{control:"select",options:Object.values(B)},labelTextEllipsis:{control:"boolean"}};e.argTypes=f;e.args={size:T.SMALL,labelTextSize:P.SMALL,ranges:[{color:r.INFO,start:0,length:30},{color:r.INFO_WEAK,start:30,length:10},{color:r.INFO_GHOST,start:40,length:10}],radius:h.DEFAULT,layout:l.DEFAULT,labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",badgePosition:"50",badgeColor:B.INFO,labelTextEllipsis:!1};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921"}};const s=n.bind({});s.args={ranges:[{color:r.INFO,start:0,length:30}]};const t=n.bind({});t.args={ranges:[{color:r.INFO,start:0,length:30},{color:r.WARNING,start:30,length:30}]};const a=n.bind({});a.args={ranges:[{color:r.INFO,start:0,length:10},{color:r.INFO_WEAK,start:20,length:10},{color:r.INFO,start:40,length:10},{color:r.INFO_WEAK,start:50,length:10},{color:r.INFO,start:70,length:30}]};const o=n.bind({});o.args={layout:l.COMPACT,ranges:[{color:r.INFO,start:0,length:30}],labelText:"Label text",labelData:"30",labelDataSupporting:"100",labelDataSuffix:"(%)",labelTextEllipsis:!1};var c,p,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var i,b,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,d,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(S=(d=t.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var O,R,_;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(_=(R=a.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,A,E;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const C=["Interactive","WithoutLabels","TwoColors","WithGaps","Compact"];export{o as Compact,e as Interactive,t as TwoColors,a as WithGaps,s as WithoutLabels,C as __namedExportsOrder,G as default};
