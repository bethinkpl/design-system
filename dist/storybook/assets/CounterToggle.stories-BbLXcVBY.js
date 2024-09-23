import{C as o,a as t}from"./CounterToggle-TlnPQ_5_.js";import{I as r}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Components/Toggles/CounterToggle",component:o},c=s=>({components:{CounterToggle:o},setup(){return s},template:'<div :class="{ contrastBackground: isInverted }"><counter-toggle :color="color" :counter="counter" :icon="ICONS[icon]" :isSelected="isSelected" :isDisabled="isDisabled" /></div>',data(){return{ICONS:Object.freeze(r)}},computed:{isInverted(){return this.color==="inverted"}}}),e=c.bind({}),n={color:t.NEUTRAL_STRONG,counter:"99+",icon:"FA_SQUARE_CARET_RIGHT",isSelected:!1,isDisabled:!1},i={color:{control:"select",options:Object.values(t)},icon:{control:"select",options:Object.keys(r)},counter:{control:"text"},isSelected:{control:"boolean"},isDisabled:{control:"boolean"}};e.argTypes=i;e.args=n;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3693%3A70976"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    CounterToggle
  },
  setup() {
    return args;
  },
  template: '<div :class="{ contrastBackground: isInverted }">' + '<counter-toggle :color="color" :counter="counter" :icon="ICONS[icon]" :isSelected="isSelected" :isDisabled="isDisabled" />' + '</div>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  computed: {
    isInverted() {
      return this.color === 'inverted';
    }
  }
})`,...e.parameters?.docs?.source}}};const g=["Interactive"];export{e as Interactive,g as __namedExportsOrder,p as default};
