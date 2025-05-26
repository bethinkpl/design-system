import{C as s,a as c}from"./CounterToggle-_K-to0yi.js";import{I as n}from"./Icon-D0llnARZ.js";import{w as a}from"./decorator-CSnIf-k5.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-BZawosSj.js";const C={title:"Components/Toggles/CounterToggle",component:s,decorators:[a]},l=i=>({components:{CounterToggle:s},setup(){return i},template:'<div :class="{ contrastBackground: isInverted }"><counter-toggle :color="color" :counter="counter" :icon="ICONS[icon]" :isSelected="isSelected" :isDisabled="isDisabled" /></div>',data(){return{ICONS:Object.freeze(n)}},computed:{isInverted(){return this.color==="inverted"}}}),e=l.bind({}),d={color:c.NEUTRAL_STRONG,counter:"99+",icon:"FA_SQUARE_CARET_RIGHT",isSelected:!1,isDisabled:!1},p={color:{control:"select",options:Object.values(c)},icon:{control:"select",options:Object.keys(n)},counter:{control:"text"},isSelected:{control:"boolean"},isDisabled:{control:"boolean"}};e.argTypes=p;e.args=d;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3693%3A70976"}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
})`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,C as default};
