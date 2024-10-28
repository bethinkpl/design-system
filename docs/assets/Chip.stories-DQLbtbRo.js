import{C as o,a as d,b as a,c as u,d as h}from"./Chip-CBqrZ-va.js";import{I as r}from"./Icon-BiVaixmr.js";import{o as f,c as C,a as b}from"./vue.esm-bundler-BSCmGRHc.js";import"./IconButton-COzU-vlz.js";import"./Button-CBZkgukP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./device-9fgosCm4.js";const v={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 23 23"},O=b("path",{"fill-rule":"evenodd",d:"M13.47 3.952 3.951 13.47a3.702 3.702 0 0 0 5.235 5.234l9.517-9.517a3.701 3.701 0 1 0-5.235-5.235zM2.207 20.449a6.17 6.17 0 0 0 8.724 0l9.518-9.518a6.17 6.17 0 1 0-8.724-8.724l-9.518 9.518a6.17 6.17 0 0 0 0 8.724","clip-rule":"evenodd"},null,-1),x=b("path",{d:"M2.207 20.45a6.17 6.17 0 0 0 8.724 0l5.405-5.406L7.612 6.32l-5.405 5.405a6.17 6.17 0 0 0 0 8.724z"},null,-1),y=[O,x];function z(s,w){return f(),C("svg",v,y)}const g={render:z},T={title:"Components/Chip",component:o},L=s=>({components:{Chip:o,LogoBadge:g},setup(){return s},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" />',data(){return{ICONS:Object.freeze(r)}}}),_=s=>({components:{Chip:o,LogoBadge:g},setup(){return s},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius"><template #accessory><logo-badge :style="svgStyle" /></template></chip>',data(){return{ICONS:Object.freeze(r)}},computed:{svgStyle(){return this.size===a.SMALL?{width:"12px",height:"12px"}:{width:"8px",height:"8px"}}}}),e=L.bind({}),t=_.bind({}),I={label:"Chip z labelem",isLabelUppercase:!1,leftIcon:null,radius:d.CAPSULE,size:a.SMALL,color:u.NEUTRAL,colorHex:"",isRemovable:!1,state:h.DEFAULT},S={leftIcon:{control:"select",options:[null,...Object.keys(r)]},size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(u)},state:{control:"select",options:Object.values(h)},radius:{control:"select",options:Object.values(d)}};e.argTypes=S;e.args=I;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};t.argTypes=S;t.args=I;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};var l,c,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    LogoBadge
  },
  setup() {
    return args;
  },
  template: '<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,n,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    LogoBadge
  },
  setup() {
    return args;
  },
  template: '<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius">' + '<template #accessory><logo-badge :style="svgStyle" /></template>' + '</chip>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  computed: {
    svgStyle() {
      if (this.size === CHIP_SIZES.SMALL) {
        return {
          width: '12px',
          height: '12px'
        };
      }
      return {
        width: '8px',
        height: '8px'
      };
    }
  }
})`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const U=["Interactive","InteractiveWithAccessory"];export{e as Interactive,t as InteractiveWithAccessory,U as __namedExportsOrder,T as default};
