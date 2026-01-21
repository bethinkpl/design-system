import{D as n,I as t,a as d}from"./Icon-mOeYRkhi.js";import{w as f}from"./decorator-dmUe8Ksx.js";import"./vue.esm-bundler-ByLATHYC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const N={title:"Components/Icons/Icon",component:n,decorators:[f]},u=i=>({components:{Icon:n},setup(){return i},template:'<div class="sbIconList__singleIcon"><icon :icon="ICONS[icon]" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /></div>',data(){return{ICONS:Object.freeze(t)}}}),e=u.bind({}),I={size:d.MEDIUM,icon:"HEAD_WITH_QUESTION_MARK",spinning:!1,touchable:!1,rotation:null,flippedVertical:!1,flippedHorizontal:!1},m={size:{control:"select",options:Object.values(d)},icon:{control:"select",options:Object.keys(t)}};e.argTypes=m;e.args=I;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963"}};const g=i=>({components:{Icon:n},setup(){return i},template:'<div class="sbIconList"><div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon"><icon :icon="icon" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /><div>{{iconName}}</div></div></div>',data(){return{ICONS:Object.freeze(t)}}}),o=g.bind({});o.argTypes=m;o.args=I;var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var r,p,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Icon
  },
  setup() {
    return args;
  },
  template: '<div class="sbIconList">' + '<div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon">' + '<icon :icon="icon" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" />' + '<div>{{iconName}}</div>' + '</div>' + '</div>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["Interactive","AllIcons"];export{o as AllIcons,e as Interactive,h as __namedExportsOrder,N as default};
