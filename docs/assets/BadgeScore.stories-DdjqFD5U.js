import{B as s,a,b as S}from"./BadgeScore-BL8hbYk0.js";import{I as m}from"./Icon-Mp5xMpaO.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={title:"Components/Badges/BadgeScore",component:s},C=o=>({components:{BadgeScore:s},setup(){return o},template:'<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" :fullWidth="fullWidth" />',data(){return{ICONS:Object.freeze(m)}}}),e=C.bind({});e.args={text:"42",suffix:"%",fullWidth:!1,color:a.SUCCESS,icon:"FA_LIGHTBULB",size:S.MEDIUM};e.argTypes={text:{control:"text"},suffix:{control:"text"},color:{control:"select",options:Object.values(a)},icon:{control:"select",options:[null,...Object.keys(m)]},size:{control:"select",options:Object.values(S)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4348%3A77330"}};const g=o=>({components:{BadgeScore:s},setup(){return o},template:'<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',data(){return{BADGE_SCORE_COLORS:Object.freeze(a)}}}),t=g.bind({});t.args={fullWidth:!1};const r=g.bind({});r.args={fullWidth:!0};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    BadgeScore
  },
  setup() {
    return args;
  },
  template: '<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" :fullWidth="fullWidth" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    BadgeScore
  },
  setup() {
    return args;
  },
  template: '<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',
  data() {
    return {
      BADGE_SCORE_COLORS: Object.freeze(BADGE_SCORE_COLORS)
    };
  }
})`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,p,O;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    BadgeScore
  },
  setup() {
    return args;
  },
  template: '<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',
  data() {
    return {
      BADGE_SCORE_COLORS: Object.freeze(BADGE_SCORE_COLORS)
    };
  }
})`,...(O=(p=r.parameters)==null?void 0:p.docs)==null?void 0:O.source}}};const h=["Interactive","MinWidth","FullWidth"];export{r as FullWidth,e as Interactive,t as MinWidth,h as __namedExportsOrder,B as default};
