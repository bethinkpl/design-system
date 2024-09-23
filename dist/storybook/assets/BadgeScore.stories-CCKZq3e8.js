import{B as s,a,b as c}from"./BadgeScore-BiOch2wR.js";import{I as i}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={title:"Components/Badges/BadgeScore",component:s},n=o=>({components:{BadgeScore:s},setup(){return o},template:'<badge-score :color="color" :suffix="suffix" :text="text" :size="size" :icon="ICONS[icon]" :fullWidth="fullWidth" />',data(){return{ICONS:Object.freeze(i)}}}),e=n.bind({});e.args={text:"42",suffix:"%",fullWidth:!1,color:a.SUCCESS,icon:"FA_LIGHTBULB",size:c.MEDIUM};e.argTypes={text:{control:"text"},suffix:{control:"text"},color:{control:"select",options:Object.values(a)},icon:{control:"select",options:[null,...Object.keys(i)]},size:{control:"select",options:Object.values(c)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4348%3A77330"}};const l=o=>({components:{BadgeScore:s},setup(){return o},template:'<badge-score :color="BADGE_SCORE_COLORS.WARNING" suffix="%" text="1" :full-width="fullWidth" />',data(){return{BADGE_SCORE_COLORS:Object.freeze(a)}}}),t=l.bind({});t.args={fullWidth:!1};const r=l.bind({});r.args={fullWidth:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...r.parameters?.docs?.source}}};const S=["Interactive","MinWidth","FullWidth"];export{r as FullWidth,e as Interactive,t as MinWidth,S as __namedExportsOrder,O as default};
