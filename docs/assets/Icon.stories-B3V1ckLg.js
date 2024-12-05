import{a as i,b as d,I as n}from"./Icon-DOGQpP6-.js";import{w as u}from"./decorator-CSnIf-k5.js";import"./vue.esm-bundler-CzUSCRPq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-BZawosSj.js";const z={title:"Components/Icons/Icon",component:i,decorators:[u]},f=t=>({components:{Icon:i},setup(){return t},template:'<div class="sbIconList__singleIcon"><icon :icon="ICONS[icon]" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /></div>',data(){return{ICONS:Object.freeze(n)}}}),e=f.bind({}),m={size:d.MEDIUM,icon:"HEAD_WITH_QUESTION_MARK",spinning:!1,touchable:!1,rotation:null,flippedVertical:!1,flippedHorizontal:!1},I={size:{control:"select",options:Object.values(d)},icon:{control:"select",options:Object.keys(n)},rotation:{control:"select",options:[null,90,180,270]}};e.argTypes=I;e.args=m;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963"}};const g=t=>({components:{Icon:i},setup(){return t},template:'<div class="sbIconList"><div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon"><icon :icon="icon" /><div>{{iconName}}</div></div></div>',data(){return{ICONS:Object.freeze(n)}}}),o=g.bind({});o.argTypes=I;o.args=m;var s,c,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var r,l,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Interactive","AllIcons"];export{o as AllIcons,e as Interactive,_ as __namedExportsOrder,z as default};
