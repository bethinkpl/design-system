import{a as n,I as t,b as d}from"./Icon-DLflpryl.js";import{w as f}from"./decorator-B_8W69Nd.js";import"./vue.esm-bundler-DD4BrEtS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const N={title:"Components/Icons/Icon",component:n,decorators:[f]},u=o=>({components:{Icon:n},setup(){return o},template:'<div class="sbIconList__singleIcon"><icon :icon="ICONS[icon]" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /></div>',data(){return{ICONS:Object.freeze(t)}}}),e=u.bind({}),m={size:d.MEDIUM,icon:"HEAD_WITH_QUESTION_MARK",spinning:!1,touchable:!1,rotation:null,flippedVertical:!1,flippedHorizontal:!1},I={size:{control:"select",options:Object.values(d)},icon:{control:"select",options:Object.keys(t)}};e.argTypes=I;e.args=m;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963"}};const g=o=>({components:{Icon:n},setup(){return o},template:'<div class="sbIconList"><div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon"><icon :icon="icon" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /><div>{{iconName}}</div></div></div>',data(){return{ICONS:Object.freeze(t)}}}),i=g.bind({});i.argTypes=I;i.args=m;var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var r,p,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["Interactive","AllIcons"];export{i as AllIcons,e as Interactive,h as __namedExportsOrder,N as default};
