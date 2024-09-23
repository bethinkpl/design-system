import{a as i,b as s,I as t}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/Icons/Icon",component:i},r=n=>({components:{Icon:i},setup(){return n},template:'<div class="sbIconList__singleIcon"><icon :icon="ICONS[icon]" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /></div>',data(){return{ICONS:Object.freeze(t)}}}),e=r.bind({}),c={size:s.MEDIUM,icon:"HEAD_WITH_QUESTION_MARK",spinning:!1,touchable:!1,rotation:null,flippedVertical:!1,flippedHorizontal:!1},a={size:{control:"select",options:Object.values(s)},icon:{control:"select",options:Object.keys(t)},rotation:{control:"select",options:[null,90,180,270]}};e.argTypes=a;e.args=c;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963"}};const l=n=>({components:{Icon:i},setup(){return n},template:'<div class="sbIconList"><div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon"><icon :icon="icon" /><div>{{iconName}}</div></div></div>',data(){return{ICONS:Object.freeze(t)}}}),o=l.bind({});o.argTypes=a;o.args=c;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Icon
  },
  setup() {
    return args;
  },
  template: '<div class="sbIconList__singleIcon"><icon :icon="ICONS[icon]" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /></div>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Icon
  },
  setup() {
    return args;
  },
  template: '<div class="sbIconList">' + '<div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon">' + '<icon :icon="icon" />' + '<div>{{iconName}}</div>' + '</div>' + '</div>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...o.parameters?.docs?.source}}};const u=["Interactive","AllIcons"];export{o as AllIcons,e as Interactive,u as __namedExportsOrder,m as default};
